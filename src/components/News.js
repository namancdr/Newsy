import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Categories from './Categories'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'


export default function News(props) {
    const apikey = 'pub_1943a72c8b0f53c7285c2a6e82924899bf95'

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)

    const capitalizeWord = (word)=> {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const getNews = async() => {
        const url=`https://newsdata.io/api/1/news?apikey=${apikey}&category=${props.category}&language=hi,en&page=${page}`
        setLoading(true)
        const fetchData = await fetch(url)
        const data = await fetchData.json()
        setTotalResults(data.totalResults)
        setArticles(data.results)
        setLoading(false)
        setPage(page+1)

    }

    useEffect(() => {
        getNews()
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async() => {
        
        const url=`https://newsdata.io/api/1/news?apikey=${apikey}&category=${props.category}&language=hi,en&page=${page}`
        setLoading(true)
        const fetchData = await fetch(url)
        const data = await fetchData.json()
        setPage(data.nextPage)
        setArticles(articles.concat(data.results))
        setTotalResults(data.totalResults)
        setLoading(false)

    }   

    return (
        <div className="container">

            <Categories />

            <h3 className='headline-text'>{capitalizeWord(props.category)} Headlines</h3>

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                >

                {articles.map((element) => {
                    return <NewsItem key={element.link} title={element.title} description={element.description ? element.description.slice(0, 180) : ""} imageUrl={element.image_url} pubDate={element.pubDate} sourceLink={element.link} />
                })}

            </InfiniteScroll>
        </div>
    )
}
