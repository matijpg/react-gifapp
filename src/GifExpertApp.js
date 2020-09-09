import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { ByMatiu } from './components/ByMatiu';

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['Rick and Morty']);

   return (
      <>
         <h2 className="logo"> Gifapp </h2>
         <AddCategory setCategories={setCategories} />
         <hr />

         <ol>
            {
               categories.map(category => (
                  <GifGrid
                     category={category}
                     key={category}
                  />
               ))
            }
         </ol>
         <ByMatiu />
      </>
   )
}

export default GifExpertApp;
