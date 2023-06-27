import React from 'react'
import Form from 'react-bootstrap/Form'

function BackgroundForm(props) {
    return (
        <div>
            <Form.Group controlId='formBackground'>
                    <h4>Background</h4>
                    <Form.Select aria-label='background dropdown' onChange={props.handleBackground}>
                        <option value='acolyte'>Acolyte</option>
                        <option value='charlatan'>Charlatan</option>
                        <option value='criminal'>Criminal</option>
                        <option value='entertainer'>Entertainer</option>
                        <option value='folk hero/ine'>Folk Hero/ine</option>
                        <option value='guild artisan'>Guild Artisan</option>
                        <option value='hermit'>Hermit</option>
                        <option value='noble'>Noble</option>
                        <option value='outlander'>Outlander</option>
                        <option value='sage'>Sage</option>
                        <option value='sailor'>Sailor</option>
                        <option value='soldier'>Soldier</option>
                        <option value='urchin'>Urchin</option>
                    </Form.Select>
                </Form.Group>
        </div>
    )
}

export default BackgroundForm