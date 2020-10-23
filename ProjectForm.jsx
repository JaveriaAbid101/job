import React from 'react'
import { Button, Radio, Form, Dropdown } from 'semantic-ui-react'

const teamMemberOptions = [
  { key: 'john', text: 'john stevens', value: 'john stevens' },
  { key: 'karl', text: 'karl james', value: 'karl james' },
  { key: 'calix', text: 'calix hill', value: 'calix hill' },
]

export const ProjectForm = ({ onSubmit }) => (
  <div style={{ border: "1px solid #e4dbdb", padding: "30px", width: "650px" }}>
    <Form onSubmit={onSubmit}>
      <div style={{ margin: "15px 0px", fontSize: '25px', }} >
        <Form.Field>
          <h3>Create A New Project</h3>
        </Form.Field>
      </div>
      <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
        <Form.Field required>
          <label>Project Name</label>
          <input style={{ width: "500px" }} placeholder='Enter name of a project here' />
        </Form.Field>
      </div>
      <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
        <Form.Field>
          <label>Description</label>
          <textarea style={{ overflow: "auto", width: "500px", height: "50px" }}></textarea>
        </Form.Field>
      </div>
      <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
        <Form.Field style={{ width: "250px" }}>
          <label>Project Members</label>
          <Dropdown
            placeholder='Team Members'
            fluid
            multiple
            search
            selection
            options={teamMemberOptions}
          />
        </Form.Field>
      </div>

      <div style={{ display: "flex", margin: "10px 0px", padding: "10px 0px" }}>
        <Form.Field required>
          <label style={{ marginBottom: "10px" }}>Project Status</label>
          <Form.Field style={{ width: "90px" }}>
            <Radio style={{ color: "green" }}
              label='Active'
              name='projectStatusGroup'
              value='active'
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Inactive'
              name='projectStatusGroup'
              value='inactive'
              />
          </Form.Field>
        </Form.Field>
      </div>


      <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
        <Form.Field action="/action_page.php">
          <label>Project avatar</label>
          <input style={{ border: "none", padding: "0px", lineHeight: "2", marginTop: "10px" }} type="file" id="myfile" name="myfile" />
        </Form.Field>
      </div>
      <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
        <Button style={{ background: "#4CAF50", color: "white" }} type='submit'>Submit </Button>
        <Button type='Cancel'>Cancel</Button>
      </div>
    </Form>
  </div>
)

export default ProjectForm


