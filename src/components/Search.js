import React from 'react'
import { useState } from 'react/cjs/react.development'

const Search = ({parkQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q);
        parkQuery(q);
    }
    return (
        <section id='parks'>
            <div className='container pt-5'>
                <h3 className="h3 text-center">Search by Park</h3>
                <input className="form-control" type="text" placeholder="Search" 
                onChange={(e) => onChange(e.target.value)} value={text}/>
            </div>
        </section>
    )
}

export default Search
