import { useState,useEffect } from "react";
export const useMOWChecker = ()=>{
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