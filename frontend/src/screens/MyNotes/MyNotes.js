import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
    }
  };
    const[notes,setNotes]=useState([]);

   const fetchNotes = async ()=>{
       const {data} = await axios.get("http://localhost:5000/api/notes");
       setNotes(data); 
   }
   console.log(notes);

  useEffect(()=>{
     
    fetchNotes();


  },[])


  return (
    <div>
      <MainScreen title="Welcome Back Aditya ....">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Notes
          </Button>
          </Link>
          {notes.map((note) => (
            <Accordion defaultActiveKey="0" flush key={note._id}>
            <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header>
                  {note.title}
                  </Accordion.Header>
                 
                </span>
                <div>
                  <Button href={`/notes/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
              <Card.Body>

               <h4>
                 <Badge  bg="success">
                  Category - {note.category}
                 </Badge>
               </h4>


                <blockquote className="blockquote mb-0">
                  <p>
                    {note.content}
                  </p>
                  <footer className="blockquote-footer">
                  Created On-date
                    
                  </footer>
                </blockquote>
              </Card.Body>
              </Accordion.Body>
             
            </Card>
            </Accordion.Item>
            </Accordion>
          ))}
        
      </MainScreen>
    </div>
  );
};

export default MyNotes;
