import axios from 'axios'

const GET_USER_INFO = "USER/USER_INFO"
const changeUserInfo = data => {
    return ({
        type: GET_USER_INFO,
        data
    })
}

export const getUserInfo = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:3000/user/info').then(res => {
            const { data } = res.data
            console.log('用户信息:', data)
            dispatch(changeUserInfo(data))
        })
    }
}
const defaultState = {
    userinfo: {}
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                userinfo: action.data
            }
        default:
            return state
    }
}