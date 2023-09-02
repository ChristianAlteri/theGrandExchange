import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
        console.log("cart clicked");
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
