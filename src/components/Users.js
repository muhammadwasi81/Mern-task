import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

const Users = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get('/api/users')
        setLoading(true)
        setUsers(result.data)
        console.log(result.data)
      } catch (err) {
        err.response.data.message
          ? console.log(err.response.data.message)
          : console.log(err.message)
      }
    }
    getUsers()
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      {!loading ? (
        <pre>Loading...</pre>
      ) : (
        <>
          {user.map((user) => (
            <ul key={user.id}>
              <li>{user?.name}</li>
              <li>{user?.email}</li>
              <li>{user?.title}</li>
            </ul>
          ))}
        </>
      )}
    </div>
  )
}

export default Users
