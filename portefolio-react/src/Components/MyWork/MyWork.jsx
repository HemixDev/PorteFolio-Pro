import React from "react";
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useTranslation } from "react-i18next";

const MyWork = () => {

    const {t} = useTranslation()

    return (
        <div id="mywork" className="mywork">
            <div className="mywork-title">
                <h1>{t('myWork.title')}</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index)=> {
                    return <img key={index} src={work.w_img} alt=""/>
                })}
            </div>
            <div className="mywork-showmore">
                <p>{t('myWork.showMore')}</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork