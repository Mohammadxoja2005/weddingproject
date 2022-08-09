import React, { useEffect, useState} from 'react'
import styles from "./index.module.scss"; 
import Slider from "../../assets/images/slider.png";   
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { EffectCoverflow, Pagination } from "swiper";
import Circle from "../../assets/images/circle.png"; 
import Check from "../../assets/images/check.png"; 

import 'swiper/css'; 
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; 

// need to solve checking problem when click to one other should be done!! 

// need to make responsiveness of slider show ///////////////////////////////////////////////////////////

function Event() {  

  function SlidesShow(width) { 

    if(width <= 480) {
      return 1;
    }

      if(width <= 768) {
        return 2; 
      }  

      return 3; 
  }
  
  const settings = {
    effect: "coverflow",  
    slideToClickedSlide: true, 
    grabCursor:true,
    centeredSlides:true, 
    slidesPerView: SlidesShow(window.innerWidth), 
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }, 
    modules:[EffectCoverflow, Pagination], 
    loop: true, 
  }   

  

  useEffect(() =>{ 
  
    const swiperSlideActive = document.querySelector(".swiper-slide-active"); 
    const swiperSlides = document.querySelectorAll(".swiper-slide");
    const sliderImg = document.querySelectorAll(".img_change");   
    const sliderDes = document.querySelectorAll("#eventdes"); 

    const imgSrcCheck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK2SURBVHgBtVdNWhpBEK1qorLIgiOMJ9CcIHoD3DiwcjyBuAw/XyafQZfiCYAVzGQhOUHiCcQTOEdgFwPSlaom/AgMzODwVv1NV/frmnn9qgYhArJuPZNOpQ8JMEsKPyOgBUCZ0Sz2eNwFTU88/9uv2J0oe+I6wt3djxdIVJgSrUVAqBqq/9psu/kA4hLbN/4FaHBjEC45ALh+0W5CVGL72rsFggIkAYSaV7QvFx/Pk1b9OmfpQKLAhlc6PZ99ot6QSqaJkwrIGe09c5TxIFdtOQSqDlsEIV36xVxtQpy7aVmk1S8eWrBVUO/v4M9+xz3vmVet6cPZ9kkFmNlNpY1oTcZ21XtOjhh7SMOffJfPls+PslanV14WEsyWv2OhXc47pPW35RFoXFAh0BEkBGQyMQzRDKqwjAGGbL0KFB5AEkDotCt5V4ZESq6OFRaq2O9ZXHgI70eAfW3c6fT6x1d2vezqcLLUWi/WdCcbhwewmAb6WAqCeAGSdmEtMKNWz7PPVnIFVPqYALrLQoyYhFS8AFK3EBFqVE9DQOSI6ttf8oFfsj/9z356rhkxjQwoaiWjniKgIDwAM6jg3nw3hsl+fE1iiGmRF7oKNT2si5PvNjZ5ISMNJ/HE9Baa4AlzV60jUsanIxyUTzrQJ+POYuPCQiqLWfc+s7czeI7T2oiKYY9X6NTjBh1K4JXsfdVxT3qkh3cxFlq0g4/xxDQFa8S0QuY69Yfp2kp1Ly4XQgviI2C/bEyITdYUZurJQZq/sT4mBuKXuTOYu6eJgvee7TgXmr3cd6/BJzuDBMHXsSmlcvbZgmW2y7aTaOa81zzpUmKBcSjQ0o4GsDGQdUOXstfS2VVLxYPhFRwaFXULIhIiX8+X4UtNmrrQKIgIKRamW0E4AFSHsz9tnFnA/1cPPN9hwu4qwjH+AQn1V657n3fTAAAAAElFTkSuQmCC"
    const imgCircle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALQSURBVHgBxVdBUhpREO3uEaQ0VTE3ICcQT4CewHGhYDbBE2iWMaQyVqIuxROomwhsHE4gnkC8weQGZBEDDvM73ZOCmkiCQJjxVQFT/D/9pv///foNwhiwnbOljJXJMaDNhHkEzALw0u9RbMt1CwzfyXiz/rHgjhMTnyJMp1/sIvMesGkBkmsB3Nz7PzzX2Wn/8VBkLcscGxCzjHROD72LqrPtTUxcOK7vggEHwLjo88GoIFEUjy+zEIAj5HlGcOr7hYuxiQtHtRNgsC3Aja8ftlowBfQB2NC1MLi1/cK7x+M0RHpYP0NjXnX9+5VpSRXV99te10+vyGVWY46crJnK5wpmjOKX2nm4ihEMMi4eXpZ0ebsP9zswY3R66T2NvXVU3ev/F+5xfz/QN2vjHqJJ8eawngvAXHf9n6+1IsKMDc+9lVpsxkWq0PMiZdlIW5kw6zn9QjYlKZk1iBsWOGjwVmq/QlufazYwe3Fm24eedEmzpYIzh8CrDNCAhMCy3Eakl4BwmZinrteJiZGaJHovhwtznaCTGLHvpzyhz4pS1RgShnISPBN0qdva2iAh2M6VcHGbGNhLpRazkBAyVicn8tkiNHwjArIKCcEg5gzDHUkdu4i4DglBuQita+oEmZaWVNER5xAzQnci/blW3myQ62y02QSnnLI+QdwISLTahFYoLKeHIFORH3tTWhfEhLD1IuTFj50PiMOs2RwQ8FUcpaUxtd+r+es3o4GA1MvFijTmxnxq8QRmjPn0wpnGjjrOIZep/kj07KVaoL53nhaaqSaCHGC1vF2Kjg1JZrVcKEHA3+ZTC7f/c9LV6mgMMOb7Y1LFPw29mj8GkpOOTfSDCQ09iaHHdT034Rb+BfhkkB6UmEg8GXgy3UUT3Gkbjb7CqOTK0uVFg23VBJlzKnMqo7ZqJHEUapHUrcgdy/IOlYu+tImr8MTI3agKRh9qFH4BHCtrsZl3NEcAAAAASUVORK5CYII=";  

    swiperSlides.forEach((slider, index) => {  
      slider.addEventListener('click', () => { 
        // think about active class way of doing 
       
        sliderImg.forEach(btn => btn.src = `${imgCircle}`);  
        sliderDes.forEach(slider => slider.style.bottom = "-400px")
        sliderImg[index].src = `${imgSrcCheck}`  
        sliderDes[index].style.bottom = "0"; 
      }) 
    })  

  }, []) 

  return (
    <>

    <div className={styles.event}>
        <h2 className={styles.event_title}>Мероприятия</h2>
          <div className={styles.container}>  
          <Swiper  className="slider" {...settings}> 
          {
            [1,2,3,4,5].map((value, key) => {
              return (
                <SwiperSlide key={key} data-index={key}> 
                  <div  className={styles.slider_img}>
                    <img src={Slider} className={styles.img_of_img}/>
                    <div className={styles.circle}>   
                    
                    {/* {isCheck ? <img src={Check} className="img_change"/>  

                    : <img src={Circle} className="img_change"/>  }  */} 

                  <img src={Circle} className="img_change" data-index={key}/>
                     {/* <input type="radio" name='radio'/> */}
                    </div> 

                    {/* <img src={Slider} className={styles.img_pos}/>   */}
                    <div className={styles.event_des} id="eventdes">
                      <h3>Свадьба</h3>
                    </div>
                    </div>
                  </SwiperSlide> 
              ) 
            })
          }
          </Swiper> 
        </div> 
    </div>  
    <div className={styles.event}>
        <h2 className={styles.event_title}>Мероприятия</h2>
          <div className={styles.container}>  
          <Swiper  className="slider" {...settings}> 
          {
            [1,2,3,4,5].map((value, key) => {
              return (
                <SwiperSlide key={key} data-index={key}> 
                  <div  className={styles.slider_img}>
                  <img src={Slider} className={styles.img_of_img}/>
                    <div className={styles.circle}>   
                    
                    {/* {isCheck ? <img src={Check} className="img_change"/>  

                    : <img src={Circle} className="img_change"/>  }  */} 

                  <img src={Circle} className="img_change" data-index={key}/>
                     {/* <input type="radio" name='radio'/> */}
                    </div> 

                    {/* <img src={Slider} className={styles.img_pos}/>   */}
                    <div className={styles.event_des} id="eventdes">
                      <h3>Свадьба</h3>
                    </div>
                    </div>
                  </SwiperSlide> 
              ) 
            })
          }
          </Swiper> 
        </div> 
    </div> 
    </>
    
  )
}

export default Event; 