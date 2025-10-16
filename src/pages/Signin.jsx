import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#F5F5F5",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative images */}
      <img
        src="/images/Signin/graps.png"
        alt="grapes"
        style={{
          position: "absolute",
          top: "6%",
          left: "90%",
          transform: "translate(-50%, -50%)",
          width: "18%",
          objectFit: "contain",
          zIndex: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <img
        src="/images/Signin/leaf 's.png"
        alt="leaf"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          objectFit: "contain",
          zIndex: 0,
          opacity: 0.9,
          pointerEvents: "none",
        }}
      />

      <img
        src="/images/Signin/graps.png"
        alt="bottom grapes"
        style={{
          position: "absolute",
          top: "0%",
          right: "78%",
          width: "18%",
          objectFit: "contain",
          zIndex: 0,
          opacity: 0.4,
          pointerEvents: "none",
        //   transform: 'rotate(78deg)'
        }}
      />

      {/* Center content */}
      <div style={{ display: "flex", alignItems: "center", gap: "50px", zIndex: 1 }}>

        {/* Logo circle */}
        <div
          style={{
            border: "2px solid #fff",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "2px 2px 10px #928d8dff",
            background: "#fff",
          }}
        >
          <img src="/images/Signin/logo.png" alt="logo" style={{ width: "80%" }} />
        </div>

        {/* Sign-in box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
            padding: "30px 40px",
            border: "2px solid #928d8dff",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "2px 2px 10px #928d8dff",
          }}
        >
          <h1 style={{ marginBottom: "20px", color: "#00210C" }}>Sign In</h1>

          <input
            type="text"
            placeholder="E-mail"
            style={{
              marginBottom: "20px",
              border: "1px solid #5FA864",
              background: "#B9E9BB",
              color: "#00210C",
              padding: "10px",
              borderRadius: "10px",
              width: "220px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              marginBottom: "20px",
              border: "1px solid #5FA864",
              background: "#B9E9BB",
              color: "#00210C",
              padding: "10px",
              borderRadius: "10px",
              width: "220px",
            }}
          />

          <a href="#" style={{ marginBottom: "20px", color: "#6d45ffff" }}>
            Forget Password
          </a>

          <button
            style={{
              marginBottom: "20px",
              padding: "10px 30px",
              background: "#5FA864",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            SIGN IN
          </button>

          <a
            href="#"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#000",
            }}
            onClick={() => navigate("/")}
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
