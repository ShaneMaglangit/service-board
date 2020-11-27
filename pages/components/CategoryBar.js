
const CategoryBar = () => {
    var categories = ["Carpentry", "Plumbing", "Hair Dresser", "Make-up Artist", "Tutor", "Car Wash", "Laundry", "Computer Repair", "Cleaning Services"]

    return(
        <ul className="w-full flex justify-evenly p-6 font-display text-sm font-medium">
            {categories.map((category) => <li>{category}</li>)}
        </ul>
    )
}

export default CategoryBar