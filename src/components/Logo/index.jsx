import { useState } from "react"
import "./logo.css"

const Logo = () => {
  const [hoverLogo, setHoverLogo] = useState(false)
  return (
    <div
      className="logo"
      onMouseEnter={() => setHoverLogo(true)}
      onMouseLeave={() => setHoverLogo(false)}
    >
      <img
        className="rotative-polygon"
        src="/logo/rotative-polygon.svg"
        alt="logo polygon"
      />
      <img
        className={`polygon ${hoverLogo ? "polygon-hover" : ""}`}
        src="/logo/polygon.svg"
        alt="logo polygon"
      />
      <p className="initials">JP</p>
    </div>
  )
}

export default Logo
