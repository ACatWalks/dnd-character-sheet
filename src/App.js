import './App.css';
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import RaceForm from './RaceForm'
import ClassForm from './ClassForm'
import AlignmentForm from './AlignmentForm'
import Languages from './Languages'
import BackgroundForm from './BackgroundForm'
import Armor from './Armor'
import Weapons from './Weapons'
import Equipment from './Equipment'
import ToolsProfs from './ToolProfs'
import LifestyleForm from './LifestyleForm'
import AbilityScores from './AbilityScores'
import Skills from './Skills'
import Spells from './Spells'
import Animals from './Animals'

function App() {
  const [race, setRace] = useState('')
  const [characterClass, setCharacterClass] = useState('')
  const [alignment, setAlignment] = useState('')
  const [background, setBackground] = useState('')
  const [name, setName] = useState('')
  const [level, setLevel] = useState(1)
  const [armorType, setArmorType] = useState('none')
  const [strength, setStrength] = useState(10)
  const [dex, setDex] = useState(10)
  const [con, setCon] = useState(10)
  const [int, setInt] = useState(10)
  const [wis, setWis] = useState(10)
  const [cha, setCha] = useState(10)
  const [lifestyle, setLifestyle] = useState('')
  const handleSubmit = () => {
    console.log(name, race, characterClass, alignment, background, armorType, level, strength, dex, con, int, wis, cha, lifestyle)
  }
  const handleRace = (e) => {
    setRace(`${e.target.value}`)
  }
  const handleClass = (e) => {
    setCharacterClass(`${e.target.value}`)
  }
  const handleAlignment = (e) => {
    setAlignment(`${e.target.value}`)
  }
  const handleBackground = (e) => {
    setBackground(`${e.target.value}`)
  }
  const handleName = (e) => {
    setName(`${e.target.value}`)
  }
  const handleArmor = (e) => {
    setArmorType(e.target.value)
  }
  const handleStrength = (e) => {
    setStrength(e.target.value)
  }
  const handleDex = (e) => {
    setDex(e.target.value)
  }
  const handleCon = (e) => {
    setCon(e.target.value)
  }
  const handleInt = (e) => {
    setInt(e.target.value)
  }
  const handleWis = (e) => {
    setWis(e.target.value)
  }
  const handleCha = (e) => {
    setCha(e.target.value)
  }
  const handleLifestyle = (e) => {
    let element = e.target
    setLifestyle(`${element.value}`)
  }
  const levelUp = () => {
    if(level < 20){
      setLevel(level + 1)
    } 
  }
  const displayLevel = (level) => {
    if(level <= 20){
      return level
    } else{
      return (
        <Alert variant='danger'>
          You cannot increase your character beyond 20th level. Check out Epic Boons in the Dungeon Master's guide for ways to improve your 20th level character.
        </Alert>
      )
    }
  }
  return (
    <div className="App">
      <h1>Create Your D&D Character!</h1>
      <Form.Label>Name</Form.Label>
      <Form.Control type='name' onChange={handleName}></Form.Control>
      <p>Level: {displayLevel(level)}</p>
      <h2>The Essentials</h2>
      <RaceForm handleRace={handleRace} race={race}/>
      <ClassForm handleClass={handleClass} con={con} characterClass={characterClass} levl={level} />
      <AlignmentForm handleAlignment={handleAlignment}/>
      <Languages race={race} characterClass={characterClass} background={background} />
      <BackgroundForm background={background} handleBackground={handleBackground} />
      <h2>Equipment</h2>
      <Armor characterClass={characterClass} dex={dex} con={con} wis={wis} armorType={armorType} handleArmor={handleArmor} />
      <Weapons characterClass={characterClass} />
      <Equipment characterClass={characterClass} />
      <h2>Scores and Proficiencies</h2>
      <ToolsProfs race={race} characterClass={characterClass} background={background} />
      <LifestyleForm lifestyle={lifestyle} handleLifestyle={handleLifestyle} />
      <AbilityScores race={race} characterClass={characterClass} handleStrength={handleStrength} handleDex={handleDex} handleCon={handleCon} handleInt={handleInt} handleWis={handleWis} handleCha={handleCha} />
      <Skills background={background} race={race} characterClass={characterClass} />    
      <h2>Spells and Miscellaneous</h2>
      <Spells race={race} characterClass={characterClass} />
      <Animals />
      <Button variant='success' onClick={handleSubmit}>Save Character Sheet</Button>
      <Button variant='info' onClick={levelUp}>Go up a level</Button>
    </div>
  );
}

export default App;
