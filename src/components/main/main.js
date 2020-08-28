import React from 'react'
import './main.css'

const Main = () => {
    return (
        <div className="contact_container">
            <div className="our_photo"></div>
            
            <div className="our_info">
                <h2>Компания Beta Auto Trade, является профессионалом в сфере Автоконсалтинга</h2>
                <p>Свой путь Мы начинали еще с 2014 года, с доставки и таможенной очистки авто из Европи, на данном этапе имеем уже болиее 1500 довольных клиентов.</p>
                <p>С 2018 года, Мы занимаемся полной доставкой под ключ авто из США :
                    <ul>
                        <li>Доставка</li>
                        <li>Покупка</li>
                        <li>Автоподбор</li>
                        <li>Таможенная очистка</li>
                        <li>Документооборот</li>
                        <li>Ремонт авто</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Main