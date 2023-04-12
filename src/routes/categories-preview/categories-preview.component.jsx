import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    console.log("Retrieved Categories Map")
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    console.log("Inside Categories Preview");
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }
        </Fragment>
    );
};

export default CategoriesPreview;