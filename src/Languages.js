import React from 'react'
import Form from 'react-bootstrap/Form'

function Languages(props) {
    let languages = ['Common']
    let propRace = props.race
    let propBack = props.background
    if(props.characterClass === 'druid'){
        languages.push('Druidic')
        //setLanguages(languages)
    }
    if(props.characterClass === 'rogue'){
        languages.push('Thieves Cant')
        //setLanguages(languages)
    }
    switch(propRace){
        case 'dwarf':
            languages.push('Dwarvish')
            //setLanguages(languages)
            break;
        case 'elf':
            languages.push('Elvish')
            //setLanguages(languages)
            break;
        case 'halfling':
            languages.push('Halfling')
            //setLanguages(languages)
            break;
        case 'human':
            alert('Please select an additional language from the language menu')
            break;
        case 'dragonborn':
            languages.push('Draconic')
            //setLanguages(languages)
            break;
        case 'gnome':
            languages.push('Gnomish')
            //setLanguages(languages)
            break;
        case 'half-elf':
            languages.push('Elvish')
            //setLanguages(languages)
            alert('Please select an additional language from the language menu')
            break;
        case 'half-orc':
            languages.push('Orc')
            //setLanguages(languages)
            break;
        case 'tiefling':
            languages.push('Infernal')
            //setLanguages(languages)
            break;
        case 'aasimar':
            languages.push('Celestial')
            //setLanguages(languages)
            break;
    }
    switch(propBack){
        case 'acolyte':
            alert('Please select 2 additional languages from the language menu')
            break;
        case 'guild artisan':
            alert('Please select an additional language from the language menu')
            break;
        case 'hermit':
            alert('Please select an additional language from the language menu')
            break;
        case 'noble':
            alert('Please select an additional language from the language menu')
            break;
        case 'outlander':
            alert('Please select an additional language from the language menu')
            break;
        case 'sage':
            alert('Please select 2 additional languages from the language menu')
            break;
    }
    const handleLanguage = (e) => {
        languages.push(e.target.value)
        //setLanguages(languages)
    }
    const displayLangMenu = (propRace, propBack) => {
        if (propRace === 'human' || propRace === 'half-elf' || propBack === 'acolyte' || propBack === 'guild artisan' || propBack === 'hermit' || propBack === 'noble' || propBack === 'outlander' || propBack === 'sage'){
            return (
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
            )
        }
    }

    return(
        <div>
            <Form.Group controlId='formLanguages'>
                    <h3>Languages</h3>
                    {displayLangMenu(props.race, props.background)}
                    {languages}   
            </Form.Group>
        </div>
    )
}

export default Languages