import "./contact.css"
import { useState } from "react"
import ContactContent from "./ContactContent"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`contact ${isOpen ? "contact-open" : "contact-close"}`}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      {!isOpen ? (
        <img src="/svg/send-email.svg" alt="send email icon" />
      ) : (
        <div onClick={() => setIsOpen(false)}>
          <img src="/svg/cross.svg" alt="cross close icon" />
        </div>
      )}
      {!isOpen ? (
        <p className="click-to-contact">Click</p>
      ) : (
        <ContactContent isMenuOpen={isOpen} />
      )}
    </div>
  )
}

export default Contact
