import contact from "./contacts.json";
import {useState} from 'react';
import './App.css';

function App() {
  const the5 = contact.slice(0,5)
  const [contacts, setContacts] = useState(the5)


  const compareNumbers = () => {
    const popularity = [...contacts]
    popularity.sort((a, b) => {
      return(
      b.popularity - a.popularity)
    })
    setContacts(popularity)
  }

  const compareNames = () => {
    const byName = [...contacts]
    byName.sort((a, b)=>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    
    setContacts(byName)
  }
  

  const RandomContact = () => {
    let contactId = contacts.map(e => e.id)
    let contactRandom = contact.filter(e => !contactId.includes(e.id) && e)
    let random = Math.floor(Math.random() * contactRandom.length)
    let newArray = [...contacts]
    newArray.push(contactRandom[random])
    setContacts(newArray)
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contacts) => contacts.id !== id));
  };


 
  return (
    <div className="App">
        <h1><span className="title">IRONCONTACTS</span></h1>

      <div className="buttons">
        <button className="but1" onClick={()=> RandomContact()}>Add Random Contact</button>
        <button className="but1" onClick={() => compareNumbers()}>Sort By Popularity</button>
        <button className="but1" onClick={()=> compareNames()}>Sort By Name</button>
      </div>

      <table className="table">
        <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map(e => 
              <tr key={e.id}>
                <td><img className="pic" src={e.pictureUrl} alt="Contact pic"/></td>
                <td>{e.name}</td> 
                <td>{e.popularity}</td>
                <td>{e.wonOscar ? "🏆" : ""}</td>
                <td>{e.wonEmmy ? "🏆" : ""}</td>
                <td><button className="but1" onClick={()=> deleteContact(e.id)}>Delete</button></td>
              </tr>)
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;
