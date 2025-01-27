import aitlogo from '../../Images/ait.png'
import mitaoelogo from '../../Images/mitaoe.png'
import i2itlogo from '../../Images/i2it.png'
import bvplogo from '../../Images/bvcoe.png'
import pvgcos from '../../Images/pvg.png'
import mescoe from '../../Images/mescoe.png'
import neo4j from '../../Images/neo4j.svg'
import gdgpune from '../../Images/GDG-Pune.png'

const Partners = () => {
  return (
    <div className="max-w-7xl my-16 mx-auto">
       <div className="relative">
            <h1 className="text-[7vw] font-bold text-center lg:pt-4  text-grey-secondary">COMMUNITY PARTNERS</h1>
        </div>
        <div className=" w-fit my-4 space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-4 mx-handler">
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdg.community.dev/gdg-pune/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={gdgpune} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white  flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
          href="https://community.neo4j.com/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={neo4j} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdsc.community.dev/army-institute-of-technology-pune/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={aitlogo} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
                  href="https://gdsc.community.dev/bharati-vidyapeeth-deemed-university-college-of-engineering-pune/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={bvplogo} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdsc.community.dev/international-institute-of-information-technology-isquareit-pune//"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={i2itlogo} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
                  href="https://gdscmescoe.tech/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={mescoe} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
                  href="https://gdscmitaoe.github.io/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={mitaoelogo} alt="logo" className="w-[300px]" />
        </a>
        </div>
        <div className="max-w-sm p-6 bg-white flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <a
          className="w-fit rounded cursor- pointer"
                  href="https://developers.google.com/community/gdsc"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={pvgcos} alt="logo" className="w-[300px]" />
        </a>
        </div>
      </div>
    </div>
  )
}

export default Partners
