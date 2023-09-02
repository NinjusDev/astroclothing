import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import TermsCondictions from './components/Login/TyC';
import { ProductList } from './components/ProductList';
function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
		<Router>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			
			<Routes>
				<Route path='/' element={ <Home
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts} />
				} />

				<Route path='/products' element= {
					<ProductList
					allProducts={allProducts}
					setAllProducts={setAllProducts}
					total={total}
					setTotal={setTotal}
					countProducts={countProducts}
					setCountProducts={setCountProducts} />
				} />

				<Route path='/contact' element={ <Contact /> } />
				<Route path='/terms' element={ <TermsCondictions /> } />
			</Routes>
		</Router>
		</>
	);
}

export default App;
