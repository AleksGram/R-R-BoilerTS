import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Item } from '../../utilities/store-service-context/store-service-context';
import { TypesKeys } from '../../actions/action-types';
import  {IState}  from '../../reducers'





import * as actions from '../../actions';


import './good-list-item.scss';

type Props = {
    itemData : Item,
    itemClicked: boolean
    clickOnItem: (id:number) => {type: TypesKeys.CLICK_ON_ITEM}
}

const GoodListItem = (props: Props) => {
    const { clickOnItem } = props;
    const { id, name, price } = props.itemData;

    return (
        <div onClick={()=>{clickOnItem(id)}}>
            <p>Item:{id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            {/* {(itemClicked)? <h3>You clicked it!</h3>: null} */}
        </div>
    )
}

const mapStateToProps = ({loading, goods, itemClicked}:IState) =>({
    itemClicked
})

export default connect(mapStateToProps, actions )(GoodListItem);