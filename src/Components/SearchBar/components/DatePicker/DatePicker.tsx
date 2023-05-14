/** @format */
/**
 * TODO Add close date picker after date picked
 */

import React, {useState, useContext, useRef} from 'react'
import {BookOptionsContext} from '../../SearchBar'
import {ToggleContext} from '../../../../App'
import dayjs from 'dayjs'
import {rightchevronIcon, leftchevronIcon} from '../../../icons'

const today = dayjs()
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

//   functions

// const returnDayOfWeek = (input) => {
//   return week[input]
// }
function datepb() {
  let today = dayjs()
  let date = dayjs().date(13)
  console.log('date :', date)
  console.log('is before ? ', today.isBefore(date))
  console.log('is same ? ', today.isSame(date))
}

export const formatDateForInput = (date) => {
  return `${date.format('ddd')}, ${date.format('MMM')} ${date.format('DD')}`
}
const formatDateForDatePickerHeader = (date) => {
  return `${date.format('MMM')} ${date.format('YYYY')}`
}
const isPast = (date) => today.diff(date, 'd') >= 0
// const isToday = (date) => {
//   return today.format('DD/MM/YYYY') == date.format('DD/MM/YYYY')
// }
// const isWeekend = (date) => {
//   let compare = date.format('ddd').toUpperCase()
//   return compare === week[0] || compare === week[6]
// }
const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
  let refferedMonth = dayjs().year(year).month(month)
  let firstDayOfMonth = refferedMonth.startOf('month')
  let lastDayOfMonth = refferedMonth.endOf('month')
  let realToday = dayjs()
  let dataMonth = []
  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    dataMonth.push(refferedMonth.date(i))
  }
  const calendarTitle = formatDateForDatePickerHeader(refferedMonth)

  return [firstDayOfMonth.day(), dataMonth, realToday, calendarTitle]
}

