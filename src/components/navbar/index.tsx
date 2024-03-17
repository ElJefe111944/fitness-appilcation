import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'



type Props = {}

const Navbar = (props: Props) => {


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
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p>
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