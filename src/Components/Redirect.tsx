import { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import {useNavigate, Link} from 'react-router-dom';
//import Home from '../Components/Screens/Home';

const Redirect = () => {
  const navigate = useNavigate();
  /* eslint implicit-arrow-linebreak:  off */

  const getParamValues = (url: string) =>
    url
      .slice(1)
      .split('&')
      .reduce((prev: any, curr: any) => {
        const [title, value] = curr.split('=');
        /* eslint no-param-reassign: "off" */
        prev[title] = value;
        return prev;
      }, {});

      
  useEffect(() => {
    const params = getParamValues(window.location.hash);
    console.log(JSON.stringify(params));
    localStorage.setItem('params', JSON.stringify(params));
    navigate(-1);
    
  }, []);
 


  return (
    <div>
    <h1>Redirect page</h1>
     
    </div>
  );
  
  

};


export default Redirect;