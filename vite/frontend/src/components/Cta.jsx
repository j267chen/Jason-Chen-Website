import { Link } from "react-router-dom";

// call-to-action
const Cta = () => {
  return (
    <section className="cta">
      {/* contact text */}
      <p className="cta-text">
        Let's connect! <br className="sm:block hidden" />

      </p>

      {/* contact btn */}
      <Link to="/contact" className="btn" title="Contact Me">
        Contact
      </Link>
    </section>
  );
};

export default Cta;
