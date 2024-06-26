import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import Logo from '@/assets/Logo.png'
import Link from "./Link";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";



interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";


  return (
    <nav>
      <div className={`${navbarBackground} flex items-center justify-between fixed top-0 z-40 w-full py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            {/* Left Side  */}
            <img src={Logo} alt="logo" />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between w-full flex-1">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className="flex items-center justify-end gap-8 flex-1">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
                <div>

                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 border-none"
                onClick={() => { setIsMenuToggled(!isMenuToggled) }}
                aria-label="mobile-nav"
              >
                <Bars3Icon className="h-5 w-6 text-white" />
              </button>
            )}

          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl transition duration-300">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button className="border-none bg-transparent" onClick={() => { setIsMenuToggled(!isMenuToggled) }}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar