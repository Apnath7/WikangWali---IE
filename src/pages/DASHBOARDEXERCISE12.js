import { useState, useCallback } from "react";
import LogoutPopup from "../components/LogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./DASHBOARDEXERCISE12.css";
import { Icon } from '@iconify/react';

const DASHBOARDEXERCISE12 = () => {
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  var Questionbank = [
    {
      Question: "Magandang umaga!",
      Answers: [
        { Answer: "Greeting someone in the morning", isCorrect: true },
        { Answer: "Greeting someone in the afternoon", isCorrect: false },
        { Answer: "Greeting someone in the evening", isCorrect: false },
        { Answer: "Asking someone how they are", isCorrect: false },
        { Answer: "Saying goodbye to someone", isCorrect: false },

      ]
    },
    {
      Question: "Magandang hapon!",
      Answers: [
        { Answer: "Greeting someone in the morning", isCorrect: false },
        { Answer: "Greeting someone in the afternoon", isCorrect: true },
        { Answer: "Greeting someone in the evening", isCorrect: false },
        { Answer: "Asking someone how they are", isCorrect: false },
        { Answer: "Saying goodbye to someone", isCorrect: false },

      ]
    },
    {
      Question: "Magandang gabi!",
      Answers: [
        { Answer: "Greeting someone in the morning", isCorrect: false },
        { Answer: "Greeting someone in the afternoon", isCorrect: false },
        { Answer: "Greeting someone in the evening", isCorrect: true },
        { Answer: "Asking someone how they are", isCorrect: false },
        { Answer: "Saying goodbye to someone", isCorrect: false },

      ]
    },
    {
      Question: "Kumusta ka?",
      Answers: [
        { Answer: "Greeting someone in the morning", isCorrect: false },
        { Answer: "Greeting someone in the afternoon", isCorrect: false },
        { Answer: "Greeting someone in the evening", isCorrect: false },
        { Answer: "Asking someone how they are", isCorrect: true },
        { Answer: "Saying goodbye to someone", isCorrect: false },

      ]
    },
    {
      Question: "Paalam!",
      Answers: [
        { Answer: "Greeting someone in the morning", isCorrect: false },
        { Answer: "Greeting someone in the afternoon", isCorrect: false },
        { Answer: "Greeting someone in the evening", isCorrect: false },
        { Answer: "Asking someone how they are", isCorrect: false },
        { Answer: "Saying goodbye to someone", isCorrect: true },

      ]
    }
  ]

  //useState Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}
  
//callbacks
  const onGroupContainerClick = useCallback(() => {
    navigate("/7-dashboard-courses");
  }, [navigate]);

  const onProgressClick = useCallback(() => {
    navigate("/13-dashboard-progress");
  }, [navigate]);

  const onSettingsClick = useCallback(() => {
    navigate("/14-dashboard-settings");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "16- DASHBOARD -ParentMode Login" to the project
    navigate("/dashboard-parent-mode");
  }, [navigate])

  const onHomeClick = useCallback(() => {
    navigate("/6-dashboard-home");
  }, [navigate]);

  const onReturnArrowClick = useCallback(() => {
    navigate("/9-dashboard-exercise-1");
  }, [navigate]);

  const onSubmitClick = useCallback(() => {
    // Check if the user has completed the exercise (showScore is true)
    if (showScore) {
      navigate("/11-dashboard-exercise-13");
    } else {
      // Handle the case where the exercise is still ongoing
      alert("Please answer all questions before submitting!");
    }
  }, [navigate, showScore]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  return (
    <>
      <div className="dashboard-exercise-12">
        <div className="rectangle-parent13">
          <div className="group-child32" />
          <div className="group-parent8">
            <div className="vector-parent4" onClick={onGroupContainerClick}>
              <Icon className="vector-icon58" alt="" icon="carbon:course" color="white" />
              <div className="courses2">Courses</div>
            </div>
            <button className="progress4" onClick={onProgressClick}>
              <div className="vector-parent5">
                <Icon className="vector-icon59" alt="" icon="material-symbols:progress-activity" color="white" />
                <div className="progress5">Progress</div>
              </div>
            </button>
            <button className="settings4" onClick={onSettingsClick}>
              <div className="group-parent9">
              <Icon className="group-icon23" alt="" icon="solar:settings-outline" color="white" />
                <div className="settings5">Settings</div>
              </div>
            </button>
            <div className="parent-mode4">
              <div className="vector-parent6">
              <Icon className="vector-icon61" alt="" icon="ri:parent-line" />
                <div className="parent-mode5">Parent Mode</div>
              </div>
              <button
                className="rectangle-parent14"
                onClick={onGroupButtonClick}
              >
                <div className="group-child33" />
                <Icon className="group-child86" alt="" icon="twemoji:white-circle" />
              </button>
            </div>
            <button className="home4" onClick={onHomeClick}>
              <div className="home-container">
                <div className="home5">Home</div>
                <Icon className="vector-icon60" alt="" icon="material-symbols-light:home-outline" color="white" />
              </div>
            </button>
          </div>
        </div>
        <div className="fluenttriangle-16-filled2" />
        <img
          className="microsoftteams-image-1-22"
          alt=""
          src="/undefined44.png"
        />
        <div className="rectangle-parent15">
          <div className="group-child35" />
          <div className="group-child38" />
          <div className="group-child39" />
          <div className="rectangle-parent16">
            <div className="group-child40" />
            <div className="vector-parent7">
              <div className="group-child41" alt="" src="/undefined45.png" />
              <b className="gelu-ursal2">Gelu Ursal</b>
              <img
                className="microsoftteams-image-1-7"
                alt=""
                src="/undefined47.png"
              />
              <Icon className="vector-icon65" alt="" icon="ph:bell-fill" color="black" />
              <Icon className="vector-icon66" alt="" icon="bxs:down-arrow" />
            </div>
            <Icon icon="carbon:course" color="white" className="group-child42" alt="" src="/undefined46.png" />
          </div>
          <div className="aralin-1-pagbati-container2">
            <p className="exercise">Aralin 1</p>
            <p className="pagbati-at-karaniwang2">
              pagbati AT KARANIWANG PANANALITA ARALIN
            </p>
          </div>
          <div className="group-child43" alt="" src="/undefined50.png" />
          <div className="group-child44" alt="" src="/undefined51.png" />
          <div className="div8">2/2</div>
          <button className="return-arrow2" onClick={onReturnArrowClick}>
            <div className="return-arrow-inner" />
            <Icon className="group-icon17_12" icon="mingcute:back-line"/>
          </button>
          <div className="ehersisyo-1-2">{`Ehersisyo 1  - GREETING MATCH - UP `}</div>
        </div>
        <button className="submit1" onClick={onSubmitClick}>
          <div className="submit-child" alt="" src="/undefined60.png" />
          <div className="submit2">submit</div>
        </button>
        <div className="ca88b0e1-977b-4453-99ba-b1a77c-parent">
          <img
            className="ca88b0e1-977b-4453-99ba-b1a77c-icon"
            alt=""
            src="/undefined61.png"
          />
          <div className="group-child45" />
          <div className="exercise-match-the-container">
            <span className="exercise-match-the-container1">
              <p className="exercise">Exercise:</p>
              <p className="match-the-greetings">
                Match the greetings with their corresponding appropriate
                contexts or situations.
              </p>
            </span>
          </div>
        </div>


        {/*quiz component*/}
        <div className='app'>
            {showScore ? (
                <div className='score-section'> 
                    You have scored {score} out of {Questionbank.length}
                    <>
                    
                       <button className="playAgain" type="submit" onClick={resetQuiz}>Do you want to try Again?</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button className="buttonChoices" onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>

        
        <button className="logout2" onClick={openLogoutPopup}>
          <div className="group-parent10">
            <div className="group-parent11">
              <div className="rectangle-sign-in-button-frame">
                <div className="rectangle-sign-in-button2" />
              </div>
              <div className="log-out3">Log Out</div>
            </div>
            <Icon className="group-icon24" alt="" icon="carbon:logout" color="white" />
          </div>
        </button>
      </div>
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <LogoutPopup onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DASHBOARDEXERCISE12;
