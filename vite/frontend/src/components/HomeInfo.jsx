import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

//text-sm lg:text-lg
//render content based on current user cursor location
const renderContent = {
  1: (
    <div>
      <h1 className="text-xl lg:text-2xl sm:leading-snug text-center neo-brutalism-blue lg:py-5 px-10 text-white"> 
        <span className="font-semibold">Welcome to Jason Chen's Portfolio! </span>
        <br/><span className="text-sm lg:test-xl">It is currently incomplete, but check out my about and projects sections! </span>
      </h1>
    </div>
  )
};

// home info
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

//can change the home info code to just load a singular stage. --> no current stage element


export default HomeInfo;
