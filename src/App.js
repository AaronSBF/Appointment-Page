import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState();

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

 
  let addContact = (newContact) =>{ 
    setContacts(prev=>[...prev, newContact])
  }

  
  let addAppointment = (newAppointment) =>{ 
    setContacts(prev=>[...prev, newAppointment])
  }


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
           
            <ContactsPage contacts = {contacts} addContact = {addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
           
            <AppointmentsPage appointments={appointments} addAppointment = {addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
