import React from 'react'
import MainScreen from '../../components/MainScreen.js'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import notes from "../../data/notes.js"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


const MyNotes = () => {

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <span type="button" onClick={decoratedOnClick}>
            {children}
          </span>
        );
      }



  return (
    <>  
    <MainScreen title="Welcome back Sibi...">
    <div>
    <Link to="/createnote">
     <Button variant="info" className='mx-2'>Create new note</Button>
    </Link>
    </div>

{
        notes.map(note => (
            <Accordion defaultActiveKey="1">
            <Card style={{ margin: 25 }}>
      <Card.Header style={{ display: "flex" }}>
     
      <span style={{  color: "black",
                      textDecoration: "none",
                      flex:1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,}}> 
                      <CustomToggle eventKey="0">
                      {note.title}  
                      </CustomToggle>
                      </span>
                    
      
      <Button variant="info" className='mx-2' >Edit</Button>
      <Button variant="danger" className='mx-2'>Delete</Button>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
      <Card.Body>
      
        <blockquote className="blockquote mb-0">
          <p>
          {note.content}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        
      </Card.Body>
      </Accordion.Collapse>
      
    </Card>
    </Accordion>
        ))
    }

    
    </MainScreen>

    </>
  
  )
}

export default MyNotes
