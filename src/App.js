import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import { schema, uiSchema } from './helper';

function CustomFieldTemplate(props) {
  const {id, classNames, label, help, required, description, errors, children} = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}{required ? "*" : null}</label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          FieldTemplate={CustomFieldTemplate}
          // onChange={log("changed")}
          // onSubmit={log("submitted")}
          // onError={log("errors")}
        >
          <div>
            <button className="btn btn-success" type="submit">Submit</button>
            <button className="btn btn-danger" type="button">Cancel</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default App;
