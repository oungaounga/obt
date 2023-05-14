/** @format */
import {CSSTransition} from 'react-transition-group'
import {useRef, useContext, useState} from 'react'
import SlidePanel from './components/SlidePanel'
import ControlPanel from './components/ControlPanel'
import {ListPanel, currencies, languages} from './components/ListPanel'

import {ToggleContext} from '../../App'
import {closeIcon, signalIcon} from '../icons'
import {rightchevronIcon} from '../icons'

const TestP = ({ref, set, obj, openkey, closekey, name}) => {
  const openprop = Object.keys(obj)[openkey]
  const closeprop = Object.keys(obj)[closekey]
  const open = JSON.parse(JSON.stringify(obj), (key, value) => {
    return key == openprop ? (value = true) : value
  })
  const close = JSON.parse(JSON.stringify(obj), (key, value) => {
    return key == closeprop ? (value = false) : value
  })
  return (
    <div
      className=" absolute w-screen h-screen backdrop-blur-md flex flex-col top-0 left-0"
      ref={ref}
    >
      <p
        className="text-lg text-center m-[1rem]"
        onClick={() => {
          console.log(closeprop)
        }}
      >
        {name}
      </p>
      <Pb handle={() => set({...open})} tag="forward" />
      <Pb handle={() => set({...close})} tag="back" />
    </div>
  )
}

const Pb = ({handle, tag}) => {
  return (
    <button className="m-[1rem] p-[1rem] font-bold rounded-md" onClick={handle}>
      {tag}
    </button>
  )
}

const CurrencyPanel = ({ref, pannel, set}) => {
  return (
    <>
      <div className="absolute bg-white w-full h-full top-0 left-0">
        <div className="relative w-full h-full flex justify-between items-center p-[1rem]">
          <div
            className="w-fit"
            onClick={() => {
              set(1)
            }}
          >
            <p className="font-bold text-4xl text-[#132968]">Currency</p>
          </div>
          <div
            className="w-fit m-[0.5rem]"
            onClick={() => {
              set(0)
            }}
          >
            {closeIcon}
          </div>
          <SlidePanel
            ref={ref}
            in={pannel == 1}
            render={() => <ListPanel ref={ref} list={currencies} />}
          />
        </div>
      </div>
    </>
  )
}

export default function PhoneNavbar(props) {
  const {toggle, setToggle} = useContext(ToggleContext)
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const [panel, setPanel] = useState(0)

  return (
    <>
      <CSSTransition
        nodeRef={ref0}
        in={toggle === 7}
        timeout={300}
        classNames="slide"
        mountOnEnter
        unmountOnExit
      >
        <>
          <div
            className="absolute w-screen h-screen bg-white divide-y-[1px] divide-y-neutral-200 top-0 left-0 flex flex-col justify-start "
            ref={ref0}
          >
            <ControlPanel which={{panel, setPanel}} />

            <div className="w-full  flex flex-col bg-white justify-between items-center p-[0.5rem] pl-[1rem] pr-[1rem]">
              <div className="flex w-full justify-between"></div>
            </div>
          </div>
        </>
      </CSSTransition>
      <SlidePanel
        ref={ref1}
        in={panel === 1}
        render={() => {
          return (
            <ListPanel ref={ref1} list={currencies} which={{panel, setPanel}} />
          )
        }}
      />
      <SlidePanel
        ref={ref2}
        in={panel === 2}
        render={() => {
          return (
            <ListPanel ref={ref2} list={languages} which={{panel, setPanel}} />
          )
        }}
      />
    </>
  )
}
