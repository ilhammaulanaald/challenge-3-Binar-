import React from 'react'
import { Route, Routes } from 'react-router'
import { FooterDefault } from '../Assets/Components/Footer/FooterDefault'
import { NavbarDefault } from '../Assets/Components/Navbar/NavbarDefault'
import { SidebarDefault } from '../Assets/Components/Sidebar/SidebarDefault'
import { SidebarDefault2 } from '../Assets/Components/Sidebar2/SidebarDefault2'
import { SidebarDefault3 } from '../Assets/Components/Sidebar2/SidebarDefault3'
import { Dashboard } from '../pages/Dashboard'
import { ListCar } from '../pages/ListCar'
import { NewCar } from '../pages/NewCar'
import { SignIn } from '../pages/SignIn'
// import { FooterDefault } from '../Assets/Components/Footer/FooterDefault';
// import { NavbarDefault } from '../Assets/Components/Navbar/NavbarDefault';
// import { SidebarDefault } from '../Assets/Components/Sidebar/SidebarDefault';
// import { SidebarDefault2 } from '../Assets/Components/Sidebar2/SidebarDefault2';
export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/login" element={<SignIn/>} />
        
        <Route path="/dashboard" element={
<>
<SidebarDefault2 />
            <SidebarDefault />
            <NavbarDefault />
           
<Dashboard/>
            <FooterDefault />

</>

        } />
        <Route path="/newcar" element={<>
<SidebarDefault2 />
            <SidebarDefault />
            <NavbarDefault />
           
<NewCar/>
            <FooterDefault />

</>

        } />
        <Route path="/listcar" element={<>
<SidebarDefault3 />
            <SidebarDefault />
            <NavbarDefault />
           
<ListCar/>
            <FooterDefault />

</>

        } />
    </Routes>
  )
}
