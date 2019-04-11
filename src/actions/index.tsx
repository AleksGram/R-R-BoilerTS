import * as ActionType from './action-types';
import {TypesKeys} from './action-types/'


export interface GoodsReceiver {
    type: TypesKeys.GOODS_RECEIVED,
    payload: object[]
}

const goodsReceived = (newGoods:Object[]):GoodsReceiver => ({
    type: TypesKeys.GOODS_RECEIVED,
    payload: newGoods
})


export type ActionsType =
    | GoodsReceiver

export  {
    goodsReceived
}