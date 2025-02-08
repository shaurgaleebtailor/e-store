import { useState,useEffect } from "react";
export const useMOWChecker = ()=>{
    // letting MOW styles for the screens which are less than 768px
    const [isMobile,setIsMobile] = useState(window.innerWidth<=768)
    useEffect(()=>{
        const sizeHandler = ()=>{
            setIsMobile(window.innerWidth<=768)
        }
        window.addEventListener('resize',sizeHandler)
        return ()=> window.removeEventListener('resize')
    },[])
   return isMobile; 
}