// 判断生产环境还是开发环境
const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/api'
export default baseUrl
