import Link from 'next/link'

const CategoryBar = () => {
    var categories = ["Grooming", "Lifestyle", "Education", "Cleaning", "Home Improvements", "Healthcare", "Shopping", "Emotional Aid", "Repair", "Transporation"]

    return(
        <div className="w-full shadow py-4">
            <div className="mx-auto lg:container">
                <div className="w-11/12 mx-auto flex lg:justify-around overflow-x-auto overflow-y-hidden font-display text-sm font-semibold">
                    {categories.map((category) => {
                        return(
                            <div className="mb-2 lg:mb-0">
                                <Link href={`/listing?category=${category}`}>
                                    <a key={category} onClick={() => window.location.href=`/listing?category=${category}`} className="flex-initial text-center mx-2 border-b-2 border-transparent w-full hover:border-primary transition-all duration-100 ease-in"><nobr>{category}</nobr></a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryBar