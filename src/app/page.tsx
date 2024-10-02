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
        color={"#000"}
      />
      <div className="relative z-10 flex items-center gap-4 tracking-tight pointer-events-none ">
        <Radio width={80} height={80} />
        <span>Hritul.rs</span>
      </div>
    </div>
  );
}
