/**
 * @desc:   定义一个router-view组件
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 14:23:09
 */
export default {
    functional: true,
    name: 'RouterView',
    render(h, {
        parent
    }) {
        let route = parent.$route;
        let component = route.component
        return h(component)
    }
}
//使用了函数式组件，用来定义那些没有响应数据，也不需要有任何生命周期的场景，它只接受一些props 来显示组件,性能更高