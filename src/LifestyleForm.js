import React from "react";
import Form from 'react-bootstrap/Form'

function LifestyleForm(props) {
    return (
        <div>
            <Form.Group controlId='formLifestyle'>
                    <h3>Lifestyle</h3>
                    <Form.Select aria-label='lifestyle dropdown' onChange={props.handleLifestyle}>
                        <option value='wretched'>Wretched</option>
                        <option value='squalid'>Squalid</option>
                        <option value='poor'>Poor</option>
                        <option value='modest'>Modest</option>
                        <option value='comfortable'>Comfortable</option>
                        <option value='wealthy'>Wealthy</option>
                        <option value='aristocratic'>Aristocratic</option>
                    </Form.Select>
                </Form.Group>
        </div>
    )
}

export default LifestyleForm