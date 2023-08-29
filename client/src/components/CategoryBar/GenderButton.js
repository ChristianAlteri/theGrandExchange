import { IoManOutline, IoWomanOutline } from "react-icons/io5";

const GenderButton = () => {
    return ( 
        <>
            <div className="hover:cursor-pointer" style={{ fontSize: '30px' }} onClick={() => {console.log("Change to men")}}>
                <IoManOutline />
            </div>
            <div className="hover:cursor-pointer" style={{ fontSize: '30px' }} onClick={() => {console.log("Change to women")}}>
                <IoWomanOutline />
            </div>
        </>
    );
}
 
export default GenderButton;