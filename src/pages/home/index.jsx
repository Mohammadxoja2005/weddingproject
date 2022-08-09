import React, {useState} from 'react'
import Hero from '../../components/hero';
import Navbar from '../../components/navbar'; 
import Gallery from '../../components/gallery';
import Event from "../../components/event"; 
import Service from '../../components/service';
import Footer from '../../components/footer'; 

import Modal from '../../components/modal'; 
import Ok from "../../assets/icons/ok.png";
import Form from "../../assets/images/registration.png"
import Close from "../../assets/icons/close.png" ; 
import FormImg from "../../assets/images/registration.png"

import styles from "./index.module.scss"  

function Home() {   

  const [isOpen, setIsOpen] = useState(false);  
  const [order, setOrder] = useState(''); 

  function Check() {  
    return ( 
      <div className={styles.modal_for_check} > 
      <img src={Close}  className={styles.modal_img} onClick={() => setIsOpen(!isOpen)} />   

                <div className={styles.modal_container_for_check}>
              <h3 className={styles.modal_title} >Ваша заявка принята</h3> 
              <p className={styles.modal_des} >Мы вам позвоним, спасибо что пользуетесь нашими услугами.</p>
              <img src={Ok} className={styles.modal_ok_img} />
        </div> 
      </div>  
    )
  } 
  
  function Register() {
    return ( 
      <div className={styles.overall_modal_for_register} >
                <div className={styles.register_modal}>  

<img src={Close}  className={styles.modal_img} onClick={() => setIsOpen(!isOpen)} />   
<div className={styles.modal_container_for_registration}>

<div className={styles.form_register}> 

<h3 className={styles.register_title}>Регистрация</h3> 
<input type="text"  placeholder='Имя Фамилия' className={styles.register_form}/>
<input type="date" placeholder='Дата' className={styles.register_form}/>
<select name="" id="" placeholder='МЕСТО мероприятия' data-placeholder="Date of birth" required aria-required="true" className={styles.register_form}>
 <option value="" className={styles.register_form} disabled selected>МЕСТО мероприятия</option>
 <option value="">1</option>
 <option value="">2</option>
 <option value="">3</option>
</select>
<input type="text" className={styles.register_form} placeholder='+998 __ ___ __ __'/> 
<div className={styles.form_btn}>Зарегистрироваться</div>
</div> 

</div>   
 </div>  

    <div className={styles.form_img}>
    <img src={FormImg} className={styles.form_img_img}/>
   </div>  
      </div>
    )
  }  

  function ChangeModal() {
    switch(order) {
      case "register": return  <Register />; 
      case "check": return  <Check />; 
    }
  }
  
  return (  
    <div className={styles.container}>    

    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>   
     <ChangeModal/>  
    </Modal>

     <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setOrder={setOrder}/> 
     <Hero />    
     <Gallery />
     <Event /> 
     <Service setIsOpen={setIsOpen} isOpen={isOpen} setOrder={setOrder}/>  
     <Footer/> 
     
    </div>
  )
}

export default Home; 