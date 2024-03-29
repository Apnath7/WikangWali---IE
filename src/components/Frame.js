import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/22-dashboard-parent-contact-us");
  }, [navigate]);

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="group-root">
      <div className="submitted-successfully-parent">
        <div className="submitted-successfully">Submitted Successfully</div>
        <div className="rectangle-parent7" onClick={onGroupContainerClick}>
          <div className="group-child9" />
          <div className="done1" onClick={handleCancelClick}>Done</div>
        </div>
        <img className="image-53-icon" alt="" src="/parentbird.png" />
      </div>
    </div>
  );
};

export default Frame;
