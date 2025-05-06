import { useState, useContext ,useRef} from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useMOWChecker } from "../utilities/useMOWChecker";
import { GlobalCntxt } from "../Context/GlobalCntxt";
import { avoidBackgroundScrollingInBoth } from "../utilities/utils";
import { mc } from "../static/mens-category";
import { clsx as cn } from "clsx";
import "./Person.scss";

const Person = () => {
  const [itmCount, setItmCount] = useState(1);
  const isMobile = useMOWChecker();
  const contxt = useContext(GlobalCntxt);
  const personId = useParams().id;
  const nav = useNavigate();
  const scrlY_fromHTML = useRef();
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
  const itmsInCart = contxt.cartState.reduce((accumulator, currItm) => {
    return accumulator + currItm.totalCount;
  }, 0);
  const {isCartOverlayShown,setIsCartOverlayShown} = contxt.cartModal;
  // avoid background scrolling in both mow & desktop
  avoidBackgroundScrollingInBoth(isCartOverlayShown)

  const CartModal = ()=>{
   
       return <div className="modal" style={{ top : `${scrlY_fromHTML.current}px`}}> 
        <h2>Modal title</h2>
        <main>Data</main>
        <button onClick={()=>{
          setIsCartOverlayShown(false)
        }}>close</button>

       </div>
  }
  const cartModalRender = createPortal(<CartModal/>,document.getElementById("cart-modal"));


  const cartRender = (
    <div className="cart-details" onClick={()=>{
      setIsCartOverlayShown(true);
      scrlY_fromHTML.current = document.documentElement.scrollTop;
    }} title="cart details">
      <span className="cart-text">
        Items in the Cart
        <span className="cart-count">{itmsInCart}</span>
      </span>
    </div>
  );

  const addToCartHandler = () => {
    const { id, price, title, image } = personData[0];
    contxt.cartDispatch({
      type: "add",
      payload: {
        totalCount: itmCount,
        itmId: id,
        itmTitle: title,
        itmPrice: price * itmCount,
        itmImg: image,
      },
    });
  };

  const backPage = () => {
    nav(-1);
  };

  return (
    <section className="person-page">
      {cartRender}
      {isCartOverlayShown && cartModalRender}
      <div className="backbtn">
        <button onClick={backPage}>&larr; back</button>
      </div>
      <div className={cn({ desktop: !isMobile })}>
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
            <button onClick={addToCartHandler}>Add</button>
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
