import { storeFeaturesList } from "../static/Data";
import "./StoreIntro.scss";
const StoreIntro = () => {
  let featuresToRender = storeFeaturesList.map(
    ({ featureName, featureDescription }, idx) => (
      <li key={idx}>
        <span className="feature-name">{featureName}</span>
        <span className="feature-description">: {featureDescription}</span>
      </li>
    )
  );
  return (
    <div className="store-section">
      <section className="store-intro">
        <h1>
          Welcome to eStore &#10084; - Your Ultimate Online Shopping
          Destination!
        </h1>
        <p>
          &bull; eStore is your go-to platform for the best electronics,
          jewellery, men's, and women's clothing. Whether you're looking for the
          latest gadgets, stylish accessories, or trendy outfits, we have
          everything you need in one place.
        </p>
        <p>
          &bull; We are committed to bringing you top-quality products from
          trusted brands and suppliers, ensuring that you always get the best
          value for your money. Our curated collection is designed to meet the
          needs of modern shoppers who seek both quality and affordability.
        </p>
        <p>
          &bull; At eStore, we understand the importance of a seamless and
          secure shopping experience. That's why we offer an easy-to-navigate
          website, secure payment options, and a hassle-free checkout process.
          Your privacy and data security are our top priorities, so you can shop
          with complete peace of mind
        </p>
        <p>
          &bull; At eStore, we believe that shopping should be fun, effortless,
          and rewarding. Experience the best of online shopping with us today!
          🚀
        </p>
      </section>
      <section className="store-features">
        <h2>Why Shop with Us?</h2>
        <ul>{featuresToRender}</ul>
      </section>
    </div>
  );
};
export default StoreIntro;
