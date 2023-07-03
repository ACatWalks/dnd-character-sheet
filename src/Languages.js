import React from 'react'
import Form from 'react-bootstrap/Form'

function Languages(props) {
    let languages = ['Common']
    let propRace = props.race
    if(props.characterClass === 'druid'){
        languages.push('Druidic')
    }
    if(props.characterClass === 'rogue'){
        languages.push('Thieves Cant')
    }
    switch(propRace){
        case 'dwarf':
            languages.push('Dwarvish')
            break;
        case 'elf':
            languages.push('Elvish')
            break;
        case 'halfling':
            languages.push('Halfling')
            break;
        case 'dragonborn':
            languages.push('Draconic')
            break;
        case 'gnome':
            languages.push('Gnomish')
            break;
        case 'half-elf':
            languages.push('Elvish')
            break;
        case 'half-orc':
            languages.push('Orc')
            break;
        case 'tiefling':
            languages.push('Infernal')
            break;
        case 'aasimar':
            languages.push('Celestial')
            break;
    }
    const handleLanguage = (e) => {
        languages.push(e.target.value)
    }
    const displayLangMenu = (propRace, propBack) => {
        if (propRace === 'human' || propRace === 'half-elf' || propBack === 'acolyte' || propBack === 'guild artisan' || propBack === 'hermit' || propBack === 'noble' || propBack === 'outlander' || propBack === 'sage'){
            return (
                <div>
                <p>Please select an additional language from the menu. </p>
                <Form.Select aria-label='language dropdown' onChange={handleLanguage}>
                    <option value='Dwarvish'>Dwarvish</option>
                    <option value='Elvish'>Elvish</option>
                    <option value='Giant'>Giant</option>
                    <option value='Gnomish'>Gnomish</option>
                    <option value='Goblin'>Goblin</option>
                    <option value='Halfling'>Halfling</option>
                    <option value='Orc'>Orc</option>
                    <option value='Abyssal'>Abyssal</option>
                    <option value='Celestial'>Celestial</option>
                    <option value='Deep Speech'>Deep Speech</option>
                    <option value='Draconic'>Draconic</option>
                    <option value='Infernal'>Infernal</option>
                    <option value='Primordial'>Primordial</option>
                    <option value='Sylvan'>Sylvan</option>
                    <option value='Undercommon'>Undercommon</option>
                </Form.Select>
                </div>
            )
        }
    }

    return(
        <div>
            <Form.Group controlId='formLanguages'>
                    <h4>Languages</h4>
                    {displayLangMenu(props.race, props.background)}
                    {languages}   
            </Form.Group>
        </div>
    )
}

export default Languages