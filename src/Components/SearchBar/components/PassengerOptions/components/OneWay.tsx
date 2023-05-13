/** @format */
import React, {useContext, useRef} from 'react'
import {CSSTransition} from 'react-transition-group'
import {BookOptionsContext} from '../../../SearchBar'
import {formatDateForInput} from '../../DatePicker/DatePicker'
import {ToggleContext} from '../../../../../App'
import {CheckIcon} from '../../../../icons'
import dayjs from 'dayjs'

export default function OneWay(props) {
  const {toggle, setToggle} = useContext(ToggleContext)
  const {bookOptions: data, setBookOptions: set} =
    useContext(BookOptionsContext)
  const ref = useRef(null)
  const oneWayChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        toggle === 4 ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={(e) => {
        e.stopPropagation()
        setToggle(toggle !== 4 ? 4 : 0)
        console.log('one way : ', toggle)
      }}
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )

  return (
    <div
      className="relative flex gap-1 z-40 bg-white"
      onClick={(e) => {
        e.stopPropagation()
        setToggle(toggle !== 4 && 4)
        console.log('one way ', toggle)
      }}
    >
      <p className="inline hover:cursor-pointer text-sm text-[#132968] ">
        {data.roundtrip ? 'Round trip' : 'One-way'}
      </p>
      {oneWayChevron}
      <CSSTransition
        nodeRef={ref}
        in={toggle === 4}
        timeout={300}
        classNames="fallfade"
        unmountOnExit
      >
        <div
          className="absolute select-none top-[1.5rem] w-[8rem] bg-white rounded text-black z-40 shadow-lg"
          ref={ref}
        >
          <div
            className="flex hover:bg-neutral-200 w-full pl-[0.5rem] pr-[1rem] p-[0.5rem] gap-[3px] h-fit rounded-t-md"
            onClick={() => {
              set({...data, roundtrip: false, return: '', rDateObj: {}})
            }}
          >
            <CheckIcon
              className={`${data.roundtrip ? 'invisible' : 'block'}`}
            />
            <p className={`w-full ${!data.roundtrip && 'font-bold'}`}>
              One way
            </p>
          </div>
          <div
            className="flex hover:bg-neutral-200 w-full pl-[0.5rem] pr-[1rem] p-[0.5rem] gap-[3px] h-fit rounded-b-md"
            onClick={() => {
              set({...data, roundtrip: true})
            }}
          >
            <CheckIcon
              className={`${data.roundtrip ? 'block' : 'invisible'}`}
            />
            <p
              className={`w-full ${data.roundtrip && 'font-bold'}`}
              onClick={(e) => {
                e.stopPropagation()
                let add = dayjs().add(7, 'day')
                set({
                  ...data,
                  roundtrip: true,
                  return: formatDateForInput(add),
                  rDateObject: add,
                })
                setToggle(0)
              }}
            >
              Round trip
            </p>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
