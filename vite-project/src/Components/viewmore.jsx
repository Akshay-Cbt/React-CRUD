import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewMore(){
    const {id}=useParams()
    const navigate = useNavigate()
    const [data,setData]=useState({})
    const fetchData=async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000//get/one/${id}`)
            setData(response.data)
        }catch(error){
            console.log("There was an error",error)
        }
    }
    const handleDelete=async()=>{
        try{
            const response = await axios.delete(`http://127.0.0.1:8000//delete/${id}`)
            navigate('/')
        }catch(error){
            console.log("There was an error",error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [id]);    
    return(
        <div>
            <Card key={data.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={`http://127.0.0.1:8000/${data.image}`} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{data.brand}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the content.
              </Card.Text>
              <button onClick={handleDelete}>Delete</button>
            </Card.Body>
          </Card>
        </div>
    )
}
export default ViewMore;