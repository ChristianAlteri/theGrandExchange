import React from 'react';
import ProductItem from '../components/ProductItem/ProductItem';

const Test = () => {
    return (
        <div className=''>
            <h2 className='text-lg text-blue'>Test Your Components Here</h2>
            <button className='btn-style'>Test Button</button>
            <div>
                < ProductItem />
            </div>
        </div>
    );
};

export default Test;