import { useNavigate } from "react-router-dom";

const SellWithUs = () => {
  const navigate = useNavigate();

  const handleSellClick = () => {
    navigate("/sell");
  };

  return (
    <div
      className="
              flex 
              cursor-pointer 
              hover:bg-gray-100
              m-1
            "
      onClick={handleSellClick}
    >
      Sell with us
    </div>
  );
};

export default SellWithUs;
