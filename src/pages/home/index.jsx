import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Gallery from "../../components/gallery";
import Event from "../../components/event";
import Service from "../../components/service";
import Footer from "../../components/footer";
import axios from "axios";
import Modal from "../../components/modal"; 
import InputMask from 'react-input-mask'; 

// import Post from '../../hooks/Post';
import Ok from "../../assets/icons/ok.png";
import Form from "../../assets/images/registration.png";
import Close from "../../assets/icons/close.png";
import FormImg from "../../assets/images/registration.png";

import styles from "./index.module.scss";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState("");

  function Check() {
    return (
      <div className={styles.modal_for_check}>
        <img
          src={Close}
          className={styles.modal_img}
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className={styles.modal_container_for_check}>
          <h3 className={styles.modal_title}>Ваша заявка принята</h3>
          <p className={styles.modal_des}>
            Мы вам позвоним, спасибо что пользуетесь нашими услугами.
          </p>
          <img src={Ok} className={styles.modal_ok_img} />
        </div>
      </div>
    );
  }

  function Register() { 
    const date = new Date(); 
    const day = date.getDate();
    const month = date.getMonth(); 
    const year = date.getFullYear(); 
    
    const [username, setUsername] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [cite, setCite] = useState(''); 
    const [wedding_date, setWedding_date] = useState('');  
   
    const submit = () => {
      const data = {
        username: username, 
        phone: phone, 
        cite: cite, 
        wedding_date: wedding_date
      };  

      setIsOpen(false); 
   
    }
    
    return (
      <div className={styles.overall_modal_for_register}>
        <div className={styles.register_modal}>
          <img
            src={Close}
            className={styles.modal_img}
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className={styles.modal_container_for_registration}>
            <div className={styles.form_register}>
              <h3 className={styles.register_title}>Регистрация</h3>
              <input
                type="text"
                placeholder="Имя Фамилия"
                className={styles.register_form} 
                onChange={((e) => setUsername(e.target.value))}
              />
              <input
                type="date"
                placeholder="YYYY-MM-DD" 
                min={`${year}-0${month + 1}-${day}`}
                className={styles.register_form}
                onChange={((e) => setWedding_date(e.target.value))}
              />
              <select
                name="cities"
                className={styles.register_form}
                onChange={((e) => setCite(e.target.value))}
              >
                  <option
                    value=""
                    className={styles.register_form}
                    disabled
                    selected> 
                  место   мероприятия
                  </option>
                  <option value="Tashkent">Tashkent</option>
                  <option value="Andijon">Andijon</option>
                  <option value="Buxoro">Buxoro</option>
                  <option value="Fargʻona">Fargʻona</option>
                  <option value="Jizzax">Jizzax</option>
                  <option value="Xorazm">Xorazm</option>
                  <option value="Namangan">Namangan</option>
                  <option value="Navoiy">Navoiy</option>
                  <option value="Qashqadaryo">Qashqadaryo</option>
                  <option value="Samarqand">Samarqand</option>
                  <option value="Sirdaryo">Sirdaryo</option>
                  <option value="Surxondaryo">Surxondaryo</option>
              </select>
              <InputMask
                type="text" 
                className={styles.register_form} 
                onChange={(e) => {setPhone(e.target.value)}}
                mask="+6\9\8 99 999 99"
                placeholder="+998 __ ___ __ __"
              />
              <div className={styles.form_btn} onClick={() => submit()}>Зарегистрироваться</div>
            </div>
          </div>
        </div>

        <div className={styles.form_img}>
          <img src={FormImg} className={styles.form_img_img} />
        </div>
      </div>
    );
  }

  function ChangeModal() {
    switch (order) {
      case "register":
        return <Register />;
      case "check":
        return <Check />;
    }
  }

  // const data =  {
  //   username: "Xoja",
  //   phone: "566548941",
  //   cite: "Toshkent",
  //   wedding_date: "2022-08-23"
  // }

  //   axios.post('http://172.105.76.9:8000/accounts/register/', {
  //     username: "Xoja",
  //     phone: "566548941",
  //     cite: "Toshkent",
  //     wedding_date: "2022-08-23"
  //   }).then(res => {
  //     console.log(res.data)
  //   })

  return (
    <div className={styles.container}>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ChangeModal />
      </Modal>

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setOrder={setOrder} />
      <Hero />
      <Gallery />
      <Event />
      <Service setIsOpen={setIsOpen} isOpen={isOpen} setOrder={setOrder} />
      <Footer />
    </div>
  );
}

export default Home;
