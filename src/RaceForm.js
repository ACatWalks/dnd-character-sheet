import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'

function RaceForm(props) {
    const calculateSpeed = (race) => {
        if(race === 'dwarf' || race === 'halfling' || race === 'gnome'){
            return '25 ft'
        } else{
            return '30 ft'
        }
    }
    const toggleDarkvision = (race) => {
        let dv = false
        if(race === 'dwarf' || race === 'elf' || race === 'gnome' || race === 'half-elf' || race === 'half-orc' || race === 'tiefling' || race === 'aasimar'){
            dv = true
        }
        return dv
    }
    return (
        <div>
            <Form.Group controlId='formRace'>
                    <h4>Race</h4>
                    <Form.Select aria-label='race dropdown' onChange={props.handleRace}>
                        <option value='dwarf'>Dwarf</option>
                        <option value='elf'>Elf</option>
                        <option value='halfling'>Halfling</option>
                        <option value='human'>Human</option>
                        <option value='dragonborn'>Dragonborn</option>
                        <option value='gnome'>Gnome</option>
                        <option value='half-elf'>Half-Elf</option>
                        <option value='half-orc'>Half-Orc</option>
                        <option value='tiefling'>Tiefling</option>
                        <option value='aasimar'>Aasimar</option>
                    </Form.Select>
                    <span>Speed: {calculateSpeed(props.race)}</span>
                    <Form.Check type='switch' label='Darkvision' checked={toggleDarkvision(props.race)}/>
                </Form.Group>
        </div>
    )
}

export default RaceForm