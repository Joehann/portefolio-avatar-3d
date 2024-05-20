import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Static from "./Static"
import Jujitsu from "./Jujitsu"
import OrchestraConductor from "./OrchestraConductor"
import Supporter from "./Supporter"

const Avatar = ({ avatar = "justBreath" }) => {
  const avatars = {
    justBreath: Static,
    jujitsu: Jujitsu,
    orchestraConductor: OrchestraConductor,
    supporter: Supporter,
  }

  const AvatarComponent = avatars[avatar] ?? Static
  return (
    <Canvas camera={{ position: [-0.8, 1, 2.5], fov: 50 }}>
      <ambientLight intensity={3} />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -1, 0]}>
        <AvatarComponent />
      </group>
      <OrbitControls enableZoom={false} />
      <Environment preset="apartment" />
    </Canvas>
  )
}

export default Avatar
