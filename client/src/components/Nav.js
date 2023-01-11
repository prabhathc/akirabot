import React from "react";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import icon from "../assets/icon.png"

const navigation = [
    { name: 'Premium', href: '#' },
]

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <div className="px-6 pt-6 lg:px-8">
                <div>
                <nav className="flex h-9 items-center justify-between" aria-label="Global">
                <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-20" src={icon} alt="" />
                  </a>
                </div>
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
                {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div> */}
                <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  <a
                    href="https://discord.com/api/oauth2/authorize?client_id=1061525982927917146&permissions=292463606326&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=bot%20identify%20guilds%20email"
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-pillred shadow-sm ring-1 ring-pillred hover:ring-gray-900/20"
                  >
                    Log in
                  </a>
                </div>
              </nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div className="flex h-9 items-center justify-between">
                        <div className="flex">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                            className="h-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                            />
                        </a>
                        </div>
                        <div className="flex">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </div>
                    </div>f
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        <div className="py-6">
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                            >
                            Log in
                            </a>
                        </div>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Dialog>
                </div>
            </div>
        </div>
    )
}