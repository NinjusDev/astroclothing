/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { data } from '../data';
import Filter from './Filters';
import { filterProductsByCategory } from './filterProducts';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [category, setCategory] = useState(''); // Estado para la categoría seleccionada

  useEffect(() => {
    // Cargar el carrito desde localStorage cuando se monta el componente
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setAllProducts(JSON.parse(savedCart));
    }
  }, [setAllProducts]);

  // Filtra los productos por categoría antes de mostrarlos
  const filteredProducts = filterProductsByCategory(data, category);

  const onAddProduct = (product) => {
    // Busca si el producto ya existe en allProducts
    const existingProduct = allProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya existe, actualiza su cantidad
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setAllProducts(updatedProducts);
    } else {
      // Si el producto no existe, agrégalo a la lista
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }

    // Actualiza el contador de productos y el total
    setCountProducts(countProducts + 1);
    setTotal(total + product.price);

    // Almacena el carrito en localStorage después de actualizarlo
    localStorage.setItem('cart', JSON.stringify(allProducts));
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <Filter onCategoryChange={handleCategoryChange} />
      <div className='container-items'>
        {filteredProducts.map((product) => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className='info-product'>
              <h2>{product.nameProduct}</h2>
              <p className='price'>${product.price}</p>
              <p className='monthly-payment'></p>
              <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};