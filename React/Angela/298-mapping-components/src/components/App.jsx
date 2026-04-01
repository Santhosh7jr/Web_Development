import Card from "./Card";
import contacts from "../contacts";

const contact = (component) => {
  return (
    <Card
      key = {component.id}
      name = {component.name}
      img = {component.imgURL}
      tel = {component.phone}
      email = {component.email}
    />
  );
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(contact)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
