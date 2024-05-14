import { Helmet } from "react-helmet";
import { Returnp } from "../components";

import {git} from "../assets/icons";

//have a general description at the top
//have photos and explanations of what ive done

const P4 = () => {
    return (
        <>
            <Helmet>
            <title>Jason Chen | Water Blaster </title>
            </Helmet> 

            <section className="max-container">

                <h1 className="flex justify-between">
                    <div className="head-text"> 
                        My Water Blaster!
                    </div> 
                    <div className="flex justify-end items-center">
                        <Returnp />
                    </div>
                </h1>
                <body>
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        Unleash your inner superhero with my team’s Water Blaster! Mechanically prototyped, 3D printed, and activated by water-pumped propulsion to reach a distance of 6 meters.
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

export default P4;

