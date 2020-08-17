import React from 'react'
import flag from '../../img/usagif.gif'

const CarsFromUsa = () => {

    return (
        <div className="carsfromusa">
            <div className="left_block">
                <div className="usa_flag">
                    <img src={flag} width="100" height="50"/>
                    </div>
                <div>
                    <h1>Авто з Америки</h1>
                </div>
            </div>
            <div className="right_block">
                <div>
                    <h1></h1>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default CarsFromUsa