
const CategoryBar = () => {
    var categories = ["Carpentry", "Plumbing", "Hair Dresser", "Make-up Artist", "Tutor", "Car Wash", "Laundry", "Computer Repair", "Cleaning Services"]

    return(
        <div className="w-full shadow-md py-6">
            <ul className="w-11/12 mx-auto flex justify-around font-display text-sm font-semibold">
                {categories.map((category) => <li>{category}</li>)}
            </ul>
        </div>
    )
}

export default CategoryBar