import React from 'react'
import './callbackbutton.css'
import Openmenu from '../../Redux/Redux'
import OnclickViberCall from '../../Redux/onClickViberCall'

const CallBackButton = () => {
    return (
        <div type="button" class="email-bt">
            <div class="text-call">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span onClick={OnclickViberCall}>Обратная<br />связь</span>
  
            </div>
        </div>
    )
}
export default CallBackButton