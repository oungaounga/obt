/** @format */

import {useState} from 'react'
import {ac} from './autoC'
import DateToggler from './DateToggler'
import SearchCityInput from './SearchCityInput'

const popularCities = [
  {
    local_name: 'Londres, England, United Kingdom',
    unique_name: 'london',
    nb_search: 14576,
  },
  {
    local_name: 'Paris, Île-de-France, France',
    unique_name: 'paris',
    nb_search: 15719,
  },
  {
    local_name: 'Saint-Jean-de-Luz, Nouvelle-Aquitaine, France',
    unique_name: 'saint-jean-de-luz',
    nb_search: 899,
  },
  {
    local_name: "Marseille, Provence-Alpes-Côte d'Azur, France",
    unique_name: 'marseille',
    nb_search: 186,
  },
  {
    local_name: 'Montpellier, Occitanie, France',
    unique_name: 'montpellier',
    nb_search: 31,
  },
]
const cities = [
  'Paris, Île-de-France, France',
  'Londres, England, United Kingdom',
  'Saint-Jean-de-Luz, Nouvelle-Aquitaine, France',
  "Marseille, Provence-Alpes-Côte d'Azur, France",
  'Montpellier, Occitanie, France',
  'Les Contamines-Montjoie, Auvergne-Rhône-Alpes, France',
  'Poreč, Istarska županija, Hrvatska',
  'Parma, Emilia-Romagna, Italia',
  'Parempuyre, Nouvelle-Aquitaine, France',
  'Paray-le-Monial, Bourgogne-Franche-Comté, France',
  'Pärnu, Pärnu, Eesti',
  'partaloa, Andalucía, España',
  'Parsac-Gouzon, Nouvelle-Aquitaine, France',
  'Parsac-Rimondeix, Nouvelle-Aquitaine, France',
  'Parent, Auvergne-Rhône-Alpes, France',
  'Aveiro, Centro, Portugal',
]

export default function SearchBarNR(props) {
  //   let cityitems = {popularCities.map((item) => ( <li>{item.local_name}</li>))}
  const [toggle, setToggle] = useState(null)
  const [input, setInput] = useState({from: '', to: ''}) //la les types seront utiles psq on veut que des string
  const [showCitiesList, setShowCitiesList] = useState([
    'Paris, Île-de-France, France',
    'Londres, England, United Kingdom',
    'Saint-Jean-de-Luz, Nouvelle-Aquitaine, France',
    "Marseille, Provence-Alpes-Côte d'Azur, France",
    'Montpellier, Occitanie, France',
  ])
  let list = (
    <div className="absolute w-[30rem] top-[3rem] left-[-0.7rem] bg-white shadow-xl rounded max-h-[20rem] overflow-scroll z-40">
      <ul className="list-none list-inside">
        {showCitiesList.map((item, key) => (
          <li
            key={key}
            className="p-[0.7rem] m-0 text-lg hover:bg-neutral-100"
            onClick={async () => {
              await setInput(
                toggle == 1 ? {...input, from: item} : {...input, to: item}
              )
              setToggle(null)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
  let list2 = showCitiesList.map((item, key) => (
    <option
      key={key}
      className="pl-[0.7rem] pr-[0.7rem] hover:bg-neutral-400"
      onClick={async () => {
        await setInput(
          toggle == 1 ? {...input, from: item} : {...input, to: item}
        )
        setToggle(null)
      }}
    >
      {item}
    </option>
  ))
  return (
    <>
      <div
        className={`border-solid border-[1px] rounded-md w-fit text-black ${props.className}`}
      >
        <div className="flex m-[1rem] gap-y-0.5">
          <form className=" flex flex-col m-[1rem] gap-0.5">
            {/* <div className="flex ml-[1rem] gap-[0.5rem]">
              <div className="flex gap-[2px]">
                <p className="text-sm text-neutral-500">One-way</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down self-center fill-neutral-400 hover:cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
              <div className="flex gap-[2px]">
                <p className="text-sm">1 Adult, No Discount Card</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down self-center fill-neutral-400 hover:cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div> */}
            <div className="flex m-[1rem] gap-[1rem]">
              <div className="relative rounded-md p-2 bg-neutral-100 flex gap-[3px]">
                <div className="relative">{toggle === 1 && list}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="bi bi-arrow-down-up self-center fill-[#5E90CC]"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
                <input
                  className="bg-neutral-100"
                  placeholder="from: City, Station or Airport"
                  onFocus={(e) => {
                    !toggle || toggle == 2 ? setToggle(1) : setToggle(null)
                    e.target.select()
                  }}
                  onChange={(e) => {
                    setInput({...input, from: e.target.value})
                    setShowCitiesList(ac(e.target.value, cities))
                  }}
                  onBlur={(e) => {
                    setTimeout(() => {
                      e.relatedTarget ? setToggle(2) : setToggle(null)
                    }, 500)
                  }}
                  value={input.from}
                  type="text"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="bi bi-record-circle-fill fill-neutral-400 self-center"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <div className="relative rounded-md p-2 bg-neutral-100 flex ">
                {toggle === 2 && list}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="bi bi-geo-alt-fill fill-neutral-400 self-center "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <input
                  className="rounded-md p-2 bg-neutral-100"
                  placeholder="to: City, Station or Airport"
                  onFocus={(e) => {
                    !toggle || toggle == 1 ? setToggle(2) : setToggle(null)
                    e.target.select()
                  }}
                  onChange={(e) => {
                    setInput({...input, to: e.target.value})
                    setShowCitiesList(ac(e.target.value, cities))
                  }}
                  value={input.to}
                  onBlur={(e) => {
                    setTimeout(() => {
                      e.relatedTarget ? setToggle(1) : setToggle(null)
                    }, 500)
                  }}
                />
              </div>
              <DateToggler className="rounded-md p-2 bg-neutral-100" />
              <DateToggler className="rounded-md p-2 bg-neutral-100" />
              <button className="rounded-md p-2 bg-[#FA6B6B] w-[10rem] text-neutral-100 justify-self-end">
                Search
              </button>

              <div className="flex ml-[0.5rem] gap-2">
                {/* <input list="cities" className="text-black" />
                <datalist
                  id="cities"
                  className="mt-[0.5rem] w-[30rem] bg-neutral-800 text-xl rounded p-[0.3rem] "
                >
                  {list2}
                </datalist> */}
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5  peer-focus:outline-none  peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#5E90CC]"></div>
                </label>
              </div>
              <p className="text-sm">Find my accomodation</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
