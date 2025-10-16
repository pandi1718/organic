import React from 'react'
import Home from './Home'
import Move from './Move'
import Cope from './Cope'
import Tspe from './Tspe'
import Policy from './Policy'
import Scroll from './Scroll'
import Ssp from './Ssp'
import Topselling from './Topselling'
import Fresh from './Fresh'
import Recipes from './Recipes'
import Community from './Community'
import Movee from './Movee'
import Ratting from './Ratting'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'



const Ready = () => {
  return (
      <div 
      style={{
      height: "fit-content",  
      width:'100%',       
      display: "flex", 
      flexDirection:'column',
      alignItems: "center",     
      backgroundColor: "#F5F5F5"  
    }}
  >
        <Navbar />
        <Home />
        <Move />
        <Cope />
        <Tspe />
        <Policy />
        <Scroll />
        <Ssp />
        <Topselling />
        <Fresh />
        <Recipes />
        <Community />
        <Ratting />
        <Movee />
        <Fotter />
        

    </div>
  )
}

export default Ready