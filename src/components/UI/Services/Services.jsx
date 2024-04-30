import React from 'react'
import './services.css'
import { serviceData } from '../../../data/dataProducts'


const Services = () => {
    return (
        <div>
            <section className='services' data-aos="fade-up" data-aos-duration="1500">
                {serviceData.map((item, id) => (
                    <div className='services-item' key={id} style={{background: `${item.bg}`}}>
                        <span>
                            <img className='img-service' src={`${item.img}.png`} alt='' />
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div> 
                    </div>
                ))
                }
            </section>
        </div>
    )
}

export default Services;