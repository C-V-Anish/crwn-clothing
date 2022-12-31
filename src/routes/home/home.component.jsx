import Categories from '../../components/categories/categories.component';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const categories=[
    {
      "id": 1,
      "title": "hat's",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jacket's",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneaker's",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "women's",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "men's",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  return (<div>
    <Categories categories={categories}/>
  </div>
  );
}

export default Home;
