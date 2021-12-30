import React from 'react';
import classes from './Recipe.module.css';

function Recipe(props) {
    return (
        <div className={classes.recipe}>
            <h1>Title: {props.title}</h1>
            <ul>
                {props.ingredients.map(ingredient=>{
                    return(
                        <li style={{listStyle: 'none'}} key={ingredient.id}>{ingredient.text}</li>
                    )
                })}
            </ul>
            <p>Calories: {props.calories}</p>
            <img className={classes.image} src={props.image} alt="" />
        </div>
    )
}

export default Recipe
