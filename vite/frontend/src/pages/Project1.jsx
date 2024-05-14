import { Helmet } from "react-helmet";
import { Returnp } from "../components";

import {git} from "../assets/icons";

//have photos and explanations of what ive done

const P1 = () => {
    return (
        <>
            <Helmet>
            <title>Jason Chen | Mechanical Keyboard </title>
            </Helmet> 

            <section className="max-container">

                <h1 className="flex justify-between">
                    <div className="head-text"> 
                        My Mechanical Keyboard!
                    </div> 
                    <div className="flex justify-end items-center">
                        <Returnp />
                    </div>
                </h1>
                <body>
                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    Introducing my cutting-edge mechanical keyboard, an ongoing project built from complete scratch! From the switches and keycaps to the PCB board and drivers. It's designed for the ultimate typing experience. With linear switches, RGB lighting, and a X ms delay, it combines style and functionality.
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

export default P1;

