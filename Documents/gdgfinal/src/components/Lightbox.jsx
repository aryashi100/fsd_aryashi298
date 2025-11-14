import React, {useEffect, useRef} from 'react'

export default function Lightbox({open, images=[], index=0, onClose, onMove}){
  const back = useRef(null)
  useEffect(()=>{
    if(!open) return
    const onKey = (e)=>{
      if(e.key==='Escape') onClose?.()
      if(e.key==='ArrowRight') onMove?.(1)
      if(e.key==='ArrowLeft') onMove?.(-1)
    }
    document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  },[open,onClose,onMove])

  if(!open) return null
  const src = images[index]
  return (
    <div className="lightbox-backdrop" onClick={onClose} ref={back} role="dialog" aria-modal="true" aria-label="image viewer">
      <img className="lightbox-content" src={src} alt={`Image ${index+1}`} onClick={e=>e.stopPropagation()} />
      <div className="lightbox-controls" aria-hidden="false">
        <button className="lightbox-btn" onClick={()=>onMove(-1)} aria-label="Previous image">Prev</button>
        <button className="lightbox-btn" onClick={onClose} aria-label="Close">Close</button>
        <button className="lightbox-btn" onClick={()=>onMove(1)} aria-label="Next image">Next</button>
      </div>
    </div>
  )
}
