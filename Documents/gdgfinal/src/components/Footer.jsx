import React from 'react'
export default function Footer(){
  return (
    <footer className="footer container" role="contentinfo">
      <div className="grid grid-3">
        <div>
          <strong>GDG On Campus</strong>
          <p style={{color:'var(--muted)'}}>© 2025 • Built with React & Vite.</p>
        </div>
        <div>
          <p><a href="#/">Home</a></p>
          <p><a href="#/events">Events</a></p>
          <p><a href="#/team">Team</a></p>
        </div>
        <div>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">LinkedIn</a></p>
          <p><a href="#">Facebook</a></p>
        </div>
      </div>
    </footer>
  )
}
