import { ActionsType } from '../actions';
import { TypesKeys } from '../actions/action-types';
import { Item } from '../utilities/store-service-context/store-service-context'


export type IState = {
    goods: Item[],
    loading: boolean
}


const initialState: IState = {
    goods: [],
    loading: true
}

const reducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case TypesKeys.GOODS_RECEIVED:
            return {
                ...state,
                goods: action.payload,
                loading: false
            };
        default:
            return state
    }
}


export default reducer;

