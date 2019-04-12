import React from 'react';
import { StoreServiceConsumer } from '../../utilities/store-service-context/store-service-context';
import { IStoreService } from '../../utilities/store-service-context/store-service-context';




type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const withStoreService = () =><P extends {storeService?: IStoreService}, R=Omit<P, 'storeService'>>(Component: React.ComponentClass) => {
    return function BoundComponent (props: R) {
        return (
            <StoreServiceConsumer>
               {
                   (value) => {
                       return (
                           <Component {...props} storeService = {value}/>
                       )
                   }
               }
            </StoreServiceConsumer>
        )
    }
}   

    
export default withStoreService;
