import React, { useState, useEffect } from 'react';

import { currency, getProducts, Product } from './products';
// @ts-ignore
import { addToCart, useLoggedIn } from 'cart/cart';

const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className='my-10 grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className='flex'>
            <div className='flex-grow font-bold'>
              <a>{product.name}</a>
            </div>
            <div className='flex-end'> {currency.format(product.price)}</div>
          </div>
          <div className='text-sm mt-4 font-bold'> {product.description}</div>
          {loggedIn && (
            <div className='text-right mt-2'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded'
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}>
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
