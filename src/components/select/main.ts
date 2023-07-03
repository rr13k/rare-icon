import { defineComponent } from 'vue'
import More from '@/components/more/more.vue'


export default defineComponent({
    components:{More},
    name: 'DrawerBtns',
    props: {
        changeShow: {
            type: Function,
            default: undefined
        },
        keyId: {
            type: [String, Number],
            required: true
        },
        showKey: {
            type: [String, Number],
            required: true
        }
    },
    emits: ['open', 'close', 'update:visible'],
    data() {
        return {
            closed: false,
            show: false
        }
    },
    watch: {
        showKey(val: number | string) {
            // eslint-disable-next-line eqeqeq
            this.show = val == this.keyId
            let ele = this.$refs.box as HTMLElement
            if (this.show) {
                let targetHeight = 0
                for (let el of ele.children as any) {
                    targetHeight += el.offsetHeight
                }
                ele.style.height = targetHeight + 'px'
            } else {
                ele.style.height = '16px'
            }
        }
    },
    methods: {
        open() {
            if (this.changeShow !== undefined) {
                let key = this.keyId
                if (this.show) {
                    key = -1
                }
                this.changeShow(key)
            } else {
                this.show = !this.show
            }
        }
    }
})
