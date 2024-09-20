import Image from "next/image";
import { LandingPage } from "@/components/landing-page";
import { div } from "three/webgpu";

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
