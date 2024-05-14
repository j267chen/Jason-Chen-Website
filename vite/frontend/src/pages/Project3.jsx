import { Helmet } from "react-helmet";
import { Returnp } from "../components";

import {git} from "../assets/icons";

//have a general description at the top
//have photos and explanations of what ive done

const P3 = () => {
    return (
        <>
            <Helmet>
            <title>Jason Chen | Model Rocket </title>
            </Helmet> 

            <section className="max-container">

                <h1 className="flex justify-between">
                    <div className="head-text"> 
                        My Model Rocket!
                    </div> 
                    <div className="flex justify-end items-center">
                        <Returnp />
                    </div>
                </h1>
                <body>
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        Embark on a journey into the sky with my Model Rocket project! Satisfy the love and get a glimpse of the aerospace industry. Thoroughly applied design optimization, finite element analysis, and computational fluid dynamic simulations.
                    </div>
                </body>
                <text1>                  
                    <img 
                        className = "py-10 w-1/2 h-1/2 object-contain"
                        src = {git}
                        title = "..."
                    />
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        INSERT IMAGE DISCRIPTION #1
                    </div>
                </text1>
                <text2>                  
                    <img 
                        className = "py-10 w-1/2 h-1/2 object-contain"
                        src = {git}
                        title = "..."
                    />
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        INSERT IMAGE DISCRIPTION #2
                    </div>
                </text2>
            </section>
        </>
    );
};

export default P3;

