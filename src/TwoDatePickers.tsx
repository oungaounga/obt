/** @format */

import DatePicker from './DatePicker'

export default function TwoDatePickers(props) {
  return (
    <div
      className={`w-fit flex justify-between bg-white rounded-md ${props.className}`}
    >
      <DatePicker />
      <DatePicker />
    </div>
  )
}
