import React from 'react'
import Form from 'react-bootstrap/Form'

function AbilityScores(props){
    let strength = props.strength
    let dex = props.dex
    let con = props.con
    let int = props.int
    let wis = props.wis
    let cha = props.cha
    switch(props.race){
        case 'dwarf':
            con = con + 2
            break;
        case 'elf':
            dex = dex + 2
            break;
        case 'halfling':
            dex = dex + 2
            break;
        case 'human':
            strength = strength + 1
            dex = dex + 1
            con = con + 1
            int = int + 1
            wis = wis + 1
            cha = cha + 1
            break;
        case 'dragonborn':
            strength = strength + 2
            cha = cha + 1
            break;
        case 'gnome':
            int = int + 2
            break;
        case 'half-elf':
            cha = cha + 2
            break;
        case 'half-orc':
            strength = strength + 2
            con = con + 1
            break;
        case 'tiefling':
            int = int + 1
            cha = cha + 2
            break;
        case 'aasimar':
            wis = wis + 1
            cha = cha + 2
            break;
    }
    const specialHalfElf = () => {
        if(props.race === 'half-elf'){
            return (
                <div>
                    <p>Please increment 2 ability scores other than Charisma by 1</p>
                </div>
            )
        }
    }
    const calculateModifier = (score) => {
        let numScore = parseInt(score)
        let mod = Math.floor((numScore-10)/2)
        if(mod < 0){
            return mod
        } else if(mod === 0){
            return '+/- ' + mod
        } else{
            return '+ ' + mod
        }
    }
    return (
        <div>
            <Form.Group controlId='formStats'>
                    <h4>Ability Scores</h4>
                    <div className='score-div'>
                    <Form.Label>Strength</Form.Label>
                    <Form.Control onChange={props.handleStrength} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(strength)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Dexterity</Form.Label>
                    <Form.Control onChange={props.handleDex} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(dex)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Constitution</Form.Label>
                    <Form.Control onChange={props.handleCon} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(con)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Intelligence</Form.Label>
                    <Form.Control onChange={props.handleInt} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(int)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Wisdom</Form.Label>
                    <Form.Control onChange={props.handleWis} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(wis)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Charisma</Form.Label>
                    <Form.Control onChange={props.handleCha} className='scoreboard'required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(cha)}
                    </div>
                </Form.Group>
                {specialHalfElf()}
        </div>
    )
}

export default AbilityScores