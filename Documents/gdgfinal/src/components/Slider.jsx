import React, {useEffect, useRef, useState} from 'react'

export default function Slider({items}){
  const [i,setI] = useState(0)
  const wrap = useRef(null)
  const total = items.length
  const to = (n)=> setI((n+total)%total)
  const prev = ()=> to(i-1)
  const next = ()=> to(i+1)

  useEffect(()=>{
    const onKey = (e)=>{
      if(e.key==='ArrowLeft') prev()
      if(e.key==='ArrowRight') next()
    }
    wrap.current?.addEventListener('keydown', onKey)
    return ()=> wrap.current?.removeEventListener('keydown', onKey)
  },[i])

  return (
    <div className="slider" ref={wrap} tabIndex="0" aria-roledescription="carousel" aria-label="Testimonials">
      <div className="slides" style={{transform:`translateX(-${i*100}%)`, transition:'transform .4s'}}>
        {items.map((t,idx)=>(
          <div className="slide card" key={idx} style={{padding:'24px'}}>
            <blockquote style={{margin:0}}>
              <p style={{fontSize:'18px'}}>“{t.quote}”</p>
              <footer style={{color:'var(--muted)'}}>— {t.author}</footer>
            </blockquote>
          </div>
        ))}
      </div>
      <button className="prev" aria-label="Previous" onClick={prev}>‹</button>
      <button className="next" aria-label="Next" onClick={next}>›</button>
    </div>
  )
}
