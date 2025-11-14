import React, {useState , useEffect} from 'react'
import data from '../data/events.json'
import TiltCard from '../components/TiltCard.jsx'
import Lightbox from '../components/Lightbox.jsx'
import App from '../App.jsx'

export default function Events(){
  


  const [open,setOpen] = useState(false)
  const [idx,setIdx] = useState(0)
  const all = [...data.cards.map(c=>c.img), ...data.gallery]
const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const target = new Date("2025-11-29T00:00:00+05:30")

    function update() {
      const now = new Date()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft("Event started")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      // format with leading zeros for H:M:S
      const two = n => String(n).padStart(2, '0')
      setTimeLeft(`${days}d ${two(hours)}h ${two(minutes)}m ${two(seconds)}s`)
    }

    update()
    const id = setInterval(update, 1000)
    // cleanup
    return () => clearInterval(id)
  }, [])
  return (
    <div>
      <section aria-labelledby="banner">
        <TiltCard>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px', padding:'16px'}}>
            <img src={data.upcoming.bannerImg} alt="" style={{borderRadius:'10px'}}/>
            <div style={{display:'grid',alignContent:'center',gap:'14px'}}>
              <h2 id="banner"  style={{
    fontSize: '14px',
    padding: '6px 12px',
    borderRadius: '8px'
   
  }}>{data.upcoming.title}</h2>
              <p style={{color:'var(--muted)'}}>{data.upcoming.subtitle}</p>
             
<div style={{ display: "grid", gap: "16px", marginTop: "8px" }}>

  <a className="nav-cta" style={{}} href={data.upcoming.cta.href}>
  {data.upcoming.cta.label}
</a>
<div style={{
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    marginTop: "8px",
  }}>
    {[
      { label: "D", value: timeLeft.split(" ")[0] },  
      { label: "H", value: timeLeft.split(" ")[1] },  
      { label: "M", value: timeLeft.split(" ")[2] },  
      { label: "S", value: timeLeft.split(" ")[3] }  
    ].map((b, i) => (
      <div
        key={i}
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.15)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "16px",
          padding: "14px",
          width: "70px",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
          color: "#fff",
          textShadow: "0 0 10px rgba(255,255,255,0.55)",
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 89, 255, 0.3), rgba(0, 194, 255, 0.25))",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "800" }}>
          {(b.value || "00").replace(/[a-z]/gi, "")}
        </div>
        <div style={{
          fontSize: "12px",
          marginTop: "4px",
          opacity: 0.85,
          fontWeight: "600",
        }}>
          {b.label}
        </div>
      </div>
    ))}
  </div>

</div>

             

            </div>
          </div>
        </TiltCard>
      </section>

      <section style={{marginTop:40}} aria-labelledby="cards">
        <h2 id="cards">Events</h2>
        <div className="grid grid-3">
          {data.cards.map((c,i)=>(
            <button key={i} className="tilt" style={{all:'unset'}} onClick={()=>{setIdx(i); setOpen(true)}}>
              <div className="tilt-inner card" style={{padding:'12px'}}>
                <img src={c.img} alt={c.title} loading="lazy" style={{borderRadius:'12px'}}/>
                <div style={{padding:'8px 6px 12px 6px'}}><strong>{c.title}</strong></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section style={{marginTop:40}} aria-labelledby="gallery">
        <h2 id="gallery">Gallery</h2>
        <div className="grid grid-3">
          {data.gallery.map((src,i)=>(
            <button key={i} className="card" style={{all:'unset'}} onClick={()=>{setIdx(data.cards.length+i); setOpen(true)}}>
              <img src={src} alt={"Gallery image "+(i+1)} loading="lazy" style={{borderRadius:'12px'}}/>
            </button>
          ))}
        </div>
      </section>

      <Lightbox open={open} images={all} index={idx}
        onClose={()=>setOpen(false)}
        onMove={(d)=> setIdx(v => (v + d + all.length) % all.length)}
      />
    </div>
  )
}
