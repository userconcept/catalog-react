import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.tsx';

import Home from './components/Home/Home.tsx';
import About from './components/About/About.tsx';
import Catalog from './components/Catalog/Catalog.tsx';
import Product from './components/Product/Product.tsx';
import Contact from './components/Contact/Contact.tsx';
import NotFound from './components/NotFound/NotFound.tsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="catalog/:category/:title" element={<Product />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound text="Not found" />} />
            </Route>
        </Routes>
    );
}

export default App;
