import React from 'react'
import site from '../data/site.json'

export default function Navbar(){
  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div className="nav-inner" role="menubar">
        <div className="nav-brand" aria-label="Brand">
          <span aria-hidden="true">⚪</span> {site.brand}
        </div>
        <div className="nav-links">
          {site.nav.map(n => (
            <a key={n.href} href={n.href} role="menuitem"
               className={location.hash===n.href ? 'active' : ''}>
              {n.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href={site.cta.href}>{site.cta.label}</a>
      </div>
    </nav>
  )
}
