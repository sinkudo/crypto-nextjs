import React, { useEffect, useState } from 'react'
import http from "../http-common"
function users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    http.get('/users')
    .then(response => {
      setUsers(response.data)
      console.log(response)
    })
    .catch(e => {
      console.log(e);
    })
    // fetch("http://localhost:3000/api/users").then(
    //   Response => Response.json()
    // ).then(data => {
    //   console.log(data)
    // })
  }, [])
  // state = {
  //   users: [],
  // }
  // http.get('/users')
  // .the(response => {
  //   this.
  // })
  return (
    <div>test</div>
  )
}

export default users