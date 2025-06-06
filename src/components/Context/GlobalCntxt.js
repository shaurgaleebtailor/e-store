import { createContext, useEffect, useReducer, useState } from "react";
import _ from "lodash";
export const GlobalCntxt = createContext({
  cartState: [
    { totalCount: 0, itmId: 0, itmTitle: "", itmImg: "", itmPrice: 0 },
  ],
  cartDispatch: () => {},
  cartModal:{isCartOverlayShown:false,setIsCartOverlayShown:()=>{}}
});

const ContxtProvider = ({ children }) => {
  const initialCartState = [];

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "add":
        let tempState = [...state];
        let oldInstance = tempState.findIndex(
          (itm) => itm.itmId == action.payload.itmId
        );
        if (oldInstance != -1) {
          tempState[oldInstance]["totalCount"] += parseInt(
            action.payload.totalCount
          );
          tempState[oldInstance]["itmPrice"] += parseInt(
            action.payload.itmPrice
          );
        } else {
          tempState.push(action.payload);
        }
        window.localStorage.setItem("cartDetails", JSON.stringify(tempState));

        return [...tempState];
      case 'remove':
    
      let tempState2 = [...state];
      let updatedState = tempState2.filter((itm)=>itm.itmId!=action.payload);
      window.localStorage.setItem("cartDetails", JSON.stringify(updatedState));
      return [...updatedState];
      case "remember":
        return [...action.payload];
      default:
        return state;
    }
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  useEffect(() => {
    let storedDetails = JSON.parse(window.localStorage.getItem("cartDetails"));
    if (!_.isEmpty(storedDetails)) {
      cartDispatch({ type: "remember", payload: storedDetails });
    }
  }, []);
  const [isCartOverlayShown,setIsCartOverlayShown] = useState(false);


  return (
    <GlobalCntxt.Provider value={{ cartState, cartDispatch,cartModal:{isCartOverlayShown,setIsCartOverlayShown} }}>
      {children}
    </GlobalCntxt.Provider>
  );
};
export default ContxtProvider;
