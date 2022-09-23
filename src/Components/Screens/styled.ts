import styled from 'styled-components';
//import music from '../images/music.jpeg'
export const Wrapper= styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-self: center;
flex-wrap: wrap; 
`;
export const Outercard = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:180px;
width:180px;
border:solid;
border-radius: 10px;
border-color: grey;
margin-top: 10%;
box-shadow: inset;


background-color:darkorange;

@media (max-width: 700px){flex-direction:column;}
`;

export const Title = styled.div`
  
font-size: large;
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: 300;
color: #661725;
width:10;
text-align: center;
@media (max-width: 700px){flex-direction:column;}
`;
export const ImageCard = styled.img`
  
height:120px;
width:120px;
border:lightgrey;
border-radius: 15px;
border-color: grey;




@media (max-width: 700px){flex-direction:column;}
`;

export const CardWrapper= styled.div`



`;