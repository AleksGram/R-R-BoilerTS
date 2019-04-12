import React from 'react';

export type Item = {
    id: number,
    name: string,
    price: number
}

export interface IStoreService {
    data: Item[],
    getItems: () => Promise<Item[]>
}

const {
    Provider: StoreServiceProvider,
    Consumer: StoreServiceConsumer
} = React.createContext<IStoreService | null>(null);

export {
    StoreServiceProvider,
    StoreServiceConsumer
}