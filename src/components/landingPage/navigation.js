import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // if (scrollpos > 10) {
  //   header.classList.add("bg-white");
  //   navaction.classList.remove("bg-white");
  //   navaction.classList.add("gradient");
  //   navaction.classList.remove("text-gray-800");
  //   navaction.classList.add("text-white");
  //   //Use to switch toggleColour colours
  //   for (var i = 0; i < toToggle.length; i++) {
  //     toToggle[i].classList.add("text-gray-800");
  //     toToggle[i].classList.remove("text-white");
  //   }
  //   header.classList.add("shadow");
  //   navcontent.classList.remove("bg-gray-100");
  //   navcontent.classList.add("bg-white");
  // } else {
  //   header.classList.remove("bg-white");
  //   navaction.classList.remove("gradient");
  //   navaction.classList.add("bg-white");
  //   navaction.classList.remove("text-white");
  //   navaction.classList.add("text-gray-800");
  //   //Use to switch toggleColour colours
  //   for (var i = 0; i < toToggle.length; i++) {
  //     toToggle[i].classList.add("text-white");
  //     toToggle[i].classList.remove("text-gray-800");
  //   }

  //   header.classList.remove("shadow");
  //   navcontent.classList.remove("bg-white");
  //   navcontent.classList.add("bg-gray-100");
  // }

  // const rootPath = `${__PATH_PREFIX__}/`
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <nav
      id="header"
      className={`${
        offset > 10 ? "bg-white shadow" : ""
      } fixed w-full z-30 top-0 text-white`}
    >
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <a
            className={`${offset > 10 ? "text-gray-800" : "text-white"} toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
            href="#"
          >
            LANDING
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            offset > 10 ? "bg-white" : "bg-gray-100"
          } w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a
                class="inline-block py-2 px-4 text-black font-bold no-underline"
                href="#"
              >
                Active
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className={`${
              offset > 10 ? "gradient text-white" : "text-gray-800 bg-white"
            } mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
          >
            Action
          </button>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

export default Layout
