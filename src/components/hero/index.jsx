import React from 'react' 
import Carousel from 'nuka-carousel'; 
import Prev from "../../assets/images/prev.png"; 
import Next from "../../assets/images/next.png"; 
import styles from "./index.module.scss"; 

function Hero() { 

  const settings = { 
    slidesToShow: 1,
    slidesToScroll: 1,  
    wrapAround: true, 
    defaultControlsConfig: {
      pagingDotsClassName: styles.products_dot,  
      nextButtonText: <img src={Next} />, 
      prevButtonText: <img src={Prev} />,  
      nextButtonClassName:  styles.next_btn, 
      prevButtonClassName:  styles.prev_btn, 
    }, 
    speed: 500,
    fade: true, 
    rows: 1,  
  } 


  return (
    <div  className={styles.hero}>  
 
      <Carousel {...settings}> 
      {
        [1,2,3,4].map((value, key) =>{ 
          return(
            <div className={styles.container}  key={key}> 
  
            <div className={styles.carousel_element}>
          <p className={styles.carousel_title}>Полный комплекс услуг по организации и обслуживанием торжественных мероприятий.</p>
          <div className={styles.btn}>Выбрать</div>
        </div>   
      
              
            </div>  
          )
        })
      }

      </Carousel>

    </div>
  )
}

export default Hero; 