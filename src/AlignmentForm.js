import React from 'react'
import Form from 'react-bootstrap/Form'

function AlignmentForm(props){
    return (
        <div>
            <Form.Group controlId='formAlignment'>
                    <h4>Alignment</h4>
                    <Form.Select aria-label='alignmnet dropdown' onChange={props.handleAlignment}>
                        <option value='lg'>Lawful Good</option>
                        <option value='ng'>Neutral Good</option>
                        <option value='cg'>Chaotic Good</option>
                        <option value='ln'>Lawful Neutral</option>
                        <option value='nn'>True Neutral</option>
                        <option value='cn'>Chaotic Neutral</option>
                        <option value='le'>Lawful Evil</option>
                        <option value='ne'>Neutral Evil</option>
                        <option value='ce'>Chaotic Evil</option>
                    </Form.Select>
                </Form.Group>
        </div>
    )
}

export default AlignmentForm