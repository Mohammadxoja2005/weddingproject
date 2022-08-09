import React from 'react'
import styles from "./index.module.scss"; 
import Img from "../../assets/images/registration.png"

function Gallery() {
  return ( 

   <div className={styles.gallery}>
    <h3 className={styles.gallery_title} >Галерея</h3> 

    <div className={styles.container}>      

        <div className={styles.first}>
            <img src={Img} id={styles.b1} className={styles.gallery_block}/>
            <img src={Img} id={styles.b2} className={styles.gallery_block}/>
            <img src={Img} id={styles.b3} className={styles.gallery_block}/>
            <img src={Img} id={styles.b4} className={styles.gallery_block}/>
            <img src={Img} id={styles.b5} className={styles.gallery_block}/>
        </div> 

        {/* <div className={styles.second}>
            <img src={Img} id={styles.a1} className={styles.gallery_block} />
            <img src={Img} id={styles.a2} className={styles.gallery_block} />
            <img src={Img} id={styles.a3} className={styles.gallery_block} />
            <img src={Img} id={styles.a4} className={styles.gallery_block} />
            <img src={Img} id={styles.a5} className={styles.gallery_block} /> 

            <img src={Img} id={styles.a6} className={styles.gallery_block} />
            <img src={Img} id={styles.a7} className={styles.gallery_block} />
        
        </div> */}

    </div>
   
   </div>
  
  )
}

export default Gallery