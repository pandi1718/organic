import React, { useState } from "react";

export const Ssp = () => {
  const[like,setLike]=useState({})
  const[plus,setPlus]=useState({})

  const products = [
    { category: "Dairy", name: "Ghee", price: 650, img: "/images/seasonal/3e0be704d8d99704df5dfaa2cf2e7daa19ee7c13.png" },
    { category: "Dairy", name: "Mixing veg", price: 650, img: "/images/seasonal/6662da7222eaa464ae0e3b0e471f4c35311f0a7c.png" },
    { category: "Dairy", name: "Tomato", price: 650, img: "/images/seasonal/19424ade5f16b2ccfe976735b4e9707759cbe0a3.png" },
    { category: "Dairy", name: "Potato", price: 650, img: "/images/seasonal/f208cec1b28034af0da6a2991f20460da8db6154.png" },
    { category: "Vegetables", name: "Onion", price: 650, img: "/images/seasonal/19424ade5f16b2ccfe976735b4e9707759cbe0a3.png" },
    { category: "Dairy", name: "Tomato", price: 650, img: "/images/seasonal/19424ade5f16b2ccfe976735b4e9707759cbe0a3.png" },
    { category: "Dairy", name: "Potato", price: 650, img: "/images/seasonal/f208cec1b28034af0da6a2991f20460da8db6154.png" },
    { category: "Vegetables", name: "Onion", price: 650, img: "/images/seasonal/19424ade5f16b2ccfe976735b4e9707759cbe0a3.png" },
  ];

  const togglelike=(index)=>{
    setLike((prev)=>({
      ...prev,[index]:!prev[index]
    }))
  }

  const toggleplus=(index)=>{
    setPlus((prev)=>({
      ...prev,[index]:!prev[index]
    }))
  }


  return (
    <div style={{
      position:'relative',
      padding:'20px 0',
      width:'90%',
      overflow:'hidden',
      flexWrap:'wrap'}}>
      <img
        src="/images/back/3cce2e7b3020ffeb7e99a1943c4e9f4de62c8c22.png"
        alt=""
        style={{
          height: "20vh",
          width: "20vh",
          opacity: 0.4,
          position: "absolute",
          top: "0",
          left: "-10%",
          zIndex: 0,
        }}
      />

      <h1
        style={{
          textAlign: "center",
          color: "#00210c",
          marginBottom: "30px",
          zIndex: 1,
          position: "relative",
        }}
      >
        Seasonal Products
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
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
              }}
            >
              <h3 style={{
                 fontSize: "1rem",
                  margin: "5px 0" 
                  }}>{product.category}</h3>

              <div
                style={{
                  backgroundColor: "#E0E9E1",
                  width: "116%",
                  aspectRatio: "1 / 1",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  borderRadius:'0px'
                }}
              >
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
                    cursor:'pointer'
                  }}
                onClick={()=>togglelike(`row1-${index}`)}
                >
                  <img
                    src={like[`row1-${index}`] ?
                   "/images/seasonal/redheart.png" : "/images/seasonal/whiteheart.png" 
                  }
                    alt="heart"
                    style={{ 
                      width: "60%", 
                      height: "60%" }}
                  />
                </div>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ 
                    width: "80%", 
                    height: "auto" }}
                />
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
                     fontSize: "0.9rem" 
                     }}>{product.name}</h4>

                  <p style={{ 
                    margin: 0, 
                    fontSize: "0.8rem" 
                    }}>₹ {product.price} / Ltr</p>
                </div>
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
                 "/images/seasonal/tick.png" : "/images/seasonal/plush.png"   
                } alt="tick"
                style={{width:'100%',height:'60%',objectFit:'cover'}} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Ssp;
