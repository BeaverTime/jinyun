import request from './service'
export const getTempCredential = () => request.get('/api/temp_credential/')
export const addNewBlog = (blog) => request.post('/api/blog/',blog)

// 账号相关
export const login = (user) => request.post('/api/login/',user)
export const logout = () => request.get('/api/logout/')
export const check = () => request.get('/api/check/')

// TODO: 后续看能不能加上TS