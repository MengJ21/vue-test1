/* 商家 */
const Business = () => import('@/pages/business')
const MyOperation = () => import('@/pages/business/myOperation')
const CreateOperation = () => import('@/pages/business/create-business')
const account = () => import('@/pages/business/personalInformation')

/* 管理员 */
const admin = () => import('@/pages/manager')
const ManageBusiness = () => import('@/pages/manager/manageBusiness')
const ManageHeTong = () => import('@/pages/manager/manageHetong')
/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/businessOperation',
        component: Business,
        name: 'businessOperation',
        meta: {
            name: '商家合作',
            icon: 'example'
        },
        children: [
            {
                path: 'myOperation',
                name: 'myOperation',
                component: MyOperation,
                meta: {
                    name: '我的合作',
                    icon: 'table'
                }
            },
            {
                path: 'createOperation',
                name: 'createOperation',
                component: CreateOperation,
                meta: {
                    name: '创建合作',
                    icon: 'user'
                }
            },
            {
                path: 'accountManage',
                name: 'accountManage',
                component: account,
                meta: {
                    name: '账号管理',
                    icon: 'nested'
                }
            }
        ]
    },
    {
        path: '/admin',
        component: admin,
        name: 'admin',
        meta: {
            name: '管理员',
            icon: 'user'
        },
        children: [
            {
                path: 'manageBusiness',
                name: 'manageBusiness',
                component: ManageBusiness,
                meta: {
                    name: '管理商家',
                    icon: 'tree'
                }
            },
            {
                path: 'manageHeTong',
                name: 'manageHeTong',
                component: ManageHeTong,
                meta: {
                    name: '管理合同',
                    icon: 'tree'
                }
            }
        ]
    }
]

export default dynamicRoutes
