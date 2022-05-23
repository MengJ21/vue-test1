/* 订单管理 */
const Order = () => import('@/pages/business')
const OrderList = () => import('@/pages/business/myOperation')
const ProductManage = () => import('@/pages/business/create-business')
const ReturnGoods = () => import('@/pages/business/personalInformation')

/* 产品管理 */
const Goods = () => import('@/pages/manager')

const GoodsClassify = () => import('@/pages/manager/manageBusiness')
/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '商家合作',
            icon: 'example'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '我的合作',
                    icon: 'table'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '创建合作',
                    icon: 'user'
                }
            },
            {
                path: 'returnGoods',
                name: 'product-list',
                component: ReturnGoods,
                meta: {
                    name: '账号管理',
                    icon: 'nested'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: 'goods',
        meta: {
            name: '管理员',
            icon: 'user'
        },
        children: [
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '管理商家',
                    icon: 'tree'
                }
            }
        ]
    }
]

export default dynamicRoutes
