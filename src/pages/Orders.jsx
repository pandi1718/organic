import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";


const Orders = () => {
  const navigate = useNavigate()

    const order=[
        
        {main:"/images/my orders/milk.png",name:"Milk",categorey:"Diary : ",sub:"Fresh Milk",para:"Delivery expexted by :",date:" 20-OCT-2025 ( 9 AM )",
            img:"/images/my orders/leftarrow.png",slash:"4/5"
        },

        {main:"/images/my orders/guva.png",name:"Milk",categorey:"Diary : ",sub:"Fresh Milk",para:"Delivery expexted by :",date:"20-OCT-2025 ( 9 AM )",
            img:"/images/my orders/leftarrow.png",slash:"4/5"
        },

        {main:"/images/my orders/banana.png",name:"Milk",categorey:"Diary : ",sub:"Fresh Milk",para:"Delivery expexted by :",date:"20-OCT-2025 ( 9 AM )",
            img:"/images/my orders/leftarrow.png",slash:"4/5"
        },

    ]
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
          onMouseEnter={(e) => { e.target.style.backgroundColor = '#5FA864' , e.target.style.color = '#fff', e.target.style.padding ='5px', e.target.style.borderRadius = '5px' }} 
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#B9E9BB', e.target.style.color = '#000' }}
        >
          Log Out
        </button>
      </div>

      {/* Right Orders Section */}
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
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>My Orders</h2>
          
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
{/* mapping */}

{order.map((order, index) => (
  <div 
    key={index}
    style={{
      marginTop: '15px',
      background: '#fff',   
      borderRadius: '10px',
      padding: '15px',
      width: '100%',      
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Left product box */}
      <div
        style={{
          width: '200px',
          padding: '10px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '95px',
            borderRadius: '10px',
            background: '#B9E9BB',
            margin: '0 auto',
          }}
        >
          <img
            src={order.main}   
            alt={order.name}
            style={{ width: '90px' }}
          />
          <p
            style={{
              background: '#5FA864',
              borderRadius: '0 0 10px 10px',
              color: '#fff',
              margin: 0,
            }}
          >
            {order.name}
          </p>
        </div>
      </div>

      {/* Middle text info */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex' }}>
          <h1 style={{ fontSize: '1rem' }}>
            <strong>{order.categorey}</strong>
          </h1>
          <h1 style={{ fontSize: '1rem', marginLeft: '3px' }}>{order.sub}</h1>
        </div>

        <div style={{ display: 'flex' }}>
          <h1 style={{ fontSize: '0.7rem' }}>{order.para}</h1>
          <h1 style={{ fontSize: '0.7rem', marginLeft: '3px' }}>
            <strong>{order.date}</strong>
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
            size="small"
          />
          <p style={{ margin: 0, marginLeft: '5px' }}>{order.slash}</p>
        </div>
      </div>

      {/* Right arrow button */}
      <button style={{ border: 'none', background: 'none', marginLeft: '15px' }}>
        <img src={order.img} alt="" style={{ width: '35px', height: '35px' }} />
      </button>
    </div>
  </div>
))}



      </div>
    </div>
  );
};

export default Orders;
