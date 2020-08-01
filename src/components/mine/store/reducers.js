import * as actionTypes from './actionTypes'


const defaultState = {
    phone: '',
    cartNum: 0,
    compareNum: 0,
    dingyueNum: 0,
    scanNum: 0,
    couponNum: 0,
    carList:[]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case actionTypes.getMineNumbers:
            newState.phone = action.data.phone
            newState.cartNum = action.data.cartNum
            newState.compareNum = action.data.compareNum
            newState.dingyueNum = action.data.dingyueNum
            newState.scanNum = action.data.scanNum
            newState.couponNum = action.data.couponNum
            return newState
        case actionTypes.getMineCarList:
            newState.carList = action.data
            return newState
            default:
                return state
    }
}