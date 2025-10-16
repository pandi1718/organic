import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import { useNavigate } from 'react-router-dom';
import Tspe from './Tspe';
import Topselling from './Topselling';
import Movee from './Movee';
import Fotter from '../components/Fotter';

const Farmer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getButtonStyle = (isHovered) => ({
    padding: '10px 20px',
    borderRadius: '20px',
    border: '1px solid #5FA864',
    backgroundColor: isHovered ? '#5FA864' : '#B9E9BB',
    color: isHovered ? '#fff' : '#000',
    cursor: 'pointer',
    transition: '0.3s',
    textDecoration: 'none',
  });

  const categories = [
    { name: "Tirupur", path: "/nest" ,img:"/images/back/map.png"},
    { name: "Coimbatore", path: "/nest",img:"/images/back/map.png" },
    { name: "Trichy", path: "/nest" ,img:"/images/back/map.png"},
    { name: "Tirunelveli", path: "/nest",img:"/images/back/map.png" },
  ];


    const navigate = useNavigate();

    const [like,setLike]=useState({})

    const toggleLike=(index)=>{
      setLike((prev)=>({
        ...prev,[index]:!prev[index]
      }))
    }
  

   const allow=[
    
    {
    name:"Reshma",
    subname:"Reshma's Farming",
    place:"Coimbatore - Tamilnadu",
    img:"/images/favorite/farmers/men1.png",
    star:"/images/favorite/farmers/yellowstar.png",    
  },

    {
    name:"Kumar",
    subname:"AgriWave",
    place:"Tirunelveli - Tamilnadu",
    img:"/images/favorite/farmers/women1.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

    {
    name:"Lakshmi",
    subname:"OrganicHub",
    place:"Tirupur - Tamil Nadu",
    img:"/images/favorite/farmers/men2.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

    {
    name:"Meena",
    subname:"EcoBloom Farming",
    place:"Dindigul - Tamil Nadu",
    img:"/images/favorite/farmers/women2.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

   ]

   const alloww=[
    
    {
    name:"Reshma",
    subname:"Reshma's Farming",
    place:"Coimbatore - Tamilnadu",
    img:"/images/favorite/farmers/women3.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

    {
    name:"Kumar",
    subname:"AgriWave",
    place:"Tirunelveli - Tamilnadu",
    img:"/images/favorite/farmers/men3.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

    {
    name:"Lakshmi",
    subname:"OrganicHub",
    place:"Tirupur - Tamil Nadu",
    img:"/images/favorite/farmers/men5.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

    {
    name:"Meena",
    subname:"EcoBloom Farming",
    place:"Dindigul - Tamil Nadu",
    img:"/images/favorite/farmers/men4.png",
    star:"/images/favorite/farmers/yellowstar.png"
  },

   ]


  return (
    <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Categories Header */}
      <div
        style={{
          marginTop: '100px',
          padding: '20px 40px',
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <h1 style={{ fontWeight: 'bold', margin: 0 }}>Farmers</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              borderRadius: '15px',
              border: '1px solid #5FA864',
              height: '40px',
              textAlign: 'center',
              padding: '0 10px',
            }}
          />
        </div>
      </div>

      {/* Buttons Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          padding: '20px',
          flexWrap: 'nowrap',
          overflowX: 'hidden',
        }}
      >
        <h1 style={{fontSize:'1rem',margin:0,fontWeight:'normal'}}>Based on Locations </h1>
        {categories.map((item, index) => (
          <Link
            key={index}
            style={getButtonStyle(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{display:'flex'}}> 
          <img src={item.img} alt="map" style={{marginRight:'5px'}}/>
          <span>{item.name}</span>
            </div>
           
          </Link>
        ))}
      </div>
        
        
      {/* Bottom Big Box */}
      <div
        style={{
          background: "#ffffffff",
          width: "850px",
          borderRadius: "12px",
          padding: "15px",
          height: "400px",
          display: "flex",
          overflowX:'hidden',
          overflowY:'auto',
        }}
      >
        {/* Add your content here */}
        <div style={{display:'block'}}>
          {/* first row  */}

        <div style={{
          width:'50px',
          height:'200px',
        }}>
        <div style={{display:'flex',gap:'2rem',marginLeft:'50px'}}>
          {allow.map((allow,index)=>(
            <div key={index}
            style={{              
                backgroundColor: "#5FA864",
                borderRadius: "12px",
                flex: "0 0 150px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                boxSizing: "border-box",
                color: "#fff",
                border:'none',
                height:'150px',
                width:'50px',
            }}
            >
              <div 
                style={{
                  width: "149px",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px',
                }}>
                
                  <div 
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    backgroundColor: "#5FA864",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={()=>toggleLike(`row1-${index}`)}
                  >

                    <img style={{ 
                      width: "50%", 
                      height: "50%",overflow:'hidden',cursor:'pointer'}}
                      src={like[`row1-${index}`] ? 
                        "/images/favorite/products/redheart.png"
                         : "/images/favorite/products/whiteheart.png"}
                        alt="heart"                       
                      />
            <h1 style={{fontSize:'1rem',
                    position: "absolute",
                    top: "500%",
                    right: "300%",}}>{allow.name}</h1>

              <div style={{background:"#fff",
                    width:'40px',
                    height:'20px',
                    position: "absolute",
                    top: "500%",
                    right: "10%",
                    borderRadius:'10px',
                    boxShadow:'0px 0px 10px 3px #000'
              }}>
                <div style={{display:'flex'}}>
                  
                <img src={allow.star} alt="star" 
                style={{width:'40%',height:'80%',position:'relative',top:'3px',left:'3px',cursor:'pointer'}}
                 
                />

                <p style={{fontSize:'.6rem',
                  color:'#000',
                  fontWeight:'bold',
                  position:'relative',
                  top:'3px',
                  left:'5px'
                  }}>4.5</p>

                  {/* bottom h-tag and p-tag container */}
    
        </div>
              </div>
      </div>
            <Link to="/nest">
            <img style={{ 
                    width: "180px", 
                    height: "auto",
                    overflow:'hidden',
                    marginTop:'-10px',
                  cursor:'pointer'
                }} src={allow.img} alt={allow.name} 
                  
                   />
            </Link>
       
              </div>              
         <div style={{ width: "100%", textAlign: "center",marginTop:'10px' }}>
            <h2
              style={{
                fontSize: "0.9rem",
                margin: "2px 0",
                color: "#000",
              }}
            >
              {allow.subname}
            </h2>
            <p
              style={{
                fontSize: "0.7rem",
                margin: 0,
                color: "#333",
              }}
            >
              {allow.place}
            </p>
          </div>

            </div>
            
          ))}

        </div>
        </div>
        {/* second row  */}
        
        <div style={{
          width:'50px',
          height:'200px',
        }}>

        <div style={{display:'flex',gap:'2rem',marginLeft:'50px',marginTop:'50px'}}>
         
         
          {alloww.map((alloww,index)=>(
            <div key={index}
            style={{              
                backgroundColor: "#5FA864",
                borderRadius: "12px",
                flex: "0 0 150px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                boxSizing: "border-box",
                color: "#fff",
                border:'none',
                height:'150px',
                width:'50px',
            }}
            >
              <div 
                style={{
                  width: "149px",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px',
                }}>
                
                  <div 
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    backgroundColor: "#5FA864",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={()=>toggleLike(`row2-${index}`)}
                  >

                    <img style={{ 
                      width: "50%", 
                      height: "50%",overflow:'hidden',cursor:'pointer'}}
                      
                    src={like [`row2-${index}`] ?  "/images/favorite/products/redheart.png" : "/images/favorite/products/whiteheart.png"}  alt=""
                      />
            <h1 style={{fontSize:'1rem',
                    position: "absolute",
                    top: "500%",
                    right: "300%",}}>{alloww.name}</h1>

              <div style={{background:"#fff",
                    width:'40px',
                    height:'20px',
                    position: "absolute",
                    top: "500%",
                    right: "10%",
                    borderRadius:'10px',
                    boxShadow:'0px 0px 10px 3px #000'
              }}>
                <div style={{display:'flex'}}>
                  
                <img src={alloww.star} alt="star" 
                style={{width:'40%',height:'80%',position:'relative',top:'3px',left:'3px'}}/>

                <p style={{fontSize:'.6rem',
                  color:'#000',
                  fontWeight:'bold',
                  position:'relative',
                  top:'3px',
                  left:'5px'
                  }}>4.5</p>
                </div>
              </div>
      </div>
              <img style={{ 
                    width: "180px", 
                    height: "auto",
                    overflow:'hidden',
                    marginTop:'-10px' }} src={alloww.img} alt={alloww.name} />
       
              </div>
             <div style={{ width: "100%", textAlign: "center",marginTop:'10px' }}>
            <h2
              style={{
                fontSize: "0.9rem",
                margin: "2px 0",
                color: "#000",
              }}
            >
              {alloww.subname}
            </h2>
            <p
              style={{
                fontSize: "0.7rem",
                margin: 0,
                color: "#333",
              }}
            >
              {alloww.place}
            </p>
          </div>
          </div>
          ))}
          </div>

        </div>
          {/* three row  */}

                  <div style={{
          width:'50px',
          height:'200px',
        }}>


        <div style={{display:'flex',gap:'2rem',marginLeft:'50px',marginTop:'50px'}}>
          {allow.map((allow,index)=>(
            <div key={index}
            style={{              
                backgroundColor: "#5FA864",
                borderRadius: "12px",
                flex: "0 0 150px", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                boxSizing: "border-box",
                color: "#fff",
                border:'none',
                height:'150px',
                width:'50px',
            }}
            >
              <div 
                style={{
                  width: "149px",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px',
                }}>
                
                  <div 
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    backgroundColor: "#5FA864",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={()=>toggleLike(`row3-${index}`)}
                  >

                    <img style={{ 
                      width: "50%", 
                      height: "50%",overflow:'hidden',cursor:'pointer'}}
                      src={like [`row3-${index}`] ?  "/images/favorite/products/redheart.png" : "/images/favorite/products/whiteheart.png"}  alt=""
                      />
            <h1 style={{fontSize:'1rem',
                    position: "absolute",
                    top: "500%",
                    right: "300%",}}>{allow.name}</h1>

              <div style={{background:"#fff",
                    width:'40px',
                    height:'20px',
                    position: "absolute",
                    top: "500%",
                    right: "10%",
                    borderRadius:'10px',
                    boxShadow:'0px 0px 10px 3px #000'
              }}>
                <div style={{display:'flex'}}>
                  
                <img src={allow.star} alt="star" 
                style={{width:'40%',height:'80%',position:'relative',top:'3px',left:'3px'}}/>

                <p style={{fontSize:'.6rem',
                  color:'#000',
                  fontWeight:'bold',
                  position:'relative',
                  top:'3px',
                  left:'5px'
                  }}>4.5</p>
                </div>
              </div>
      </div>
              <img style={{ 
                    width: "180px", 
                    height: "auto",
                    overflow:'hidden',
                    marginTop:'-10px' }} src={allow.img} alt={allow.name} />
       
              </div>

             <div style={{ width: "100%", textAlign: "center",marginTop:'10px' }}>
            <h2
              style={{
                fontSize: "0.9rem",
                margin: "2px 0",
                color: "#000",
              }}
            >
              {allow.subname}
            </h2>
            <p
              style={{
                fontSize: "0.7rem",
                margin: 0,
                color: "#333",
              }}
            >
              {allow.place}
            </p>
          </div>
              


            </div>
          ))}
          </div>

        </div>

        </div>
      </div>

      <span style={{color:'#5FA864',marginTop:'10px',height:'10vh',marginBottom:'-50px'}}>-</span>
          <Topselling />
          <Tspe />
          <Movee />
          <Fotter />
    </div>
  );
};

export default Farmer;
