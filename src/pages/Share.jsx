import React from "react";
import { useNavigate } from "react-router-dom";

const Share = () => {
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
            orders
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
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#5FA864' , e.target.style.color = '#fff', e.target.style.padding ='5px', e.target.style.borderRadius = '5px' }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#B9E9BB', e.target.style.color = '#000' }}
        >
          Log Out
        </button>
      </div>

      {/* Right Share Section */}
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
          <h2 style={{ fontSize: "1.5rem", marginTop:'50px',color:'#00210C',fontWeight:'normal'}}>Share Web Application</h2>
          
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
            src="images/profile/icons8-macos-close-30.png"
            alt="close"
            style={{ width: "28px", height: "28px", cursor: "pointer" }}
            
         />
         </button>
        </div>

        {/* copy container */}
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0",gap:'10px' }}>
          <input type="text"
          placeholder="https://Organic/FarmertoShop"
          style={{
            color:'#00210C',
             background:'#B9E9BB',
             borderRadius:'5px',
             border:'1px solid #5FA864',
             padding:'5px',
             width:'60%'
          }} />
         
          <button style={{
            color:'#E0E9E1',
             background:'#5FA864',
             borderRadius:'5px',
             border:'none',
          }}>copy 
            <img src="images/shares/copy.png" alt="copy" 
            style={{
                width:'20px',
                height:'20px',
                marginLeft:'5px'
            }}/></button>
        </div>

                {/* second header */}
        <div style={{ display: "block", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "1.5rem", marginTop:'100px' ,color:'#00210C',fontWeight:'normal'}}>Share Through</h2>
          
            {/* first row */}
            <div style={{display:'flex',gap:'10px',marginLeft:'150px',marginTop:'50px'}}>
            {/* email  */}
            <img src="images/shares/email.png" alt="email" style={{width:'50px',height:'50px'}} />
            {/* whatsapp  */}
            <img src="images/shares/whatsapp.png" alt="whatsapp" style={{width:'50px',height:'50px'}} />
            {/* instragram  */}
            <img src="images/shares/instragram.png" alt="instragram" style={{width:'50px',height:'50px'}} />
           {/* facebook  */}
            <img src="images/shares/facebook.png" alt="facebook" style={{width:'50px',height:'50px'}} />
           {/* xmaster */}
            <img src="images/shares/xmaster.png" alt="xmaster" style={{width:'50px',height:'50px'}} />
        </div>

            {/* second row */}
            <div style={{display:'flex',gap:'10px',marginLeft:'150px',marginTop:'50px'}}>
            {/* quick  */}
            <img src="images/shares/quickshare.png" alt="quickshare" style={{width:'50px',height:'50px'}} />
            {/* messenger  */}
            <img src="images/shares/messenger.png" alt="messenger" style={{width:'50px',height:'50px'}} />
            {/* blutooth */}
            <img src="images/shares/blutooth.png" alt="blutooth" style={{width:'50px',height:'50px'}} />
           {/* drive  */}
            <img src="images/shares/drive.png" alt="drive" style={{width:'50px',height:'50px'}} />
           {/* telegram */}
            <img src="images/shares/telegram.png" alt="telegram" style={{width:'50px',height:'50px'}} />
        </div>
        </div>



      </div>
    </div>
  );
};

export default Share;
