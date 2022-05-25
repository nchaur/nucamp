import logo from "../assets/heart.svg";

const Heart = ({ msg }) => {
  return (
    <div className="heart">
      <img className="heart-img" src={logo} alt="herart" />
      <p className="heart-message">{msg}</p>
    </div>
  );
};

export default Heart;
