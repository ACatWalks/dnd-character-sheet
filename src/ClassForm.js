import React from 'react'
import Form from 'react-bootstrap/Form'

function ClassForm(props) {
    const calculateHitPoints = (characterClass) => {
        let conMod = Math.floor((parseInt(props.con)-10)/2)
        if(characterClass === 'sorcerer' || characterClass === 'wizard'){
            return 6 + conMod
        } else if(characterClass === 'bard' || characterClass === 'cleric' || characterClass === 'druid' || characterClass === 'monk' || characterClass === 'rogue' || characterClass === 'warlock'){
            return 8 + conMod
        } else if(characterClass === 'fighter' || characterClass === 'paladin' || characterClass === 'ranger'){
            return 10 + conMod
        } else if(characterClass === 'barbarian'){
            return 12 + conMod
        }
    }
    return (
        <div>
            <Form.Group controlId='formClass'>
                    <h4>Class</h4>
                    <Form.Select aria-label='class dropdown' onChange={props.handleClass}>
                        <option value='barbarian'>Barbarian</option>
                        <option value='bard'>Bard</option>
                        <option value='cleric'>Cleric</option>
                        <option value='druid'>Druid</option>
                        <option value='fighter'>Fighter</option>
                        <option value='monk'>Monk</option>
                        <option value='paladin'>Paladin</option>
                        <option value='ranger'>Ranger</option>
                        <option value='rogue'>Rogue</option>
                        <option value='sorcerer'>Sorcerer</option>
                        <option value='warlock'>Warlock</option>
                        <option value='wizard'>Wizard</option>
                    </Form.Select>
                </Form.Group>
                <p>Hit Points: {calculateHitPoints(props.characterClass)}</p>
        </div>
    )
}

export default ClassForm