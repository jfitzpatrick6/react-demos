import React from 'react'

const UserStatus = ({loggedin, isAdmin}) => {
  return (
    <div>
        {loggedin && isAdmin && <h2>Welcome Admin!</h2>}
        {loggedin && !isAdmin && <h2>Welcome User!</h2>}
    </div>
  )
}

export default UserStatus