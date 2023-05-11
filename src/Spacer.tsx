/** @format */

const Space = () => {
  return (
    <div>
      <span>
        <br />{' '}
      </span>
    </div>
  )
}

export const Spacer = (props) => {
  const totalSpace = []
  for (let i = 0; i <= props.y; i++) {
    totalSpace.push(<Spacer />)
  }
  return totalSpace
}
