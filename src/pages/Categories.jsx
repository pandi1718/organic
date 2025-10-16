import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Ssp from './Ssp';
import Scroll from './Scroll'
import Tspe from './Tspe';
import Movee from './Movee';
import Fotter from '../components/Fotter'

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    { name: "Fruits", path: "/fruits" },
    { name: "Vegetables", path: "/vegetables" },
    { name: "Dairy Products", path: "/dairy" },
    { name: "Oils", path: "/oils" },
    { name: "Sauce & Honey", path: "/sauce-honey" },
    { name: "Butter", path: "/butter" },
  ];

  const getButtonStyle = (isHovered) => ({
    background: isHovered ? "#5FA864" : "#B9E9BB",
    color: isHovered ? "#fff" : "#00210C",
    borderRadius: "20px",
    padding: "10px",
    width: "180px",
    height: "40px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    textDecoration: "none",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ".8rem",
    boxShadow: isHovered ? "2px 4px 8px rgba(0,0,0,0.2)" : "none",
  });

  return (
    <div
    style={{      
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'ceter', 
    textAlign: 'center',
    width:'100%'
    }}
    >

      {/* Navbar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}>
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
        <h1 style={{ fontWeight: 'bold',margin:0}}>Categories</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <input
            type="text"
            style={{
              borderRadius: '15px',
              border: '1px solid #5FA864',
              height: '40px',
              textAlign: 'center',
              padding: '0 10px',
            }}
            placeholder="Search"
          />
          <button style={{
            width: '100px',
            borderRadius: '10px',
            border: '1px solid #5FA864',
            color: '#fff',
            background: '#5FA864',
            height: '40px',
            boxShadow: '2px 4px 6px 0px #000',
            cursor: 'pointer'
          }}>Filter</button>
          <button style={{
            width: '100px',
            borderRadius: '10px',
            border: '1px solid #5FA864',
            color: '#fff',
            background: '#5FA864',
            height: '40px',
            boxShadow: '2px 4px 6px 0px #000',
            cursor: 'pointer'
          }}>Sort</button>
        </div>
      </div>

      {/* Buttons Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'nowrap', 
          gap: '30px',
          padding: '20px',
          overflowX: 'hidden', 
          whiteSpace: 'nowrap',
        }}
      >
        {categories.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={getButtonStyle(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Ssp />
      <Scroll />
      <Tspe />
      <Movee />
      <Fotter />
    </div>
  );
};

export default Categories;
