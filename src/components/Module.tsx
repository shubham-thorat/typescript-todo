import React from 'react'
import style from './css/Module.module.css'
interface Item {
    key: number;
    task_name: string;
}

function Module(props: { lists: Item[], removeAll: () => void }) {

    return (
        <div className={style.module}>
            <div className={style.heading}>
                <h2 className={style.title}> Module </h2>
                <button className={style.removebtn} onClick={props.removeAll}> Remove </button>
            </div >
            <ul className={style.list}>
                {
                    props.lists.map(item => {
                        return (
                            <li key={item.key} className={style.list_items}>{item.task_name}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Module