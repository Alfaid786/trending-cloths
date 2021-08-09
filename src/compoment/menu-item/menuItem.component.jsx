import React from 'react'
import {withRouter} from 'react-router-dom'

import './menuItem.styles.scss'

const menuItem = ({size,imageUrl,title,linkUrl,history,match}) => {
    
    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"
                style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="content">
                            <h1 className="title">{title.toUpperCase()}</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>
    )
}

export default withRouter(menuItem);