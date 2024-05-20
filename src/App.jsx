import "./App.css"
import { useState } from "react"
import Avatar from "./components/Avatars"
import Logo from "./components/Logo"
import Contact from "./components/Contact"
import AvatarActions from "./components/AvatarActions"

function App() {
  const [selectedAvatar, setSelectedAvatar] = useState("justBreath")

  return (
    <main className="portfolio">
      <div className="portfolio-background" />
      <Logo />
      <Contact />

      <div className="layout">
        <AvatarActions
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
        />
        <div className="avatar">
          <Avatar avatar={selectedAvatar} />
        </div>
        <div className="identity">
          <h1>Johann Pouponnot</h1>
          <h2>Fullstack developer</h2>
          <p>TS | React | Next | Node | SQL</p>
        </div>
        <a
          href="https://www.canva.com/design/DAGEQn7UnjQ/Vd19KutmyTrcbQvYRxsBgA/view?utm_content=DAGEQn7UnjQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          className="cv"
          target="_blank"
        >
          Curriculum Vitæ
        </a>
        <a href="https://github.com/Joehann" className="github" target="_blank">
          <img src="/svg/github.svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/johann-pouponnot-618788173/"
          className="linkedin"
          target="_blank"
        >
          <img src="/svg/linkedin.svg" />
        </a>
        <a
          href="https://medium.com/@codewithbeethoven"
          className="medium"
          target="_blank"
        >
          <img src="/svg/medium.svg" />
        </a>
      </div>
      <footer>
        <p>All rights reserved - © 2024</p>
      </footer>
    </main>
  )
}

export default App
