/** @format */

/*
 *
 *
 * TODO :
 * refactor CSSTransitions
 * Search button click, display errors etc
 *
 * Problem :
 *  - touch event on input
 *
 * */

// import {fetchCities} from './Foo'
import React, {useState, createContext} from 'react'
import SearchBar from './Components/SearchBar/SearchBar'
import Heading from './Components/Heading'
import {Spacer} from './Components/Spacer'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import PhoneNavbar from './Components/PhoneNavbar/PhoneNavbar'

export const ToggleContext = createContext(null)

function App() {
  const [toggle, setToggle] = useState(0)

  /**
   * shouldn't have set toggle to numbers
   *
   * 0 : non pop ups displayed
   * 1 : first click (departure city)
   * 2 : second click (arrival city)
   * 3 : departure date
   * 17 : return date : alphabet.indexOf('R') = 17
   * 4 : One-way or Round pop over
   * 5 : passengers, how many, any discount cards ?
   */

  return (
    <ToggleContext.Provider value={{toggle, setToggle}}>
      <div
        id="background"
        className="w-[100vw] h-[99vh] relative z-0 hover:cursor-default "
        onClick={(e) => {
          e.stopPropagation()
          setToggle(0)
        }}
      >
        <div className="relative">
          <Banner />
          <Navbar />
          <Heading />
          <br />
          <SearchBar />
          <Spacer y={1} />
        </div>
      </div>
      <PhoneNavbar />
    </ToggleContext.Provider>
  )
}

export default App
