import React from 'react'
import Form from 'react-bootstrap/Form'

function Equipment(props) {
    let equipment;
    const handleEquipment = (e) => {
        equipment = e.target.value
    }
    const displayEquipmentChoices = () => {
            if(props.characterClass === 'barbarian' || props.characterClass === 'druid'){
                equipment = 'explorers pack'
            } else if(props.characterClass === 'bard'){
                return (
                    <div>
                        <Form.Group controlId='bard equipment choices'>
                            <Form.Check type='radio' label='Diplomats pack' value='diplomats pack' onCheck={handleEquipment}></Form.Check>
                            <Form.Check type='radio' label='Entertainers pack' value='entertainers pack' onCheck={handleEquipment}></Form.Check>
                        </Form.Group>
                    </div>
                )
            } else if(props.characterClass === 'cleric' || props.characterClass === 'paladin'){
                return (
                    <div>
                        <Form.Group controlId='cleric/paladin equipment choices'>
                            <Form.Check type='radio' label='Priests pack' value='priests pack' onCheck={handleEquipment}></Form.Check>
                            <Form.Check type='radio' label='Explorers pack' value='explorers pack' onCheck={handleEquipment}></Form.Check>
                        </Form.Group>
                    </div>
                )
            } else if(props.characterClass === 'fighter' || props.characterClass === 'monk' || props.characterClass === 'ranger' || props.characterClass === 'sorcerer'){
                return (
                    <div>
                        <Form.Group controlId='fighter/monk/ranger/sorcerer equipment choices'>
                            <Form.Check type='radio' label='Dungeoneers pack' value='dungeoneers pack' onCheck={handleEquipment}></Form.Check>
                            <Form.Check type='radio' label='Explorers pack' value='explorers pack' onCheck={handleEquipment}></Form.Check>
                        </Form.Group>
                    </div>
                )
            } else if(props.characterClass === 'rogue'){
                return (
                    <div>
                        <Form.Group controlId='rogue equipment choices'>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Burglars pack' value='burglars pack'></Form.Check>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Dungeoneers pack' value='dungeoneers pack'></Form.Check>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Explorers pack' value='explorers pack'></Form.Check>
                        </Form.Group>
                    </div>
                )
            } else if(props.characterClass === 'warlock'){
                return (
                    <div>
                        <Form.Group controlId='warlock equipment choices'>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Scholars pack' value='scholars pack'></Form.Check>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Dungeoneers pack' value='dungeoneers pack'></Form.Check>
                        </Form.Group>
                    </div>
                )
            } else if(props.characterClass === 'wizard'){
                return (
                    <div>
                        <Form.Group controlId='wizard equipment choices'>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Scholars pack' value='scholars pack'></Form.Check>
                            <Form.Check type='radio' onCheck={handleEquipment} label='Explorers pack' value='explorers pack'></Form.Check>
                        </Form.Group>
                    </div>
                )
            }
    }
    const displayAdditionalEquipment = () => {
        let addEquip = []
        switch(props.characterClass){
            case 'bard':
                addEquip.push('Musical instrument: see tool proficiencies menu for options')
                break;
            case 'cleric':
                addEquip.push('Holy symbol')
                break;
            case 'druid':
                addEquip.push('Druidic focus')
                break;
            case 'paladin':
                addEquip.push('Holy symbol')
                break;
            case 'rogue':
                addEquip.push('Thieves tools')
                break;
            case 'sorcerer':
                addEquip.push('Arcane focus or component pouch')
                break;
            case 'warlock':
                addEquip.push('Arcane focus or component pouch')
                break;
            case 'wizard':
                addEquip.push('Arcane focus or component pouch')
                addEquip.push('Spellbook')
                break;
        }
        return addEquip
    }
    return (
        <div>
            <h4>Equipment</h4>
            {displayEquipmentChoices()}
            {equipment}
            {displayAdditionalEquipment()}
        </div>
    )
}

export default Equipment