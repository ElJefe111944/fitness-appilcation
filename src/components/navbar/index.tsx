import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'
import Link from "./Link";



interface Props { 
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {


  return (
    <nav>
      <div className={`flex items-center justify-between fixed top-0 z-30 w-full py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            {/* Left Side  */}
            <img src={Logo} alt="logo" />
            {/* Right Side */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-8 text-sm">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
              <div className="flex items-center justify-between gap-8">
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar