import { FunctionComponent, useState, useCallback, memo } from 'react'

import Link from 'next/link'

import { Transition } from '@headlessui/react'

import { Menu } from '../../core/components/icons/menu'
import { X } from '../../core/components/icons/x'
import { Home } from '../../core/components/icons/home'
import { InformationCircle } from '../../core/components/icons/informationCircle'
import { Archive } from '../../core/components/icons/archive'

export const AppHeader: FunctionComponent = memo(props => {
  const [menuShow, setMenuShow] = useState<boolean>(false)
  const toggleMenuShow = useCallback(() => setMenuShow(o => !o), [])

  const [shorthand, setShorthand] = useState<boolean>(false)
  const toggleShorthand = useCallback(() => setShorthand(o => !o), [])

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1 lg:flex">
            <button
              className="font-bold text-2xl text-gray-800 cursor-pointer"
              onClick={toggleShorthand}
            >
              {shorthand ? 'NNN' : 'Nice Nut November'}
            </button>
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
            <Link href="/archive">
              <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                Archives
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
              href="https://next.h.rayriffy.com"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Try alpha
            </a>
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="https://h.rayriffy.com"
                className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
                    <button
                      className="font-bold text-2xl text-gray-800"
                      onClick={toggleShorthand}
                    >
                      {shorthand ? 'NNN' : 'Nice Nut November'}
                    </button>
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
                <div>
                  <nav className="grid grid-cols-1 gap-7">
                    <Link href="/">
                      <a className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                          <Home className="h-6 w-6" />
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Home
                        </div>
                      </a>
                    </Link>
                    <Link href="/archive">
                      <a className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                          <Archive className="h-6 w-6" />
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Archives
                        </div>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                          <InformationCircle className="h-6 w-6" />
                        </div>
                        <div className="text-base leading-6 font-medium text-gray-900">
                          About
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  >
                    About
                  </a>
                </div> */}
                <div className="space-y-6">
                  <span className="w-full flex rounded-md shadow-sm">
                    <a
                      href="https://h.rayriffy.com"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                    >
                      Riffy H
                    </a>
                  </span>
                  <p className="text-center text-base leading-6 font-medium text-gray-500">
                    Liveing on the edge?
                    <a
                      href="https://next.h.rayriffy.com"
                      className="ml-1 text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                    >
                      Try my alpha version
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
})
