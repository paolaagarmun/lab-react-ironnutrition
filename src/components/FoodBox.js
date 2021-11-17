import { Card, Col, Button } from "antd"

function FoodBox(obj) {

    

    return(
        
            <Col span={6}>
            <Card
                title={obj.props.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={obj.props.image} alt="img food" height={60} />
                <p>Calories: {obj.props.calories}</p>
                <p>Servings: {obj.props.servings}</p>
                <p>
                <b>Total Calories: {obj.props.calories * obj.props.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => obj.callback()} > Delete </Button>
            </Card>
            </Col>
        
      
    )
}

export default FoodBox;