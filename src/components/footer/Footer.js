import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer-main">
      <hr />
      <div className="footer-info">
        <div className="about-section">
          <h3>
            {" "}
            <span>1.</span>About Section
          </h3>
          <p>
            Your one-stop shop for the latest electronics, stylish jewellery,
            and trendy clothing for men and women. Quality products at great
            prices!
          </p>
        </div>
        <div className="quick-links">
          <h3>
            <span>2.</span>Quick Links
          </h3>
          <ul>
            <li>Home</li>
            <span>&nbsp; | &nbsp;</span>
            <li>About Us</li>
            <span>&nbsp; | &nbsp;</span>
            <li>Contact</li>
            <span>&nbsp; | &nbsp;</span>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="customer-service">
          <h3>
            <span>3.</span>Customer Service
          </h3>
          <ul>
            <li>Shipping & Returns</li>
            <span>&nbsp; | &nbsp;</span>
            <li>Privacy Policy</li>
            <span>&nbsp; | &nbsp;</span>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="contact-information">
          <h3>
            <span>4.</span>Contact Information
          </h3>
          <p>📧 Email: support@e-store.com</p>
          <p>📞 Phone: +91 7799338062</p>
          <p>📍 Address: 123 Street, Hyderabad, India</p>
        </div>
      </div>
      <div className="footer-copyrights">
        <p>Copyright &copy; 2025 e-Store Inc. All rights reserved.</p>
        <p>
          Follow us on <span>Facebook</span> | <span>Instagram</span> |{" "}
          <span>Twitter</span> | <span>LinkedIn</span>
        </p>
      </div>
      <hr />
    </footer>
  );
};
export default Footer;
