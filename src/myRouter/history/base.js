/**
 * @desc:   定义一个处理history的基类
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 12:44:20
 */

import {
    getHash
} from './hash'
export default class History {
    cb //监听时的回调函数。
    constructor(router) { //new Router()实例
        this.router = router;

        //保存当前路由
        this.current = Object.create(null);
    }

    push() {}

    replace() {}

    /**
     * 设置监听事件，hashchange，和popstate
     */
    setupListeners(){}


    /**
     * 跳转的核心逻辑，location代表跳转目的地，onComplete跳转成功之后的回调函数
     */
    transitionTo(location, onComplete) {
        let route = this.router.match(location); //用当前路径找出,对应的路由记录

        let from = getHash()
        let to = location

        //在路由更新之前执行路由守卫钩子函数
        if (route.beforeEnter) {
            route.beforeEnter(from, to, () => {
                this.updateRoute(route)
                onComplete && onComplete()
            })
        } else {
            this.updateRoute(route)
            onComplete && onComplete()
        }
    }

    /**
     * 更新路由
     */
    updateRoute(route) {
        this.current = route;
        this.cb && this.cb(route) //路径变化会将最新路径传递给listen方法
    }

    /**
     * 监听路由的变化
     */
    listen(cb) {
        this.cb = cb
    }
}