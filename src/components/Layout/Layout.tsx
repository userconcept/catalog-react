import { Outlet } from 'react-router-dom';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
