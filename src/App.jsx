import React, {useState} from 'react';
import './App.css';
import Spell from './components/Spell';

function App() {
  const [spells, setSpells] = useState([
    {
      id: 1,
      name: "Lumos",
      description: "Creates a narrow beam of light from the wand's tip.",
      oneUse: false,
    },
    {
      id: 2,
      name: "Expelliarmus",
      description:
        "Disarms your opponent, causing their wand to fly out of their hand.",
      oneUse: false,
    },
    {
      id: 3,
      name: "Avada Kedavra",
      description:
        "A killing curse that instantly kills the target. One use only.",
      oneUse: true,
    },
    {
      id: 4,
      name: "Wingardium Leviosa",
      description: "Levitates an object in the air.",
      oneUse: false,
    },
    {
      id: 5,
      name: "Imperio",
      description:
        "Allows the caster to control the actions of the target. One use only.",
      oneUse: true,
    },
    {
      id: 6,
      name: "Protego",
      description:
        "A defensive spell that creates a shield to protect the caster from spells.",
      oneUse: false,
    },
    {
      id: 7,
      name: "Incendio",
      description:
        "Produces flames from the wand's tip, which can be used to start fires.",
      oneUse: false,
    },
    {
      id: 8,
      name: "Expecto Patronum",
      description: "Creates a Patronus to repel Dementors.",
      oneUse: false,
    },
    {
      id: 9,
      name: "Crucio",
      description: "Inflicts unbearable pain on the target. One use only.",
      oneUse: true,
    },
    {
      id: 10,
      name: "Reparo",
      description: "Repairs broken objects.",
      oneUse: false,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentSpell, setCurrentSpell] = useState(null);

  function castSpell(spell) {
    setCurrentSpell(spell);
    setModalVisible(true);

    if (spell.oneUse) {
      setSpells(spells.filter(s => s.id !== spell.id));
    }
  }

  function removeSpell(spellToRemove) {
    setSpells(spells.filter(spell => spell.id !== spellToRemove.id));
  }

  return (
    <div className='App'>
      {spells.map(spell => (
        <Spell key={spell.id} spell={spell} onCast={castSpell} />
      ))}
      {modalVisible && (
        <div className="modal">
          <h2>{currentSpell.name}</h2>
          <p>{currentSpell.description}</p>
          <button onClick={() => setModalVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;