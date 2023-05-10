/** @format */
import dayjs from 'dayjs'

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const returnDayOfWeek = (input) => {
  return week[input]
}

interface detailedDay {
  date: number
  isToday: boolean
  isWeekend: boolean
  past: boolean
}

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  var isToday = require('dayjs/plugin/isToday')
  dayjs.extend(isToday)
  let firstDayOfMonth = dayjs().year(year).month(month).startOf('month')
  let lastDayOfMonth = dayjs().year(year).month(month).endOf('month')
  let day = dayjs().year(year).month(month)
  let today = dayjs().year(year).month(month)
  const daysArray = []
  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    daysArray.push(i)
  }
  //   let today = returnDayOfWeek(dayjs().day())
  let detailedMonth: detailedDay[] = []
  daysArray.forEach((item, index) => {
    detailedMonth.push({
      date: item,
      isToday: dayjs().year(year).month(month).date(item).isToday(),
      isWeekend:
        dayjs().day(item).$W == week.indexOf('SUN') + 5 ||
        dayjs().day(item).$W == week.indexOf('SAT') - 2,
      past: today.isAfter(dayjs().year(year).month(month).date(item)),
    })
  })
  console.log('day', day.day(5))
  //   return daysArray
  return [detailedMonth, firstDayOfMonth.day()]
}

//omio calendar starts in current month

export default function DatePicker(props) {
  return (
    <>
      <div className="w-[25rem] grid justify-center content-center p-[2rem]">
        <div
          className={`w-[21rem] min-h-[18rem] flex flex-col  text-[#132968]  some logic to animate height change `}
        >
          <div className="w-full flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>

            <p className="ml-0 pl-0 text-center font-bold text-lg">
              {' '}
              May 2023{' '}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="flex flex-col mt-[1rem] divide-y divide-[#F1F2F6]">
            <div className="w-[21rem] h-[3rem] grid grid-cols-7">
              {week.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center active:bg-blue-900 ${
                    index == 0 || index == 6 ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            {/* {generateDate()[0].map(({date : date, isToday : isToday, isWeekend : isWeekend, past : past}, index => ( */}
            {/* <div className=" w-[21rem] h-[15rem] grid grid-cols-7 gap-px">
            {generateDate().map((item, index) => (
              <p
                key={index}
                className={`grid justify-center content-center hover:rounded-full hover:ring-2 hover:ring-black hover:ring-inset active:bg-blue-900 ${
                  index == 0 ? 'col-start-4' : ' '
                }`}
              >
                {item}
              </p>
            ))}
        </div> */}
            <div className=" w-[21rem] h-[15rem] grid grid-cols-7 gap-px">
              {generateDate()[0].map(
                (
                  {
                    date: date,
                    isToday: isToday,
                    isWeekend: isWeekend,
                    past: past,
                  },
                  index
                ) => (
                  <p
                    key={index}
                    className={`grid justify-center content-center  ${
                      index == 0 ? 'col-start-4' : ' '
                    } ${isToday && 'bg-slate-700 rounded-full text-white'} ${
                      isWeekend && 'font-bold'
                    } ${
                      past
                        ? 'text-neutral-500'
                        : isToday
                        ? ' '
                        : 'hover:rounded-full hover:ring-2 hover:ring-black hover:ring-inset active:bg-blue-900'
                    }`}
                  >
                    {date}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
