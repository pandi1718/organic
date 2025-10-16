import React from 'react'

const Policy = () => {
  const polic = [
    { img: "/images/policy/21d7cbb58f3f97da73655c4eb60bec5299e0b0f4.png", name: "Fair Pricing Policy" },
    { img: "/images/policy/143e89749007d42ac674c138d543a77133c5fe61.png", name: "Sustainability & Community Policy" },
    { img: "/images/policy/355b70b803bcf5416383e72333ef92c9db28a149.png", name: "Quality & Authenticity Policy" },
    { img: "/images/policy/830dce40187affdb1c7851bc8b27fcb49232883e.png", name: "Return & Refund Policy" },
    { img: "/images/policy/caeab0e6c34ad2c5333f8e02ff652a74e6c708ba.png", name: "Delivery & Cancellation Policy" },
  ];

  return (
    <div style={{
      position:'relative',
      padding:'50px 0',
      width:'90%',
      overflow:'hidden',
    }}>

      <h1 style={{
        textAlign:'center',
        color:'#00210c'
        }}>Policy</h1>

           <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginTop:'20px'
      }}>
        
      {polic.map((item, index) => (
        <div key={index} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            background: '#F4EDC2',
            height: '100px',
            width: '100px',
            borderRadius: '100%',
            boxShadow: '0px 0px 2px 0px #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={item.img} alt={item.name}
              style={{
                width: '60%',
                height: '60%',
                objectFit: 'contain'
              }}
            />
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.5rem', fontWeight: '500' }}>
            {item.name}
          </p>
          
        </div>
        
      ))}
      </div>
    </div>
    
  )
}

export default Policy;
