import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
           <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor:"rgb(230, 230, 182)"}}>
               <div>
                   <a href= " " className='navbar-brand' style={{color:"darkgreen" , marginLeft:"10px"}}>
                       Farm Management System
                    </a>
                    <a href= "/crops" className='navbar-brand' style = {{marginLeft:"10px"}}>
                       Crops
                    </a>
                    <a href= "/equipments" className='navbar-brand'>
                       Equipments
                    </a> 
              
               </div>

           </nav>
        </header>
    </div>
  )
}

export default HeaderComponent