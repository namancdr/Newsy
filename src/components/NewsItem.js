import React from 'react'

export default function NewsItem({title, description, imageUrl, pubDate, sourceLink}) {

    const imgUrl = imageUrl ? imageUrl : 'https://media.istockphoto.com/photos/cubes-with-the-word-news-on-a-newspaper-picture-id1128119311?k=20&m=1128119311&s=612x612&w=0&h=oLw5IkWOt3ebW9QycxcC9pL34XeJa450qJYgSD8s2Tw='

   
    return (         
        <div key={sourceLink} className="news-card card mb-3 mt-4" style={{maxWidth: "100%"}} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgUrl}className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small>{pubDate}</small></p>
                        <a href={sourceLink} target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm read-more-btn">Read More</button></a>
                    </div>
                </div>
            </div>
        </div>                 
    )
}
