const Filter = ({setSort}) => {
    function handleInputChange(event) {
        setSort(event.target.value)
    }

    return(
        <div className="flex w-11/12 mx-auto px-4 pt-4">
            <div className="flex-grow">
                {/* <select className="text-sm border border-gray-200 px-2 py-1 shadow mr-4" name="category">
                    <option value="" disabled selected>Category</option>
                    <option value="a">a</option>
                    <option value="a">b</option>
                </select>
                <select className="text-sm border border-gray-200 px-2 py-1 shadow mr-4" name="budget">
                    <option value="" disabled selected>Budget</option>
                    <option value="a">a</option>
                    <option value="a">b</option>
                </select>
                <select className="text-sm border border-gray-200 px-2 py-1 shadow mr-4" name="location">
                    <option value="" disabled selected>Location</option>
                    <option value="a">a</option>
                    <option value="a">b</option>
                </select> */}
            </div>
            <div className="flex items-center">
                <h4 className="text-sm font-semibold mr-2">Sort by</h4>
                <select onChange={handleInputChange} defaultValue="1" className="w-auto text-sm px-2 py-1 focus:outline-none" name="location">
                    <option value="1">Rating</option>
                    <option value="2">Lowest Price</option>
                    <option value="3">Highest Price</option>
                </select>
            </div>
        </div>
    )
}

export default Filter