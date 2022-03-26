import React ,{useEffect, useState} from 'react'
import { BrowserRouter , useParams} from 'react-router-dom';
import { Routers } from '../Routes/Routers';

export const Layout = () => {
 

    return (
      <div>
      
            <BrowserRouter>
              <Routers />
            </BrowserRouter>
     
        
      </div>
    );
  };
  