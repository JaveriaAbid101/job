import React, { useState } from 'react';
import { Form, Button, Dropdown, Table } from 'semantic-ui-react'


const roleUser = [
  { key: 'john', text: 'one', value: 'john stevens' },
  { key: 'karl', text: 'two', value: 'karl james' },
  { key: 'calix', text: 'three', value: 'calix hill' },
]


export class InviteUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};

      input["email"] = "";

      this.setState({ input: input });

      alert('Demo Form is submited');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;



    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email address.";
    }

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
      <div style={{ border: "1px solid #e4dbdb", padding: "30px", width: "650px" }}>
        <div style={{ margin: "15px 0px", fontSize: '25px', }} >
          <Form.Field>
            <h3>Invite Users</h3>
          </Form.Field>
        </div>
        <form onSubmit={this.handleSubmit}>

          <div class="form-group">

            <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
              <label for="email"></label>
            </div>

            <div >
              <input style={{ height: "32px", width: "300px", border: "1px solid black" }}
                type="text"
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange}
                class="form-control"
                placeholder="Enter user email to invite"
                id="email" />

              <Button style={{ margin: "0px 20px", padding: "10px", background: "#4CAF50", color: "white", width: "80px" }}>Add</Button>
            </div>
            <div className="text-danger">{this.state.errors.email}</div>
          </div>
        </form>


        <div style={{ margin: "50px 0px", fontSize: '25px', }} >
          <Form.Field>
            <h3>Invitations</h3>
          </Form.Field>
        </div>


        <Table celled padded >
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell width={1}>Email</Table.HeaderCell>
              <Table.HeaderCell width={1}>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            <Table.Row>
              <Table.Cell singleLine>james@schemap.com</Table.Cell>
              <Table.Cell >
                <div>
                  <Form.Field style={{ width: "200px" }}>
                    <Dropdown
                      placeholder='Select Role'
                      fluid
                      multiple
                      search
                      selection
                      options={roleUser}
                    />
                  </Form.Field>
                </div>
              </Table.Cell>

            </Table.Row>
            <Table.Row>
              <Table.Cell singleLine>anduser@schemap.com</Table.Cell>
              <Table.Cell>
                <div>
                  <Form.Field style={{ width: "200px" }}>
                    <Dropdown
                      placeholder='Select Role'
                      fluid
                      multiple
                      search
                      selection
                      options={roleUser}
                    />
                  </Form.Field>
                </div>
              </Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>

        <div style={{ margin: "10px 0px", padding: "10px 0px" }}>
          <Button style={{ width: "500px", background: "#4CAF50", color: "white", display: "flex", justifyContent: "center", margin: "0px auto" }} type='submit'>Invite</Button>

        </div>
      </div>
    );
  }
}



















