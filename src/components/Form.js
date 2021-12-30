import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import classes from './Form.module.css';

function Form() {
    const APP_ID = '55c3b51a';
    const APP_KEY = 'ecff5b5aa94f1e96753891301e1b72ae';

    const [recipes,setRecipes] = useState([]);

    //Creating state for searching items
    const [search,setSearch] = useState(''); 

    //creating a state that submit itself
    const [query,setQuery] = useState('chicken'); 

    
    useEffect(()=>{
       getRecipes();
    },[query]);

    const getRecipes = async() =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
    //   console.log(data.hits);
     setRecipes(data.hits);
    }

    const updateSearch = (e) =>{
       setSearch(e.target.value);
       //console.log(search);
    }

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
      <div className={classes.App}>
        <form className={classes.searchForm} onSubmit={getSearch}>
          <input
            type="text"
            className={classes.searchBar}
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className={classes.searchButton}>
            Search
          </button>
        </form>
        <div className={classes.recipes}>
          {recipes.map((recipe) => {
            return (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            );
          })}
        </div>
      </div>
    );
}

export default Form
