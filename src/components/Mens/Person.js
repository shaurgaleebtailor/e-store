import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMOWChecker } from "../utilities/useMOWChecker";
import { GlobalCntxt } from "../Context/GlobalCntxt";
import { mc } from "../static/mens-category";
import { clsx as cn } from "clsx";
import "./Person.scss";

const Person = () => {
  const [itmCount, setItmCount] = useState(1);
  const isMobile = useMOWChecker();
  const contxt = useContext(GlobalCntxt);
  const personId = useParams().id;
  const nav = useNavigate();
  // get data from API using each person idc-- todo
  const personData = mc.filter((itm) => itm.id == personId);
  const personRender = personData.map((itm, index) => {
    return (
      <div className="person-details" key={index}>
        <section className="person-left">
          <img src={itm.image} alt={itm.title} />
        </section>
        <main className="person-right">
          <h2>{itm.title}</h2>
          <p>{itm.description}</p>
          <div className="price-tag">
            <span>Price : &#8377; {itm.price}</span>
          </div>
          <div className="ratings-count">
            <span>Rating : {itm.rating.rate}/5</span>
            <span>Recent buyings : {itm.rating.count} &#9889;</span>
          </div>
        </main>
      </div>
    );
  });

  const plusByOneHandler = () => {
    setItmCount((itm) => itm + 1);
  };
  const minusByOneHandler = () => {
    setItmCount((itm) => itm - 1);
  };

  const cartRender = <div className="cart-details">
    <span>Items in the Cart  <span>{contxt.cartState.cartCount}</span> </span>
  </div>

  const addToCartHandler = ()=>{
    contxt.cartDispatch({type:"add",payload:itmCount})
  }

  const backPage = ()=>{
    nav(-1);
  }

  return (
    <section className="person-page">
     {cartRender}
      <div className="backbtn">
        <button
          onClick={backPage}
        >
          &larr; back
        </button>
      </div>
      <div className={cn({"desktop":!isMobile})}>
      {personRender}
      <div className="add-to-cart">
        <div
          className="items-count"
          title="min 1 to 9 units only we can add as of now"
        >
          <button
            className={cn("minus-itm")}
            onClick={minusByOneHandler}
            disabled={itmCount < 2}
          >
            {" "}
            -{" "}
          </button>
          <span className="count">{itmCount}</span>
          <button
            className={cn("plus-itm")}
            onClick={plusByOneHandler}
            disabled={itmCount > 8}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <div className="add-to-cart-btn">
          <button onClick={addToCartHandler} >Add</button>
        </div>
      </div>
      <div className="checkout-btn">
        <button>Checkout &rarr; </button>
      </div>
      </div>
    </section>
  );
};
export default Person;
