import { createContext,useState,useEffect} from "react";
import SHOP_DATA from "../shop-data.js"
import { getCategoriesandDocuments } from "../utils/firebase/fiebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap:{}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap,setcategoriesMap]=useState({});

    useEffect(() => {
        const getCategoriesMap = async() => {
            const CategoryMap = await getCategoriesandDocuments();
            console.log(CategoryMap);
            setcategoriesMap(CategoryMap)
        }
        getCategoriesMap();
    },[])

    const value = {categoriesMap}
    return(<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}