import React from 'react'
import cars_data from './cars_data'
import './ourworks.css'
import CallBackButton from '../CallBackButton/CallBackButton'
import OrderButton from '../OrderButton/OrderButton'

const AutoInStock = () => {
    return (
        <div className="main">
            <div>
                <h2>Авто в наличии</h2>
                <h4>Все авто, находятся у Нас в наличии, или были нами преобретены, и направляются в Украину.</h4>
            </div>
            <div className="phone1">
                <p className="mobile_phone1">
                   <strong> 063-864-62-62<br />
                093-971-22-27<br />
                093-772-13-82</strong></p>
            </div>
            <div className="main1">
                {/* <h2>Авто в Наличии</h2> */}
                {/* <div className="galery">
                <div className="box1">{
                    cars_data.map(({
                        audi_a6,
                    }) => (
                            <h4>{audi_a6}</h4>
                        )
                    )
                }
                </div> */}

                <div className="box_2">
                    <div class="cssSlider">
                        <ul class="slides">
                            <li id="slide1"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/vhkhREiedc.jpg" alt="" /></li>
                            <li id="slide2"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/3fD1tW69pB.jpg" alt="" /></li>
                            <li id="slide3"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/LpKS4b6Iw7.jpg" alt="" /></li>
                            <li id="slide4"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/cer7h3gy64.jpg" alt="" /></li>
                            <li id="slide5"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/gik4wCMk_i.jpg" alt="" /></li>
                        </ul>
                        <ul class="thumbnails">
                            <li><a href="#slide1"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/vhkhREiedc.jpg" /></a></li>
                            <li><a href="#slide2"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/3fD1tW69pB.jpg" /></a></li>
                            <li><a href="#slide3"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/LpKS4b6Iw7.jpg" /></a></li>
                            <li><a href="#slide4"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/cer7h3gy64.jpg" /></a></li>
                            <li><a href="#slide5"><img src="https://1254617519.rsc.cdn77.org/files/JA4AS2AW9AZ016265/auction/gik4wCMk_i.jpg" /></a></li>
                        </ul>
                    </div>
                    <div className="carinfo">
                        <h5>2011 MITSUBISHI OUTLANDER SE</h5>
                        <h6>VIN: JA4AS3AW8BU041856	</h6>
                        <h6>Цена: 7000$</h6>

                    </div>
                </div>
                <div className="box_3">
                    <div class="cssSlider">
                        <ul class="slides">
                            <li id="slide11"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/-fFOUlAmRjB.jpeg" alt="" /></li>
                            <li id="slide22"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/0yrgnEA1Hq.jpeg" alt="" /></li>
                            <li id="slide33"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/2DX8O5ejj.jpeg" alt="" /></li>
                            <li id="slide44"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/gL9HFLDejXe.jpeg" alt="" /></li>
                            <li id="slide55"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/XcR3ddr7l1.jpeg" alt="" /></li>
                        </ul>
                        <ul class="thumbnails">
                            <li><a href="#slide11"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/-fFOUlAmRjB.jpeg" /></a></li>
                            <li><a href="#slide22"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/0yrgnEA1Hq.jpeg" /></a></li>
                            <li><a href="#slide33"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/2DX8O5ejj.jpeg" /></a></li>
                            <li><a href="#slide44"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/gL9HFLDejXe.jpeg" /></a></li>
                            <li><a href="#slide55"><img src="https://1254617519.rsc.cdn77.org/files/3GNAL2EK3ES504101/storage/XcR3ddr7l1.jpeg" /></a></li>
                        </ul>
                    </div>
                    <div className="carinfo">
                        <h5>2014 CHEVROLET CAPTIVA LS</h5>
                        <h6>VIN:  3GNAL2EK3ES504101	</h6>
                        <h6>Цена: 8800$</h6>

                    </div>
                </div>
                <div className="box_4">
                    <div class="cssSlider">
                        <ul class="slides">
                            <li id="slide111"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/yriyN3AUUf.jpg" alt="" /></li>
                            <li id="slide222"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/cvyc-wwm4F.jpg" alt="" /></li>
                            <li id="slide333"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/ZcGnwg2Zvh.jpg" alt="" /></li>
                            <li id="slide444"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/83akMe8cn8W.jpg" alt="" /></li>
                            <li id="slide555"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/1doGmtDByaT.jpg" alt="" /></li>
                        </ul>
                        <ul class="thumbnails">
                            <li><a href="#slide111"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/yriyN3AUUf.jpg" /></a></li>
                            <li><a href="#slide222"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/cvyc-wwm4F.jpg" /></a></li>
                            <li><a href="#slide333"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/ZcGnwg2Zvh.jpg" /></a></li>
                            <li><a href="#slide444"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/83akMe8cn8W.jpg" /></a></li>
                            <li><a href="#slide555"><img src="https://1254617519.rsc.cdn77.org/files/5XYPGDA37HG329584/storage/1doGmtDByaT.jpg" /></a></li>
                        </ul>
                    </div>
                    <div className="carinfo">
                        <h5>2017 KIA SORENTO LX 4*4</h5>
                        <h6>VIN:   5XYPGDA37HG329584	</h6>
                        <h6>Цена: 14500$</h6>

                    </div>
                </div>
                <div className="box5">0</div>
                <div className="box6">6</div>
                <div className="box7">7</div>
                <div className="box8">8</div>
                <div className="box9">9</div>

            </div>
        </div>
    )
}

export default AutoInStock