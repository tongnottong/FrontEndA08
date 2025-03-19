import Link from "next/link";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 h-[50px] bg-white border-t border-b border-gray-300 flex flex-row justify-end items-center px-4">
      {/* Booking Link */}
      <div className="w-[120px] text-center text-black-500 text-base font-sans font-bold">
        <TopMenuItem title="Booking" pageRef="/booking" />
      </div>

      {/* Logo */}
      <Image src="/logo.png" alt="logo" width={50} height={50} className="h-full w-auto" />

      
    </div>
  );
}
