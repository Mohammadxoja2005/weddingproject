import React, {useEffect} from 'react'
import ServiceImg from "../../assets/images/category.png"; 
import styles from "./index.module.scss"; 

function Service({setIsOpen, isOpen, setOrder}) {  

  useEffect(() => {
      const serviceBtn = document.querySelectorAll('#service_btn');   

      serviceBtn.forEach((value, index) => { 
        let counter = 0; 
        
        value.addEventListener('click', () => { 
            counter++;  
            
            if(counter % 2 == 1) {
              value.style.background = "#5785A9"; 
              value.innerHTML = "Выбрано" 
              value.style.color = "rgba(0, 0, 0, 0.5);"; 
            }

            if(counter % 2 == 0) {
              value.style.background = "#EFF0F2";  
              value.style.color = "white"; 
              value.innerHTML = "Выбрать"
            }
        })
      })

  },[])

  return (
          <div className={styles.service}>
            <div className={styles.container}>
              <h2 className={styles.service_title}>Услуги</h2> 

              <div className={styles.service_container}>  
               {
                [1,2,3,4].map((value, key) => {
                  return(
                    <div className={styles.service_of_services} key={key}>  

                    <div className={styles.service_img}><img src={ServiceImg} className={styles.service_img_img} id={styles.img_serve}/></div> 
                    <div className={styles.service_des}>
                      <h3 className={styles.service_des_title} >Кейтеринг</h3> 
                      <p className={styles.service_des_des}>Персонал обеспечит сервис высокого класса, эффектную подачу блюд, элегантное оформление столов.</p> 
                      <p className={styles.price}><span className={styles.price_of_price} >Price:</span>100 $</p>
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