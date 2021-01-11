import Link from './components/link.js'
import View from './components/view.js'
export let _Vue;
export default function install(Vue) {
    _Vue = Vue

    /**
     * Vue.mixin 的作用
       1.在所有的组件上都增加了_routerRoot 属性
       2.执行vue-router的init()方法
       3.定义一个响应式属性_route
    */
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                this._routerRoot = this
                this._router = this.$options.router
                this._router.init(this)

                //响应式数据变化，只要_route变化，就会更新视图，mvvm原理
                Vue.util.defineReactive(this, '_route', this._router.history.current)
            } else {
                this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
            }
        }
    })

    /**在原型上定义一个$router属性 */
    Object.defineProperty(Vue.prototype, '$router', {
        get() {
            return this._routerRoot._router
        }
    })

    /**在原型上定义一个$route属性 */
    Object.defineProperty(Vue.prototype, '$route', {
        get() {
            return this._routerRoot._route
        }
    })

    //注册router-link和router-view组件
    Vue.component('RouterView', View)
    Vue.component('RouterLink', Link)
}