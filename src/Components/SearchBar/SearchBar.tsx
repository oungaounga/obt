/** @format */
import React, {useState} from 'react'
import SearchInput from '../../SearchInput'

// Icons
const updownarrowsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className=" self-center fill-[#5E90CC]"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
    />
  </svg>
)
const circleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className=" fill-neutral-400 self-center"
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
)
const positionIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className="fill-neutral-400 self-center "
    viewBox="0 0 16 16"
  >
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
)
const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className="fill-[#5E90CC]"
    viewBox="0 0 16 16"
  >
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
  </svg>
)
// const downchevronIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     fill="currentColor"
//     className="self-center inline fill-neutral-400 hover:cursor-pointer"
//     viewBox="0 0 16 16"
//   >
//     <path
//       fill-rule="evenodd"
//       d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
//     />
//   </svg>
// )
const calendarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className=" fill-neutral-400"
    viewBox="0 0 16 16"
  >
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
  </svg>
)
// inline-flex items-center
const toggleIcon = (
  <div>
    <label className="relative mb-5  cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="w-9 h-5  peer-focus:outline-none  peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#5E90CC]"></div>
    </label>
  </div>
)
const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    className="fill-[#5E90CC] hover:cursor-pointer"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
)
const minusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    className="fill-[#5E90CC] hover:cursor-pointer"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
  </svg>
)
const cardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className="fill-[#132968]"
    viewBox="0 0 16 16"
  >
    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
  </svg>
)
const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    className="fill-[#132968]"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
)

export default function SearchBar(props) {
  const [oneWay, setOneWay] = useState(false)
  const [adult, setAdult] = useState(false)
  const oneWayChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        oneWay ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={() => {
        setAdult(false)
        setOneWay(!oneWay)
      }}
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
  const adultChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        adult ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={() => {
        setOneWay(false)
        setAdult(!adult)
      }}
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
  return (
    <>
      <div id="searchBar" className="relative z-10 flex justify-center">
        <div className="w-full h-full bg-white rounded-md shadow-md max-w-[75vw] flex flex-col gap-[1rem] p-[1rem]">
          <div className="w-full bg-slate-500 relative flex gap-2">
            <div className="relative flex gap-1">
              <p className="inline hover:cursor-pointer">One-way</p>
              {oneWayChevron}
              {oneWay && (
                <div className="absolute top-[1.5rem] w-[8rem] bg-white rounded text-black z-40 shadow-lg">
                  <div className="flex hover:bg-neutral-200 w-full pl-[1rem] pr-[1rem] p-[0.5rem] rounded-t-md">
                    {checkIcon}
                    <p className="w-full text-end font-bold">One way</p>
                  </div>
                  <div className="flex hover:bg-neutral-200 w-full pl-[1rem] pr-[1rem] p-[0.5rem] rounded-b-md">
                    <p className="w-full text-end">Round trip</p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative flex gap-1">
              <span className="inline">1 Adult, No discount card</span>
              {adultChevron}
              {adult && (
                <div
                  id="personConfig"
                  className="absolute top-[1.5rem] p-[1rem] w-[22rem] bg-white rounded text-black z-40 shadow-lg"
                >
                  <div className="flex flex-col gap-3 divide-y divide-y-neutral-300">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-lg ">Adults</p>
                        <p className="text-sm text-neutral-400">26+ years</p>
                      </div>
                      <div className="flex justify-between gap-5">
                        {plusIcon}
                        <span className="text-md w-[0.5rem] font-bold h-full self-center">
                          1
                        </span>
                        {minusIcon}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-lg ">Youth</p>
                        <p className="text-sm text-neutral-400">0-25 years</p>
                      </div>
                      <div className="flex justify-between gap-5">
                        {plusIcon}
                        <span className="text-md w-[0.5rem] font-bold h-full self-center">
                          0
                        </span>
                        {minusIcon}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-lg ">Senior</p>
                        <p className="text-sm text-neutral-400">58+ years</p>
                      </div>
                      <div className="flex justify-between gap-5">
                        {plusIcon}
                        <span className="text-md w-[0.5rem] font-bold h-full self-center">
                          0
                        </span>
                        {minusIcon}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-[0.5rem]">
                      <div className="flex gap-1 items-center text-[#132968]">
                        {cardIcon}
                        <span>Add discount card</span>
                        {infoIcon}
                      </div>
                      {toggleIcon}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex bg-slate-500">from city airpot</div>
          <div className="w-full flex bg-slate-500">find my accomodation</div>
        </div>
      </div>
      {/* <SearchInput placeholder="From ?" />
      <SearchInput placeholder="To ?" /> */}
    </>
  )
}
