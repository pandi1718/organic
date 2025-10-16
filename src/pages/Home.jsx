import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={4000}   
      fade              
    >
      {/* --- Slide 1 --- */}
      <Carousel.Item>
        <div
          style={{
            height: isMobile ? "auto" : "80vh",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            padding: isMobile ? "20px" : "0 5%",
            boxSizing: "border-box",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Left Text */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "50px",
                marginBottom: "15px",
              }}
            >
              Fresh Products,
            </h1>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "50px",
                marginBottom: "20px",
              }}
            >
              Right on Time
            </h1>
            <p
              style={{
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: "1.5",
              }}
            >
              We ensure consistent quality and timely delivery <br />
              to keep your business running smoothly.
            </p>
          </div>

          {/* Right Image */}
          <div
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "right",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            <img
              src="/images/back/box.png"
              alt="First slide"
              style={{
                maxWidth: isMobile ? "80%" : "120%",
                height: "auto",
                objectFit: "contain",
                position:'relative',
                top:'90px',
                transform: isMobile ? "none" : "scaleX(-1)",
              }}
            />
          </div>
        </div>
      </Carousel.Item>

      {/* --- Slide 2 --- */}
      <Carousel.Item>
        <div
          style={{
            height: isMobile ? "auto" : "80vh",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            padding: isMobile ? "20px" : "0 5%",
            boxSizing: "border-box",
            textAlign: isMobile ? "center" : "left",
            position:isMobile ? "auto" : "10px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "50px",
                marginBottom: "15px",
              }}
            >
              Your Market Partner
            </h1>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "50px",
                marginBottom: "20px",
              }}
            >
              for Freshness
            </h1>
            <p
              style={{
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: "1.5",
              }}
            >
              Consistent quality, competitive prices, and direct farmer connections — all in one platform.
            </p>
          </div>

          <div
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "right",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            <img
              src="/images/back/capmen.png"
              alt="Second slide"
              style={{
                maxWidth: isMobile ? "80%" : "90%",
                height: "auto",
                objectFit: "contain",
                position:'relative',
                top:'70px',
                left:'70px',
                transform: isMobile ? "none" : "scaleX(-1)",
              }}
            />
          </div>
        </div>
      </Carousel.Item>

      {/* --- Slide 3 --- */}
      <Carousel.Item>
        <div
          style={{
            height: isMobile ? "auto" : "100vh",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            padding: isMobile ? "20px" : "0 5%",
            boxSizing: "border-box",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "50px",
                marginBottom: "15px",
              }}
            >
              Quality You Can Trust
            </h1>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "50px",
                marginBottom: "20px",
              }}
            >
              From Farm to Market
            </h1>
            <p
              style={{
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: "1.5",
              }}
            >
              Partnering with local farmers to deliver only the freshest produce — directly to your doorstep.
            </p>
          </div>

          <div
            style={{
              flex: 1,
              textAlign: isMobile ? "center" : "right",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            <img
              src="/images/back/whiteman.png"
              alt="Third slide"
              style={{
                maxWidth: isMobile ? "80%" : "110%",
                height: "auto",
                objectFit: "contain",
                transform: isMobile ? "none" : "scaleX(-1)",
                position:'relative',
                left:'20px',
                top:'60px'
              }}
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
