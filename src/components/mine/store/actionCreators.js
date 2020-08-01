import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getMineNumbersAction = (data) => ({
    type:actionTypes.getMineNumbers,
    data
})
export const getMineCarListAction = (data) => ({
    type:actionTypes.getMineCarList,
    data
})

export const getMineNumbers = () => {
    return dispatch => {
        axios.get('http://rap2.taobao.org:38080/app/mock/261635/mine/numberData')
        .then(res => {
            console.log(res.data)
            const data = res.data
            const action = getMineNumbersAction(data)
            dispatch(action)
        })
    }
}


export const getMineCarList = () => {
    return dispatch => {
        axios.get('http://rap2.taobao.org:38080/app/mock/261635/mine/carList')
        .then(res => {
            console.log(res.data)
            const data = res.data
            const action = getMineCarListAction(data)
            dispatch(action)
        })
    }
}