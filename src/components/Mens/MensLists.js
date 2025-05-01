import { useState, useEffect } from "react";
import axios from "axios";
import "./MensLists.scss";
const MensLists = () => {
  const [availableMensLists, setAvailableMensLists] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let data = await axios.get(
          `https://fakestoreapi.com/products/category/men's%20clothing`
        );
        console.log("data", data.data);
        setAvailableMensLists(data.data);
      } catch (e) {
        setAvailableMensLists([]);
      }
    })();
  }, []);
  let renderLists = availableMensLists.map((itm, indx) => {
    return (
      <div key={indx} className="display-itm">
        <img src={itm.image} alt={itm.title} />
        <p>{itm.title}</p>
        <div className="itm-info">
          <span>Price : {itm.price}rs</span>
          <button className="buy-itm">Buy</button>
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
