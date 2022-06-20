import React from "react"
import { db } from "./firebase-config";
import {
    getDocs,
    collection,
} from "firebase/firestore";


const Getdata = () => {
    const [users, setUsers] = React.useState([]);
    const usersCollectionRef = collection(db, "users");

    React.useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    return(

        <table style={{textAlign:"center"}}>
            <thead>
            <tr>

                <th>EMAILS</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.email}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

    )
}
export  default  Getdata
