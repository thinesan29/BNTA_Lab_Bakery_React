
import Cake from "./Cake"

const CakeList = ({cakes, onButtonClick}) => {
 const CakeComponents = cakes.map((cake, index) => {
    return <Cake onButtonClick={onButtonClick} cake={cake} key={index} />;
});
return <ul>{CakeComponents}</ul>
}
export default CakeList;

