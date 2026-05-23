import React from 'react'
import './List.css'
import Item from './Item'
import db from '../db'

const List = () => {
    return (
        <div>
            <ul>
                {db.map(it => (<Item key={it.id} id={it.id} title={it.title} desc={it.desc} price={it.price} />))}
            </ul>
        </div>
    )
}

export default List