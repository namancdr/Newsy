import React from 'react'
import {Link} from 'react-router-dom'

export default function Categories() {
    return (
        <div className="categories sticky-top container my-4 d-flex" style={{overflow: 'auto'}}>
            <Link to='/Business' ><h4><span className="mx-1 badge">Business</span></h4></Link>
            <Link to='/Entertainment' ><h4><span className="mx-1 badge">Entertainment</span></h4></Link>
            <Link to='/Environment' ><h4><span className="mx-1 badge">Environment</span></h4></Link>
            <Link to='/Food' ><h4><span className="mx-1 badge">Food</span></h4></Link>
            <Link to='/Health' ><h4><span className="mx-1 badge">Health</span></h4></Link>
            <Link to='/Politics' ><h4><span className="mx-1 badge">Politics</span></h4></Link>
            <Link to='/Science' ><h4><span className="mx-1 badge">Science</span></h4></Link>
            <Link to='/Sports' ><h4><span className="mx-1 badge">Sports</span></h4></Link>
            <Link to='/Technology' ><h4><span className="mx-1 badge">Technology</span></h4></Link>
            <Link to='/World' ><h4><span className="mx-1 badge">World</span></h4></Link>
        </div>
    )
}


