import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.compoment";
import './shop-component.scss'

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((product)=>(
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </Fragment>
                ))}
        </Fragment>
    );
};

export default Shop;