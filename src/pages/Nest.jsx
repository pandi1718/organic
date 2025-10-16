import React from 'react'
import Navbar from '../components/Navbar'

const Nest = () => {
    const farm =[
        {name:"Krishna",contact:"9876543210",location:"Salem,Tamilnadu",
            img1:"/images/farm1/man.png",img2:"/images/farm1/house.png",img:"/images/farm1/cow.png",
            img4:"/images/farm1/pototo.png",img5:"/images/farm1/seeds.png"
        }
    ]
  return (
    <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'start', textAlign: 'center' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>
      <div style={{marginTop:'100px'}}>
        <h1>FarmNest Farming</h1>
        </div>
        <div style={{display:'flex',}}>
        {farm.map((farm,index)=>(
            <div key={index} style={{display:"block"}}>
                <div>
                    <img src={farm.img1} alt="" style={{width:"50%"}} />
                    <span>Owner</span>
                </div>
                <div>
                    <img src="" alt="sedd" />
                </div>

            </div>
        ))}


        </div>
    </div>
  )
}

export default Nest