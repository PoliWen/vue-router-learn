/**
 * @desc:   从路由映射表里面取到对应的匹配值
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 13:45:44
 */


import createRouterMap from './create-router-map'

export default function createMatcher(routes) {
    //routes 用户当前传入的配置
    //扁平化用户传入的数据，创建路由映射表
    const {
        pathMap
    } = createRouterMap(routes);

    //用来匹配的方法
    function match(location) {
        return pathMap[location]
    }

    //动态添加路由的方法
    function addRoutes() {

    }

    return {
        match,
        addRoutes
    }
}