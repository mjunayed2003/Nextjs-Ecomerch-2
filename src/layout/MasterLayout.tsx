import React from 'react'
import { Header } from './Header'
import MainNav from './MainNav'
import BottomNavbar from './BottomNavbar'
import Footer from './Footer'


const MasterLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <MainNav />
            <BottomNavbar />
            <div>{children}</div>
            <Footer />

        </div>
    )
}

export default MasterLayout
