import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";
const FrameComponent = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/contact-us-page");
  }, [navigate]);

  return (
    <div className="group-root">
      <div className="submitted-successfully-parent">
        <div className="submitted-successfully">Submitted Successfully</div>
        <div className="rectangle-parent1" onClick={onGroupContainerClick}>
          <div className="group-child5" />
          <div className="done">Done</div>
        </div>
        <img className="image-53-icon" alt="" src="/undefined25.png" />
      </div>
    </div>
  );
};

export default FrameComponent;
