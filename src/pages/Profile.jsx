import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        margin: "0 auto",
        background: "#eaeaeaff",
        boxShadow: "inset 5px 5px 5px #ababab",
        minHeight: "90vh",
        padding: "20px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          background: "#E0E9E1",
          width: "220px",
          borderRadius: "12px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0,textAlign:'center',}}>
        <li
          style={{
            padding: "12px",
            background: "#B9E9BB",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "500",
            marginTop:'5px'
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#5FA864' , e.target.style.color = '#fff', e.target.style.padding ='5px', e.target.style.borderRadius = '5px' }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#B9E9BB', e.target.style.color = '#000' }}
          onClick={()=>navigate("/profile")}
        >
          Profile
        </li>

        <li
          style={{
            padding: "12px",
            background: "#B9E9BB",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "500",
            marginTop:'5px'
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#5FA864' , e.target.style.color = '#fff', e.target.style.padding ='5px', e.target.style.borderRadius = '5px' }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#B9E9BB', e.target.style.color = '#000' }}
          onClick={()=>navigate("/orders")}
        >     
        Orders     
        </li>

        <li
          style={{
            padding: "12px",
            background: "#B9E9BB",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "500",
            marginTop:'5px'
          }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#5FA864' , e.target.style.color = '#fff', e.target.style.padding ='5px', e.target.style.borderRadius = '5px' }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#B9E9BB', e.target.style.color = '#000' }}
          onClick={()=>navigate("/share")}
       >
          Share
        </li>
        </ul>
        <button
          style={{
            padding: "12px",
            background: "#B9E9BB",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "500",
          }}
          onClick={()=>navigate("/signup")}
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#5FA864' , e.target.style.color = '#fff', e.target.style.padding ='5px', e.target.style.borderRadius = '5px' }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#B9E9BB', e.target.style.color = '#000' }}
        >
          Log Out
        </button>
      </div>

      {/* Right Profile Section */}
      <div
        style={{
          background: "#E0E9E1",
          flex: "1 1 500px",
          maxWidth: "700px",
          borderRadius: "15px",
          padding: "25px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>My Profile</h2>
          
          <button
          onClick={() => navigate("/ready")}
          style={{
            borderRadius: "20px",
            padding: "10px 20px",
            color: "#fff",
            background: "#E0E9E1",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <img
            src="/images/profile/icons8-macos-close-30.png"
            alt="close"
            style={{ width: "28px", height: "28px", cursor: "pointer" }}
            
         />
         </button>
        </div>

        {/* Profile Image */}
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <img
            src="/images/ratings/top/Ellipse 53 (3).png"
            alt="profile"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              border: "3px solid #5FA864",
            }}
          />
        </div>

        {/* Form Fields */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Name */}
          <div
            style={{
              background: "#B9E9BB",
              borderRadius: "10px",
              padding: "12px",
              position: "relative",
            }}
          >
            <label style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Name</label>
            <img
              src="/images/profile/icons8-edit-pencil-30.png"
              alt="edit"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: "12px",
                top: "12px",
                cursor: "pointer",
              }}
            />
            <input
              type="text"
              defaultValue="Mohan Naveen S"
              style={{
                border: "none",
                background: "transparent",
                marginTop: "5px",
                width: "100%",
                outline: "none",
                fontSize: "0.95rem",
              }}
            />
          </div>

          {/* Email */}
          <div
            style={{
              background: "#B9E9BB",
              borderRadius: "10px",
              padding: "12px",
              position: "relative",
            }}
          >
            <label style={{ fontSize: "0.9rem", fontWeight: "bold" }}>E-mail</label>
            <img
              src="/images/profile/icons8-edit-pencil-30.png"
              alt="edit"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: "12px",
                top: "12px",
                cursor: "pointer",
              }}
            />
            <input
              type="email"
              defaultValue="mohannaveen41021@gmail.com"
              style={{
                border: "none",
                background: "transparent",
                marginTop: "5px",
                width: "100%",
                outline: "none",
                fontSize: "0.95rem",
              }}
            />
          </div>

          {/* Contact */}
          <div
            style={{
              background: "#B9E9BB",
              borderRadius: "10px",
              padding: "12px",
              position: "relative",
            }}
          >
            <label style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Contact</label>
            <img
              src="/images/profile/icons8-edit-pencil-30.png"
              alt="edit"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: "12px",
                top: "12px",
                cursor: "pointer",
              }}
            />
            <input
              type="text"
              defaultValue="6383319976"
              style={{
                border: "none",
                background: "transparent",
                marginTop: "5px",
                width: "100%",
                outline: "none",
                fontSize: "0.95rem",
              }}
            />
          </div>

          {/* Address */}
          <div
            style={{
              background: "#B9E9BB",
              borderRadius: "10px",
              padding: "12px",
              position: "relative",
            }}
          >
            <label style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Address</label>
            <img
              src="/images/profile/icons8-edit-pencil-30.png"
              alt="edit"
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                right: "12px",
                top: "12px",
                cursor: "pointer",
              }}
            />
            <textarea
              defaultValue="135, Jayapfglkfdgjkhdfhgkhjhf"
              style={{
                border: "none",
                background: "transparent",
                marginTop: "5px",
                width: "100%",
                outline: "none",
                fontSize: "0.95rem",
                resize: "none",
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#fff",
              background: "#5FA864",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            CANCEL
          </button>
          <button
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
              color: "#fff",
              background: "#5FA864",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
