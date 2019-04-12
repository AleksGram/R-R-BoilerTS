import {TypesKeys} from './action-types/';
import { Item } from '../utilities/store-service-context/store-service-context'


export interface GoodsReceiver {
    type: TypesKeys.GOODS_RECEIVED,
    payload: Item[]
}

const goodsReceived = (newGoods:Item[]):GoodsReceiver => ({
    type: TypesKeys.GOODS_RECEIVED,
    payload: newGoods
})


export type ActionsType =
    | GoodsReceiver

export  {
    goodsReceived
}