import React, { useState } from "react";

const Topselling = () => {
  const [ratings, setRatings] = useState({}); 

  const sellers = [
    { name: "Krishna", location: "Salem, Tamil Nadu", topOrder: "Organic Tomatoes", img: "/images/topseller/Rectangle 42 (1).png", rating:" 4.5 / 5", orders: "500+ Orders" },
    { name: "Ramesh", location: "Chennai, Tamil Nadu", topOrder: "Organic Milk", img: "/images/topseller/Rectangle 42 (2).png", rating: "4.5 / 5", orders: "450+ Orders" },
    
  ];

  const handleStarClick = (index,) => {
    setRatings((prev) => ({
      ...prev,[index]:!prev[index] 
    }));
  };

  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "50px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#00210C", marginBottom: "20px", textAlign: "center" }}>Top Seller</h2>

      <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "10px" }}>
        {sellers.map((seller, index) => (
          <div key={index} style={{ backgroundColor: "#F4EDC2", minWidth: "200px", maxWidth: "330px", borderRadius: "10px", padding: "15px", textAlign: "left", flex: "0 0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src={seller.img} alt={seller.name} style={{ width: "80px", height: "80px", borderRadius: "10%", objectFit: "cover" }} />
              <div>
                <h3 style={{ margin: "0" }}>{seller.name}</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#444" }}>{seller.location}</p>
              </div>
            </div>

            <p style={{ marginTop: "10px", fontSize: "16px" }}><strong>Top Orders:</strong> {seller.topOrder}</p>

            {/* Star Ratings */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              {/* one  */}
            <img src={ratings[`row1-${index}`] ?
                 "/images/About/fullstar.png" : "/images/About/emptystar.png"
                  }
                    alt="star"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleStarClick(`row1-${index}`)}
                  />
                  {/* two  */}
            <img src={ratings[`row2-${index}`] ?
                   "/images/About/fullstar.png" : "/images/About/emptystar.png"
                  }
                    alt="star"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleStarClick(`row2-${index}`)}
                  />
                  {/* three  */}
            <img src={ratings[`row3-${index}`] ?
                  "/images/About/fullstar.png" : "/images/About/emptystar.png"
                  }
                    alt="star"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleStarClick(`row3-${index}`)}
                  />
                  {/* four  */}
            <img src={ratings[`row4-${index}`] ?
                   "/images/About/fullstar.png" : "/images/About/emptystar.png"
                  }
                    alt="star"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleStarClick(`row4-${index}`)}
                  />
                  {/* five  */}
            <img src={ratings[`row5-${index}`] ?
                 "/images/About/fullstar.png" : "/images/About/emptystar.png"
                  }
                    alt="star"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleStarClick(`row5-${index}`)}
                  />
              
              
            <div>
          <span style={{ fontSize: "14px", marginLeft: "5px" }}> | {seller.rating}</span>
              <img src="/images/topseller/image 17.png" alt="orders"
               style={{ width: "20px", height: "20px", marginLeft: "5px", marginRight: "5px" }} />
              {seller.orders}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topselling;
