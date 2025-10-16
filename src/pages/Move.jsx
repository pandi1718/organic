import React from 'react'

const Move = () => {
  return (
            <div style={{
          backgroundColor:'#5FA864',
          width:'100%',
          height:'8vh',
          marginTop:'0px',
          textAlign:'center',
          overflow:'hidden'
        }}>
          <ul style={{
            gap:'50px',
            whiteSpace:'nowrap',
            display:'flex',
            color:'#fff',
            fontSize:'25px',
            padding:'10px',
            animation: 'scrollLeft 10s linear infinite',        
          }}>
            <li>Bulk Produce Supply </li>
            <li>Direct Farmer Connections</li>
            <li>Scheduled Deliveries</li>
            <li>Custom order & seasonal picks</li>
            <li>Support and assistance</li>
          </ul>
            <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(50%);
            }
            150% {
              transform: translateX(-80%);
            }
          }
        `}
      </style>
        </div>
  )
}

export default Move