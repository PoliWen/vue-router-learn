// 路由入口文件
import {
    _Vue
} from './install'
import install from './install'
import createMacher from './create-matcher'
import HashHistory from './history/hash'
import Html5History from './history/html5'
class MyRouter {
    constructor(options) {
        this.app = null;

        //创建一个路由匹配器
        this.matcher = createMacher(options.routes || [])

        // 创建路由系统 根据模式 来创建不同的路由对象
        this.mode = options.mode || 'hash';
        this.history = Object.create(null);

        if (this.mode == 'hash') {
            this.history = new HashHistory(this)
        } else {
            this.history = new Html5History(this)
        }
    }
    init(app) {

        this.app = app;

        const history = this.history;

        //设置一个监听函数
        const setUpHashLister = () => {
            history.setupListener();
        }

        history.transitionTo(
            history.getCurrentLocation(),

            //跳转到对应的路由之后，后续要监听路径变化
            setUpHashLister
        )

        //监听当前路由是否发生变化，若是发生变化则更新路由
        history.listen((route) => {
            app._route = route;
        })
    }

    //通过路径找到对应的route记录
    match(location) {
        return this.matcher.match(location)
    }

    push(location) {
        this.history.push(location)
    }

    replace(location) {
        this.history.replace(location)
    }
}
MyRouter.install = install
export default MyRouter