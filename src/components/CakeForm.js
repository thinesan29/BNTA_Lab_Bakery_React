
import { useState } from "react";

const CakeForm = ({addNewCake}) => {
    const [name, setName] =  useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");


    const handlePriceChange = (e) => {
        if (e.target.value >= 0 ) {
            setPrice(e.target.value);
        }
    }

    const handleRatingChange = (e) => {
        if (e.target.value >= 0 & e.target.value <= 5 ) {
            setRating(e.target.value);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCake = {
            cakeName: name,
            ingredients: ingredients.split(","),
            price: price,
            rating: rating
        }
        addNewCake(newCake);
};

return (
    <>
      <form onSubmit = {handleSubmit}>
        <label htmlFor = "name" >Cake Name </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Cake Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor = "ingredients" >Ingredients </label>
        <input
          type="text"
          name="ingredients"
          placeholder="Enter Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
         <label htmlFor = "price" >Cake's Price (£) </label>
        <input
          type="number"
          name="price"
          placeholder="Enter Cake's Price"
          value={price}
          onChange={handlePriceChange}
        />
         <label htmlFor = "rating" >Cake's Rating </label>
        <input
          type="number"
          name="rating"
          placeholder="Enter Cake's Rating"
          value={rating}
          onChange={handleRatingChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default CakeForm;