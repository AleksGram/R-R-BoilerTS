import   {ActionsType} from '../actions';
import {TypesKeys} from '../actions/action-types'


type IState = {
    goods: object[],
    loading: boolean
}

const initialState:IState = {
    goods: [],
    loading: true
}

const reducer = (state = initialState, action : ActionsType) => {
    switch (action.type) {
        case TypesKeys.GOODS_RECEIVED : {
            return {
                ...state,
                goods: action.payload,
                loading: false
            }
        }
    }
}