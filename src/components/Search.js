import { Input,Divider } from "antd";
import {useState} from "react";



// Iteration 5
function Search({props, callback}) {
    //console.log("Search props",props)
    const [keyword, setKeyword] = useState("");

    const handleKeyword = (event) => {
        setKeyword(event.target.value);
        searchKeyword();
    }

    function searchKeyword() {
        let filteredFoods = props.filter((prop) => {
            return prop.name.includes(keyword)
        });
        callback(filteredFoods);
    }

  return (
    <div style={{width:"30vw", margin:"0 auto"}}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input 
        placeholder="Search" 
        type="text" 
        onChange={handleKeyword} 
        />
    </div>
  );
}

export default Search;