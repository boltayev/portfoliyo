import MainPages from "../../pages/MainPages"
import Saidbar from "../saidbar/Saidbar"
import AboutPages from "../../pages/AboutPages"
import "./HomePages.scss"
import ServicesPages from "../../pages/ServicesPages"
import Portfoliyo from "../../pages/Portfoliyo"
import Contact from "../../pages/Contact"
import DarkMode from "../darkMode/DarkMode"
import Burger from "../burger/Burger"
function HomePages(){
    return(
        <div className="main">
            <Saidbar></Saidbar>
            <DarkMode></DarkMode>
            <Burger></Burger>
            {/* <BurgerClick></BurgerClick> */}
            {/* <MainPages></MainPages> */}
            {/* <AboutPages></AboutPages> */}
            {/* <ServicesPages></ServicesPages> */}
            {/* <Portfoliyo></Portfoliyo> */}
            {/* <Contact></Contact> */}
        </div>
    )
}
export default HomePages
