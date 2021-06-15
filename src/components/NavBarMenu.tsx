/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition, Menu } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  PhoneIcon,
} from '@heroicons/react/solid';
import { Link } from 'gatsby';

export default function NavBarMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const hide = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', hide);

    return () => {
      window.removeEventListener('resize', hide);
    };
  });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="md:hidden">
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20">
          <button type="button" onClick={handleMenuClick}>
            <MenuIcon className="w-6 h-6 text-black" aria-hidden="true" />
          </button>
        </Menu.Button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden"
          open={open}
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-xs">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Menu
                      </Dialog.Title>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right bg-white divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/"
                                className={`${
                                  active
                                    ? 'bg-gray-500 text-white'
                                    : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                <HomeIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                  fill={active ? 'white' : 'gray'}
                                />
                                Home
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about"
                                className={`${
                                  active
                                    ? 'bg-gray-500 text-white'
                                    : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                <InformationCircleIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                  fill={active ? 'white' : 'gray'}
                                />
                                About
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/contact"
                                className={`${
                                  active
                                    ? 'bg-gray-500 text-white'
                                    : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                <PhoneIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                  fill={active ? 'white' : 'gray'}
                                />
                                Contact
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Menu>
  );
}
