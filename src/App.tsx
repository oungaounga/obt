/** @format */

// import {fetchCities} from './Foo'
import React, {ReactNode, useState, createContext, useEffect} from 'react'
import SearchBar from './Components/SearchBar/SearchBar'
import Heading from './Components/Heading'
import {Spacer} from './Spacer'
import {fetchCities, autoComplete, handleSubmit, matchCities} from './autoC'
import {
  fetchAllApis,
  popularCities,
  getLocalNameArray,
  firstApi as acApi,
  secondApi as coneapi,
  thirdApi as ctwoapi,
  fetcher,
} from './actions'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

function filterPopular(v) {
  for (let i = 0; i < v.length; i++) {
    for (let j = 0; j < v.length; j++) {
      if (v[i].nb_search < v[j].nb_search) {
        let a = v[i]
        v[i] = v[j]
        v[j] = a
      }
    }
  }
}
function spliceFrom(v, from) {
  v.splice(v.indexOf(from), 1)
}

export const ToggleContext = createContext(null)

function App() {
  const [toggle, setToggle] = useState(0)
  const apis = [coneapi, ctwoapi, acApi]
  // const popular: {local_name : string, nb_search : number}[]
  const popular = ['']
  const autocomplete = []
  const firstClick = []
  const secondClick = []
  //objectif, fetch les villes
  // pour les plus populaires, je fais un array
  // pour l'autocomplete, je prend le tout
  // besoin que du local name pour display
  // pour les villes en P j'ai besoin que du local Name
  // pour les autres, je prend le local name et nb_search

  //fetcher c'est fetch mais je saute (typing wise) les 2 then
  //je remarque qu'il y pas de nb_search dans les villes en P
  //

  useEffect(() => {
    fetcher(coneapi).then((result) => {
      result.forEach((item) => {
        firstClick.push(item.local_name)
      })
    })
    fetcher(ctwoapi).then((result) => {
      result.forEach((item) => {
        secondClick.push(item.local_name)
      })
    })
    fetcher(acApi).then((result) => {
      result.forEach((item) => {
        autocomplete.push(item.local_name)
      })
    })

    apis.forEach((api) => {
      fetcher(api).then((result) => {
        console.log('results', result)
        // result.forEach((item) => {
        //   'nb_search' in item
        //     ? popular.push({
        //         local_name: item.local_name,
        //         nb_search: item.nb_search,
        //       })
        //     : autocomplete.push(item)
        // })
      })
    })
    console.log('popular ', popular)
    console.log('autcomplete ', autocomplete)
    for (let i = 0; i <= popular.length; i++) {
      for (let j = 0; j <= popular.length; i++) {
        if (popular[i].local_name === popular[j].local_name) {
          popular.splice(i, 1)
          break
        }
      }
    }
    console.log('c 1', firstClick)
    console.log('c 2', secondClick)
    console.log('c 1', autocomplete)

    // filterPopular(popular)
    // console.log('popular après filterPopular', popular)
  }, [])

  return (
    <ToggleContext.Provider value={{toggle, setToggle}}>
      <div
        id="background"
        className="w-[100vw] h-[99vh] relative z-0 "
        onClick={(e) => {
          e.stopPropagation()
          setToggle(0)
        }}
      >
        <div className="relative">
          <Banner />
          <Navbar />
          {/* <Spacer y={1} cN="" /> */}
          <Heading />
          <br />
          <SearchBar />
          <Spacer y={1} />
        </div>
      </div>
    </ToggleContext.Provider>
  )
}

export default App
