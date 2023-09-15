import React from 'react';

const CartImage = ({url,frase}) => {

    return (
        <div className='w-32 md:w-44 lg:w-56'>
            <img className='w-full rounded-md' src={url} alt="img" />
            <p className='font-garamond '>{frase}</p>
        </div>
    );
};

export default CartImage;