import "./UpdatedSuccessfully.css";
const UpdatedSuccessfully = ({ onClose }) => {
  const handleDoneClick = () => {
    onClose();
  }
  return (
    <div className="updated-successfully">
      <div
        className="updated-successfully-child"
      />
      <div className="updated-successfully1">Updated successfully</div>
      
            <button className="done1_SS" onClick={handleDoneClick}>Done</button>
      
      <img
        className="f17-0125-414b-bef8-001655ccd3e-icon"
        alt=""
        src="/undefined27.png"
      />
    </div>
  );
};

export default UpdatedSuccessfully;
