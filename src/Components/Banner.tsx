/** @format */
import img1 from '../media/omiobg.jpg'
import img2 from '../media/bglg.jpg'
import img3 from '../media/bgxl.jpg'

export default function Banner() {
  return (
    <div
      id="banner"
      className="flex bg-no-repeat bg-cover      
      bg-center absolute justify-center overflow-hidden z-0"
    >
      <img
        src={img1}
        alt="background"
        className="hidden xl:block omio background"
      />
      <img src={img2} alt="omio background" className="lg:hidden" />
      <img
        src={img3}
        alt="omio background"
        className="hidden lg:max-xl:inline-block left-0"
      />
    </div>
  )
}
