import { createContext, useEffect, useReducer } from "react";
export const GlobalCntxt = createContext({cartState:{},cartDispatch:()=>{}})

const ContxtProvider = ({children})=>{
    const initialCartState = {
        cartCount:0
    }
    const cartReducer = (state,action)=>{
        switch (action.type){
            case 'add':
                window.localStorage.setItem("cartCount",state.cartCount+action.payload);
                return {...state,cartCount:state.cartCount+action.payload};
            case 'remove':
                window.localStorage.setItem("cartCount",state.cartCount-action.payload);
                return {...state,cartCount:state.cartCount-action.payload};
            default :
            return state;
        }
    }


    const [cartState,cartDispatch] = useReducer(cartReducer,initialCartState);
    useEffect(()=>{
        let storedCount = window.localStorage.getItem("cartCount");
        if(storedCount){
            cartDispatch({type:"add",payload:parseInt(JSON.parse(storedCount))})
        }
        

    },[]);

    
    return (
        <GlobalCntxt.Provider value={{cartState,cartDispatch}}>
            {children}
        </GlobalCntxt.Provider>
    )
}
export default ContxtProvider;

