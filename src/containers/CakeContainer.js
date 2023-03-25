import { useState } from "react";
import CakeList from "../components/CakeList";
import CakeForm from "../components/CakeForm";

const CakeContainer = () => {

const [cakes, setCakes] = useState([
	{
		cakeName: "Victoria Sponge",
   		ingredients: [
   			"eggs",
      		"butter",
      		"sugar",
      		"self-raising flour",
      		"baking powder",
      		"milk"
  		],
  		price: 5,
   		rating: 5
	},
	{
 		cakeName: "Tea Loaf",
   		ingredients: [
   			"eggs",
      		"oil",
      		"dried fruit",
      		"sugar",
      		"self-raising flour",
      		"strong tea",
  		],
  		price: 2,
  		rating: 3
	},
	{
 		cakeName: "Carrot Cake",
   		ingredients: [
    		"carrots",
      		"walnuts",
      		"oil",
      		"cream cheese",
      		"flour",
      		"sugar",
   		],
   		price: 8,
   		rating: 5
	}
] )

const addNewCake = (newCake) =>{
	setCakes([...cakes, newCake]);
  }
    // EXTENSION - TRACKING REVENUE

    const [revenue, setRevenue] = useState(0);

    const updateRevenue = (saleValue) => {
        setRevenue(revenue + saleValue);
    }

    return(
        <>
            <div className="container">
                <CakeList onButtonClick={updateRevenue} cakes={cakes}/>
                <CakeForm addNewCake = {addNewCake}/>
            </div>
            <p id="price">Total sales: £{revenue}</p>

        </>
    )

}

export default CakeContainer;
