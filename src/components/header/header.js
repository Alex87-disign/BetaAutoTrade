import React from 'react'
import './header.css'
import Openmenu from '../../Redux/Redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CarsFromUsa from '../CarsFromUsa/CarsFromUsa'
import Broker from '../Broker/broker'
import Contacts from '../Contacts/contacts'
import EuroCar from '../EuroCar/eurocar'
import LituvaCar from '../LituvaCar/lituvacar'
import Tax from '../Tax/tax'
import OurWorks from '../OurWokrs/ourworks'
import TopHeader from '../TopHeader/topheader'



const Header = () => {
  return (

    <Router>
      <header className="header">
        <TopHeader/>
        <nav>
          <div id="myTopnav" className="topnav">
            <Link to="/usa_car" className="active" onClick={Openmenu}>Авто из США</Link>
            <Link to="/our_works" className="active" onClick={Openmenu}>Авто в наличии</Link>
            <Link to="/euro_car" className="active" onClick={Openmenu}>Авто из Европы</Link>
            <Link to="/lituva_car" className="active" onClick={Openmenu}>Авто из Литвы без растаможки</Link>
            <Link to="/broker" className="active" onClick={Openmenu}>Брокерские услуги</Link>
            {/* <Link to="/tax" className="active" onClick={Openmenu}>Таможенная очистка авто</Link> */}
            
            <Link to="/contacts" className="active" onClick={Openmenu}>Контакты</Link>
            <Link id="menu" href="#" className="icon"
              onClick={Openmenu}>&#9776;</Link>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/usa_car" component={CarsFromUsa} />
        <Route path="/our_works" component={OurWorks} />
        <Route path="/euro_car" component={EuroCar} />
        <Route path="/lituva_car" component={LituvaCar} />
        <Route path="/broker" component={Broker} />
        {/* <Route path="/tax" component={Tax} /> */}
        
        <Route path="/Contacts" component={Contacts} />
      </Switch>
    </Router>

  )
}
export default Header