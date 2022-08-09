import React from 'react'
import styles from "./index.module.scss";  
import MainIcon from "../../assets/images/mainicon.png"; 
import PhoneIcon from "../../assets/icons/phone.png"; 
import Telegram from "../../assets/icons/telegram.png"; 
import Instagram from "../../assets/icons/instagram.png"; 
import Facebook from "../../assets/icons/facebook.png"; 

function Footer() {
  return (
    <>
    <div className={styles.footer}> 
     
     <div className={styles.container}> 
         <div className={styles.inner_container}> 

         <div className={styles.footer_contact}>
            <img src={MainIcon} className={styles.mainicon}/>
            <div className={styles.footer_social}>
                <div className={styles.circle}><img src={Instagram}/></div>
                <div className={styles.circle}><img src={Telegram}/></div>
                <div className={styles.circle}><img src={Facebook}/></div>
            </div> 
            <div className={styles.footer_call}>
                <img src={PhoneIcon} />
                <p className={styles.footer_call_number}>(208) 555-0112</p>
            </div>
         </div>  
         
         <ul className={styles.footer_links}>
            <li className={styles.footer_links_element}>Главная</li>
            <li className={styles.footer_links_element}>Галерея</li>
            <li className={styles.footer_links_element}>Контакты</li>
         </ul>  

         </div>

     </div>

    </div>
    </>
  )
}

export default Footer; 