import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/logo.svg'
import { navigation } from '../utils/constants'

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white relative p-4">
      <nav
        className="flex items-center justify-between container mx-auto"
        aria-label="Global"
      >
        <a href="https://www.startupz.site/">
          <span className="sr-only">Your Company</span>
          <img className="w-[12.468rem] h-[2.991rem]" src={Logo} alt="" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex sm:gap-x-10 sm:items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                item.normal
                  ? "headerButton1 hover:text-light-blue"
                  : "headerButton2 hover:bg-light-blue hover:text-white duration-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-9">
          <div className="flex items-center justify-between">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="w-[12.468rem] h-[2.991rem]" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/10 border-t-2 border-black">
              {/* <div className="w-full bg-black h-1"></div> */}
              <div className="flex flex-col gap-4 mt-4">
                {navigation.map((item) => (
                  <div key={item.name} className='flex flex-col text-right'>
                    <a href={item.href} className="headerButton1 hover:text-light-blue duration-100 mb-4" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </a>
                    <hr className="w-full border-navbar" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
