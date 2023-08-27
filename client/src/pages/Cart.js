import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className="p-2" onClick={handleCartClick}>
            <span style={{ fontSize: '30px' }}>
                <CiShoppingCart className='hover:cursor-pointer'/>
            </span>
        </div>
    );
};

export default Cart;
