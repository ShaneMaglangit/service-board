import Link from 'next/link'

const CategoryBar = () => {
    var categories = ["Grooming", "Lifestyle", "Education", "Cleaning", "Home Improvements", "Healthcare", "Shopping", "Emotional Aid", "Repair", "Transporation"]

    return(
        <div className="w-full shadow py-4">
            <ul className="w-11/12 mx-auto flex justify-around font-display text-sm font-semibold">
                {categories.map((category) => 
                    <li key={category}>
                        <Link href={`/listing?category=${category}`}>
                            <a  onClick={() => window.location.href=`/listing?category=${category}`}className="border-b-2 border-transparent hover:border-primary transition-all duration-100 ease-in">{category}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CategoryBar