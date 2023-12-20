import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ABOUTUSPAGESalvoro from "./pages/ABOUTUSPAGESalvoro";
import ABOUTUSPAGEPaez from "./pages/ABOUTUSPAGEPaez";
import ABOUTUSPAGEUrsal from "./pages/ABOUTUSPAGEUrsal";
import ABOUTUSPAGEGumagay from "./pages/ABOUTUSPAGEGumagay";
import SIGNUP from "./pages/SIGNUP";
import SIGNINSIGNUP from "./pages/SIGNINSIGNUP";
import SIGNIN from "./pages/SIGNIN";
import LANDINGPAGE from "./pages/LANDINGPAGE";
import CONTACTUSPAGE from "./pages/CONTACTUSPAGE";
import LOUGOUTTHANKYOU from "./pages/LOUGOUTTHANKYOU";
import DASHBOARDEXERCISE13 from "./pages/DASHBOARDEXERCISE13";
import DASHBOARDEXERCISE14 from "./pages/DASHBOARDEXERCISE14";
import DASHBOARDEXERCISE12 from "./pages/DASHBOARDEXERCISE12";
import DASHBOARDEXERCISE1 from "./pages/DASHBOARDEXERCISE1";
import DASHBOARDLESSONS from "./pages/DASHBOARDLESSONS";
import DASHBOARDCOURSES from "./pages/DASHBOARDCOURSES";
import FORGOTPASSWORDNEWPASSWORD from "./pages/FORGOTPASSWORDNEWPASSWORD";
import FORGOTPASS from "./pages/FORGOTPASS";
import DASHBOARDHOME from "./pages/DASHBOARDHOME";
import DASHBOARDSETTINGS2 from "./pages/DASHBOARDSETTINGS2";
import DASHBOARDPROGRESS from "./pages/DASHBOARDPROGRESS";
import DASHBOARDSETTINGS from "./pages/DASHBOARDSETTINGS";
import { useEffect } from "react";
import DASHBOARDParentModeLogin from "./pages/DASHBOARDParentModeLogin";
import DASHBOARDParentModeForgotP1 from "./pages/DASHBOARDParentModeForgotP1";
import DASHBOARDHOMEPARETNT from "./pages/DASHBOARDHOMEPARETNT";
import DASHBOARDPARENTCONTACTUS from "./pages/DASHBOARDPARENTCONTACTUS";
import DASHBOARDCONTACTPARENT from "./pages/DASHBOARDCONTACTPARENT";
import DASHBOARDPARENTCOURSES from "./pages/DASHBOARDPARENTCOURSES";
import DASHBOARDPARENTPROGRESS from "./pages/DASHBOARDPARENTPROGRESS";
import DASHBOARDPARENTSETTINGS from "./pages/DASHBOARDPARENTSETTINGS";
import DASHBOARDSETTINGSPARENT from "./pages/DASHBOARDSETTINGSPARENT";
import DASHBOARDParentModeForgotP from "./pages/DASHBOARDParentModeForgotP";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1-about-us-page-paez":
        title = "";
        metaDescription = "";
        break;
      case "/1-about-us-page-ursal":
        title = "";
        metaDescription = "";
        break;
      case "/1-about-us-page-gumagay":
        title = "";
        metaDescription = "";
        break;
      case "/5-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/2-sign-in-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/3-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/1-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/lougoutthankyou":
        title = "";
        metaDescription = "";
        break;
      case "/11-dashboard-exercise-13":
        title = "";
        metaDescription = "";
        break;
      case "/12-dashboard-exercise-14":
        title = "";
        metaDescription = "";
        break;
      case "/10-dashboard-exercise-12":
        title = "";
        metaDescription = "";
        break;
      case "/9-dashboard-exercise-1":
        title = "";
        metaDescription = "";
        break;
      case "/8-dashboard-lessons":
        title = "";
        metaDescription = "";
        break;
      case "/7-dashboard-courses":
        title = "";
        metaDescription = "";
        break;
      case "/4-forgot-passwordnew-password":
        title = "";
        metaDescription = "";
        break;
      case "/4-forgot-pass":
        title = "";
        metaDescription = "";
        break;
      case "/6-dashboard-home":
        title = "";
        metaDescription = "";
        break;
      case "/15-dashboard-settings-2":
        title = "";
        metaDescription = "";
        break;
      case "/13-dashboard-progress":
        title = "";
        metaDescription = "";
        break;
      case "/14-dashboard-settings":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDINGPAGE />} />
      <Route path="/1-about-us-page-paez" element={<ABOUTUSPAGEPaez />} />
      <Route path="/1-about-us-page-ursal" element={<ABOUTUSPAGEUrsal />} />
      <Route path="/1-about-us-page-gumagay" element={<ABOUTUSPAGEGumagay />} />
      <Route path="/5-sign-up" element={<SIGNUP />} />
      <Route path="/2-sign-in-sign-up" element={<SIGNINSIGNUP />} />
      <Route path="/3-sign-in" element={<SIGNIN />} />
      <Route path="/1-about-us-page-salvoro" element={<ABOUTUSPAGESalvoro />} />
      <Route path="/contact-us-page" element={<CONTACTUSPAGE />} />
      <Route path="/lougoutthankyou" element={<LOUGOUTTHANKYOU />} />
      <Route
        path="/11-dashboard-exercise-13"
        element={<DASHBOARDEXERCISE13 />}
      />
      <Route
        path="/12-dashboard-exercise-14"
        element={<DASHBOARDEXERCISE14 />}
      />
      <Route
        path="/10-dashboard-exercise-12"
        element={<DASHBOARDEXERCISE12 />}
      />
      <Route path="/9-dashboard-exercise-1" element={<DASHBOARDEXERCISE1 />} />
      <Route path="/8-dashboard-lessons" element={<DASHBOARDLESSONS />} />
      <Route path="/7-dashboard-courses" element={<DASHBOARDCOURSES />} />
      <Route
        path="/4-forgot-passwordnew-password"
        element={<FORGOTPASSWORDNEWPASSWORD />}
      />
      <Route path="/4-forgot-pass" element={<FORGOTPASS />} />
      <Route path="/6-dashboard-home" element={<DASHBOARDHOME />} />
      <Route path="/15-dashboard-settings-2" element={<DASHBOARDSETTINGS2 />} />
      <Route path="/13-dashboard-progress" element={<DASHBOARDPROGRESS />} />
      <Route path="/14-dashboard-settings" element={<DASHBOARDSETTINGS />} />
      <Route path="/dashboard-parent-mode" element={<DASHBOARDParentModeLogin />} />
      <Route path="/dashboard-parentmode-forgot-password" element={<DASHBOARDParentModeForgotP1 />} />
      <Route path="/20-dashboard-home-paretnt" element={<DASHBOARDHOMEPARETNT/>} />
      <Route path="/22-dashboard-parent-contact-us" element={<DASHBOARDPARENTCONTACTUS/>} />
      <Route path="/21-dashboard-contact-parent" element={<DASHBOARDCONTACTPARENT/>} />
      <Route path="/22-dashboard-parent-courses" element={<DASHBOARDPARENTCOURSES/>} />
      <Route path="/21-dashboard-parent-progress" element={<DASHBOARDPARENTPROGRESS/>} />
      <Route path="/14-dashboard-parent-settings" element={<DASHBOARDPARENTSETTINGS/>} />
      <Route path="/15-dashboard-settings-parent-mode" element={<DASHBOARDSETTINGSPARENT/>} />
      <Route path="/19-dashboard-parentmode-forgot-password-2" element={<DASHBOARDParentModeForgotP/>} />
    </Routes>
  );
}
export default App;
