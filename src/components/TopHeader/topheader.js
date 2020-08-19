import React from 'react'
import facebook from '../../img/facebook.png'
import telegram from '../../img/telegram.png'
import Logo from '../header/logo'
import Viber from '../../img/viber.png'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './topheader.css'

const TopHeader = () => {
    return (

        <div className="top_header">
            <div className="social">
                <div className="facebook"><a href="https://www.facebook.com/beta.autotrade.9/" target="blank" alt="Facebook"><img src={facebook} width='28' height='28' /></a></div>
                <div className="telegram"><a href="https://t.me/BetaAutoTrade" target="blank" alt="Telegram"><img src={telegram} width='28' height='28' /></a></div>
            </div>
            <Link to="/" ><Logo /></Link>
            <div className="phone">
                <h4>
                <a className="viber" href="viber://chat?number=%2Bbetaautotrade">Напиши в чат<img src={Viber} width='28' height='28' /></a> 
                              
                <p>063-864-62-62<br/>
                093-971-22-27<br/>
                093-772-13-82</p>                    
                
                </h4>               
    
                </div>
        </div>
    )
}

export default TopHeader