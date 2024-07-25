import React, { useState, useEffect} from 'react';
import './Recipe.scss';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { SlClose } from "react-icons/sl";
import Popup from 'reactjs-popup';

const Recipe = () => {
    const [dish, setDish] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
    const [filterDish, setFilterDish] = useState([]);
    
    useEffect(() => {
        const query = '*[_type == "dish"]';
    
        client.fetch(query)
          .then((data) => {
            setDish(data);
            setFilterDish(data);
        });
    }, []);
    
    const handleRecipeFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);
    
    setTimeout(() => {
        setAnimateCard([{y: 0, opacity: 1}]);

        if (item === 'All') {
            setFilterDish(dish);
        } else {
            setFilterDish(dish.filter((d) => d.tags.includes(item)));
        }
    }, 500);
    }

    return (
        <div id="link-recipe" className='app__recipe'>
            <div className='app__recipe-filter'>
                {['Savoury', 'Snack', 'Sweet', 'All'].map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => handleRecipeFilter(item)}
                    className={`app__recipe-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                      {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className='app__recipe-items'
            >
                {filterDish?.map((recipe, index) => (
                    <div className='app__recipe-item app__flex' key={index}>
                        <div className='app__recipe-img app__flex'>
                        <img src={urlFor(recipe.imgUrl)} alt={recipe.name} />
                    </div>

                    <div className='app__recipe-content app__flex'>
                        <h4 className='bold-text'>{recipe.name}</h4>
                    </div>
                    <Popup trigger={<button className="app__recipe-trigger">Recipe</button>} position="center" className='app__recipe-item-popup'>
                        <h2>Description</h2>
                        <p className='p-text'>{recipe.description}</p>
                        <h2>Ingredients</h2>
                        {recipe.ingredients?.map((ing) => (
                            <li className='p-text ingredient'>{ing}</li>
                        ))}
                    </Popup>
                </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Recipe;
