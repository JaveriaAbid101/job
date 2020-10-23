import React from 'react'
import { Button, Radio, Form, Dropdown } from 'semantic-ui-react'

const projectMemberOptions = [
    { key: 'project1', text: 'Project 1', value: 'project 1' },
    { key: 'project2', text: 'Project 2', value: 'project 2' },
    { key: 'project3', text: 'Project 3', value: 'project 3' },
]
const jobOptions = [
    { key: 'job1', text: 'Job 1', value: 'job 1' },
    { key: 'job2', text: 'Job 2', value: 'job 2' },
    { key: 'job3', text: 'Job 3', value: 'job 3' },
]
export const JobForm = ({ onSubmit }) => (
    <div style={{ border: "1px solid #e4dbdb", padding: "30px", width: "650px" }}>
        <Form onSubmit={onSubmit}>
            <div style={{ margin: "15px 0px", fontSize: '25px', }} >
                <Form.Field>
                    <h3>Create A New Job</h3>
                </Form.Field>
            </div>
            <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
                <Form.Field required>
                    <label>Job Name</label>
                    <input style={{ width: "500px" }} placeholder='Enter name of a job here' />
                </Form.Field>
            </div>
            <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
                <Form.Field>
                    <label>Description</label>
                    <textarea style={{ overflow: "auto", width: "500px", height: "50px" }}></textarea>
                </Form.Field>
            </div>
            <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
                <Form.Field style={{ width: "250px" }} required>
                    <label>Project </label>
                    <Dropdown
                        placeholder='Select Project Members'
                        fluid
                        multiple
                        search
                        selection
                        options={projectMemberOptions}
                    />
                </Form.Field>
            </div>
            <div style={{ display: "flex", margin: "10px 0px", padding: "10px 0px" }} >
                <Form.Field required>
                    <label style={{ marginBottom: "10px" }}>Status</label>
                    <Form.Field style={{ width: "90px" }}>
                        <Radio
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
                <Form.Field style={{ width: "250px" }}>
                    <label>Parent Job </label>
                    <Dropdown
                        placeholder='Select Project Members'
                        fluid
                        multiple
                        search
                        selection
                        options={jobOptions}
                    />
                </Form.Field>
            </div>
            <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
                <Button style={{ background: "#4CAF50", color: "white" }} type='submit'>Submit </Button>
                <Button type='Cancel'>Cancel</Button>
            </div>
        </Form>
    </div>
)



