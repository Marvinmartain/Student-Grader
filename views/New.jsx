import React, { Component } from 'react';
// const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Student Page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/students" method="POST">
          Name: <input type="text" name="name" placeholder="Enter Name" />
          <br />
          Grade: <input type="text" name="grade" placeholder="Enter Grade" />
          <br />
          Good: <input type="checkbox" name="good" />
          <br />
          <input type="submit" name="" value="Create Student" />
        </form>
      </div>
    );
  }
}

module.exports = New;