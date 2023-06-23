import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CharacterForm() {
    const [race, setRace] = useState('')
    const [characterClass, setCharacterClass] = useState('')
    const [alignment, setAlignment] = useState('')
    const [languages, setLanguages] = useState([])
    const [background, setBackground] = useState('')
    const [armor, setArmor] = useState('none')
    const [weapons, setWeapons] = useState('')
    const [equipmentPack, setEquipmentPack] = useState('')
    const [toolProfs, setToolProfs] = useState('none')
    const [lifestyle, setLifestyle] = useState('')
    const [strength, setStrength] = useState(10)
    const [dex, setDex] = useState(10)
    const [con, setCon] = useState(10)
    const [int, setInt] = useState(10)
    const [wis, setWis] = useState(10)
    const [cha, setCha] = useState(10)
    const [skills, setSkills] = useState([])
    const [spells, setSpells] = useState([])
    const [animal, setAnimal] = useState('')

    const handleRace = (e) => {
        let element = e.target
        setRace(`${element.value}`)
    }
    const handleClass = (e) => {
        let element = e.target
        setCharacterClass(`${element.value}`)
    }
    const handleAlignment = (e) => {
        let element = e.target
        setAlignment(`${element.value}`)
    }
    const handleBackground = (e) => {
        let element = e.target
        setBackground(`${element.value}`)
    }
    const handleLifestyle = (e) => {
        let element = e.target
        setLifestyle(`${element.value}`)
    }
    const handleStrength = (e) => {
        let element = e.target
        setStrength(`${element.value}`)
    }
    const handleDex = (e) => {
        let element = e.target
        setDex(`${element.value}`)
    }
    const handleCon = (e) => {
        let element = e.target
        setCon(`${element.value}`)
    }
    const handleInt = (e) => {
        let element = e.target
        setInt(`${element.value}`)
    }
    const handleWis = (e) => {
        let element = e.target
        setWis(`${element.value}`)
    }
    const handleCha = (e) => {
        let element = e.target
        setCha(`${element.value}`)
    }
    const handleSubmit = () => {
        console.log(race, characterClass, alignment, background, lifestyle, strength, dex, con, int, wis, cha)
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
            <Form>
                <h2>The Essentials</h2>
                <Form.Group controlId='formRace'>
                    <h3>Race</h3>
                    <Form.Select aria-label='race dropdown' onChange={handleRace}>
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
                </Form.Group>
                <Form.Group controlId='formClass'>
                    <h3>Class</h3>
                    <Form.Select aria-label='class dropdown' onChange={handleClass}>
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
                <Form.Group controlId='formAlignment'>
                    <h3>Alignment</h3>
                    <Form.Select aria-label='alignmnet dropdown' onChange={handleAlignment}>
                        <option value='lg'>Lawful Good</option>
                        <option value='ng'>Neutral Good</option>
                        <option value='cg'>Chaotic Good</option>
                        <option value='ln'>Lawful Neutral</option>
                        <option value='nn'>True Neutral</option>
                        <option value='cn'>Chaotic Neutral</option>
                        <option value='le'>Lawful Evil</option>
                        <option value='ne'>Neutral Evil</option>
                        <option value='ce'>Chaotic Evil</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId='formLanguages'>
                    <h3>Languages</h3>
                </Form.Group>
                <Form.Group controlId='formBackground'>
                    <h3>Background</h3>
                    <Form.Select aria-label='background dropdown' onChange={handleBackground}>
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
                <h2>Equipment</h2>
                <Form.Group controlId='formArmor'>
                    <h3>Armor</h3>
                </Form.Group>
                <Form.Group controlId='formWeapons'>
                    <h3>Weapons</h3>
                </Form.Group>
                <Form.Group controlId='formEquip'>
                    <h3>Equipment Pack</h3>
                </Form.Group>
                <h2>Scores and Proficiencies</h2>
                <Form.Group controlId='formTools'>
                    <h3>Tool Proficiencies</h3>
                </Form.Group>
                <Form.Group controlId='formLifestyle'>
                    <h3>Lifestyle</h3>
                    <Form.Select aria-label='lifestyle dropdown' onChange={handleLifestyle}>
                        <option value='wretched'>Wretched</option>
                        <option value='squalid'>Squalid</option>
                        <option value='poor'>Poor</option>
                        <option value='modest'>Modest</option>
                        <option value='comfortable'>Comfortable</option>
                        <option value='wealthy'>Wealthy</option>
                        <option value='aristocratic'>Aristocratic</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId='formStats'>
                    <h3>Ability Scores</h3>
                    <div className='score-div'>
                    <Form.Label>Strength</Form.Label>
                    <Form.Control onChange={handleStrength} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(strength)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Dexterity</Form.Label>
                    <Form.Control onChange={handleDex} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(dex)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Constitution</Form.Label>
                    <Form.Control onChange={handleCon} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(con)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Intelligence</Form.Label>
                    <Form.Control onChange={handleInt} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(int)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Wisdom</Form.Label>
                    <Form.Control onChange={handleWis} className='scoreboard' required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(wis)}
                    </div>
                    <div className='score-div'>
                    <Form.Label>Charisma</Form.Label>
                    <Form.Control onChange={handleCha} className='scoreboard'required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    {calculateModifier(cha)}
                    </div>
                </Form.Group>
                <Form.Group controlId='formSkills'>
                    <h3>Skill Proficiencies</h3>
                </Form.Group>
                <h2>Spells and Miscellaneous</h2>
                <Form.Group controlId='formSpells'>
                    <h3>Spells</h3>
                </Form.Group>
                <Form.Group controlId='formAnimals'>
                    <h3>Animal companions, mounts, Wild Shapes, etc.</h3>
                </Form.Group>
            <Button variant='success' onClick={handleSubmit}>Save Character Sheet</Button>
            </Form>
        </div>
    )
}

export default CharacterForm