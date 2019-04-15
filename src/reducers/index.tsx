import { ActionsType, goodsReceived } from '../actions';
import { TypesKeys } from '../actions/action-types';
import { Item } from '../utilities/store-service-context/store-service-context'


export type IState = {
    goods: Item[],
    loading: boolean,
    itemClickedId: number | null
}


const initialState: IState = {
    goods: [],
    loading: true,
    itemClickedId: null
}

const reducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case TypesKeys.GOODS_RECEIVED:
            return {
                ...state,
                goods: action.payload,
                loading: false
            };
        case TypesKeys.CLICK_ON_ITEM:
            return {
                ...state,
                itemClickedId: action.id
            };
               
        default:
            return state
    }
}


export default reducer;

