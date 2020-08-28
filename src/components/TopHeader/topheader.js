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
            {/* <h4>Напиши в чат</h4> */}
               <div className="viber"> <a href="https://invite.viber.com/?g2=AQAMGP%2Fa8sIvBEwBfzJxn8jPi9SQTtxUw8YS92F2T5D3l3BdSzv4tkAk%2BHusNvtV"><img src={Viber} width='28' height='28' /></a> </div>
                <div className="facebook"><a href="https://www.facebook.com/beta.autotrade.9/" target="blank" alt="Facebook"><img src={facebook} width='28' height='28' /></a></div>
                <div className="telegram"><a href="https://t.me/BetaAutoTrade" target="blank" alt="Telegram"><img src={telegram} width='28' height='28' /></a></div>
            </div>
            <Link to="/" ><Logo /></Link>
            <div className="phone">  
                <p className="mobile_phone">
                063-864-62-62<br/>
                093-971-22-27<br/>
                093-772-13-82</p>   
                                 
                               
    
                </div>
        </div>
    )
}

export default TopHeader