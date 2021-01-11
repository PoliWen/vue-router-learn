/**
 * @desc:   定义router-link组件
 * @author: wenxiaoli<10800>
 * @create: 2021-01-08 14:22:20
 */
export default {
    props: {
        to: String,
        replace: Boolean,
    },
    render(h) {
        const router = this.$router
        const current = this.$route

        const handler = (e) => {
            //阻止标签的默认事件
            e.preventDefault()
            if (this.replace) {
                router.replace(this.to)
            } else {
                router.push(this.to)
            }
        }

        return h('a', {
            attrs: {
                href:this.to,
            },
            on: {
                click: handler
            }
        }, [this.$slots.default])
    }
}