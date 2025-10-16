import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Tspe from './Tspe'
import Recipes from './Recipes'
import Movee from './Movee'
import Fotter from '../components/Fotter'

const About = () => {
    const [count,setCount]=useState(0)
    const[star,setStar]=useState({})

    const toggleStar =(index)=>{
        setStar((prev)=>({
            ...prev,[index] : !prev[index]
        }))
    }

    const aboutproduct =[
        {fname:"Dairy",name:"Fresh Cow Milk",sub:"Ramesh Dairy Farm, Madurai",price:"$56",quantity:"/ per liter",
           mainimage:"/images/About/milk.png", empty:"/images/About/emptystar.png",half:"/images/About/halfstar.png",full:"/images/About/fullstar.png",percen:"4.5 / 5"
        }
    ]
  return (
  <div style={{ 
      marginTop: '80px',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center' 
    }}>
      {/* Fixed Navbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Page Title */}
      <h1 style={{ fontWeight: 'normal', margin: '20px', marginLeft:'-350px'}}>About Product</h1>

      {/* Product Info */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Image  */}
        {aboutproduct.map((product, index) => (
            <div key={index} style={{display:'flex',gap:"50px"}}>
          <div style={{ border: '1px solid #5FA864', padding: '10px', width: '250px',background:'#E0E9E1',borderRadius:'10px'}}>
            <h2 style={{background:'#5FA864',color:"#F5F5F5",borderRadius:"10px",width:'70px',fontSize:"1rem",padding:"7px"}}>{product.fname}</h2>
            <img src={product.mainimage} alt="milk logo" 
            style={{width:'100%'}}
            />
          </div>

          <div style={{display:"block"}}>
            <div style={{display:'flex'}}>
            <h2 style={{fontWeight:"bold",color:"#00210C",marginTop:'15px'}}>{product.name}</h2>
            </div>
            <div style={{display:'flex'}}>
            <span>{product.sub}</span>
            </div>
            <div style={{gap:'10px',display:'flex',marginTop:'15px'}}>
                <button style={{background:'#E0E9E1',
                    border:'1px solid #E0E9E1',
                    width:"30px",borderRadius:'5px'
                }} onClick={()=>{
                    if(count >0)
                        setCount(count -1)
                }}>-</button>
                <span>{count}</span>
                <button style={{background:'#E0E9E1',
                    border:'1px solid #E0E9E1',
                    width:"30px",borderRadius:'5px'
                }} onClick={()=>setCount(count + 1)}>+</button>
           <strong>{product.price}</strong>
           <span>{product.quantity}</span>
            </div>
            
            <div style={{cursor:'pointer',display:'flex',marginTop:'15px'}}>
                
                {/* one  */}
                <img src={star[`row1-${index}`] ?
                "/images/About/fullstar.png" : "/images/About/emptystar.png"} alt="star" 
                onClick={()=>toggleStar(`row1-${index}`)}
                />

                {/* two  */}
                <img src={star[`row1-${index}`] ?
                "/images/About/fullstar.png" : "/images/About/emptystar.png"} alt="star" 
                onClick={()=>toggleStar(`row1-${index}`)}
                />

                {/* three  */}
                <img src={star[`row1-${index}`] ?
                "/images/About/fullstar.png" : "/images/About/emptystar.png"} alt="star" 
                onClick={()=>toggleStar(`row1-${index}`)}
                />

                {/* four  */}
                <img src={star[`row1-${index}`] ?
                "/images/About/fullstar.png" : "/images/About/emptystar.png"} alt="star" 
                onClick={()=>toggleStar(`row1-${index}`)}
                />

                {/* five  */}
                <img src={star[`row1-${index}`] ?
                "/images/About/fullstar.png" : "/images/About/emptystar.png"} alt="star" 
                onClick={()=>toggleStar(`row1-${index}`)}
                />

                <span style={{marginLeft:'10px'}}>{product.percen}</span>
            </div>

            <div style={{gap:'20px',display:'flex',marginTop:'20px'}}>
                <button style={{
                    background:'#5FA864',color:'#FDFDFD',boxShadow:'1px 1px 2px #000',border:'1px solid #5FA864',padding:'7px',borderRadius:'8px',width:'150px'
                }}>ADD CART</button>

                <button style={{background:'#5FA864',color:'#FDFDFD',boxShadow:'1px 1px 2px #000',border:'1px solid #5FA864',padding:'7px',borderRadius:'8px',width:'150px'}}>
                    BUY NOW</button>
            </div>

          </div>

          
          </div>
        ))}
      </div>

      <div style={{marginTop:'20px'}}>
        <span style={{color:'#00210C'}}>Order now & get it delivered on: 03 Sept 2025 (Tomorrow Morning)</span>
      </div>
      <p style={{width:'100vw'}}>-</p>

      {/* description  */}
      <div style={{display:'block',background:'#E0E9E1',padding:'20px',margin:'20px',borderRadius:'10px',}}>
        <h2 style={{display:'flex',fontSize:'normal',marginBottom:'10px'}}>Description</h2>
        <span style={{display:'flex',textAlign:'start'}}>Pure, fresh, and unprocessed cow milk directly sourced from local farms. Thick, creamy, and rich in nutrients – no preservatives added.</span>
      </div>

      <Tspe />
      <Recipes />
      <Movee />
      <Fotter />
    </div>
  )
}

export default About