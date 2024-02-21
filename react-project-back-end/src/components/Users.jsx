import React, { useEffect, useState } from 'react'
import { url } from '../config/config'
import Table from 'react-bootstrap/Table';



export default function Users() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(url + 'users?_embed')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUser(data)
                })
            .catch(err => console.error(err))
    }, [])

  return (
    <>
    <div>
        <h2 className='text-center mt-5 text-danger'>Admin List</h2>
        <Table 
         striped bordered hover 
         className='w-50 mx-auto mb-5 mt-3'
         >
            <thead>
                <tr>
                <th>ID</th>
                <th>Admin Name</th>
                </tr>
            </thead>
            <tbody>
            {user.sort((a, b) => a.id - b.id).map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
                ))}
            </tbody>
        </Table> 
    </div>

    </>
  )
}
