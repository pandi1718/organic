import React from "react";
import Rating from "@mui/material/Rating";

const Ratting = () => {
  const Rattings = [
    {
      name: "Thilak Kumar",
      place: "Coimbatore",
      img: "/images/ratings/top/Ellipse 53.png",
      paragraph:
        "Very easy to use website! I found fresh vegetables within seconds and payment was smooth.",
      compare: "4/5",
    },
    {
      name: "Manoj S",
      place: "Coimbatore",
      img: "/images/ratings/top/Ellipse 53 (2).png",
      paragraph:
        "Great platform to connect directly with farmers. Delivery was on time, just wish packaging.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/top/Ellipse 53 (3).png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/top/Ellipse 53 (4).png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/top/Ellipse 53 (5).png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/top/Ellipse 53.png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },

  ]
  const Ratings = [
    {
      name: "Organic Carrots",
      place: "- Priya",
      img: "/images/ratings/bottom/Rectangle 302 (1).png",
      paragraph:
        "Very easy to use website! I found fresh vegetables within seconds and payment was smooth.",
      compare: "4/5",
    },
    {
      name: "Cow Milk",
      place: "- Chandru",
      img: "/images/ratings/bottom/Rectangle 302 (2).png",
      paragraph:
        "Great platform to connect directly with farmers. Delivery was on time, just wish packaging was more eco-friendly.",
      compare: "4/5",
    },
    {
      name: "Fresh Honey",
      place: "- Arun",
      img: "/images/ratings/bottom/Rectangle 302 (3).png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/bottom/Rectangle 302 (4).png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/bottom/Rectangle 302 (5).png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
    {
      name: "Rekha P",
      place: "Madurai",
      img: "/images/ratings/bottom/Rectangle 302.png",
      paragraph:
        "Love the concept of buying from farmers directly. Prices are transparent and quality is excellent.",
      compare: "4/5",
    },
  ];

  return (
    <div style={{
         width: "90%", 
         margin: "20px auto",
         overflow:'hidden',
         display:'block',
         textAlign:'center'
          }}>

                  {/* Title */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#00210C",
            marginTop:'30px',
            marginBottom:'20px'
          }}
        >
          Rattings & Reviews
        </h2>
      </div>

            {/* top  */}
      <div style={{ 
        display: "flex", 
        gap: "20px", 
        justifyContent:'center',
        animation:'scrollLeft 15s linear infinite',

        }}>

        {Rattings.map((rating, index) => (
          <div
            key={index}
            style={{
              minWidth: "250px",
              maxWidth: "300px",
              backgroundColor: "#e0e9e1",
              borderRadius: "10px",
              padding: "15px",
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              boxShadow:'0px 0px 5px 0px #000'
            }}
          >
            <img
              src={rating.img}
              alt={rating.name}
              style={{ width: "70px", height: "70px", borderRadius: "50%",position:'relative',top:'-50px'}}
            />
          <div>
              <h3 style={{ margin: 10 }}>{rating.name}</h3>
              <p style={{ margin: "2px 10px", fontSize: "0.85rem" }}>
                {rating.place}
              </p>

              {/* STAR AND RATINGS  */}
              <div style={{display:'flex',marginLeft:'8PX'}}>
            <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
                size="small"
              /> 
        <p style={{ fontWeight: "bold", marginLeft:'5PX',marginTop:'-3px'}}>
                {rating.compare}
              </p>
              </div>
       
              <p style={{ fontSize: "0.8rem",marginLeft:'-60px'}}>
                {rating.paragraph}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* bottom  */}
            <div style={{ 
        marginTop:'30px',
        display: "flex", 
        gap: "20px", 
        justifyContent:'center',
        animation:'scrollRight 25s linear infinite',

        }}>

        {Ratings.map((ratting, index) => (
          <div
            key={index}
            style={{
              minWidth: "250px",
              maxWidth: "300px",
              backgroundColor: "#e0e9e1",
              borderRadius: "10px",
              padding: "15px",
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              boxShadow:'0px 0px 5px 0px #000'
            }}
          >
            <img
              src={ratting.img}
              alt={ratting.name}
              style={{ width: "90px", height: "90px", borderRadius: "50%",position:'relative',top:'-50px',}}
            />
            <div>
              <h3 style={{ margin: 10 }}>{ratting.name}</h3>
              <p style={{ margin: "2px 10px", fontSize: "0.85rem" }}>
                {ratting.place}
              </p>

              {/* STAR AND RATINGS  */}
              <div style={{display:'flex',marginLeft:'8PX'}}>
            <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
                size="small"
              /> 
        <p style={{ fontWeight: "bold", marginLeft:'5PX',marginTop:'-3px'}}>
                {ratting.compare}
              </p>
              </div>
       
              <p style={{ fontSize: "0.8rem",marginLeft:'-60px'}}>
                {ratting.paragraph}
              </p>

            </div>
            </div>
        ))}
      </div>

            <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Ratting;
