import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box_section">
        <p className="email">email: john@dotrex.co / phone +123 456 789 111</p>
      </div>
      <div className="box_social">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-youtube-square"></i>
      </div>
    </section>
  );
};

export default Footer;
