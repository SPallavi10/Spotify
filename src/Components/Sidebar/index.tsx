import {FaHome} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaMusic} from "react-icons/fa";
import Logo from '../../assets/images/logo.png'
import {ImageLogo, Navbar,NavbarLink,OpenLink} from './styled'
const Sidebar=()=>{
            return(
                 <Navbar>
                    
                    <ImageLogo
                     src={Logo} />
                        {/* <OpenLink>&#8801;</OpenLink> */}
                    <NavbarLink to="/"><FaHome/>Home</NavbarLink>
                    <NavbarLink to="/Search"><FaSearch/>Search</NavbarLink>
                    <NavbarLink to="/Library"><FaMusic/>Library</NavbarLink>
                    
                    </Navbar>
                   
                    )
}
export default Sidebar;