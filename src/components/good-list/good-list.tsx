import React, { Component } from 'react';
import GoodListItem from './../good-list-item/good-list-item';
import Loader from '../loader';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import withStoreService from './../hoc/with-store-service';
import  {IState}  from '../../reducers'
import './good-list.scss';
import {TypesKeys} from '../../actions/action-types'
import { Item } from '../../utilities/store-service-context/store-service-context'


interface IGoodList {
    storeService: {goods: Item[],  getItems: () => Promise<Item[]>}
    goodsReceived: (goods:Item[])=>TypesKeys.GOODS_RECEIVED
}

type Props = IGoodList & IState;
class GoodList  extends Component<Props, IState>  {

    componentDidMount () {
        const {storeService, goodsReceived} = this.props;
        storeService.getItems()
            .then((data) => goodsReceived(data))
    }

    render () {
        const {goods, loading } = this.props;

        if (loading) {
            return <Loader/>
        }
        return (
            <ul>
                {
                    goods.map((item)=>{
                        return (
                            <li key={item.id}>
                                <GoodListItem itemData={item} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

const mapStateToProps = ({loading, goods}:IState) => ({
    loading,
    goods
})


export default compose<React.ComponentClass>(
    withStoreService(),
    connect(mapStateToProps, actions)
)(GoodList);

