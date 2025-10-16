import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          marginTop:'-50px',
          overflow:'hidden',
          width:'80vw',
        }}>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
     

       <Carousel.Item>

<div 
    style={{
    height: "60vh",
    width: "60vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "40px 5%",
    boxSizing: "border-box",
    boxShadow:'0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius:'10px',
    marginTop:'100px',
    overflow:'hidden',

  }}
>
  {/* Left Section */}
  <div style={{ flex: 1 }}>
    <h1 style={{ 
      fontSize: "25px",
       marginBottom: "10px",
       fontWeight:'bold',
       marginTop:'250px'
       }}>Organic & Natural</h1>
    <h2 style={{ fontSize: "22px", marginBottom: "10px",fontWeight:'normal' }}>100% Natural & Organic</h2>
    <ul style={{ marginBottom: "20px",marginTop:'50px'}}>
      <li>No Chemicals</li>
      <li>No Preservatives</li>
      <li>Just Pure Farm Fresh Goodness</li>
    </ul>

    {/* Button + Small Logo aligned together */}
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <button style={{
        backgroundColor:'#5FA864',
        padding:'10px 20px',
        borderRadius:'10px',
        border:'none',
        color:'#fff',
        fontSize:"16px",
        cursor:"pointer",
        boxShadow:'0px 2px 10px #494646',
        position:'absolute',
        left:'330px',
        top:'450px',
        zIndex:'10'
      }}>
        Explore Organic Range
      </button>
      <img 
        src="/images/organic/pngegg (10) 4.png" 
        alt="logo"
        style={{ 
          width:'400px',
          height:'400px',
          position:'relative',
          top:'-200px',
          right:'-175px',
          opacity:'5'
        }}
      />
    </div>
  </div>

  {/* Right Image */}
  <div style={{ flex: 1,
     textAlign: "right",
 }}>
    <img
      src="/images/organic/pngegg (35) 2 (1).png"
      alt="First slide"
      style={{ 
        maxWidth: "430px",
         objectFit: "contain",
          transform: "scaleX(1) rotate(0deg)",
          rotate:'10px',
          position:'absolute',
          right:'-10px',
          top:'100px'
         }}
    />
  </div>
</div>


      </Carousel.Item>

<Carousel.Item>
  <div 
    style={{
    height: "60vh",
    width: "60vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "40px 5%",
    boxSizing: "border-box",
    boxShadow:'0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius:'10px',
    marginTop:'100px'
  }}
>
  {/* Left Section */}
  <div style={{ flex: 1 }}>
    <h1 style={{ fontSize: "25px", marginBottom: "10px",fontWeight:'bold' }}>Discounts & Offers</h1>
    <h2 style={{ fontSize: "22px", marginBottom: "10px",fontWeight:'normal' }}>Weekly Mega Sale</h2>
    <ul style={{ marginBottom: "20px",marginTop:'50px'}}>
      <li style={{listStyle:'none'}}>Flat 15% OFF on </li>
      <li style={{marginLeft:'30px'}}>No Preservatives</li>
      <li style={{marginLeft:'30px'}}>Just Pure Farm Fresh Goodness</li>
    </ul>

    {/* Button + Small Logo aligned together */}
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <button style={{
        backgroundColor:'#5FA864',
        padding:'10px 20px',
        borderRadius:'10px',
        border:'none',
        color:'#fff',
        fontSize:"16px",
        cursor:"pointer",
        boxShadow:'0px 2px 10px #494646',
        position:'relative',
        left:'250px',
        top:'50px'
      }}>
        Explore Organic Range
      </button>
      <img 
        src="/images/organic/71237b115f7f6f364b0f777755fe1c1f09a3122c.png" 
        alt="logo"
        style={{ 
          width:'90px',
          height:'90px',
          position:'relative',
          top:'85px',
          right:'200px'
        }}
      />
    </div>
  </div>

  {/* Right Image */}
  <div style={{ flex: 1, textAlign: "right" }}>
    <img
      src="/images/organic/d3d7b9652c2e5749a7aae4a52330dd8389e178e4.png"
      alt="First slide"
      style={{ maxWidth: "300px", objectFit: "contain", transform: "scaleX(-1)" }}
    />
  </div>
</div>
      </Carousel.Item>
      
      <Carousel.Item>
  <div 
    style={{
    height: "60vh",
    width: "60vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "40px 5%",
    boxSizing: "border-box",
    boxShadow:'0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius:'10px',
    marginTop:'100px'
  }}
>
  {/* Left Section */}
  <div style={{ flex: 1 }}>
    <h1 style={{ fontSize: "25px", marginBottom: "10px",fontWeight:'bold' }}>Top Selling Products</h1>
    <h2 style={{ fontSize: "22px", marginBottom: "10px",fontWeight:'normal' }}>Most Loved by Customers</h2>
    <p style={{ marginBottom: "20px",marginTop:'50px'}}>
      Discover Our Top Selling Fruits, Vegetables & Dairy – Handpicked Daily
    </p>

    {/* Button + Small Logo aligned together */}
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <button style={{
        backgroundColor:'#5FA864',
        padding:'10px 20px',
        borderRadius:'10px',
        border:'none',
        color:'#fff',
        fontSize:"16px",
        cursor:"pointer",
        boxShadow:'0px 2px 10px #494646',
        position:'relative',
        left:'250px',
        top:'50px'
      }}>
          View Top Sellers       
          </button>
      <img 
        src="/images/organic/pngegg (36) 1.png" 
        alt="logo"
        style={{ 
          width:'90px',
          height:'90px',
          position:'relative',
          top:'-270px',
          right:'220px'
        }}
      />
    </div>
  </div>

  {/* Right Image */}
  <div style={{ flex: 1, textAlign: "right" }}>
    <img
      src="/images/organic/pngegg (32) 2.png"
      alt="First slide"
      style={{ maxWidth: "500px",
         objectFit: "contain", 
         transform: "scaleX(1)" }}
    />
  </div>
</div>
      </Carousel.Item>



    </Carousel>
   </div>
  );
}

export default ControlledCarousel;