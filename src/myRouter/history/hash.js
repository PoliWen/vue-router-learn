/**
 * @desc:   处理hash值的类
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 12:44:51
 */


import History from './base'

/**
 * 获取浏览器的hash值
 */
export function getHash() {
    return window.location.hash.slice(1);
}

//确保 有斜线/
function ensureSlash() {
    if (window.location.hash) {
        return
    }
    window.location.hash = '/'
}
export default class HashHistory extends History {
    constructor(router) {
        super(router)

        //确保 有#/
        ensureSlash();
    }

    /**获取当前hash值*/
    getCurrentLocation() {
        return getHash();
    }

    /**监听hash值的变化 */
    setupListener() {
        window.addEventListener('hashchange', () => {
            this.transitionTo(getCurrentLocation());
        })
    }

    /**push方法 */
    push(location) {
        window.location.hash = location
    }

    /**replace方法 */
    replace(location) {
        window.location.hash = location
    }
}