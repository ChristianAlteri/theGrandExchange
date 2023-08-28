import React from "react";
import testimg from "../../assets/sitelogo.svg";


const productItem = (props) => {
    return (
        <div className="flex flex-col border-2 rounded-sm card">
            <div className="flex flex-row h-1/2">
               <img src={testimg} alt="testimg"  className="w-fit h-fit"/>
            </div>
            <div className="flex flex-row h-1/2">
                <div className="flex flex-col justify-center">
                    <h3>Lorem Ipsum Product Title</h3>
                    {/* <div> size icon props</div> */}
                    <p>price here</p>
                </div>
            </div>
        </div>
    )
}

export default productItem;