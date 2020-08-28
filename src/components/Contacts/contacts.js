import React from 'react'
import './contacts.css'
import GoogleApiWrapper from './googleMap.js'
// import { ReactComponent } from '*.svg'
// import GoogleMapReact from 'google-map-react'
// import { MapContainer } from './googleMap.js'


const Contacts = () => {
    return (
        <div className="contacts">

            <div className="googlemap">
                {/* <GoogleApiWrapper/> */}
            </div>
            <div className="adressinfo">
                <h3>улица Электротехническая,43А, оф.16
                Київ
                Украина
02232</h3>
                <h4>063-864-62-62<br />
                093-971-22-27<br />
                093-772-13-82
                </h4>
            </div>
        </div>

    )
}

export default Contacts