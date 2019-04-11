import React from 'react';

export interface IStoreService {
    data: object[],
    getItems: () => Promise<Object[]>
}

const {
    Provider: StoreServiceProvider,
    Consumer: StoreServiceConsumer
} = React.createContext<IStoreService | null>(null);

export {
    StoreServiceProvider,
    StoreServiceConsumer
}