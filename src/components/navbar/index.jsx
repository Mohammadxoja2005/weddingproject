import React from 'react'
import MainIcon from "../../assets/images/mainicon.png" 
import styles from "./index.module.scss"; 

function Navbar({isOpen, setIsOpen, setOrder}) { 
  console.log(isOpen)
  return (
    <div className={styles.navbar}>   

    <div className={styles.container} >
    <div className={styles.logo}><img src={MainIcon} /></div>
        
        <ul className={styles.navbar_link}>
         <li className={styles.navbar_link_element}>Главная</li>
         <li className={styles.navbar_link_element}>Галерея</li>
         <li className={styles.navbar_link_element}>Контакты</li>
        </ul> 

        <div className={styles.btn} onClick={() => {setIsOpen(!isOpen); setOrder('register')}}>Зарегистрироваться</div>
    </div> 
    
    </div>
  )
}

export default Navbar; 