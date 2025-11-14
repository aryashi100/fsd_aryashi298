import React from 'react'

const items = ['Google','•','On Campus','•','DEVELOPER','•','Google','•','On Campus','•','DEVELOPER']
export default function Marquee(){
  return (
    <div aria-hidden="true">
      <div className="container" style={{padding:'0'}}>
        <div className="marquee" role="img" aria-label="Google • On Campus • DEVELOPER">
          {[...items, ...items].map((t,i)=>(<span key={i} style={{opacity:.9}}>{t}</span>))}
        </div>
      </div>
    </div>
  )
}
