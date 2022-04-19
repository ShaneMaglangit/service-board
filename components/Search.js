import Link from "next/link"
import {useEffect, useState} from 'react'
import {useRouter} from "next/router"

const Search = ({classes}) => {
    var routerLoaded = false
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    useEffect(() => {
        if (router.asPath !== router.route && !routerLoaded) {
            if (router.pathname === "/listing") {
                setSearchQuery(router.query.search)
            }
            routerLoaded = true
        }
    }, [router])

    function handleInputChange(event) {
        const target = event.target;
        var value = target.value
        setSearchQuery(value)
    }

    return (
        <div className={`${classes} relative mx-auto text-gray-600 rounded-lg`}>
            <input value={searchQuery} onChange={handleInputChange}
                   className="w-full bg-white h-10 px-5 pr-16 text-sm rounded-lg focus:outline-none" type="search"
                   name="search" placeholder="Search"/>
            <Link href={`/listing?search=${searchQuery}`}>
                <button onClick={() => window.location.href = `/listing?search=${searchQuery}`} type="submit"
                        className="absolute right-0 top-0 focus:outline-none rounded-r-lg px-4 bg-accent h-full">
                    <svg className="text-white h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1"
                         id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default Search