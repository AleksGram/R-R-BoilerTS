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
        
            const newGoods = JSON.parse(JSON.stringify(state.goods));
            newGoods.map((item:any) => {
                (item.id == action.id) ? item.name = 'SOLD': null;
            })
            return {
                ...state,
                goods: newGoods,
                itemClickedId: action.id
            };
               
        default:
            return state
    }
}


export default reducer;

