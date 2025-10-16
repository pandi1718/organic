import React, { useRef } from "react";

const Community = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); 
  };

  return (
    <div style={{ 
      width: "90%",
      margin: "auto",
      textAlign: "center"
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
          Community
        </h2>
      </div>

   
      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",           
          overflowY: "hidden",
          whiteSpace: "nowrap",
          padding: "10px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
      >
   

        {[
          "/images/community/04b74c0539b563f924cd978da38c3d39d04ee7db.jpg",
          "/images/community/4c788e714fb838393c3c9262b0a3ca0b0883e0ee.jpg",
          "/images/community/5743ded35382c59c5a82f26495d16868dc5ca5fa.jpg",
          "/images/community/e2118d53ddb3346a2f75319e604dbd09bc607200 (1).jpg",
          "/images/community/fdc309a5a5c2a1a6cb90d537ebd63f49938c3ab1.jpg",
          "/images/community/04b74c0539b563f924cd978da38c3d39d04ee7db.jpg",
          "/images/community/4c788e714fb838393c3c9262b0a3ca0b0883e0ee.jpg",
        ].map((src, i) => (
          <div
            key={i}
            style={{
              height: "60vh",
              width: "13vw",
              minWidth: "200px",
              border: "3px solid #00210C",
              borderRadius: "110px",
              flexShrink: 0,
              textAlign: "center",
              scrollSnapAlign: "start",
              background: "#fff",
            }}
          >
            <img
              src={src}
              alt="profile"
              style={{
                width: "8vw",
                height: "16vh",
                borderRadius: "100%",
                marginTop: "20px",
              }}
            />
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                color: "#00210C",
              }}
            >
              Priya Lakshimi
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                marginTop: "-10px",
                color: "#00210C",
              }}
            >
              Chennai, Tamilnadu
            </p>
            <h3
              style={{
                marginTop: "30px",
                fontWeight: "bold",
                fontSize: "1.3rem",
                color: "#00210C",
              }}
            >
              Favorite Products
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                marginTop: "-10px",
                color: "#00210C",
              }}
            >
              Milk & Ghee
            </p>
            <p style={{ 
              fontSize: "1.1rem",
               color: "#00210C" }}>
              Order Completed : 20+
            </p>
          </div>
        ))}
      </div>

      
         {/* Scroll Buttons */}
      <div style={{position:'relative',
        width:'100%'
       }}>
       

 <button 
 onClick={scrollLeft}
  style={{ 
    color: "#00210c", 
    border: "1px solid #00210c",
     padding: "10px 15px", 
     borderRadius: "8px 0px 0px 8px",
      cursor: "pointer", 
      position:'relative', 
      left:'0%'}} > Pre 
      </button> 
      <button onClick={scrollRight} 
      style={{ 
        color: "#00210c", 
        border: "1px solid #00210c", 
        padding: "10px 15px",
         borderRadius: "0px 8px 8px 0px", 
         cursor: "pointer", 
         position:'relative',
          right:'0%' }} >
            nxt
          </button>

      </div>

    </div>
  );
};

export default Community;
