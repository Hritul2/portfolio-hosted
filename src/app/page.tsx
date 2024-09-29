import { RadiobuttonIcon as Radio } from "@radix-ui/react-icons";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center h-screen font-bold text-7xl gap-10">
      {/* Particles with dynamic color based on theme */}
      <Particles
        className="absolute inset-0"
        quantity={108}
        ease={100}
        color={"#fff"}
      />
      <div className="relative z-10 flex items-center gap-4 tracking-tight pointer-events-none bg-clip-text bg-gradient-to-b from-white to-blue-700/80 text-transparent">
        <Radio width={80} height={80} className="text-blue-400/80" />
        <span>Hritul.rs</span>
      </div>
    </div>
  );
}
