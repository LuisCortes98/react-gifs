
import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {


    const [categories, seTcategories] = useState(['One Punch']);

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory seTcategories={seTcategories}/>
        <hr/>
        
        <ol>
            {
                categories.map(category=> 
                    <GifGrid 
                    key={category}
                    category={category}/>
                )
            }
        </ol>
        </>
    )
}


export default GifExpertApp
