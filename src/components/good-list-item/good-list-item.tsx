import React, { Fragment } from 'react';

import './good-list-item.scss';

type Props = {
    id: number,
    name: string
}

const GoodListItem = (props: Props) => {
    const { id, name } = props;

    return (
        <Fragment>
            <span>{id}</span>
            <span>{name}</span>
            <span>icon</span>
        </Fragment>
    )
}

export default GoodListItem;