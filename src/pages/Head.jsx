import React from 'react'
import { useNavigate } from 'react-router-dom'

const Head = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        backgroundImage: "url('/images/head/greenplow.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        opacity: 0.95, 
      }}
    >
      {/* Center content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Button with logo */}
        <button
          onClick={() => navigate('/ready')}
          style={{
            width: '100px',
            height: '100px',
            padding: '10px',
            borderRadius: '50%',
            border: '5px solid #ffffffff',
            background: '#B9E9BB',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#f5f5f5ff'
            e.target.style.boxShadow = '0px 0px 0px 5px #B9E9BB'
            e.target.style.width = '110px'
            e.target.style.height = '110px'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#B9E9BB'
            e.target.style.boxShadow = 'none'
            e.target.style.width = '100px'
            e.target.style.height = '100px'
          }}
        >
          <img
            src="/images/head/logo.png"
            alt="logo"
            style={{
              width: '70px',
              pointerEvents: 'none',
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default Head
