import React from 'react'

const Fotter = () => {
  return (
    <div style={{ position: 'relative', margin: '0 auto' }}>
      {/* background color */}
      <div
        style={{
          background: '#E0E9E1',
          height: 'auto',
          width: '100%',
          padding: '50px',
          margin:0
        }}
      >
        <div style={{ display: 'block', position: 'relative' }}>
          {/* about */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                color: '#00210C',
                margin: 0,
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}
            >
              About :
            </h1>

            {/* image div */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <img
                src="/images/fotter/man.png"
                alt=""
                style={{ width: '30px', height: '30px' }}
              />
              <img
                src="/images/fotter/leaf.png"
                alt=""
                style={{ width: '30px', height: '30px' }}
              />
              <img
                src="/images/fotter/buy.png"
                alt=""
                style={{ width: '30px', height: '30px' }}
              />
            </div>
          </div>

          {/* paraga */}
          <p
            style={{
              color: '#00210C',
              marginTop: '10px',
              fontSize: '0.9rem',
              lineHeight: '1.5',
            }}
          >
            We connect local farmers directly with customers, ensuring fresh,
            chemical-free, and organic products reach your home. Our mission is
            to support farmers, promote healthy living, and deliver
            farm-to-table goodness at fair prices.
          </p>

          {/* vision */}
          <h1
            style={{
              color: '#00210C',
              margin: '20px 0 5px 0',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Vision & Mission
          </h1>

          <div style={{ marginTop: '10px' }}>
            <p
              style={{
                color: '#00210C',
                fontSize: '0.9rem',
                marginBottom: '10px',
              }}
            >
              <strong>Vision:</strong> To make healthy, farm-fresh food
              accessible to everyone.
            </p>
            <p style={{ color: '#00210C', fontSize: '0.9rem' }}>
              <strong>Mission:</strong> Empowering farmers while delivering
              trust & quality to customers.
            </p>
          </div>

          {/* Download App box */}
          <div
            style={{
              background: '#5FA864',
              width: '200px',
              padding: '12px',
              borderRadius: '10px',
              position: 'absolute',
              right: '10px',
              top: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '10px' }}>
              Download Application
            </h3>
            <img
              src="/images/fotter/playstore.png"
              alt=""
              style={{ width: '70px', height: '70px', marginBottom: '5px' }}
            />
            <p style={{ color: '#fff', fontSize: '0.7rem', margin: 0 }}>
              Click to download
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fotter
