import {FaHome} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaMusic} from "react-icons/fa";
import {Link } from 'react-router-dom';
const Sidebar=()=>{
    
            const menuItem=[
                {
                    path: "/",
                    name: "Home",
                    icon: <FaHome/>

                },
                {
                    path: "/Search",
                    name: "Search",
                    icon: <FaSearch/>
                
                },
                {
                    path: "/Library",
                    name: "Library",
                    icon: <FaMusic/>
                                    
                }   
            ]
            return(
                <><div>
                    <ul>
                    {
                    menuItem.map((item, index)=>{

                    return(
                        <li>

                    <Link to={item.path}> 
                    {item.icon}
                    <span>{item.name}</span>
                        </Link>
                        </li>
                    );
                    })
                }
                </ul>
                </div>
               
                </>
    )
}
export default Sidebar;