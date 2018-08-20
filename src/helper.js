export const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
};

export const uiSchema = {
  firstName: {
    classNames: "task-title foo-bar",
    "ui:help": "Hint: Make it strong!"
  },
  password: {
    "ui:widget": "password",
    "ui:title": "Your password",
    "ui:description": "The best password",
    "ui:autofocus": true,
    "ui:placeholder": "Write your password...",
    "ui:options": {
      label: true
    },
  }
};