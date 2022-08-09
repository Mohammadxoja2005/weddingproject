import React, {Fragment} from "react"; 
import styles from "./index.module.scss"; 


function Modal({children, isOpen, setIsOpen}) {
  return (
  <div> 
      {isOpen ? <> 
      {children}
    </> : null}
  </div>
  )
}

export default Modal; 
