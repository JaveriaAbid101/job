import React, { useState } from 'react';
import { Icon, Header, Table, Grid, Form } from 'semantic-ui-react'
import { JobForm } from './JobForm'

export const Job = () => {
  const [showForm, setShowForm] = useState(false)
  const renderHeader = () => {
    return <Grid columns='equal'>
      <Grid.Column width="eight">
        <Header as='h1'>Jobs</Header>
      </Grid.Column>
      <Grid.Column width="three" textAlign="right">
        {!showForm && <div className='searchContainer'>
          <Icon color="green" name='add' size='big' onClick={() => setShowForm(true)} /> </div>}
      </Grid.Column>
      <Grid.Column width="five" >

        <Form.Input
          fluid
          icon='search'
          iconPosition='right'
          placeholder='Search Job'
        />
      </Grid.Column>
    </Grid>
  }

  const renderTable = () => {
    return <Table celled padded >
      <Table.Header>
        <Table.Row >
          <Table.HeaderCell width={2}>Name</Table.HeaderCell>
          <Table.HeaderCell width={1}>Project</Table.HeaderCell>
          <Table.HeaderCell width={2}>Description</Table.HeaderCell>
          <Table.HeaderCell width={1}>Created</Table.HeaderCell>
          <Table.HeaderCell width={1}>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell >Move data from dynamobd streams to RDS</Table.Cell>
          <Table.Cell singleLine>Steam Processor</Table.Cell>
          <Table.Cell>Ingest streams coming from sensors
                         and weather devices to monitor weather patterns</Table.Cell>
          <Table.Cell>  28-01-2020 </Table.Cell>
          <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell >Combine data from source and push to Redshift</Table.Cell>
          <Table.Cell singleLine>Redshift Batch</Table.Cell>
          <Table.Cell >Batch of jobs to transfer information to Redshift</Table.Cell>
          <Table.Cell>  28-01-2020 </Table.Cell>
          <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell >Setup Infrastructure</Table.Cell>
          <Table.Cell singleLine>Cloud Stacks</Table.Cell>
          <Table.Cell>Stack of aws azure and gogle cloud</Table.Cell>
          <Table.Cell>  28-01-2020 </Table.Cell>
          <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  }

  const renderForm = () => {
    return <JobForm onSubmit={(values) => {
      setShowForm(false)
    }} />
  }
  return <div >
    {showForm ? renderForm() : <>{renderHeader()}{renderTable()}</>}
  </div>
}





