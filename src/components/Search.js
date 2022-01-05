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
                <h2 className="text-center">Search by Park</h2>
                <input className="form-control" type="text" placeholder="Default input" 
                onChange={(e) => onChange(e.target.value)} value={text}/>
            </div>
        </section>
    )
}

export default Search
