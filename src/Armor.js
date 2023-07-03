import React from 'react'
import Form from 'react-bootstrap/Form'

function Armor(props) {
    let armor;
    let shield = false
    if(props.characterClass === 'fighter' || props.characterClass === 'cleric' || props.characterClass === 'paladin'){
        armor = 'heavy'
    } else if(props.characterClass === 'barbarian' || props.characterClass === 'druid' || props.characterClass === 'ranger'){
        armor = 'medium'
    } else if(props.characterClass === 'bard' || props.characterClass === 'rogue' || props.characterClass === 'warlock'){
        armor = 'light'
    } 
    const handleShield = (e) => {
        if (e.checked){
            shield = true
        } else{
            shield = false
        }
    }
    const displayShieldOption = () => {
        if(armor === 'heavy' || armor === 'medium'){
            return (
                <div>
                    <Form.Check type='switch' label='Shield' onCheck={handleShield}></Form.Check>
                </div>
            )
        }
    }

    const displayArmorMenu = () => {
        if(armor === 'light'){
            return (
                <div>
                    <Form.Group controlId='lightArmorType'>
                        <h4>Armor</h4>
                        <Form.Select aria-label='light armor options' onChange={props.handleArmor}>
                            <option value='padded'>Padded</option>
                            <option value='leather'>Leather</option>
                            <option value='studded leather'>Studded Leather</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            )
        } else if(armor === 'medium'){
            return (
                <div>
                    <Form.Group controlId='mediumArmorType'>
                        <h4>Armor</h4>
                        <Form.Select aria-label='medium armor options' onChange={props.handleArmor}>
                            <option value='hide'>Hide</option>
                            <option value='chain shirt'>Chain shirt</option>
                            <option value='scale mail'>Scale mail</option>
                            <option value='breastplate'>Breastplate</option>
                            <option value='half plate'>Half plate</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            )
        } else if(armor === 'heavy'){
            return (
                <div>
                    <Form.Group controlId='heavyArmorType'>
                        <h4>Armor</h4>
                        <Form.Select aria-label='heavy armor options' onChange={props.handleArmor}>
                            <option value='ring mail'>Ring mail</option>
                            <option value='chain mail'>Chain mail</option>
                            <option value='splint'>Splint</option>
                            <option value='full plate'>Full plate</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            )
        }
    }
    const calculateArmorClass = () => {
        let armorClass = 10
        let dexMod = Math.floor((parseInt(props.dex)-10)/2)
        let conMod = Math.floor((parseInt(props.con)-10)/2)
        let wisMod = Math.floor((parseInt(props.wis)-10)/2)
        if(props.armorType === 'padded' || props.armorType === 'leather'){
            armorClass = 11 + dexMod
        } else if(props.armorType === 'studded leather'){
            armorClass = 12 + dexMod
        } else if(props.armorType === 'hide'){
            if(dexMod <= 2){
                armorClass = 12 + dexMod
            } else{
                armorClass = 14
            }
        } else if(props.armorType === 'chain shirt'){
            if(dexMod <= 2){
                armorClass = 13 + dexMod
            } else{
                armorClass = 15
            }
        } else if(props.armorType === 'scale mail' || props.armorType === 'breastplate'){
            if(dexMod <= 2){
                armorClass = 14 + dexMod
            } else{
                armorClass = 16
            }
        } else if(props.armorType === 'half plate'){
            if(dexMod <= 2){
                armorClass = 15 + dexMod
            } else{
                armorClass = 17
            }
        } else if(props.armorType === 'ring mail'){
            armorClass = 14
        } else if(props.armorType === 'chain mail'){
            armorClass = 16
        } else if(props.armorType === 'splint'){
            armorClass = 17
        } else if(props.armorType === 'full plate'){
            armorClass = 18
        } else{
            armorClass = 10 + dexMod
        }
        if(shield){
            armorClass += 2
        }
        if(props.characterClass === 'monk'){
            armorClass += wisMod
        }
        if(props.characterClass === 'barbarian' && props.armorType === 'none'){
            armorClass += conMod
        }
        return armorClass
    }
    return (
        <div>
            {displayArmorMenu()}
            {displayShieldOption()}
            <p>Armor Class: {calculateArmorClass(props.armorType)}</p>
        </div>
    )
}

export default Armor