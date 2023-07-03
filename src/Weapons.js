import React from 'react'
import Form from 'react-bootstrap/Form'

function Weapons(props) {
    let weaponList = []
    const handleWeapons = (e) => {
        weaponList.push(e.target.value)
    }
    const displayWeaponChoices = () => {
        if(props.characterClass === 'sorcerer' || props.characterClass === 'wizard'){
            return (
                <div>
                    <Form.Group controlId='sorcerer/wizard weapon choices'>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Dagger' value='dagger'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Darts (10)' value='darts'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sling' value='sling'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Quarterstaff' value='quarterstaff'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light crossbow' value='light crossbow'></Form.Check>
                    </Form.Group>
                </div>
            )
        } else if(props.characterClass === 'barbarian' || props.characterClass === 'fighter' || props.characterClass === 'paladin' || props.characterClass === 'ranger'){
            return (
                <div>
                    <Form.Group controlId='barbarian/fighter/paladin/ranger weapon choices'>
                        <p>Simple Melee Weapons</p>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Club' value='club'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Dagger' value='dagger'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Greatclub' value='greatclub'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Handaxe' value='handaxe'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Javelin' value='javelin'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light hammer' value='light hammer'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Mace' value='mace'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Quarterstaff' value='quarterstaff'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sickle' value='sickle'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Spear' value='spear'></Form.Check>
                        <p>Simple Ranged Weapons</p>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light crossbow with 20 bolts' value='light crossbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='10 darts' value='darts'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortbow with 20 arrows' value='shortbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sling' value='sling'></Form.Check>
                        <p>Martial Melee Weapons</p>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Battleaxe' value='battleaxe'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Flail' value='flail'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Glaive' value='glaive'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Greataxe' value='greataxe'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Greatsword' value='greatsword'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Halberd' value='halberd'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Lance' value='lance'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Longsword' value='longsword'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Maul' value='maul'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Morningstar' value='morningstar'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Pike' value='pike'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Rapier' value='rapier'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Scimitar' value='scimitar'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortsword' value='shortsword'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Trident' value='trident'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='War pick' value='war pick'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Warhammer' value='warhammer'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Whip' value='whip'></Form.Check>
                        <p>Martial Ranged Weapons</p>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Blowgun' value='blowgun'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Hand crossbow with 20 bolts' value='hand crossbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Heavy crossbow with 20 bolts' value='heavy crossbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Longbow with 20 arrows' value='longbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Net' value='net'></Form.Check>
                    </Form.Group>
                </div>
            )
        } else if(props.characterClass === 'bard' || props.characterClass === 'rogue'){
            return (
                <div>
                    <Form.Group controlId='bard/rogue weapon choices'>
                    <Form.Check type='checkbox' onCheck={handleWeapons} label='Club' value='club'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Dagger' value='dagger'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Greatclub' value='greatclub'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Handaxe' value='handaxe'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Javelin' value='javelin'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light hammer' value='light hammer'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Mace' value='mace'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Quarterstaff' value='quarterstaff'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sickle' value='sickle'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Spear' value='spear'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light crossbow with 20 bolts' value='light crossbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='10 darts' value='darts'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortbow with 20 arrows' value='shortbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sling' value='sling'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Longsword' value='longsword'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Rapier' value='rapier'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortsword' value='shortsword'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Hand crossbow with 20 bolts' value='hand crossbow'></Form.Check>
                    </Form.Group>
                </div>
            )
        } else if(props.characterClass === 'druid'){
            return (
                <div>
                    <Form.Group controlId='druid weapon choices'>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Club' value='club'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Dagger' value='dagger'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Darts (10)' value='darts'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Javelin' value='javelin'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Mace' value='mace'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sling' value='sling'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Quarterstaff' value='quarterstaff'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Scimitar' value='scimitar'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sickle' value='sickle'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Spear' value='spear'></Form.Check>
                    </Form.Group>
                </div>
            )
        } else if(props.characterClass === 'monk'){
            return (
                <div>
                    <Form.Group controlId='monk weapon choices'>
                    <Form.Check type='checkbox' onCheck={handleWeapons} label='Club' value='club'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Dagger' value='dagger'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Greatclub' value='greatclub'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Handaxe' value='handaxe'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Javelin' value='javelin'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light hammer' value='light hammer'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Mace' value='mace'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Quarterstaff' value='quarterstaff'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sickle' value='sickle'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Spear' value='spear'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light crossbow with 20 bolts' value='light crossbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='10 darts' value='darts'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortbow with 20 arrows' value='shortbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sling' value='sling'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortsword' value='shortsword'></Form.Check>
                    </Form.Group>
                </div>
            )
        } else if(props.characterClass === 'cleric' || props.characterClass === 'warlock'){
            return (
                <div>
                    <Form.Group controlId='cleric/warlock weapon choices'>
                    <Form.Check type='checkbox' onCheck={handleWeapons} label='Dagger' value='dagger'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Greatclub' value='greatclub'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Handaxe' value='handaxe'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Javelin' value='javelin'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light hammer' value='light hammer'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Mace' value='mace'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Quarterstaff' value='quarterstaff'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sickle' value='sickle'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Spear' value='spear'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Light crossbow with 20 bolts' value='light crossbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='10 darts' value='darts'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Shortbow with 20 arrows' value='shortbow'></Form.Check>
                        <Form.Check type='checkbox' onCheck={handleWeapons} label='Sling' value='sling'></Form.Check>
                    </Form.Group>
                </div>
            )
        }
    }
    const displayHitAndDamage = () => {
        return 'nil'
    }
    return (
        <div>
            <h4>Weapons</h4>
            {displayWeaponChoices()}
            {weaponList}
            {displayHitAndDamage()}
        </div>
    )
}

export default Weapons