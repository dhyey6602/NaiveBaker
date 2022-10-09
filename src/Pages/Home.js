import React, { useContext, useState, useEffect } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import SearchBox from "../Components/search-box/Search-Box";
import RecipeCard from '../Components/RecipeCard/RecipeCard';
import { RecipeContext } from '../Contexts/context';
import "./Home.css"


export default function Home() {

  const { recipes } = useContext(RecipeContext);

  const [rec, setRec] = useState([]);

  useEffect(() => {
    if(recipes.length !== 0){
      setRec(recipes);
    }
  }, [recipes])

  return (
    <>
      {console.log(rec)}
      <Navbar className="Nav" />
      {
        recipes.length !== 0 &&
        <div className="Home">
          <SearchBox recipes={recipes} setRec={setRec}/>
          <div className="Home-Body-container">
            {rec.map(r => <RecipeCard r={r} />)}
          </div>
        </div>
      }
    </>
  );
}