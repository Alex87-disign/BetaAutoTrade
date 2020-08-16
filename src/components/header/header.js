import React from 'react'
import logo from '../../img/logo.jpg'
import './header.css'
import Openmenu from '../../Redux/Redux'

const Header = ()=>{
 return(
        <header className="header">
        <div className="logo">
         <a href=""> <img className="graficlogo" src={logo} alt="Logo" /></a>
        </div>
        <nav>
          <div  id="myTopnav" className="topnav">
            <a href="">Авто из США</a>
            <a href="">Авто из Европы</a>
            <a href="">Авто из Литвы без растаможки</a>
            <a href="">Брокерские услуги</a>
            <a href="">Таможенная очистка авто</a>
            <a href="">Примеры наших работ</a>
            <a href="">Контакты</a>
            <a id="menu" href="#" className="icon" 
            onClick={Openmenu}>&#9776;</a>
          </div>
        </nav>
      </header>
    )
}
export default Header