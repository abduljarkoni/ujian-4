import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="scroll_contact">
        <h1>CONTACT</h1>
        <hr />
        <div className="container_contact">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953"
              allowfullscreen
            ></iframe>
          </div>
          <div className="box_contact">
            <h2>
              <i class="fas fa-map-marked-alt"></i>Address
            </h2>
            <hr className="garis_address" />
            <h4>451 Lorem Ipsum, London - Uk</h4>
            <h2>
              <i class="fas fa-phone-square"></i>Phone
            </h2>
            <hr className="garis_address" />
            <h4>+61 3 8376 6284</h4>
            <h2>
              <i class="fas fa-envelope-open-text"></i>Email
            </h2>
            <hr className="garis_address" />
            <h4>john.Rex@dotrex.com</h4>
          </div>
          <div className="pesan">
            <h2>
              <i class="fab fa-telegram"></i>Send Me a Message
            </h2>
            <hr className="garis_address" />
            <form action="">
              <input type="text" className="input_pesan" placeholder="Name" />
              <br />
              <br />
              <input type="text" className="input_pesan" placeholder="Email" />
              <br />
              <br />
              <input
                type="text"
                className="input_pesan"
                placeholder="Subject"
              />
              <br />
              <br />
              <input
                type="textarea"
                className="area_input"
                placeholder="Message"
              />
              <br />
              <br />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
