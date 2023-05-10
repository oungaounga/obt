/** @format */
import {useState} from 'react'

export default function SearchCityInput(props) {
  let {whichToggle, setWhichToggle} = props
  const [toggle, setToggle] = useState(null)
  const [input, setInput] = useState({from: '', to: ''})
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
                whichToggle == 1 ? {...input, from: item} : {...input, to: item}
              )
              setWhichToggle(null)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

  const upDownArrowIcon = (
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
  )
  const gpsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      className="bi bi-geo-alt-fill fill-neutral-400 self-center "
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  )
  const circleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="bi bi-record-circle-fill fill-neutral-400 self-center"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  )
  // const {
  //   toggle,
  //   setToggle,
  //   input,
  //   setInput,
  //   list,
  //   showCitiesList,
  //   setShowCitiesList,
  // } = props.methods
  let toggler = props.type == 'from' ? 2 : 1
  return (
    <div className="relative rounded-md p-2 bg-neutral-100 flex gap-[3px]">
      <div className="relative">{toggle === 1 && list}</div>
      {/* <svg
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
      </svg> */}
      {props.type === 'from' ? upDownArrowIcon : gpsIcon}
      <input
        className="bg-neutral-100"
        placeholder={props.placeholder}
        onFocus={(e) => {
          !toggle || toggle === toggler
            ? setWhichToggle(toggle == 2 ? 1 : 2)
            : setWhichToggle(null)
          e.target.select()
        }}
        onChange={(e) => {
          setInput({...input, from: e.target.value})
          setShowCitiesList(ac(e.target.value, cities))
        }}
        onBlur={(e) => {
          setTimeout(() => {
            e.relatedTarget ? setWhichToggle(2) : setWhichToggle(null)
          }, 500)
        }}
        value={input.from}
        type="text"
      />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-record-circle-fill fill-neutral-400 self-center"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg> */}
      {props.type === 'from' && circleIcon}
    </div>
  )
}
