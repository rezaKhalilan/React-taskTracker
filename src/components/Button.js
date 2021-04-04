import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <>
      <button style={{ backgroundColor: color }} type="button" className="btn">
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
