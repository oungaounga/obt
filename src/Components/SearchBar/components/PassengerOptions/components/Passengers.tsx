/** @format */
import React, {useContext, useState, useRef} from 'react'
import {CSSTransition} from 'react-transition-group'
import {BookOptionsContext} from '../../../SearchBar'
import {ToggleContext} from '../../../../../App'

import {
  PlusIcon,
  MinusIcon,
  cardIcon,
  infoIcon,
  toggleIcon,
} from '../../../../icons'

export default function Passengers(props) {
  const [title, setTitle] = useState('1 Adult, No discount card')
  const {toggle, setToggle} = useContext(ToggleContext)
  const {bookOptions: data, setBookOptions: set} =
    useContext(BookOptionsContext)
  const ref = useRef()
  const adultChevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={`transition ${
        toggle === 5 ? 'rotate-180' : 'rotate-0'
      } self-center inline fill-neutral-400 hover:cursor-pointer`}
      viewBox="0 0 16 16"
      onClick={(e) => {
        e.stopPropagation()
        setToggle(
          toggle !== 5 && 5

          //   {
          //   oneWay: false,
          //   adult: !toggle.adult,
          // }
        )
      }}
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  )
  const sumDiscountCards = () => {
    let n = 0
    Object.keys(data.passengers).map((item, index) => {
      let m = 0
      data.passengers[item].map((passenger) => {
        m += passenger.discount.length
      })
      n += m
    })
    return n
  }
  const makeTitle = () => {
    let p = data.passengers
    let pa = p.adult
    let py = p.youth
    let ps = p.senior
    let la = pa.length
    let ly = py.length
    let ls = ps.length
    let psum = la + ly + ls
    const sumCards = sumDiscountCards()
    const cardsString = `${
      sumCards
        ? `${sumCards} Discount card${sumCards > 1 ? 's' : ' '}`
        : 'No discount cards'
    }`
    const c0 = psum === 0
    const c1 =
      data.passengers.adult.length !== 0 &&
      data.passengers.youth.length === 0 &&
      data.passengers.senior.length === 0
    const c2 =
      data.passengers.adult.length === 0 &&
      data.passengers.youth.length !== 0 &&
      data.passengers.senior.length === 0
    const c3 =
      data.passengers.adult.length === 0 &&
      data.passengers.youth.length === 0 &&
      data.passengers.senior.length !== 0
    const c4 =
      (data.passengers.adult.length === 0 &&
        data.passengers.youth.length === 0) ||
      data.passengers.senior.length !== 0
    const c5 =
      data.passengers.adult.length === 0 ||
      (data.passengers.youth.length === 0 &&
        data.passengers.senior.length !== 0)
    const c6 =
      data.passengers.adult.length === 0 &&
      data.passengers.youth.length === 0 &&
      data.passengers.senior.length === 0
    const c7 =
      data.passengers.adult.length !== 0 &&
      data.passengers.youth.length !== 0 &&
      data.passengers.senior.length === 0

    switch (true) {
      case c0:
        return `${psum} Passengers, ${sumCards} Card${sumCards > 1 ? 's' : ' '}`
      case c1:
        return `${la} Adult${la > 1 ? 's' : ','} ${cardsString}`
      case c2:
        return `${ly} Youth${ly > 1 ? 's' : ','} ${cardsString}`
      case c3:
        return `${ls} Senior${ls > 1 ? 's' : ','} ${cardsString}`
      case c4:
        return `${psum} Passengers, ${cardsString}`
      case c5:
        return `${psum} Passengers, ${cardsString}`
      case c6:
        return `No passengers`
      case c7:
        return `${psum} Passengers, ${cardsString}`
    }
  }
  return (
    <div
      className="relative flex gap-1 z-40"
      onClick={(e) => {
        e.stopPropagation()
        setTitle(makeTitle())
      }}
    >
      <span
        className="inline hover:cursor-pointer text-sm text-[#132968]"
        onClick={(e) => {
          e.stopPropagation()
          setToggle(toggle !== 5 && 5)
        }}
      >
        {title}
      </span>
      {adultChevron}
      <CSSTransition
        nodeRef={ref}
        in={toggle === 5}
        timeout={300}
        classNames="fallfade"
        unmountOnExit
      >
        <div
          id="personConfig"
          className="absolute select-none top-[1.5rem] p-[1rem] w-[22rem] bg-white rounded-xl text-black z-40 shadow-lg"
          ref={ref}
        >
          <div className="flex flex-col gap-3 divide-y divide-y-neutral-300">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-lg ">Adults</p>
                <p className="text-sm text-neutral-400">26+ years</p>
              </div>
              <div className="flex justify-between gap-5">
                <div
                  className="w-fit h-fit rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    data.passengers.adult.pop()
                    set({...data})
                    setTitle(makeTitle())
                  }}
                >
                  <MinusIcon
                    className={`
                  ${
                    data.passengers.adult.length === 0
                      ? 'fill-[#F1F2F6]'
                      : 'fill-[#5E90CC]'
                  }
                  `}
                  />{' '}
                </div>
                <span className="text-md w-[0.5rem] font-bold h-full self-center">
                  {data.passengers.adult.length}
                </span>
                <div
                  className="w-fit h-fit rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (
                      data.passengers.adult.length +
                        data.passengers.youth.length +
                        data.passengers.senior.length <
                      9
                    ) {
                      let push = data.passengers.adult.push({
                        age: 26,
                        discount: [''],
                      })
                      set({...data})
                    } else {
                      console.log('to much passengers')
                    }
                    setTitle(makeTitle())
                  }}
                >
                  <PlusIcon
                    className={
                      data.passengers.adult.length +
                        data.passengers.youth.length +
                        data.passengers.senior.length ===
                      9
                        ? 'fill-[#F1F2F6]'
                        : 'fill-[#5E90CC]'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-lg ">Youth</p>
                <p className="text-sm text-neutral-400">0-25 years</p>
              </div>
              <div className="flex justify-between gap-5">
                <div
                  className="w-fit h-fit rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    let push = data.passengers.youth.pop()
                    set({...data, push})
                    setTitle(makeTitle())
                  }}
                >
                  <MinusIcon
                    className={`
                  ${
                    data.passengers.youth.length === 0
                      ? 'fill-[#F1F2F6]'
                      : 'fill-[#5E90CC]'
                  }
                  `}
                  />
                </div>
                <span className="text-md w-[0.5rem] font-bold h-full self-center">
                  {data.passengers.youth.length}
                </span>
                <div
                  className="w-fit h-fit rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (
                      data.passengers.adult.length +
                        data.passengers.youth.length +
                        data.passengers.senior.length <
                      9
                    ) {
                      let push = data.passengers.youth.push({
                        age: 25,
                        discount: [''],
                      })
                      set({...data, push})
                    } else {
                      console.log('to much passengers')
                    }
                    setTitle(makeTitle())
                  }}
                >
                  <PlusIcon
                    className={
                      data.passengers.adult.length +
                        data.passengers.youth.length +
                        data.passengers.senior.length ===
                      9
                        ? 'fill-[#F1F2F6]'
                        : 'fill-[#5E90CC]'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-lg ">Senior</p>
                <p className="text-sm text-neutral-400">58+ years</p>
              </div>
              <div className="flex justify-between gap-5">
                <div
                  className="w-fit h-fit rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    let push = data.passengers.senior.pop()
                    set({...data, push})
                    setTitle(makeTitle())
                  }}
                >
                  <MinusIcon
                    className={`
                  ${
                    data.passengers.senior.length === 0
                      ? 'fill-[#F1F2F6]'
                      : 'fill-[#5E90CC]'
                  }
                  `}
                  />
                </div>
                <span className="text-md w-[0.5rem] font-bold h-full self-center">
                  {data.passengers.senior.length}
                </span>
                <div
                  className="w-fit h-fit rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (
                      data.passengers.adult.length +
                        data.passengers.youth.length +
                        data.passengers.senior.length <
                      9
                    ) {
                      let push = data.passengers.senior.push({
                        age: 58,
                        discount: [''],
                      })
                      set({...data, push})
                    } else {
                      console.log('to much passengers')
                    }
                    setTitle(makeTitle())
                  }}
                >
                  <PlusIcon
                    className={
                      data.passengers.adult.length +
                        data.passengers.youth.length +
                        data.passengers.senior.length ===
                      9
                        ? 'fill-[#F1F2F6]'
                        : 'fill-[#5E90CC]'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-[0.5rem]">
              <div className="flex gap-1 items-center text-[#132968]">
                {cardIcon}
                <span>Add discount card</span>
                {infoIcon}
              </div>
              <div className="pt-[0.3rem]">{toggleIcon}</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
