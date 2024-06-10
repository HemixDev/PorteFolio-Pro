import React from "react";
import './Service.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useTranslation } from "react-i18next";

const Service = () => {

    const {t} = useTranslation()

    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>{t("services.title")}</h1>
            </div>
            <div className="services-container">
                {Services_Data.map((service, index)=> {
                    return <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                                <p>{t("services.readmore")}</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Service