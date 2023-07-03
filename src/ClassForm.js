import React from 'react'
import Form from 'react-bootstrap/Form'

function ClassForm(props) {
    const calculateHitPoints = (characterClass, level) => {
        let hitPoints = 0
        let conMod = Math.floor((parseInt(props.con)-10)/2)
        if(level >= 2){
            if(characterClass === 'sorcerer' || characterClass === 'wizard'){
                hitPoints += (Math.ceil(Math.random()*6) + conMod)*(level-1)
                hitPoints += (6 + conMod)
            } else if(characterClass === 'bard' || characterClass === 'cleric' || characterClass === 'druid' || characterClass === 'monk' || characterClass === 'rogue' || characterClass === 'warlock'){
                hitPoints += (Math.ceil(Math.random()*8) + conMod)*(level-1)
                hitPoints += (8 + conMod)
            } else if(characterClass === 'fighter' || characterClass === 'paladin' || characterClass === 'ranger'){
                hitPoints += (Math.ceil(Math.random()*10) + conMod)*(level-1)
                hitPoints += (10 + conMod)
            } else if(characterClass === 'barbarian'){
                hitPoints += (Math.ceil(Math.random()*12) + conMod)*(level-1)
                hitPoints += (12 + conMod)
            }
        } else {
            if(characterClass === 'sorcerer' || characterClass === 'wizard'){
                hitPoints += 6 + conMod
            } else if(characterClass === 'bard' || characterClass === 'cleric' || characterClass === 'druid' || characterClass === 'monk' || characterClass === 'rogue' || characterClass === 'warlock'){
                hitPoints += 8 + conMod
            } else if(characterClass === 'fighter' || characterClass === 'paladin' || characterClass === 'ranger'){
                hitPoints += 10 + conMod
            } else if(characterClass === 'barbarian'){
                hitPoints += 12 + conMod
            }
        }
        return hitPoints
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
                <p>Hit Points: {calculateHitPoints(props.characterClass, props.level)}</p>
        </div>
    )
}

export default ClassForm