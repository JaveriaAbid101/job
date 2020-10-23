import React, { useState, useEffect } from 'react';
import { Icon, Header, Table, Grid, Form, Button } from 'semantic-ui-react'
import Moment from 'react-moment';
import ProjectForm from './ProjectForm'
import tugageApi from '../../config'
import { getToken } from '../../utils'





export const Project = () => {

  const [showForm, setShowForm] = useState(false);
  const [projects, setProjectslist] = useState([]);
  useEffect(() => {
    let data = {
      params: {

      },
      headers:
      {
        "X-Auth-Token": getToken(),
        "content-type": "application/json"
      }
    };
    
    async function fetchData() {
      // You can await here 
      const result = await tugageApi.get('/projects', data);
      debugger;
      const projectLists = result.data.data;
      setProjectslist(projectLists);
      // ...
    }
    fetchData();

  },
    [

    ])
    ;


   
      
    async function getNamedata(e) {
      e.preventDefault();
      console.log(e)
      
      // You can await here 
      const result = await tugageApi.get('/v1/projects/e64f535c-49da-481f-9a6d-6add3ab5a62f');
      debugger;
      console.log(result.data)
      const projectLists = result.data;
      setProjectslist(projectLists);
      // ...
    }



  const renderHeader = () => {
    return <Grid columns='equal'>
      <Grid.Column width="eight">
        <Header as='h1'>Projects</Header>
      </Grid.Column>
      <Grid.Column width="three" textAlign="right">
        {!showForm && <div className='searchContainer'>
          <Icon color="green" name='add' size='big' onClick={() => setShowForm(true)} /> 
          </div>
          }
      </Grid.Column>
      <Grid.Column width="five" >

        <Form.Input
          fluid
          icon='search'
          iconPosition='right'
          placeholder='Search Project'
        />
      </Grid.Column>
    </Grid>
  }


  const renderTable = () => {
    return <Table celled padded >
      <Table.Header>
        <Table.Row >
        <Table.HeaderCell width={1}>Name</Table.HeaderCell>
          <Table.HeaderCell width={3}>Project</Table.HeaderCell>
          <Table.HeaderCell width={1}>Description</Table.HeaderCell>
          <Table.HeaderCell width={3}>Created</Table.HeaderCell>
          <Table.HeaderCell width={3}>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>

        {
          projects.map((data) => {

            return (<Table.Row>
               <Table.Cell singleLine>
                <a href="#" onClick={(e) => getNamedata(e)}>
                 {data.id}
                </a>
               </Table.Cell>
              <Table.Cell singleLine>{data.name}</Table.Cell>
              <Table.Cell>{data.description || 'N/A'}</Table.Cell>
              <Table.Cell><Moment>{data.createdDateTime}</Moment></Table.Cell>
              <Table.Cell textAlign='left'> Edit | Deactivate</Table.Cell>
            </Table.Row>)
          })
        }


      </Table.Body>
    </Table>
  }

  const renderForm = () => {
    return <ProjectForm onSubmit={(values) => {
      setShowForm(false)
    }} />
  }
  return <div >
    {showForm ? renderForm() : <>{renderHeader()}{renderTable()}</>}
  </div>
}

export default Project
