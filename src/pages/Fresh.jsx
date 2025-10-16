import React from 'react'

const Fresh = () => {

  const allow=[
    
    {
    category:"Vegetables",
    name:"Green Peans",
    price:"250",
    img:"/images/fresh arrived/9f63e2fdebbf0e5c6ef5ff27136b30031800554a.png",
  },

    {
    category:"Fruits",
    name:"Pineapple",
    price:"250",
    img:"/images/fresh arrived/416aa7c26e5c40657ec969d850ff246afcd4510e.png",
  },

    {
    category:"Vegetables",
    name:"Tender Coconut",
    price:"250",
    img:"/images/fresh arrived/48feb49a1324d18d163adb000f2afe447bba09d7.png",
  },

    {
    category:"Vegetables",
    name:"Cauliflower",
    price:"250",
    img:"/images/fresh arrived/b28bd5d9c17c91d963102fd4db47f8cce1189cdb.png",
  },

    {
    category:"Fruits",
    name:"Jackfruit",
    price:"250",
    img:"/images/fresh arrived/b28bd5d9c17c91d963102fd4db47f8cce1189cdb.png",
  },

  ]
  return (
 <div style={{
  position:'relative',
  padding:'2px 0'
 }}>
   {/* bacground image  */}
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
      {/* Tittle  */}
      <h1 
        style={{
          textAlign: "center",
          color: "#00210c",
          marginBottom: "30px",
          zIndex: 1,
          position: "relative",
        }}> Fresh Arrived</h1>

      {/* box  */}
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
          alignItems:'center'
        }}>
        <div 
          style={{
            display: "flex",
            gap: "1rem",
          }}>
          {
            allow.map((allow,index)=>(
              <div key={index}
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
              }}>
                <h3 style={{
                 fontSize: "1rem",
                  margin: "5px 0" 
                  }}>{allow.category}</h3>

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
                }}>

                  
                {/* yellow box */}

                <div style={{
                  backgroundColor:'#FF2C2C',
                    position: "absolute",
                    top: "5%",
                    left: "5%",
                    width: "55px",
                    height: "22px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color:'#000',
                    textAlign:'center'
                }}>
                  <h4 style={{fontSize:'0.6rem',
                    textAlign:'center',
                    marginTop:'5px',
                    color:'#fff'
                    }}>Fresh</h4>
                </div>

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
                  }}>

                    <img style={{ 
                      width: "60%", 
                      height: "60%" }}
                      src="/images/stars/icons8-heart-50 (2).png" alt="" />
                  </div>

                  <img style={{ 
                    width: "80%", 
                    height: "auto" }} src={allow.img} alt={allow.name} />
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
                     fontSize: "0.9rem" }}>{allow.price}</h4>

                    <p style={{ 
                    margin: 0, 
                    fontSize: "0.8rem" 
                    }}>{allow.name}</p>
                  </div>

                  {/* button  */}

                  <button 
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "10%",
                    width: "30px",
                    height: "30px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}>
                    +
                  </button>
                  </div>
              </div>
            ))
          }
        </div>
      </div>


 </div>
  )
}

export default Fresh