/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { data } from '../../data';
import './Home.css';

export const Home = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...products]);
    } else {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }

    // Almacena el carrito en localStorage después de actualizarlo
    localStorage.setItem('cart', JSON.stringify(allProducts));
  };

  useEffect(() => {
    // Cuando el componente se monta, verifica si hay un carrito en el almacenamiento local
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setAllProducts(JSON.parse(savedCart));
    }
  }, [setAllProducts]);

  useEffect(() => {
    // Use useEffect para almacenar el carrito en localStorage cada vez que cambie
    localStorage.setItem('cart', JSON.stringify(allProducts));
  }, [allProducts]);

  return (
    <>
      <div className='hero'>
        <h1>
          Welcome to <span className='titlecolor'>Astro Clothing</span>, your
          go-to destination for urban clothing and streetwear!
        </h1>
      </div>

      <div className='container-items'>
        {data.map((product) => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className='info-product'>
              <h2>{product.nameProduct}</h2>
              <p className='price'>${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
