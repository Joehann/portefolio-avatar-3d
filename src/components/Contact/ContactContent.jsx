import "./contact- content.css"

const ContactContent = ({ isMenuOpen = false }) => {
  return (
    <div className="form-container">
      <h1 className={isMenuOpen ? "title-open" : ""}>Drop me a line.</h1>
      <p className={isMenuOpen ? "p1-open" : ""}>
        The best way is to contact me directly on&nbsp;
        <a
          href="https://www.linkedin.com/in/johann-pouponnot-618788173/"
          target="_blank"
        >
          Linkedin.
        </a>
      </p>
      <p className={isMenuOpen ? "p2-open" : ""}>
        You can also send me an email at&nbsp;
        <a href="mailto:jpouponnot@outlook.fr">jpouponnot@outlook.fr</a>
      </p>
    </div>
  )
}

export default ContactContent
