import {TypesKeys} from './action-types/';
import { Item } from '../utilities/store-service-context/store-service-context'


export interface GoodsReceiver {
    type: TypesKeys.GOODS_RECEIVED,
    payload: Item[]
}

export interface ClickOnItem {
    type: TypesKeys.CLICK_ON_ITEM,
    id: number
}

const goodsReceived = (newGoods:Item[]):GoodsReceiver => ({
    type: TypesKeys.GOODS_RECEIVED,
    payload: newGoods
})

const clickOnItem = (id:number):ClickOnItem => ({
    type: TypesKeys.CLICK_ON_ITEM,
    id
})

export type ActionsType =
    | GoodsReceiver
    | ClickOnItem

export  {
    goodsReceived,
    clickOnItem
}