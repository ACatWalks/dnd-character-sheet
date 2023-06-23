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
    const [feats, setFeats] = useState('none')
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
        setRace(`${element.id}`)
    }
    const handleClass = (e) => {
        let element = e.target
        setCharacterClass(`${element.id}`)
    }
    const handleAlignment = (e) => {
        let element = e.target
        setAlignment(`${element.id}`)
    }
    const handleBackground = (e) => {
        let element = e.target
        setBackground(`${element.id}`)
    }
    const handleLifestyle = (e) => {
        let element = e.target
        setLifestyle(`${element.id}`)
    }
    const handleFeats = (e) => {
        let element = e.target
        setFeats(`${element.id}`)
    }
    const handleStrength = (e) => {
        let element = e.target
        setStrength(`${element.id}`)
    }
    const handleDex = (e) => {
        let element = e.target
        setDex(`${element.id}`)
    }
    const handleCon = (e) => {
        let element = e.target
        setCon(`${element.id}`)
    }
    const handleInt = (e) => {
        let element = e.target
        setInt(`${element.id}`)
    }
    const handleWis = (e) => {
        let element = e.target
        setWis(`${element.id}`)
    }
    const handleCha = (e) => {
        let element = e.target
        setCha(`${element.id}`)
    }
    return (
        <div>
            <Form>
                <h2>The Essentials</h2>
                <Form.Group controlId='formRace'>
                    <h3>Race</h3>
                    <Form.Select aria-label='race dropdown'></Form.Select>
                </Form.Group>
                <Form.Group controlId='formClass'>
                    <h3>Class</h3>
                    <Form.Select aria-label='class dropdown'></Form.Select>
                </Form.Group>
                <Form.Group controlId='formAlignment'>
                    <h3>Alignment</h3>
                    <Form.Select aria-label='alignmnet dropdown'></Form.Select>
                </Form.Group>
                <Form.Group controlId='formLanguages'>
                    <h3>Languages</h3>
                </Form.Group>
                <Form.Group controlId='formBackground'>
                    <h3>Background</h3>
                    <Form.Select aria-label='background dropdown'></Form.Select>
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
                    <Form.Select aria-label='lifestyle dropdown'></Form.Select>
                </Form.Group>
                <Form.Group controlId='formFeats'>
                    <h3>Feats (optional)</h3>
                    <Form.Select aria-label='feat dropdown'></Form.Select>
                </Form.Group>
                <Form.Group controlId='formStats'>
                    <h3>Ability Scores</h3>
                    <Form.Label>Strength</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    <Form.Label>Dexterity</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    <Form.Label>Constitution</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    <Form.Label>Intelligence</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    <Form.Label>Wisdom</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
                    <Form.Label>Charisma</Form.Label>
                    <Form.Control required type='number' defaultValue='10' min='1' max='20'></Form.Control> 
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
            <Button variant='success'>Save Character Sheet</Button>
            </Form>
        </div>
    )
}

export default CharacterForm