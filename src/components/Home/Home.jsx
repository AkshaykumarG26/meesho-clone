import { CategoryNavbar } from "../Navbar/CategoryNavbar"
import { Navbar } from "../Navbar/Navbar"
import {Products} from '../Products/Products'
export const Home = () => {
    return(
        <>
        <Navbar/>
        <CategoryNavbar/>
        <Products/>
        </>
    )
}