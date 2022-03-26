import React from 'react'
import { Image } from 'react-bootstrap'
import img2 from '..//Assets/Image/BGSI.png'

export const LeftSide = () => {
  return (
    <div>
      <Image src={img2} thumbnail style={{border:"none", width:'100%', height:'4375%', marginTop:'-10px', marginLeft:'-5px'}} /> 
    </div>
  )
}

