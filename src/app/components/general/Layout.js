import React from 'react';
import Navigation from './Navigation';

const Layout = ({children}) => {
    return (
        <>
            {/* <Header /> */}
            <Navigation />
            {children}
            {/* <Footer /> */}
        </>
    );
}
 
export default Layout;