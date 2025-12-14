import { useState, useContext, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useMOWChecker } from "../utilities/useMOWChecker";
import { GlobalCntxt } from "../Context/GlobalCntxt";
import { avoidBackgroundScrollingInBoth } from "../utilities/utils";
import { clsx as cn } from "clsx";
import "./Person.scss";
import axios from "axios";

const Person = () => {
  const [itmCount, setItmCount] = useState(1);
  const isMobile = useMOWChecker();
  const contxt = useContext(GlobalCntxt);
  const personId = useParams().id;
  const nav = useNavigate();
  const scrlY_fromHTML = useRef();

  const [personData, setPersonData] = useState([]);

  // get data from API using each person idc-- todo
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          `https://fakestoreapi.com/products/${personId}`
        );
        setPersonData([res.data]);
      } catch (e) {
        setPersonData([]);
      }
    })();
  }, []);
  const personRender = personData?.map((itm, index) => {
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
  const { isCartOverlayShown, setIsCartOverlayShown } = contxt.cartModal;
  // avoid background scrolling in both mow & desktop
  avoidBackgroundScrollingInBoth(isCartOverlayShown);

  const CartModal = () => {
    const cartDetailsInModal = contxt.cartState;

    const removeItmHandler = (itmId) => {
      contxt.cartDispatch({ type: "remove", payload: itmId });
    };
    const isCartEmpty = cartDetailsInModal.length < 1;
    const netTotal = contxt.cartState.reduce((accumulator, currItm) => {
      return accumulator + currItm.itmPrice;
    }, 0);
    return (
      <div className="modal" style={{ top: `${scrlY_fromHTML.current}px` }}>
        <div className="container">
          <h2>
            <i>Cart Details</i>
          </h2>
          {cartDetailsInModal.map((itm, indx) => {
            return (
              <div key={indx} className="itm-details">
                <div className="top-section">
                  <div>
                    <img src={itm.itmImg} />
                  </div>
                  <div>
                    <span>{itm.itmTitle}</span>
                  </div>
                </div>
                <div className="mid-section">
                  <section className="price-itms">
                    <div className="itms">
                      <span>Items : {itm.totalCount}</span>
                    </div>
                    <div className="price">
                      <span>
                        Total Price : <em>&#8377; {itm.itmPrice}</em>{" "}
                      </span>
                    </div>
                  </section>
                  <section className="add-remove-section">
                    <button onClick={() => removeItmHandler(itm.itmId)}>
                      remove
                    </button>
                  </section>
                </div>
                <div className="lower-section"></div>

                <hr />
              </div>
            );
          })}
          {isCartEmpty && (
            <div className="empty-cart">
              <button onClick={() => setIsCartOverlayShown(false)}>
                Add Items
              </button>
            </div>
          )}
          {!isCartEmpty && (
            <div className="net-total">
              <span>Net Total : &#8377; {netTotal}</span>
            </div>
          )}

          <button
            className="cart-close-btn"
            onClick={() => {
              setIsCartOverlayShown(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  };
  const cartModalRender = createPortal(
    <CartModal />,
    document.getElementById("cart-modal")
  );

  const cartRender = (
    <div
      className="cart-details"
      onClick={() => {
        setIsCartOverlayShown(true);
        scrlY_fromHTML.current = document.documentElement.scrollTop;
      }}
      title="cart details"
    >
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
        {personData.length > 0 && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
};
export default Person;
