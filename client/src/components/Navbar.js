import React from 'react';

const Navbar = () => {
    return ( 
        <div className="
            flex 
            justify-between 
            items-center 
            p-4"
        >
            <div className="
                text-lg 
                font-semibold 
                hover:text-blue-500 
                transition" 
                    onClick={() => console.log('Logo clicked!')} 
                >
                Logo here 
            </div>
            <div className="
                text-lg 
                font-semibold 
                hover:text-blue-500 
                transition" 
                    onClick={() => console.log('Middle button clicked!')} 
                >
                Switch up
            </div>
            <div className="
                text-lg 
                font-semibold hover:text-blue-500 
                transition" 
                    onClick={() => console.log('Login clicked!')} 
                >
                Login/Sign up
            </div>
        </div>
     );
}
 
export default Navbar;
