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
    const [toolProfs, setToolProfs] = useState([])
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
        if(race === 'dwarf'){
            setCon(parseInt(con) + 2)
            languages.push('Common')
            languages.push('Dwarvish')
            setLanguages(languages)
            let dwarfTools = ['Brewers supplies', 'Masons tools', 'Smiths tools']
            let dwarfRand = Math.floor(Math.random()*3)
            setToolProfs([dwarfTools[dwarfRand]])
        } else if(race === 'elf'){
            setDex(parseInt(dex) + 2)
            languages.push('Common')
            languages.push('Elvish')
            setLanguages(languages)
            skills.push('Perception')
            setSkills(skills)
        } else if(race === 'halfling'){
            setDex(parseInt(dex) + 2)
            languages.push('Common')
            languages.push('Halfling')
            setLanguages(languages)
        } else if(race === 'human'){
            setStrength(parseInt(strength) + 1)
            setDex(parseInt(dex) + 1)
            setCon(parseInt(con) + 1)
            setInt(parseInt(int) + 1)
            setWis(parseInt(wis) + 1)
            setCha(parseInt(cha) + 1)
            languages.push('Common')
            alert('Please select one additional language of your choice')
            setLanguages(languages)
        } else if(race === 'dragonborn'){
            setStrength(parseInt(strength) + 2)
            setCha(parseInt(cha) + 1)
            languages.push('Common')
            languages.push('Draconic')
            setLanguages(languages)
        } else if(race === 'gnome'){
            setInt(parseInt(int) + 2)
            languages.push('Common')
            languages.push('Gnomish')
            setLanguages(languages)
        } else if(race === 'half-elf'){
            setCha(parseInt(cha) + 2)
            alert('Please increase 2 ability scores other than Charisma by 1 each')
            languages.push('Common')
            languages.push('Elvish')
            alert('Please select one additional language of your choice')
            setLanguages(languages)
        } else if(race === 'half-orc'){
            setStrength(parseInt(strength) + 2)
            setCon(parseInt(con) + 1)
            languages.push('Common')
            languages.push('Orc')
            setLanguages(languages)
            skills.push('Intimidation')
            setSkills(skills)
        } else if(race === 'tiefling'){
            setInt(parseInt(int) + 1)
            setCha(parseInt(cha) + 2)
            languages.push('Common')
            languages.push('Infernal')
            setLanguages(languages)
        } else if(race === 'aasimar'){
            setWis(parseInt(wis) + 1)
            setCha(parseInt(cha) + 2)
            languages.push('Common')
            languages.push('Celestial')
            setLanguages(languages)
        }
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
        if(background === 'acolyte'){
            skills.push('Insight')
            skills.push('Religion')
            setSkills(skills)
            alert('Please select 2 more languages from the language menu')
        } else if(background === 'charlatan'){
            skills.push('Deception')
            skills.push('Sleight of Hand')
            setSkills(skills)
            setToolProfs(['Disguise kit, Forgery kit'])
        } else if(background === 'criminal'){
            skills.push('Deception')
            skills.push('Stealth')
            setSkills(skills)
            setToolProfs(['Thieves tools'])
            alert('Please select one kind of gaming set from the tool proficiency menu')
        } else if(background === 'entertainer'){
            skills.push('Acrobatics')
            skills.push('Performance')
            setSkills(skills)
            setToolProfs(['Disguise kit'])
            alert('Please select one kind of musical instrument from the tool proficiency menu')
        } else if(background === 'folk hero'){
            skills.push('Animal Handling')
            skills.push('Survival')
            setSkills(skills)
            setToolProfs(['Land vehicles'])
            alert('Please select one kind of artisans tools from the tool proficiency menu')
        } else if(background === 'guild artisan'){
            skills.push('Insight')
            skills.push('Persuasion')
            setSkills(skills)
            alert('Please select a language of your choice from the language menu')
            alert('Please select one kind of artisans tools from the tool proficiency menu')
        } else if(background === 'hermit'){
            skills.push('Medicine')
            skills.push('Religion')
            setSkills(skills)
            setToolProfs(['Herbalism kit'])
            alert('Please select a language of your choice from the language menu')
        } else if(background === 'noble'){
            skills.push('History')
            skills.push('Persuasion')
            setSkills(skills)
            alert('Please select a language of your choice from the language menu')
            alert('Please select one kind of gaming set from the tool proficiency menu')
        } else if(background === 'outlander'){
            skills.push('Athletics')
            skills.push('Survival')
            setSkills(skills)
            alert('Please select one kind of musical instrument from the tool proficiency menu')
            alert('Please select a language of your choice from the language menu')
        } else if(background === 'sage'){
            skills.push('Arcana')
            skills.push('History')
            setSkills(skills)
            alert('Please select 2 more languages from the language menu')
        } else if(background === 'sailor'){
            skills.push('Athletics')
            skills.push('Perception')
            setSkills(skills)
            setToolProfs(['Navigators tools', 'Water vehicles'])
        } else if(background === 'soldier'){
            skills.push('Athletics')
            skills.push('Intimidation')
            setSkills(skills)
            setToolProfs(['Land vehicles'])
            alert('Please select one kind of gaming set from the tool proficiency menu')
        } else if(background === 'urchin'){
            skills.push('Sleight of Hand')
            skills.push('Stealth')
            setSkills(skills)
            setToolProfs(['Disguise kit', 'Thieves tools'])
        }
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
        console.log(race, characterClass, alignment, languages, background, lifestyle, strength, dex, con, int, wis, cha, skills, toolProfs)
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
    const calculateSpeed = (race) => {
        if(race === 'dwarf' || race === 'halfling' || race === 'gnome'){
            return '25 ft'
        } else{
            return '30 ft'
        }
    }
    const toggleDarkvision = (race) => {
        let dv = false
        if(race === 'dwarf' || race === 'elf' || race === 'gnome' || race === 'half-elf' || race === 'half-orc' || race === 'tiefling' || race === 'aasimar'){
            dv = true
        }
        return dv
    }
    const handleLanguage = (e) => {
        let element = e.target
        languages.push(element)
        setLanguages(languages)
    }
    const displayLangMenu = (race, background) => {
        if (race === 'human' || race === 'half-elf' || background === 'acolyte' || background === 'guild artisan' || background === 'hermit' || background === 'noble' || background === 'outlander' || background === 'sage'){
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
    const handleTools = (e) => {
        let element = e.target
        toolProfs.push(element)
        setToolProfs(toolProfs)
    }
    const displayToolMenu = (background) => {
        if(background === 'criminal' || background === 'entertainer' || background === 'folk hero' || background === 'guild artisan' || background === 'noble' || background === 'outlander' || background === 'soldier'){
            return (
                <Form.Select aria-label='tool dropdown' onChange={handleTools}>
                    <p>Artisan's tools</p>
                    <option value='Alchemists supplies'>Alchemist's supplies</option>
                    <option value='Brewers supplies'>Brewer's supplies</option>
                    <option value='Calligraphers supplies'>Calligrapher's supplies</option>
                    <option value='Carpenters tools'>Carpenter's tools</option>
                    <option value='Cartographers tools'>Cartographer's tools</option>
                    <option value='Cobblers tools'>Cobbler's tools</option>
                    <option value='Cooks utensils'>Cook's utensils</option>
                    <option value='Glassblowers tools'>Glassblower's tools</option>
                    <option value='Jewelers tools'>Jeweler's tools</option>
                    <option value='Leatherworkers tools'>Leatherworker's tools</option>
                    <option value='Masons tools'>Mason's tools</option>
                    <option value='Painters supplies'>Painter's supplies</option>
                    <option value='Potters tools'>Potter's tools</option>
                    <option value='Smiths tools'>Smith's tools</option>
                    <option value='Tinkers tools'>Tinker's tools</option>
                    <option value='Weavers tools'>Weaver's tools</option>
                    <option value='Woodcarvers tools'>Woodcarver's tools</option>
                    <p>Gaming sets</p>
                    <option value='Dice'>Dice set</option>
                    <option value='Dragonchess'>Dragonchess set</option>
                    <option value='Cards'>Playing card set</option>
                    <option value='Three-Dragon Ante'>Three-Dragon Ante set</option>
                    <p>Musical instruments</p>
                    <option value='Bagpipes'>Bagpipes</option>
                    <option value='Drum'>Drum</option>
                    <option value='Dulcimer'>Dulcimer</option>
                    <option value='Flute'>Flute</option>
                    <option value='Lute'>Lute</option>
                    <option value='Lyre'>Lyre</option>
                    <option value='Horn'>Horn</option>
                    <option value='Pan flute'>Pan flute</option>
                    <option value='Shawm'>Shawm</option>
                    <option value='Viol'>Viol</option>
                    <option value='Zither'>Zither</option>
                </Form.Select>
            )
        }
    }
    const displaySkills = (skills) => {
        let possibleSkills = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival']
        possibleSkills.map((skill) => {
            <Form.Check type='checkbox' id={skill} label={skill} checked={skills.includes(skill)} />
        })
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
                    <span>Speed: {calculateSpeed()}</span>
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
                    {displayLangMenu(race, background)}
                    {languages}   
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
                    {displayToolMenu(background)}
                    {toolProfs}
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
                    {displaySkills(skills)}
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