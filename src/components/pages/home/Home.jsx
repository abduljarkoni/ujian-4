import "./Home.css";
import Avatar from "../../cards/img/avatar.png";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <section className="home">
      <img src={Avatar} alt="" className="avatar" />
      <h1 className="profile_title1">Hi,i'm John Rex!</h1>
      <h3 className="profile_title2">Web Designer & Developer</h3>
      <p className="profile_title3">
        Founder of DotRex. Professional UI/UX designer and web developer based
        on London. Sometimes works as a freelancer.
      </p>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
