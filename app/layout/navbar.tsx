import Image from "next/image";
import fxeLogo from "@/public/FXLOGO.png";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="absolute top-0 z-[100] px-5 pt-3 w-full">
      <div className="flex justify-between items-center w-full">
        <Image className="object-cover size-10" src={fxeLogo} alt="logo" />
        <Menu className="text-white" />
      </div>
    </div>
  );
}
