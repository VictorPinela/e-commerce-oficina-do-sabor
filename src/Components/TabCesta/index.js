import React from 'react';
import styles from './styles.css'
import TabItem from './TabItem.js'
import TabTotal from './TabTotal.js'

function TabCesta() {
    return (
        <div>
            <table id='tabela'>
                <tr id='tr'>
                    <td id='td'>Item</td>
                    <td id='td'>Qtd.</td>
                    <td id='td'>Valor</td>
                </tr>
            </table>
            <span id='tab1'>
                <TabItem />
                <TabItem />
            </span>
            <TabTotal />
        </div>
    );
}

export default TabCesta;