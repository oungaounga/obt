/** @format */
import React, {useState, useRef} from 'react'
import {CSSTransition} from 'react-transition-group'

export default function TransitTest(props) {
  const [toggle, setToggle] = useState(false)
  const target = useRef(null)

  return (
    <div className="max-w-[75vw] p-[5rem] ml-[5rem] h-[20rem] bg-neutral-300 rounded-lg shadow-2xl gap-3 flex">
      <div className="mybutt flex self-center p-2 rounded-lg  bg-green-500 shadow-md h-1/2">
        <button
          onClick={(e) => {
            toggle ? setToggle(false) : setToggle(true)
          }}
        >
          Trigger
        </button>
      </div>

      <CSSTransition
        nodeRef={target}
        in={toggle}
        timeout={300}
        classNames="fallfade"
        unmountOnExit
      >
        <div
          ref={target}
          className="p-[1rem] bg-neutral-400  shadow-2xl rounded-xl"
        >
          <p className="text-small leading-none text-justify">
            {JSON.stringify(props.obj)}
          </p>
          <p>adult array len : {props.obj.passengers.adult.length}</p>
          <p>youth array len : {props.obj.passengers.youth.length}</p>
          <p>senio array len : {props.obj.passengers.senior.length}</p>
        </div>
      </CSSTransition>
    </div>
  )
}
