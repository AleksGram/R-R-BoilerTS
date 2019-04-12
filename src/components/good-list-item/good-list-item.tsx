import React, { Fragment } from 'react';

import './good-list-item.scss';

type Props = {
    itemData : any
}

const GoodListItem = (props: Props) => {
    const { id, name, price } = props.itemData;

    return (
        <Fragment>
            <p>Item:{id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </Fragment>
    )
}

export default GoodListItem;