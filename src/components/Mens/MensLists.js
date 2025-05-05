import { useState, useEffect } from "react";
// import {  useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { mc } from "../static/mens-category";
import "./MensLists.scss";
const MensLists = () => {
  const [availableMensLists, setAvailableMensLists] = useState([...mc]);
  // useEffect(() => {
    // (async () => {
    //   try {
    //     let data = await axios.get(
    //       `https://fakestoreapi.com/products/category/men's%20clothing`
    //     );
    //     setAvailableMensLists(data.data);
    //   } catch (e) {
    //     setAvailableMensLists([]);
    //   }
    // })();

  // }, []);
  const navTo = useNavigate();

  let renderLists = availableMensLists.map((itm, indx) => {
    return (
      <div key={indx} className="display-itm">
        <img src={itm.image} alt={itm.title} />
        <p>{itm.title}</p>
        <div className="itm-info">
          <span>Price : {itm.price}rs</span>
          <button className="buy-itm" onClick={()=>{
            navTo(`${indx+1}`)
            window.scrollTo(0,0);
          }}>Buy</button>
        </div>
      </div>
    );
  });
  let lists =
    availableMensLists.length > 0 ? (
      renderLists
    ) : (
      <h2 className="loader">loading..</h2>
    );
  return (
    <div>
      <div className="lists-container">
        <div className="mens-list-container">{lists}</div>
      </div>
      {availableMensLists.length > 0 && (
        <p className="outoff-stocks">New items are going to add sooner...</p>
      )}
    </div>
  );
};

export default MensLists;
