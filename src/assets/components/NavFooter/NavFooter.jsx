import { HomeIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon} from "@heroicons/react/24/outline";
import { FaceSmileIcon} from "@heroicons/react/24/outline";
import { FireIcon} from "@heroicons/react/24/outline";


const NavFooter = () =>{


    return(
        <div className="flex items-center gap-10 justify-center text-white-100 border-2 border-white-100 rounded-full py-[6px] pr-8 pl-[6px]">
           
                <div className="bg-gray-100 rounded-full px-4 py-2"> <HomeIcon className="size-6 cursor-pointer"/>
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2"> <AtSymbolIcon className="size-6 cursor-pointer"/>
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2"> <FaceSmileIcon className="size-6 cursor-pointer"/>
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-2"> <FireIcon className="size-6 cursor-pointer"/>
                </div>

               
            
        </div>
    )
}


export default NavFooter