import React, {useState} from "react"
import LandingEnglish from "./landing";
import LandingFrench from "./landingFrench";
import { db } from "./firebase-config";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import Form from "./form"

const App = () => {
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [users, setUsers] = useState(false);

  const usersCollectionRef = collection(db, "userData");
  const createUser = async (e) => {
    e.preventDefault()
    console.log(newEmail, newTitle, newName)
    // await addDoc(usersCollectionRef, { email: newEmail, name: newName, title:newTitle});
    // setUsers(true)
  };

  const [pageState, setPageState] = useState(false);

  React.useEffect(() => {
    console.log(pageState)
  }, [pageState]);

  const changePage = () => {
    setPageState(!pageState)
  }
  const openEnglish = () => {
    return(
        <Form
            createUser={createUser}
            setNewEmail={setNewEmail}
            setNewName={setNewName}
            setNewTitle={setNewTitle}
        />
    )

  }
  return(
      <div>
        {
          pageState ?
              <LandingEnglish changeToFrench={changePage} openEnglishForm={openEnglish}/>
          :
              <LandingFrench changeToEnglish={changePage }/>
        }

      </div>

  )
}
export default App