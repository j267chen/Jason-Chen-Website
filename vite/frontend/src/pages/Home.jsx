import { useState,} from "react";
import { Helmet } from "react-helmet";

// components
import { HomeInfo } from "../components";

// models

// constants
import { SITE_NAME } from "../constants";

// home
const Home = () => {
  const [currentStage] = useState(1);
  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Portfolio</title>
      </Helmet>

        {/* current stage */}
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {<HomeInfo currentStage={currentStage} />}
        </div>

    </>
  );
};

export default Home;
