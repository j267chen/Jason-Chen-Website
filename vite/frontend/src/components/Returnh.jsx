import { Link } from "react-router-dom";
import { close } from "../assets/icons";

const Returnh = () => {
    return (
        <Link to = "/home" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <img src={close} alt="Close" width={20} height={20} style={{ fill: "grey" }}/>
        </Link>
    );
};

export default Returnh;
