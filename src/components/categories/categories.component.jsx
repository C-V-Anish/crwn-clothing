import DirectoryItem from "../directory-item/directory-item.component";
import './categories.component.scss'
import React from "react";

const Categories = ({categories}) => {
    return(<div className="categories-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category}/>
    ))}
  </div>);
}

export default Categories