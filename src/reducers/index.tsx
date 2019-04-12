import { ActionsType, goodsReceived } from '../actions';
import { TypesKeys } from '../actions/action-types';
import { Item } from '../utilities/store-service-context/store-service-context'


export type IState = {
    goods: Item[],
    loading: boolean,
    itemClicked: boolean
}


const initialState: IState = {
    goods: [],
    loading: true,
    itemClicked: false
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
               const {goods}=state;
               goods.map((item)=> {
                   (item.id == action.id)? item.name = 'SOLD': null
               }) 
               
               return {
                ...state,
                goods,
                itemClicked: true
            }
        default:
            return state
    }
}


export default reducer;

