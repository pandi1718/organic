import React from 'react'
import { Link } from "react-router-dom";
const Cope = () => {
  const categorey= [
    { name: "Oils", img: "/images/categories/9e434e4c535466932145427e792a48fd5c097a3f.png", path: "/oils" },
    { name: "Fruits", img: "/images/categories/19ac3b49eda7e55b1c5d8f6eec522c1e1d69556a (1).png", path: "/fruits" },
    { name: "Dairy Products", img: "/images/categories/568dbbdf795a349b1683b561de3d33b3c57fe4be.png", path: "/dairy" },
    { name: "Flowers", img: "/images/categories/594f1632382865686ddc964414cc63ba4e297227.png", path: "/flowers" },
    { name: "Vegetables", img: "/images/categories/48143b7d05a9607f87dcb3491df48fe59ff30ac8.png", path: "/vegetables" },
    { name: "Dry Fruits", img: "/images/categories/ad2ebe21fe983ab985c169be69a079b340ab26cb.png", path: "/dry-fruits" },  ];
  return (
    <div style={{
      position:'relative',
      padding:'20px 0',
      width:'80%',
      overflow:'hidden',
      flexWrap:'wrap'
    }}>
      {/* heading  */}
      <h1 style={{
        color:'#00210C',
        textAlign:'center'
        }}>
        Categorey of Products
      </h1>
      <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginTop:'20px',
        animation: "scrollX 10s linear infinite",
      }}>

            {/* maping  */}
      {categorey.map((categorey,index)=>(
        <Link to={categorey.path} key={index} style={{textDecoration:'none'}}>
        <div 
        style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'10px'
        }}>
          {/* box */}
        <div style={{
                  background: "#B9E9BB",
                  width: "150px",
                  height: "120px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",}}>

            <img src={categorey.img} alt=""
            style={{height:'70%',width:'70%',objectFit:'contain'}} />

        </div>
        <p style={{color:'#00210C',textAlign:'center'}}>{categorey.name}</p>

        </div>
        </Link>
      ))}

  </div>
  <style>
    {`
    @keyframes scrollX {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}
`}
  </style>

    </div>
    
  )
}

export default Cope