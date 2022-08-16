import React, {useEffect} from 'react'
import ServiceImg from "../../assets/images/category.png"; 
import styles from "./index.module.scss"; 
import Fetch from '../../hooks/Fetch';

function Service({setIsOpen, isOpen, setOrder}) {  
  const data = Fetch('http://172.105.76.9:8000/service/services/'); 

  useEffect(() => {
      const serviceBtn = document.querySelectorAll('#service_btn');   

      serviceBtn.forEach((value, index) => { 
        let counter = 0; 
        
        value.addEventListener('click', () => { 
            counter++;  
            
            if(counter % 2 == 1) {
              value.style.background = "#5785A9"; 
              value.innerHTML = "Выбрано" 
              value.style.color = "white"; 
            }

            if(counter % 2 == 0) {
              value.style.background = "#EFF0F2";  
              value.innerHTML = "Выбрать"
              value.style.color = "rgba(0, 0, 0, 0.5)";  
            }
        })
      })

  },[data.data != null])

  return (
          <div className={styles.service}>
            <div className={styles.container}>
              <h2 className={styles.service_title}>Услуги</h2> 

              <div className={styles.service_container}>  
               {data.data && data.data.map((value, key) => {
                  return(
                    <div className={styles.service_of_services} key={key}>  

                    <div className={styles.service_img}><img src={value.image} className={styles.service_img_img} id={styles.img_serve}/></div> 
                    <div className={styles.service_des}>
                      <h3 className={styles.service_des_title} >{value.name}</h3> 
                      <p className={styles.service_des_des}>{value.description}</p> 
                      <p className={styles.price}><span className={styles.price_of_price} >Price:</span>{value.price} $</p>
                      <div  className={styles.service_btn} id="service_btn">Выбрать</div>
                    </div>
  
                  </div> 
                  )
                })
               }
              </div> 
              <div className={styles.service_deal} onClick={() => {setIsOpen(!isOpen); setOrder('check')}}>Оформить</div>
            </div>
          </div>
  )
}

export default Service; 