import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentMode.css";

const StudentMode = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  return (
    <div className="student-mode_SM">
      <img className="student-mode-child_SM" alt="" src="/rectangle-131.svg" />
      <div className="are-you-sure_SM">
        Are you sure you want to return to student mode?
      </div>
      <div className="student-mode-inner_SM" onClick={onGroupContainer2Click}>
        <div className="group-wrapper_SM">
          <div className="group-wrapper_SM">
            <div className="group-child_SM" />
            <div className="yes_SM">yes</div>
          </div>
        </div>
      </div>
      <div className="group-div_SM">
        <div className="group-wrapper_SM">
          <div className="group-wrapper_SM">
            <div className="group-item_SM" />
            <div className="yes_SM">cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMode;
