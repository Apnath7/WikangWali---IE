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
      <div className="student-mode-child_SM"/>
      <div className="are-you-sure_SM">
        Are you sure you want to return to student mode?
      </div>
      <div className="student-mode-inner_SM" onClick={onGroupContainer2Click}>
        <div className="group-wrapper_SM">
          <div className="group-wrapper_SM">
            <button className="yes_SM">yes</button>
          </div>
        </div>
      </div>
      <div className="group-div_SM">
        <div className="group-wrapper_SM">
          <div className="group-wrapper_SM">

            <button className="cancel_SM">cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMode;
