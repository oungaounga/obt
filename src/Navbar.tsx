/** @format */

const downChevronIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-chevron-down inline self-center ml-[0.5rem] mr-[0.5rem] fill-white hover:cursor-pointer"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
)
const americanFlag = (
  <img
    width="30"
    className="inline"
    alt="Flag of the United States"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/512px-Flag_of_the_United_States.svg.png"
  />
)

export default function Navbar(props) {
  return (
    <div
      id="navbar"
      className="z-40 relative text-white flex flex-col items-center"
    >
      <div className="flex max-w-[75vw] justify-between p-[1rem] xl:w-[75vw] ">
        <div className="flex gap-6">
          <span className="text-4xl font-bold ">omio</span>
          <div className="flex justify-between items-center text-sm gap-4">
            <span className="hover:cursor-pointer">Trains</span>
            <span className="hover:cursor-pointer">Buses</span>
            <span className="hover:cursor-pointer">Flights</span>
            <span className="hover:cursor-pointer">Ferries</span>
          </div>
        </div>
        <div className="flex gap-6 items-center text-sm">
          <div>
            <span className="hover:cursor-pointer inline">€</span>
            {downChevronIcon}
          </div>
          <div>
            {/* <span className="hover:cursor-pointer">ANG</span> */}
            {americanFlag}
            {downChevronIcon}
          </div>
          <span className="hover:cursor-pointer">Your bookings</span>
          <span className="hover:cursor-pointer">Sign in</span>
          <span className="hover:cursor-pointer">Create an account</span>
        </div>
      </div>
    </div>
  )
}
