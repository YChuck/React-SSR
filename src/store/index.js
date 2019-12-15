import axios from 'axios'

const GET_LIST = "INDEX/GET_LIST"
const changeList = list => {
    return ({
        type: GET_LIST,
        list
    })
}

export const getIndexList = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:3000/course/list').then(res => {
            const { list } = res.data
            // 从接口中获取list，通过dispath一个action去更新store中的list
            dispatch(changeList(list))
        })
    }
}
const defaultState = {
    list: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.list
            }
        default:
            return state
    }
}