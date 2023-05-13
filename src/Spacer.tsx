/** @format */
import React from 'react'

const Space = ({cN}) => {
  return (
    <div className={cN}>
      <span>
        <br />{' '}
      </span>
    </div>
  )
}

export const Spacer = ({y, cN}) => {
  let v = ['one']
  for (let i = 0; i < y; i++) {
    v.push(' ')
  }
  return (
    <>
      {v.map((item) => {
        return <Space cN={cN} />
      })}
    </>
  )
}
