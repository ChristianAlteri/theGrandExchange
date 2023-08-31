import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const CartIcon = () => {

    const handleCartClick = () => {
       <Link to="/cart"/>
    };

    return (
        <div className="p-2" onClick={handleCartClick}>
            <span style={{ fontSize: '30px' }}>
                <CiShoppingCart className='hover:cursor-pointer'/>
            </span>
        </div>
    );
};

export default CartIcon;
