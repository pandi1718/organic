import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();
  const [like,setLike]=useState({})
  const [plus,setPlus]=useState({})

  const toggleLike=(index)=>{
    setLike((prev)=>({
      ...prev,[index]:!prev[index]
    }))
  }

  const toggleplus=(index)=>{
    setPlus((prev)=>({
      ...prev,[index]:!prev[index]
    }))
  }

   const allow=[
    
    {
    category:"Vegetables",
    name:"Green Peans",
    price:"250",
    img:"/images/fresh arrived/9f63e2fdebbf0e5c6ef5ff27136b30031800554a.png",
  },

    {
    category:"Fruits",
    name:"Pineapple",
    price:"250 / per pis",
    img:"/images/fresh arrived/416aa7c26e5c40657ec969d850ff246afcd4510e.png",
  },

    {
    category:"Vegetables",
    name:"Tender Coconut",
    price:"250 / per pis",
    img:"/images/fresh arrived/48feb49a1324d18d163adb000f2afe447bba09d7.png",
  },

    {
    category:"Vegetables",
    name:"Cauliflower",
    price:"250 / per kg",
    img:"/images/fresh arrived/b28bd5d9c17c91d963102fd4db47f8cce1189cdb.png",
  },

   ]

   const alloww=[
    
    {
    category:"Vegetables",
    name:"Nava",
    price:"250 / per kg",
    img:"/images/favorite/products/nava.png",
  },

    {
    category:"Fruits",
    name:"guva",
    price:"250 / per kg",
    img:"/images/favorite/products/guva.png",
  },

    {
    category:"Vegetables",
    name:"Jack fruite",
    price:"250 / per pis",
    img:"/images/favorite/products/jackfruite.png",
  },

    {
    category:"Nuts",
    name:"Casnew nut",
    price:"250 / per kg",
    img:"/images/favorite/products/munthiri.png",
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
        <div style={{ display: "block", justifyContent: "space-between" }}>
          

          <h1 style={{ color: "#00210C" }}>Favorite Products</h1>
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
          overflowY:'auto'
        }}
      >
        {/* Add your content here */}
        <div style={{display:'block'}}>
        {/* first row  */}

        <div 
          style={{
            display: "flex",
            gap: "2rem",
            marginLeft:'50px'
          }}>
          {
            allow.map((allow,index)=>(
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
                height:'230px',
                width:'50px',
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
              }}>
                <h3 style={{
                 fontSize: "1rem",
                  margin: "5px 0" 
                  }}>{allow.category}</h3>

                <div 
                style={{
                  backgroundColor: "#E0E9E1",
                  width: "149px",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px',
                  overflow:'hidden'
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
                      src={like [`row1-${index}`] ?  "/images/favorite/products/redheart.png" : "/images/favorite/products/whiteheart.png"}  alt=""
                      />
                  
                  </div>

                  <img style={{ 
                    width: "70%", 
                    height: "auto",overflow:'hidden' }} src={allow.img} alt={allow.name} />
                </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                  <div>
                    <h4 style={{
                     margin: "0 0 5px 0", 
                     fontSize: "0.9rem" }}>{allow.price}</h4>

                    <p style={{ 
                    margin: 0, 
                    fontSize: "0.8rem" 
                    }}>{allow.name}</p>
                  </div>

                  {/* button  */}

                  <button 
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10%",
                    width: "30px",
                    height: "30px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={()=>toggleplus(`row1-${index}`)}
                  >
                    <img src={plus[`row1-${index}`] ? 
                    "/images/favorite/products/tick.png" :
                    "/images/favorite/products/plush.png"
                  } alt="button" 
                  style={{width:'100%',height:'60%',objectFit:'cover'}}
                  />
                  </button>
                  </div>
              </div>
            ))
          }
        </div>

          {/* second row  */}
    <div 
          style={{
            display: "flex",
            gap: "2rem",
            marginTop:'20px',
            marginLeft:'50px'
          }}>
          {
            alloww.map((alloww,index)=>(
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
                height:'230px',
                width:'50px',
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
              }}>
                <h3 style={{
                 fontSize: "1rem",
                  margin: "5px 0" 
                  }}>{alloww.category}</h3>

                <div 
                style={{
                  backgroundColor: "#E0E9E1",
                  width: "149px",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px',
                  overflow:'hidden'
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
                onClick={() => toggleLike(`row2-${index}`)}                  >

                    <img style={{ 
                      width: "50%", 
                      height: "50%",overflow:'hidden',cursor:'pointer'}}
                      src={like[`row2-${index}`] ?  
                      "/images/favorite/products/redheart.png"
                       : 
                      "/images/favorite/products/whiteheart.png"}  alt="heart"
                      />
                  
                  </div>

                  <img style={{ 
                    width: "70%", 
                    height: "auto",overflow:'hidden' }} src={alloww.img} alt={alloww.name} />
                </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                  <div>
                    <h4 style={{
                     margin: "0 0 5px 0", 
                     fontSize: "0.9rem" }}>{alloww.price}</h4>

                    <p style={{ 
                    margin: 0, 
                    fontSize: "0.8rem" 
                    }}>{alloww.name}</p>
                  </div>

                  {/* button  */}

                  <button 
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10%",
                    width: "30px",
                    height: "30px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={()=>toggleplus(`row2-${index}`)}
                  >
                    <img src={plus[`row2-${index}`]  ? 
                    "/images/favorite/products/tick.png" :
                    "/images/favorite/products/plush.png"} 
                  style={{width:'100%',height:'60%',objectFit:'cover'}} 
                    alt="tick" 
                    />
                  </button>
                  </div>
              </div>
            ))
          }
        </div>

                {/* third row  */}

        <div 
          style={{
            display: "flex",
            gap: "2rem",
            marginLeft:'50px',
            marginTop:'50px'
          }}>
          {
            allow.map((allow,index)=>(
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
                height:'230px',
                width:'50px',
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
              }}>
                <h3 style={{
                 fontSize: "1rem",
                  margin: "5px 0" 
                  }}>{allow.category}</h3>

                <div 
                style={{
                  backgroundColor: "#E0E9E1",
                  width: "149px",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px',
                  overflow:'hidden'
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
                      src={like[`row3-${index}`] ?  "/images/favorite/products/redheart.png" 
                      : "/images/favorite/products/whiteheart.png"}  alt="heart"
                      />
                  
                  </div>

                  <img style={{ 
                    width: "70%", 
                    height: "auto",overflow:'hidden' }} src={allow.img} alt={allow.name} />
                </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                  <div>
                    <h4 style={{
                     margin: "0 0 5px 0", 
                     fontSize: "0.9rem" }}>{allow.price}</h4>

                    <p style={{ 
                    margin: 0, 
                    fontSize: "0.8rem" 
                    }}>{allow.name}</p>
                  </div>

                  {/* button  */}

                  <button 
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10%",
                    width: "30px",
                    height: "30px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }} 
                   onClick={()=>toggleplus(`row3-${index}`)}
                  >
                    <img src={plus[`row3-${index}`]  ? 
                    "/images/favorite/products/tick.png" :
                    "/images/favorite/products/plush.png"} 
                  style={{width:'100%',height:'60%',objectFit:'cover'}} 
                    alt="tick" 
                    />
                  </button>
                  </div>
              </div>
            ))
          }
        </div>

        </div>
      </div>
    </div>
  );
};

export default Favorite;
