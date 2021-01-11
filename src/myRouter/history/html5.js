/**
 * @desc:   处理的html5history的类
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 12:45:16
 */
import History from './base'

export default class Html5History extends History {
    constructor(router) {
        super(router)
    }

    /**
     * 监听hash值的变化 
     */
    setupListener() {
        window.addEventListener('popstate', () => {
            this.transitionTo(getCurrentLocation());
        })
    }

    /**
     * push方法 
     */
    push(location) {
        this.transitionTo(location,()=>{
            history.pushState({key:Date.now()}, '', location)
        })
        
    }

    /**
     * replace方法 
     */
    replace(location) {
        this.transitionTo(location,()=>{
            history.replaceState({key:Date.now()}, '', location)
        })
    }

    /**
     * 获取当前浏览器的地址 
     */
    getCurrentLocation (){
        return getLocation()
    }
}

// 返回浏览器地址
export function getLocation(){
    let path = window.location.pathname
    return (path || '/') + window.location.search + window.location.hash
}
