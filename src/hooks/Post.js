import {useState, useEffect} from "react"; 
import axios from "axios"; 

function Post(url, data) {
    const [err, setErr] = useState(null);   
  
    // useEffect(() => {
        axios.post(url, data).catch(err => {
            setErr(err); 
        }) 
    // }, [data])

    if(err) {
        return err; 
    } 

    return "went to delivery"; 
} 

export default Post; 