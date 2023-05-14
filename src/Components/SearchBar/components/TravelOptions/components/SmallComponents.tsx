/** @format */

import React, {useContext, useEffect} from 'react'

import {BookOptionsContext} from '../../../SearchBar'
import {toggleIcon} from '../../../../icons'

export const SearchButton = () => {
  return (
    <>
      <button className="text-center bg-[#FA6B6B] lg:grow text-white h-[3rem] rounded-md p-[0.5rem] transition hover:brightness-125">
        {' '}
        Search
      </button>
    </>
  )
}

export const FindAccomodation = () => {
  const {bookOptions: data, setBookOptions: set} =
    useContext(BookOptionsContext)
  const handleClick = (e) => {
    if (e.currentTarget.firstChild?.firstChild) {
      let push = e.currentTarget.firstChild?.firstChild.checked
      set({...data, find: push})
    }
  }
  return (
    <>
      <div className="w-full flex text-[#132968]">
        <div className="flex gap-2" onClick={handleClick}>
          {toggleIcon}
          <p className="text-sm">Find my accomodation</p>
        </div>
      </div>
    </>
  )
}
