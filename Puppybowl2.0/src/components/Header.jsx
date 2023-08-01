

export default function SearchFunction() {





    
    return (
        <>
        <h1>Welcome To PuppyBowl!</h1>  
        
        <form className='searcher' onSubmit={SearchFunction}>
            <label>
                Search: {" "}
                <input
                    type="search"
                />
            </label>
            <button className="searchButton">Search!</button>
        </form>
        </>
    )
}