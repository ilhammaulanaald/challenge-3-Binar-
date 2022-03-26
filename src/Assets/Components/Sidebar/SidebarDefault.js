import React from 'react'
import { Image, Nav } from 'react-bootstrap'
import "../Sidebar/SidebarDefault.css"
import img1 from '../Sidebar/Group2.png'
import img2 from '../Sidebar/fi_truck.png'

export const SidebarDefault = () => {
  return (
<div className='Sidebar'>
        <div>
            <div className='logoside'></div>
        </div>
    <nav className="me-auto">
    <Nav.Link href="#home"></Nav.Link>
        <div style={{marginBottom:'20px'}}>
        <Image src={img1} alt='dashboard' style={{paddingLeft:'23px'}}/>
        <Nav.Link href="/listcar"><h6>Dash</h6></Nav.Link>
        </div>
    
    <div>
        <Image src={img2} alt='dashboard' style={{paddingLeft:'23px'}}/>
        <Nav.Link href="/dashboard"><h6>Cars</h6></Nav.Link>
    </div>
    </nav>
</div>
  )
}
