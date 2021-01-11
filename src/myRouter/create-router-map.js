/**
 * @desc:   创建一个路由映射表
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 13:47:32
 */
export default function createRouterMap(routes) {

    //{/:记录,/about:记录,/about/a:'记录'}
    const pathMap = Object.create(null);
    routes.forEach(item => {
        addRouteRecord(item, pathMap)
    })

    return {
        pathMap
    }
}

//添加一条路由记录
function addRouteRecord(route,pathMap) {
    pathMap[route.path] = route
}
