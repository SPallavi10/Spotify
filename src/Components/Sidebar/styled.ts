import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const ImageLogo = styled.img`
    margin:8px;
    width:auto;

   
`;
export const Navbar = styled.nav`
background-color: black;
height:130vh;
width:100px;

display:flex;
flex-direction:column;



@media (max-width: 700px){width:80px;}

   
`;
export const NavbarLink =styled(Link)`
color:white;
font-size:large;
font-family: Arial, Helvetica, sans-serif;
/* margin: 10px; */
border-radius: 5px;
padding:0.2rem;
cursor: pointer;
&:hover{
    background-color:grey;
    opacity:2;
}
transition: all 0.3s ease-in-out;
@media (max-width: 700px){font-size:small;}
`;

export const OpenLink =styled.button`
width:50px;
height:70px;
color:white;
background: none;
font-size: 35px;
cursor: pointer;
@media (min-width: 700px){display:none;}
`;
export const Menu = styled.div`
    background: black;
    font-size:18px;
    margin-bottom:8%;
    height:100%;
   
`;


