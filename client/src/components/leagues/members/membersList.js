import React from 'react';
import { Panel } from 'react-bootstrap'
import MemberCard from './memberCard'

const MembersList = (props) => {


  const renderMembers = () => {
    return props.users.map(u => {
      return <Panel.Body key={u.id}><MemberCard user={u} removeUser={props.removeUser}/></Panel.Body>
    })
  }

    return(
      <div>
      {console.log(props)}
      {renderMembers()}
      </div>
    )
}

export default MembersList
