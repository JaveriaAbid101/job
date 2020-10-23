import React from 'react';
import { Icon, Header, Table, Grid, Form, } from 'semantic-ui-react';

export const Users = () => {
    const renderHeader = () => {
        return <Grid columns='equal'>
      <Grid.Column width="eight">
        <Header as='h1'>Users</Header>
      </Grid.Column>
      <Grid.Column width="three" textAlign="right">
        {<div className='searchContainer'>
          <Icon color="green" name='add' size='big'/> </div>}
      </Grid.Column>
      <Grid.Column width="five" >

        <Form.Input
          fluid
          icon='search'
          iconPosition='right'
          placeholder='Search User'
        />
      </Grid.Column>
    </Grid>
}
  const renderTable = () => {
    return <Table singleLine>
     
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Created</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John Kay</Table.Cell>
        <Table.Cell>Johnkay@schemap.com</Table.Cell>
        <Table.Cell>Joined</Table.Cell>
        <Table.Cell>Data Analyst</Table.Cell>
        <Table.Cell>28-01-2020</Table.Cell>
        <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>

      </Table.Row>
      <Table.Row>
      <Table.Cell>Alonzo Kay</Table.Cell>
        <Table.Cell>alonzo@schemap.com</Table.Cell>
        <Table.Cell>Joined</Table.Cell>
        <Table.Cell>Data mover</Table.Cell>
        <Table.Cell>28-02-2020</Table.Cell>
        <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Issac Jacob</Table.Cell>
        <Table.Cell>Issac@schemap.com</Table.Cell>
        <Table.Cell>Pending</Table.Cell>
        <Table.Cell>Data mover</Table.Cell>
        <Table.Cell>Pending</Table.Cell>
        <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  }
  
  
    
  
  return <div >

    { <>{renderHeader()}{renderTable()}</>}

  </div>
}

