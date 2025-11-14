import React from 'react'
export default function FlipCard({front, back}){
  return (
    <div className="flip" tabIndex="0" role="button" aria-pressed="false" aria-label="flip card">
      <div className="flip-inner">
        <div className="flip-face card" style={{display:'grid',placeItems:'center'}}>{front}</div>
        <div className="flip-face flip-back card">{back}</div>
      </div>
    </div>
  )
}
