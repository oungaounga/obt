/** @format */
import {useContext} from 'react'
import {BookOptionsContext} from '../../../SearchBar'
import {CheckIcon} from '../../../../icons'

export default function OneWay(props) {
  const {toggle, setToggle} = props.toggle
  const {bookOptions: data, setBookOptions: set} =
    useContext(BookOptionsContext)

  const oneWayChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        toggle.oneWay ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={() => {
        setToggle({
          oneWay: !toggle.oneWay,
          adult: false,
        })
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
      className="relative flex gap-1"
      onClick={() => {
        setToggle({
          oneWay: !toggle.oneWay,
          adult: false,
        })
      }}
    >
      <p className="inline hover:cursor-pointer text-sm text-[#132968] ">
        {data.roundtrip ? 'Round trip' : 'One-way'}
      </p>
      {oneWayChevron}
      {toggle.oneWay && (
        <div className="absolute select-none top-[1.5rem] w-[8rem] bg-white rounded text-black z-40 shadow-lg">
          <div
            className="flex hover:bg-neutral-200 w-full pl-[0.5rem] pr-[1rem] p-[0.5rem] gap-[3px] h-fit rounded-t-md"
            onClick={() => {
              set({...data, roundtrip: false})
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
            <p className={`w-full ${data.roundtrip && 'font-bold'}`}>
              Round trip
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
