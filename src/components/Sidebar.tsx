import React from 'react'
import style from './css/Sidebar.module.css'

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className={style.heading}>
                <h2 className={style.title}> Sidebar </h2>
            </div >
        </div>
    );
}

export default Sidebar