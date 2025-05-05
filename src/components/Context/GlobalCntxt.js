import { createContext, useReducer } from "react";
export const GlobalCntxt = createContext({cartState:{},cartDispatch:()=>{}})

const ContxtProvider = ({children})=>{
    const initialCartState = {
        cartCount:0
    }
    const cartReducer = (state,action)=>{
        switch (action.type){
            case 'add':
                return {...state,cartCount:state.cartCount+action.payload};
            case 'remove':
                return {...state,cartCount:state.cartCount-action.payload};
            default :
            return state;
        }
    }

    const [cartState,cartDispatch] = useReducer(cartReducer,initialCartState)
    
    return (
        <GlobalCntxt.Provider value={{cartState,cartDispatch}}>
            {children}
        </GlobalCntxt.Provider>
    )
}
export default ContxtProvider;

