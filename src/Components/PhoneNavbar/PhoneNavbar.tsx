/** @format */
import {CSSTransition} from 'react-transition-group'
import {useRef, useContext, useState} from 'react'
import SlidePanel from './components/SlidePanel'
import ControlPanel from './components/ControlPanel'
import {ListPanel, currencies, languages} from './components/ListPanel'

import {ToggleContext} from '../../App'

export default function PhoneNavbar(props) {
  const {toggle} = useContext(ToggleContext)
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)

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
