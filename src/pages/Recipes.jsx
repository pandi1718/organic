import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [like, setLike] = useState({});
  const [hover,setHover]=useState({})


  const toggleLike = (index) => {
    setLike((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getbuttonstyle =(hoverd)=>({

  background: hoverd ?  '#B9E9BB' : '#EDFFEE',
  color: hoverd ? "#000" : "#000",
  padding: '15px 15px',
  border: hoverd ? "1px solid #edffee" : "none",
  borderRadius: '8px',
  cursor: 'pointer',
  position: 'absolute',
  bottom: '-190px',
  left: '10px',
  width: '200px',
  boxShadow:hoverd ? "1px 1px 1px 1px #000" : "none",
  transition: "all 0.3s ease",
  })

  const receipes = [
    {
      img: "/images/recipes/mango.jpg",
      name: "Mango Smoothie",
      time: "Duration : 10 min",
      serve: "Serves : 2 person",
      ingredients: "Mango,Milk,Honey,Sugar",
      sub2: "Ingredients",
      Path: "/mango",
    },
    {
      img: "/images/recipes/Rose milk.jpg",
      name: "Rose Milk",
      time: "Duration : 10 min",
      serve: "Serves : 2 person",
      ingredients: "Rose Syrup,Milk,Ice,Sugar",
      sub2: "Ingredients",
      Path: "/rose",
    },
    {
      img: "/images/recipes/veg salad.jpg",
      name: "Veg Salad",
      time: "Duration : 10 min",
      serve: "Serves : 2 person",
      ingredients: "Cucumber,Tomoto,Carrot,Salt",
      sub2: "Ingredients",
      Path: "/salad",
    },
    {
      img: "/images/recipes/chutney.jpg",
      name: "Coriander Chutney",
      time: "Duration : 10 min",
      serve: "Serves : 2 person",
      ingredients: "Coriander Leaves,Green Chilli,Tarmarind,Salt",
      sub2: "Ingredients",
      Path: "/chutney",
    },
  ];

  return (
    <div style={{ padding: '20px 0' }}>
      {/* heading */}
      <h1 style={{ textAlign: 'center', color: '#00210C', marginBottom: '30px' }}>
        Recipes
      </h1>

        {/* wrapper */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {/* cards */}
          {receipes.map((receipe, index) => (
            <div
              key={index}
              style={{
                background: '#5FA864',
                height: '520px',
                width: '250px',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '15px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                flexWrap: 'wrap',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "300px",
                  marginBottom: '10px',
                }}
              >
                {/* image + heart */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "60%",
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#5FA864",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    }}
                    onClick={() => toggleLike(`row-${index}`)}
                  >
                    <img
                      style={{ width: "60%", height: "60%", cursor: 'pointer' }}
                      src={
                        like[`row-${index}`]
                          ? "/images/recipes/redheart.png"
                          : "/images/recipes/whiteheart.png"
                      }
                      alt=""
                    />
                  </div>

                  <img
                    src={receipe.img}
                    alt={receipe.name}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                    }}
                  />
                </div>

                {/* details */}
                <div style={{ textAlign: 'left', color: '#fff', width: '100%' }}>
                  <h3 style={{ marginBottom: '5px' }}>{receipe.name}</h3>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <img src="/images/recipes/1/Frame.png" alt="" style={{ width: '18px', height: '18px' }} />
                    <p style={{ marginLeft: '8px', marginTop: '13px' }}>{receipe.time}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <img src="/images/recipes/Frame.png" alt="" style={{ width: '18px', height: '18px' }} />
                    <p style={{ marginLeft: '8px', marginTop: '13px' }}>{receipe.serve}</p>
                  </div>

                  <div style={{ marginBottom: '0px' }}>
                    <h4 style={{ marginBottom: '4px' }}>{receipe.sub2}</h4>
                    <p>{receipe.ingredients}</p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <Link to={receipe.Path}>
                      <button
                        style={getbuttonstyle(hover[`btn-${index}`])}
                        onMouseEnter={()=>setHover({...hover,[`btn-${index}`] : true})}
                        onMouseLeave={()=>setHover({...hover,[`btn-${index}`] : false})}
                      >
                        View Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Recipes;
