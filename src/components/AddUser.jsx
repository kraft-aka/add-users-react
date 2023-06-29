import React from 'react'

export default function AddUser() {
  return (
    <div>
      <form >
        <label htmlFor="">Username</label>
        <input type="text" />
        <label htmlFor="">Age(Years)</label>
        <input type="text" />
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}
