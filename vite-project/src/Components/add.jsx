import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Add(){
    const navigate = useNavigate()
    const [data,setData]=useState({
        "name":"",
        "brand":"",
        "price":"",
        "image":null
    })
    const InputData=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let files = e.target.files;

        let newData;
        if(files){
            newData = {...data,[name]:files[0]}
            setData(newData)
        }else{
            newData={...data,[name]:value}
            setData(newData)
        }
    }
    const fetchData=async()=>{
        try{
            const response = await axios.post("http://127.0.0.1:8000/add/",data,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            navigate('/')
        }catch(error){
            console.log("There was an error",error)
        }
    }
    const submitData=()=>{
        fetchData()
    }
    return(
        <div className="form-container">
      <h2>Add Electronic Item</h2>
      <form>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={InputData}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={InputData}
            required
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="brand"
            value={data.brand}
            onChange={InputData}
            required
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input type="file" name="image" onChange={InputData} required />
        </div>
        <button type="button" onClick={submitData}>Add Electronics</button>
      </form>
    </div>
    )
}
export default Add;

    
