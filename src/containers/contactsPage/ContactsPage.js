import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = () => {
  
//let {name, setName, phone, setPhone, email,setEmail,} = ContactForm;

  const {contacts, addContact} = props;
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
  
      let value = e.target.value;
      if(duplicate===false){ 
        addContact(name, phone, email);
        setName("")
        setPhone("")
        setEmail("")
      }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  
useEffect(()=>{ 
 for (const contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
      return;
    }
}, [])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
         <ContactForm
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts = {contacts}/>
      </section>
    </div>
  );
};
