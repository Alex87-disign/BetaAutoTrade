import React from 'react'
import './orderbutton.css'

const OrderButton = () => {
    return (
        <div type="button" className="callback-bt">
            <div className="text-call">
                <i className="fa fa-phone"></i>
                <span>Заказать<br/>звонок</span>
            </div>
        </div>
           
    )
}
export default OrderButton