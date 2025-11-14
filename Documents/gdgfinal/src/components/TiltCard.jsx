import React, {useEffect, useRef, useState} from 'react'

export default function TiltCard({children, className='', maxTilt=10}){
  const ref = useRef(null)
  const [motionOK, setMotionOK] = useState(true)

  useEffect(()=>{
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = ()=> setMotionOK(!m.matches)
    update(); m.addEventListener?.('change', update)
    return ()=> m.removeEventListener?.('change', update)
  },[])

  useEffect(()=>{
    const el = ref.current
    if(!el || !motionOK) return
    const inner = el.querySelector('.tilt-inner')
    function onMove(e){
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rx = (py - .5) * -2 * maxTilt
      const ry = (px - .5) * 2 * maxTilt
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    }
    function reset(){ inner.style.transform = 'rotateX(0) rotateY(0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', reset)
    return ()=>{ el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', reset)}
  },[motionOK,maxTilt])

  return (
    <div ref={ref} className={`tilt ${className}`} tabIndex="0" aria-label="interactive tilt">
      <div className="tilt-inner card" style={{position:'relative'}}>
        <div className="tilt-shadow" aria-hidden="true"></div>
        {children}
      </div>
    </div>
  )
}
