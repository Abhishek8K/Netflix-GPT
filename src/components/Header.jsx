import { NTFLX_LOGO } from "../utils/URL"

const Header = () => {
  return (
   <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">

    <img className="w-44"
    src={NTFLX_LOGO} 
     alt="netflix_logo" />
   </div>
  )
}

export default Header