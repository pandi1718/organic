import React, { useRef, useState,} from 'react'
import { useNavigate } from 'react-router-dom'

export const Tspe = () => {
  const [like,setLike]=useState({})
  const [plus,setPlus]=useState({})
  const navigate=useNavigate()

  const scrollRef=useRef(null)
    const[drag,setDrag]=useState(false)
    const[double,setDouble]=useState(false)
    const[right,setRight]=useState(0)
    const[left,setLeft]=useState(0)

    const topselling =[
      {category:"Dairy",name:"Milk",price:"$10 / per liter",img:"/images/top/milk.png",path:'/about'},
      {category:"Vegetables",name:"Tomoto",price:"$15 / per kg",img:"/images/top/tomoto.png",path:'/about'},
      {category:"Dairy",name:"Onion",price:"$30 / per kg",img:"/images/top/onion.png"},
      {category:"Dairy",name:"Pototo",price:"$50 / per kg",img:"/images/top/pototo.png"},
      {category:"Dairy",name:"Milk",price:"$10 / per liter",img:"/images/top/milk.png"},
      {category:"Vegetables",name:"Tomoto",price:"$15 / per kg",img:"/images/top/tomoto.png"},
      {category:"Dairy",name:"Onion",price:"$30 / per kg",img:"/images/top/onion.png"},
      {category:"Dairy",name:"Pototo",price:"$50 / per kg",img:"/images/top/pototo.png"},
    ]
    const toggleLike=(index)=>{
      setLike((prev)=>({
        ...prev,[index]:!prev[index]
      }))
    }

    const toggleplus=(index)=>{
      setPlus((prev)=>({
        ...prev,[index]:!prev[index]
      }))
    }

    const Mousedown=(e)=>{
      if(!double)
        return
      setDrag(true)
      setRight(e.pageX - scrollRef.current.offsetLeft)
      setLeft(scrollRef.current.scrollLeft)
    }

    const doubleclick=()=>{
      setDouble(true)
    }

    const Mouseleave=(e)=>{
      setDrag(false)
    }

    const Mouseup=(e)=>{
      setDrag(false)
    }

    const Mousemove=(e)=>{
      if(!drag)
        return
      e.preventDefault()
      const x=e.pageX - scrollRef.current.offsetLeft
      const walk = (x-right) *5
      scrollRef.current.scrollLeft=left-walk
    }


  return (
    <div style={{
      position:'relative',
      padding:'20px 0',
      width:'90%',
      overflow:'hidden',
      flexWrap:'wrap'
    }}>

      {/* background image  */}
      <img src="/images/back/3cce2e7b3020ffeb7e99a1943c4e9f4de62c8c22.png" alt="" 
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
        {/* heading */}
      <h1 style={{
          textAlign: "center",
          color: "#00210c",
          marginBottom: "30px",
          zIndex: 1,
          position: "relative",
      }}>Top Selleing Products</h1>

      {/* box */}

      <div ref={scrollRef} style={{
        display:'flex',
        justifyContent:'center',
        position:'relative',
        margin:'0 auto',
        width:'100%',
        overflow:'hidden',
        userSelect:'none',
        // cursor: drag ? 'grabbing' : 'grab',
        cursor:'pointer',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior:'smooth'
      }}

      onDoubleClick={doubleclick} 
      onMouseDown={Mousedown}
      onMouseLeave={Mouseleave}
      onMouseUp={Mouseup}
      onMouseMove={Mousemove}
      >

        {/* scrollLeft  */}

        <div style={{
          gap:'1rem',
          display:'flex',
        }}>

          {/* content  */}
          {topselling.map((topselling,index)=>(
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

              {/* sub heading  */}
            <h3 style={{fontSize:'1rem',margin:'5px 0'}}>{topselling.category}</h3>

              <div style={{
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
                  backgroundColor:'#F6CE2C',
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
                    marginTop:'5px'
                    }}>Top Selling</h4>
                </div>

                {/* heart circle */}
                <div style={{
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
                    cursor:'pointer'
                }}
                onClick={()=>toggleLike(`row-${index}`)}
                >

                  <img src={like[`row-${index}`] ? "/images/top/redheart.png":"/images/top/whiteheart.png" }
                   alt="heart"
                  style={{
                    width:'60%',
                    height:'60%',
                    alignItems:'center'
                  }} />

                </div>
              {/* main image  */}

              <img src={topselling.img} alt={topselling.name} 
              style={{width:'80%',height:'auto'}}
              />
              </div>
                  {/* bottom content  */}
          <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
          }}>
             <div>
                <h3 style={{margin:'0 0 5px 0',cursor:'pointer'}}
                onClick={()=>navigate("/about")}
                >{topselling.name}</h3>
                <p style={{margin:0,fontSize:'0.8rem'}}>{topselling.price}</p>
              </div>

              {/* button  */}

              <button style={{
                width:'30px',
                height:'30px',
                background:'#fff',
                border:'none',
                borderRadius:'5px'
              }}
              onClick={()=>toggleplus(`row-${index}`)}
              >

              <img src={plus[`row-${index}`] ?
              "/images/top/tick.png" : "/images/top/plush.png"}
              style={{width:'100%',height:'60%',objectFit:'cover'}}
              alt="tick" 
              />

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

export default Tspe