import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className={"flex items-center justify-center w-full h-full"}>
            <ScaleLoader color={"#39A9F4"} />
        </div>
    );
};

export default Loader;
