import './directory-item.component.scss'
import React from 'react';

const DirectoryItem = ({category}) => {
    return (
        <div key={category.id} className="directory-item-container">
        <div className='background-image' style={{
          backgroundImage : `url(${category.imageUrl})`
        }}/>
        <div className="body">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}

export default DirectoryItem;