import {useEffect, useState} from "react";
import axios from "axios"; 

function Fetch(url) { 
    const [data, setData] = useState(null);  
    const [err, setErr] = useState(null); 

    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data);  
        }).catch(err => {
            setErr(err); 
        }) 

    }, [url])    

    return {data, err}; 
} 

export default Fetch; 