import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LOUGOUTTHANKYOU.css";
import { Icon } from '@iconify/react';

const LOUGOUTTHANKYOU = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/3-sign-in");
  }, [navigate]);

  const onReturnButtonClick = useCallback(() => {
    navigate("/2-sign-in-sign-up");
  }, [navigate]);

  return (
    <div className="lougoutthankyou">
      <div className="notocloud-icon12" alt="" src="/undefined12.png" />
      <div className="notocloud-icon13" alt="" src="/undefined12.png" />
      <div className="lougoutthankyou-child" />
      <div className="lougoutthankyou-item" />
      <img className="vector-icon13" alt="" src="/undefined35.png" />
      <img className="vector-icon14" alt="" src="/undefined36.png" />
      <img className="wikang-wali-logo2" alt="" src="/undefined14.png" />
      <div className="notocloud-icon14" alt="" src="/undefined12.png" />
      <div className="notocloud-icon15" alt="" src="/undefined15.png" />
      <div className="lougoutthankyou-inner" />
      <div className="lougoutthankyou-inner1">
        <div className="group-wrapper3" onClick={onGroupContainer1Click}>
          <div className="rectangle-parent6">
            <div className="group-child14" />
            <div className="return-home">Return home</div>
          </div>
        </div>
      </div>
      <div className="salamat-sa-pag-aaral">
        Salamat sa pag-aaral kasama namin
      </div>
      <img className="image-54-icon" alt="" src="/undefined37.png" />
      <button className="return-button1" onClick={onReturnButtonClick}>
        <div className="return-button-item" />
        <Icon icon="mingcute:back-fill" className="mingcuteback-line-icon1"/>
      </button>
    </div>
  );
};

export default LOUGOUTTHANKYOU;
