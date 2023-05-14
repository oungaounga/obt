/** @format */

export default function Banner() {
  return (
    <div
      id="banner"
      className="flex bg-no-repeat bg-cover      
      bg-center absolute justify-center overflow-hidden z-0"
    >
      <img
        src="../media/omiobg.jpg"
        alt="background"
        className="hidden xl:block omio background"
      />
      {/* <img src="./bgsm.jpg" alt="omio background" className="sm:hidden" /> */}
      {/* <img
        src="./bgmd.jpg"
        alt="omio background"
        className="hidden md:max-lg:inline-block"
      /> */}
      <img
        src="../media/bglg.jpg"
        alt="omio background"
        className="lg:hidden"
      />
      <img
        src="./bgxl.jpg"
        alt="omio background"
        className="hidden lg:max-xl:inline-block left-0"
      />
    </div>
  )
}
