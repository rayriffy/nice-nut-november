import { FunctionComponent, useState, useCallback } from 'react'

import Link from 'next/link'

import { Transition } from '@headlessui/react'

import { Menu } from '../../core/components/icons/menu'
import { X } from '../../core/components/icons/x'

export const AppHeader: FunctionComponent = props => {
  const [menuShow, setMenuShow] = useState<boolean>(false)
  const toggleMenuShow = useCallback(() => setMenuShow(o => !o), [])

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1 lg:flex">
            <a href="#" className="flex">
              <span className="font-bold text-2xl">Nice Nut November</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenuShow}
              type="button"
              aria-label="Menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/">
              <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                Home
              </a>
            </Link>
          </nav>
          <nav className="hidden md:flex space-x-10">
            <Link href="/about">
              <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                About
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Riffy H (alpha)
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Riffy H
              </a>
            </span>
          </div>
        </div>
      </div>

      <Transition
        show={menuShow}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenuShow}
                      type="button"
                      aria-label="Close"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Docs
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Enterprise
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Help Center
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Security
                  </a>
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    Events
                  </a>
                </div>
                <div className="space-y-6">
                  <span className="w-full flex rounded-md shadow-sm">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    >
                      Sign up
                    </a>
                  </span>
                  <p className="text-center text-base leading-6 font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