function MakeCalendar() {
  const [travelDate, setTravelDate] = useState(today)
  const [calendarMonth, setCalendarMonth] = useState(today)
  const {bookOptions, setBookOptions} = useContext(BookOptionsContext)
  const {toggle} = useContext(ToggleContext)

  const date = generateDate(calendarMonth.month())
  const v = date[1]
  const calendarTitle = date[3]
  const date2 = generateDate(calendarMonth.month() + 1)
  const v2 = date2[1]
  const calendarTitle2 = date2[3]

  return (
    <>
      <div
        id="calendar"
        className={`relative max-w-[90%] md:w-fit min-h-[18rem] flex wrap gap-[2rem] text-[#132968] select-none `}
      >
        <div className={`flex flex-col bg-white `}>
          <div className="w-full flex justify-between">
            <div
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                !bookOptions.departureDate.isSame(calendarMonth, 'month') &&
                  setCalendarMonth(dayjs().month(calendarMonth.month() - 1))
              }}
            >
              {leftchevronIcon}
            </div>
            <p className="ml-0 pl-0 text-center font-bold text-lg">
              {' '}
              {calendarTitle}{' '}
            </p>
            <div
              className="cursor-pointer md:invisible"
              onClick={(e) => {
                e.stopPropagation()
                setCalendarMonth(dayjs().month(calendarMonth.month() + 1))
              }}
            >
              {rightchevronIcon}
            </div>
          </div>
          <div className="flex flex-col mt-[1rem] divide-y divide-[#F1F2F6]">
            <div className="w-[21rem] h-[3rem] grid grid-cols-7">
              {week.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center text-neutral-400 ${
                    index == 0 || index == 6 ? 'font-bold' : ''
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className=" w-[21rem] h-[15rem] grid grid-cols-7">
              {v.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center  hover:cursor-pointer 
            ${index === 0 ? `col-start-${item.day() + 1}` : ' '} ${
                    bookOptions.dDateObj.isSame(item, 'day') &&
                    'bg-slate-700 rounded-full text-white'
                  }
                  ${
                    bookOptions.rDateObj &&
                    item.isSame(bookOptions.rDateObj, 'd') &&
                    'bg-slate-700 text-white rounded-full'
                  }
                  ${
                    bookOptions.rDateObj &&
                    item.isBefore(bookOptions.rDateObj, 'd') &&
                    item.isAfter(bookOptions.dDateObj, 'd') &&
                    'rounded-md m-[1px] bg-[#ACCEEF] font-bold text-[#132968]'
                  }
                  ${item.day() === 0 && 'font-bold'} 
                  ${item.day() === 6 && 'font-bold'}                  
                  ${
                    item.isBefore(today)
                      ? 'text-neutral-500 pointer-events-none'
                      : 'hover:rounded-full hover:ring-[1px] hover:ring-[#132968] hover:ring-inset'
                  } `}
                  onClick={(e) => {
                    /**
                     * consider if its a departure or return
                     * if its departure, is there a return ?
                     *  if yes, item should be be fore return, or we fix departure at same date as return
                     * else if its return :
                     *  return should be after departure, else return set same day as departure
                     *
                     */
                    e.stopPropagation()
                    let prev = bookOptions
                    if (toggle === 3) {
                      if (bookOptions.rDateObj) {
                        item.isBefore(bookOptions.rDateObj)
                          ? setBookOptions({
                              ...bookOptions,
                              dDateObj: item,
                              departure: formatDateForInput(item),
                            })
                          : setBookOptions({
                              ...bookOptions,
                              dDateObj: prev.rDateObj,
                              departure: formatDateForInput(prev.rDateObj),
                            })
                      } else {
                        setBookOptions({
                          ...bookOptions,
                          dDateObj: item,
                          departure: formatDateForInput(item),
                        })
                      }
                    } else if (toggle === 17) {
                      item.isAfter(bookOptions.dDateObj)
                        ? setBookOptions({
                            ...bookOptions,
                            rDateObj: item,
                            return: formatDateForInput(item),
                          })
                        : setBookOptions({
                            ...bookOptions,
                            rDateObj: prev.dDateObj,
                            return: formatDateForInput(prev.dDateObj),
                          })
                    }
                  }}
                >
                  {item.$D}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={`hidden md:block flex flex-col bg-white`}>
          <div className="w-full flex justify-between">
            <div
              className="cursor-pointer md:invisible"
              onClick={(e) => {
                e.stopPropagation()
                !bookOptions.departureDate.isSame(calendarMonth, 'month') &&
                  setCalendarMonth(dayjs().month(calendarMonth.month() - 1))
              }}
            >
              {leftchevronIcon}
            </div>
            <p className="ml-0 pl-0 text-center  font-bold text-lg">
              {' '}
              {calendarTitle2}{' '}
            </p>
            <div
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                setCalendarMonth(dayjs().month(calendarMonth.month() + 1))
              }}
            >
              {rightchevronIcon}
            </div>
          </div>
          <div className="flex flex-col mt-[1rem] divide-y divide-[#F1F2F6]">
            <div className="w-[21rem] h-[3rem] grid grid-cols-7">
              {week.map((item, index) => (
                <p
                  key={index}
                  className={`grid justify-center content-center text-neutral-400
                  ${index == 0 || index == 6 ? 'font-bold' : ''}`}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className=" w-[21rem] h-[15rem] grid grid-cols-7 gap-px">
              {v2.map((item, index) => {
                return (
                  <p
                    key={index}
                    className={`grid justify-center content-center  hover:cursor-pointer 
                    ${index === 0 ? `col-start-${item.day() + 1}` : ' '} ${
                      bookOptions.dDateObj.isSame(item, 'day') &&
                      'bg-slate-700 rounded-full text-white'
                    }
                          ${
                            bookOptions.rDateObj &&
                            item.isSame(bookOptions.rDateObj, 'd') &&
                            'bg-slate-700 text-white rounded-full'
                          }
                          ${
                            bookOptions.rDateObj &&
                            item.isBefore(bookOptions.rDateObj, 'd') &&
                            item.isAfter(bookOptions.dDateObj, 'd') &&
                            'text-bg-slate-600 '
                          }
                          ${item.day() === 0 && 'font-bold'} 
                          ${item.day() === 6 && 'font-bold'}                  
                          ${
                            item.isBefore(today)
                              ? 'text-neutral-500 pointer-events-none'
                              : 'hover:rounded-full hover:ring-[1px] hover:ring-[#132968] hover:ring-inset'
                          } `}
                    onClick={(e) => {
                      /**
                       * consider if its a departure or return
                       * if its departure, is there a return ?
                       *  if yes, item should be be fore return, or we fix departure at same date as return
                       * else if its return :
                       *  return should be after departure, else return set same day as departure
                       *
                       */
                      e.stopPropagation()
                      let prev = bookOptions
                      if (toggle === 3) {
                        if (bookOptions.rDateObj) {
                          item.isBefore(bookOptions.rDateObj)
                            ? setBookOptions({
                                ...bookOptions,
                                dDateObj: item,
                                departure: formatDateForInput(item),
                              })
                            : setBookOptions({
                                ...bookOptions,
                                dDateObj: prev.rDateObj,
                                departure: formatDateForInput(prev.rDateObj),
                              })
                        } else {
                          setBookOptions({
                            ...bookOptions,
                            dDateObj: item,
                            departure: formatDateForInput(item),
                          })
                        }
                      } else if (toggle === 17) {
                        item.isAfter(bookOptions.dDateObj)
                          ? setBookOptions({
                              ...bookOptions,
                              rDateObj: item,
                              return: formatDateForInput(item),
                            })
                          : setBookOptions({
                              ...bookOptions,
                              rDateObj: prev.dDateObj,
                              return: formatDateForInput(prev.dDateObj),
                            })
                      }
                    }}
                  >
                    {item.$D}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function DatePicker() {
  return (
    <>
      <div
        id="dpicker"
        className="absolute w-fit bg-white z-40 top-[3.5rem] md:left-[-8rem] lg:left-[-4rem] xl:left-[-14rem] grid justify-center content-center p-[1.5rem] rounded-xl shadow-2xl"
      >
        <div className={`relative w-fit min-h-[18rem] flex text-[#132968] `}>
          <MakeCalendar />
        </div>
      </div>
    </>
  )
}

// ${isWeekend(item) && 'font-bold'}