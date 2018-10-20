import React, { Component } from 'react';
import { Panel, Button, PageHeader, Col } from 'react-bootstrap'




export const RemoveUser = (props) => {
  if (props.removeUser() !== false){
    return <Button className="pull-right" bsStyle="danger" bsSize="xsmall" value={props.id}>x</Button>
  }else{
    return null
  }
}