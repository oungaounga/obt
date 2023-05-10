/** @format */

// import {fetchCities} from './Foo'
import React, {ReactNode, useState} from 'react'
import SearchBar from './SearchBar'
import SearchBarNR from './SearchBarNR'
import DatePicker from './DatePicker'
import TwoDatePickers from './TwoDatePickers'
import {fetchCities, autoComplete, handleSubmit, matchCities} from './autoC'
import {fetchAllApis, popularCities, getLocalNameArray} from './actions'
import './App.css'

function App() {
  // fetchCities()
  console.clear()
  fetchAllApis()
  const [cities, setCities] = useState<string[] | null>(null)
  const renderCities = cities?.map((item, index) => <li key={index}>{item}</li>)
  const renderList = (list: string[]): ReactNode => {
    console.log('called')
    return list.map((item) => {
      return <li>{item}</li>
    })
  }
  // bg-auto bg-top bg-contain
  return (
    <div className="relative flex flex-col justify-center w-screen h-screen">
      <div
        className="absolute top-0 left-0 w-[100vw] h-[20rem] bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(./omiobg.jpg)',
          backgroundSize: 'contain',
        }}
        id="banner"
      >
        <p className="m-[1rem] ml-[12rem] text-5xl font-black text-[#132968]">
          omio
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[75%]">
          {/* <form onSubmit={handleSubmit}>
          <input
            className="w-fit m-[1rem] p-[1rem]"
            type="input"
            placeholder="From ? "
            onChange={(e) => {
              console.log(e.target.value)
              setCities(matchCities(e.target.value))
            }}
            onClick={(e) => {
              setCities(getLocalNameArray(popularCities)) //cet array devrait être classé par popularité
            }}
          />
          <input
            className="w-fit m-[1rem] p-[1rem]"
            type="text"
            placeholder="To ? "
            onChange={(e) => {
              console.log(e.target.value)
              setCities(matchCities(e.target.value))
            }}
            onClick={(e) => {
              setCities(getLocalNameArray(popularCities)) //cet array devrait être classé par popularité
            }}
            onMouseUp={() => {
              console.log('mouse up')
              setCities([''])
            }}
          />
        </form>
        <div className="m-[1rem] p-[1rem] w-fit border-solid broder-white border-2">
          <ul className="text-white">{cities ? renderList(cities) : null}</ul>
        </div>
        <SearchBar /> */}
          <SearchBarNR className="bg-white shadow-md z-40" />

          {/* <TwoDatePickers className="mt-[3rem]" /> */}
        </div>
      </div>
    </div>
  )
}

export default App
