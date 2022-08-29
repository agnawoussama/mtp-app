import logo from './logo.png';
import AsideChannels from './AsideChannels';
import { Link } from 'react-router-dom';

const Aside = () => {
    return ( 
        <aside className="overflow-auto sticky top-0 bottom-0 w-asideSpc bg-asideBg2 flex flex-col items-center h-screen asideStyle"> 
        <div className="p-2">
            <img className="rounded-lg drop-shadow-xl imgLogo" src={logo} alt="" />
        </div>
        <div className="flex flex-col items-start w-full p-5">
            <div className="mb-4 w-full"> 
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none" >
                    <svg className="w-4 h-4 text-gray-100 stroke-current" fill="none" viewBox="0 0 24 24" >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full rounded pl-7 pr-4 py-2.5 text-sm font-light bg-gray-600 text-gray-100 placeholder-gray-100 focus:outline-none "
                    placeholder="Rechercher"
                  />
                </div>
        </div>
            <div className="mb-4 flex text-homeIcon items-center">
                <span>
                    <svg  fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,18 L9,18 L9,18 C9.55228475,18 10,17.5522847 10,17 L10,13.5 L10,13.5 C10,12.3954305 10.8954305,11.5 12,11.5 L12,11.5 L12,11.5 C13.1045695,11.5 14,12.3954305 14,13.5 L14,17 L14,17 C14,17.5522847 14.4477153,18 15,18 L17,18 L17,18 C17.5522847,18 18,17.5522847 18,17 L18,10.9367499 L18,10.9367499 C18,10.3431902 17.736354,9.78029498 17.2803688,9.40030733 L12.6401844,5.533487 L12.6401844,5.533487 C12.2693384,5.22444871 11.7306616,5.22444871 11.3598156,5.533487 L6.7196312,9.40030733 L6.7196312,9.40030733 C6.26364602,9.78029498 6,10.3431902 6,10.9367499 L6,17 L6,17 C6,17.5522847 6.44771525,18 7,18 Z"></path></svg>
                </span>
                <Link to="/">Page Accueil</Link>
            </div>               
            <AsideChannels /> 
                    
        </div>
    </aside> 
     );
}
 
export default Aside;