import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Farmers = () => {
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
    star:"/images/favorite/farmers/yellowstar.png"
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
    <div 
      style={{
        margin: "0 auto",
        background: "#eaeaeaff",
        boxShadow: "inset 5px 5px 5px #ababab",
        minHeight: "90vh",
        padding: "10px",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        gap: "20px",

      }}
    >
      {/* Row with 2 boxes */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* Left Sidebar */}
        <div
          style={{
            background: "#E0E9E1",
            width: "300px",
            borderRadius: "12px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "150px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              textAlign: "center",
            }}
          >
            <li
              style={{
                padding: "12px",
                background: "#B9E9BB",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "500",
                marginTop: "5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5FA864";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#B9E9BB";
                e.target.style.color = "#000";
              }}
              onClick={() => navigate("/favorite")}
            >
              Products
            </li>

            <li
              style={{
                padding: "12px",
                background: "#B9E9BB",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "500",
                marginTop: "5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5FA864";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#B9E9BB";
                e.target.style.color = "#000";
              }}
              onClick={() => navigate("/farmers")}
            >
              Farmers
            </li>
          </ul>
        </div>

        {/* Right Profile Section */}
        <div
          style={{
            background: "#E0E9E1",
            width: "530px",
            borderRadius: "15px",
            padding: "25px",
            height: "150px",
          }}
        >
          <h1 style={{ color: "#00210C" }}>Farmers Products</h1>
          <p style={{ color: "#00210C" }}>
            "Handpicked essentials, saved for your next order."
          </p>
                    <button
          onClick={() => navigate("/ready")}
          style={{
            borderRadius: "20px",
            padding: "10px 20px",
            color: "#fff",
            background: "#E0E9E1",
            border: "none",
            cursor: "pointer",
            position:'relative',
            bottom:'100px',
            left:'400px'
          }}
        >
          <img
            src="/images/profile/icons8-macos-close-30.png"
            alt="close"
            style={{ width: "28px", height: "28px", cursor: "pointer" }}
            
         />
         </button>
        </div>
      </div>

      {/* Bottom Big Box */}
      <div
        style={{
          background: "#E0E9E1",
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
                style={{width:'40%',height:'80%',position:'relative',top:'3px',left:'3px'}}/>

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
    </div>
  );
};

export default Farmers;
