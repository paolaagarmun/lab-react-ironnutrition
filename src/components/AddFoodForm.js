import {Form, Input,Button} from "antd"
import {useState} from "react"

function AddFoodForm({props, callback}) {

    //constants for food items
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState();

    //const functions to handle the submit
    const handleSubmit = (event) => {
        event.preventDefault();
        let newFood = {name, image, calories, servings}
        callback([...props, newFood])
        setName("")
        setImage("")
        setCalories(0);
        setServings(0);
    }

    const onChangeName = (event) => setName(event.target.value);
    const onChangeImage = (event) => setImage(event.target.value);
    const onChangeCalories = (event) => setCalories(event.target.value);
    const onChangeServings = (event) => setServings(event.target.value);


    return (
        <Form style={{width: '400px', margin:'0 auto'}}>
            <Input 
                value={name} 
                type="text" 
                onChange={onChangeName} 
                placeholder="Name" 
            />
            <Input 
                value={image} 
                type="text" 
                onChange={onChangeImage} 
                placeholder="Image url"
            />
            <Input 
                value={calories} 
                type="number" 
                onChange={onChangeCalories} 
                placeholder="Calories" 
            />
            <Input 
                value={servings} 
                type="number" 
                onChange={onChangeServings} 
                placeholder="Servings"
            />
            <Button 
                type="primary" 
                onClick={handleSubmit}>Create Food Item</Button>
        </Form>
    )
}

export default AddFoodForm;