export default [
  {
    objectName: 'employee',
    propNames: [
      { name: 'firstName', type: 'text', placeholder: 'Enter firstname' },
      { name: 'lastName', type: 'text', placeholder: 'Enter lastname' },
      { name: 'birthDate', type: 'date' },
      { name: 'birthPlace', type: 'text', placeholder: 'Enter place of birth' }
    ]
  },
  {
    objectName: 'passport',
    propNames: [
      {
        name: 'passportNumber',
        type: 'text',
        placeholder: 'Enter Passport Number'
      },
      { name: 'passportIssuedDate', type: 'date' }
    ]
  },
  {
    objectName: 'visa',
    propNames: [
      {
        name: 'visaNumber',
        type: 'text',
        // placeholder: 'Enter Visa Number',
        // validation:['NotEmpty','MaxLength','MinLength','ofType'],
        // link:{type:'one-to-one',target:'passport'}
      }
    ]
  },
  {
    objectName: 'application',
    propNames: [
      {
        name: 'number',
        type: 'text',
        placeholder: 'App Number'
      }
    ]
  }
];
