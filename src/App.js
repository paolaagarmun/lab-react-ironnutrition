import { useState } from 'react';
import './App.css';
import foodsList from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Button, Row } from "antd";

function App() {

  const [foods, setFood] = useState([...foodsList]);
  const [display, setDisplay] = useState(false);

  // function search() {
  //  const filteredFoods = foods.filter(food => (

  //  ))
  // }

  function deleteFood(i){
    const filtered = foods.filter((food,index) => {
      return i !== index;
    }) 
    setFood([...filtered])
  }
  
  const toggle = () => {
    setDisplay(!display);
  }


  return (
    <div className="App">
      <h2>Food List</h2>
      {
        display &&(<AddFoodForm props={foods} callback={setFood}/>)
      }
      
      <div style ={{margin:"0 auto"}}>
      <Button onClick={toggle} >
        {display ? "Hide form" : "Show form"}
      </Button>
      </div>
      
      <Search props={foods} callback={setFood}/>
      <Row gutter={[16, 16]}>
      {foods.map((food,i) => (
          <FoodBox key={i} props={food} callback={() => deleteFood(i)} />
        ))}
      </Row>
      
    </div>
  );
}

export default App;
