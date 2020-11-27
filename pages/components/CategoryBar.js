import Link from 'next/link'

const CategoryBar = () => {
    var categories = ["Carpentry", "Plumbing", "Hair Dresser", "Make-up Artist", "Tutor", "Car Wash", "Laundry", "Computer Repair", "Cleaning Services"]

    return(
        <div className="w-full shadow py-4">
            <ul className="w-11/12 mx-auto flex justify-around font-display text-sm font-semibold">
                {categories.map((category) => 
                    <li key={category}>
                        <Link href="/">
                            <a className="border-b-2 border-transparent hover:border-primary transition-all duration-100 ease-in">{category}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CategoryBar