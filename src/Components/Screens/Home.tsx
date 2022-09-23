import { useState ,useEffect} from 'react';
import axios from "axios";
//import Redirect from "../Redirect"
import { ImageCard,Wrapper,Title,Outercard} from './styled'

const Home=()=>{
    const CLIENT_ID = "4fe15ad49faf4fcc87dd81b546fafce6"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const hash = window.location.hash
        const token = window.localStorage.getItem("token")
         
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            console.log(_token);
            window.localStorage.setItem("token", _token);
            setToken(_token);
        }
        if(token)
        {
        setToken(token)
        }

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
   
        setArtists(data.artists.items)
        console.log(data);
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <Outercard>
            <div key={artist.id}>
                {artist.images.length ? <ImageCard src={artist.images[0].url} alt="Image"/> 
                : <div>No Image</div>}
            <Title>{artist.name}</Title> 
               
            </div>
            </Outercard>
        ))
    }


    return (
        
        <div>
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                        : <button onClick={logout}>Logout</button>}
{token?
(<form onSubmit={searchArtists}>
    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
</form>)
  :(<h2>please login</h2>)                      
}    


<Wrapper>

{renderArtists()}  

</Wrapper>



        </div>
    );
}
export default Home;


