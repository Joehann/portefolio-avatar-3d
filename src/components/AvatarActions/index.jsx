const AvatarActions = ({ selectedAvatar, setSelectedAvatar }) => {
  const avatarButtons = [
    { name: "justBreath", label: "Just breath" },
    { name: "orchestraConductor", label: "Maestro" },
    { name: "jujitsu", label: "Jujitsu" },
    { name: "supporter", label: "Supporter" },
  ]
  return (
    <div className="avatar-actions">
      {avatarButtons.map((button) => (
        <button
          key={button.label}
          onClick={() => setSelectedAvatar(button.name)}
          className={selectedAvatar === button.name ? "selected" : ""}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default AvatarActions
