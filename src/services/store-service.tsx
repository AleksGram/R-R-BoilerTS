import  { IStoreService } from '../utilities/store-service-context/store-service-context';

class Store implements IStoreService {
    public data: Object[]  = [
        {id:1, name: 'Item1', price: 55},
        {id:2, name: 'Item2', price: 49},
        {id:3, name: 'Item3', price: 88},
    ]
    
    getItems():Promise<Object[]> {
       return new Promise ((resolve)=> {
            setTimeout(() => {
                resolve(this.data)
            }, 800)    
        });
    }
}
