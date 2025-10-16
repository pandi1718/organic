import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate =useNavigate()

    const [hover,setHover]=useState(false)
    const [hovertwo,setHovertwo]=useState(false)

      const [hoveredIndex, setHoveredIndex] = useState(null);
      const [hovered, setHovered] = useState(null);
    
      const getButtonStyle = (hovered) => ({
        padding: '7px 20px',
        borderRadius: '15px',
        border: '1px solid #5FA864',
        backgroundColor: hovered ? '#5FA864' : '#fff',
        color: hovered ? '#fff' : '#000',
        cursor: 'pointer',
        transition: '0.3s',
        textDecoration: 'none',
        marginTop:'10px'
      });

      const getsearchbutton = (hover)=>({
        padding: "5px",
        borderRadius: "5px",
        border: hover ? "1px solid #ccc" : "1px sold #000",
        minWidth: "120px",
        width: hover ? '80px' : "15px",
        cursor:'pointer'
      })


  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          boxShadow: "inset 5px 5px 10px 5px #5FA864",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          height: "12vh",
          position:'fixed',
          top:0,
          left:0,
          zIndex:1000
        }}
      >

        

        {/* Logo */}
        <div style={{ flex: "1 1 auto" }}>
          <img
            src="/images/head/logo.png"
            alt="logo"
            style={{ height: "40px" }}
          />
        </div>

        {/* Menu */}
        <ul
          style={{
            display: "flex",
            flex: "2 1 auto",
            listStyle: "none",
            gap: "30px",
            margin: 0,
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop:'10px'
          }}
        >
          <li>
            <Link to="/ready" 
            style={getButtonStyle(hoveredIndex === 0)}
            onMouseEnter={()=>setHoveredIndex(0)}
            onMouseLeave={()=>setHoveredIndex(null)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link to="/categories" 
            style={getButtonStyle(hoveredIndex === 1)}
            onMouseEnter={()=>setHoveredIndex(1)}
            onMouseLeave={()=>setHoveredIndex(null)}
            >
              Categories
            </Link>
          </li>

          <li>
            <Link to="/farmer" 
            style={getButtonStyle(hoveredIndex === 2)}
            onMouseEnter={()=>setHoveredIndex(2)}
            onMouseLeave={()=>setHoveredIndex(null)}
            >
              Farmers
            </Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              style={getsearchbutton(hovered === 0)}
              onMouseEnter={()=>setHovered(0)}
              onMouseLeave={()=>setHovered(null)}
            />
          </li>
        </ul>

        {/* Icons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flex: "1 1 auto",
            justifyContent: "flex-end",
          }}
        >
          {/* heart icon open to product and farmers  */}
          <img
            src={hover ?  "/images/navbar/greenheart.png" : "/images/navbar/blackheart.png" }
            alt="heart"
            style={{
            width: "25px",
            height: "25px",
            cursor:'pointer'}}
            onClick={()=>navigate("/favorite")}
            
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            
          />
          {/* user icon → open Profile modal */}
         <img
            src={hovertwo ?  "/images/navbar/greenuser.png" : "/images/navbar/blackuser.png"}
            alt="heart"
            style={{
            width: "25px",
            height: "25px",
            cursor:'pointer'}}
            onClick={()=>navigate("/profile")}
            
            onMouseEnter={()=>setHovertwo(true)}
            onMouseLeave={()=>setHovertwo(false)}
            
          />
         {/* shoping icon open to shop  */}
          <img
            src="/images/navbar/blackshop.png"
            alt="cart"
            style={{ height: "25px" }}
            />
        </div>
      </div>


    </div>
  );
};

export default Navbar;
