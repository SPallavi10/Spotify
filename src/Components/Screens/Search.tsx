const Search=()=>{
    return(
       <>
       <div>
        hello
            <input type="text" placeholder="search" onKeyDown={e => {
                if (e.key == "Enter") {
                    console.log("pressed enter key");
                }
            } } />
        
                <button onClick={() => {
                    console.log("button clicked")
                } }>
                    Search
                </button>
            </div>
            </> 
    )
}
export default Search;