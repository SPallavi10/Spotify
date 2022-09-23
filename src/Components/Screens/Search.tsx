import { useState } from "react"
import axios from "axios"

const Search=()=>{
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])
const [token, setToken] = useState("")

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
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }
return(
<div>
<form onSubmit={searchArtists}>
    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
    <button type={"submit"}>Search</button>
</form>
{renderArtists()}
</div>

)
}
export default Search;