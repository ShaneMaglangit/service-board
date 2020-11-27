
const CategoryBar = () => {
    var categories = ["Carpentry", "Plumbing", "Hair Dresser", "Make-up Artist", "Tutor", "Car Wash", "Laundry", "Computer Repair", "Cleaning Services"]

    return(
        <div className="w-full shadow-md py-4">
            <ul className="w-11/12 mx-auto flex justify-around font-display text-sm font-semibold">
                {categories.map((category) => 
                    <li key={category}>
                        <a className="border-b-2 border-transparent hover:border-primary transition-all duration-100 ease-in" href="/">{category}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CategoryBar