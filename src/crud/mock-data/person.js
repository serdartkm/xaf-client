export default {
  objectName: 'person',
  defaultProperty: 'fullName',
  propNames: [
    { name: 'personType', type: 'bool' },
    { name: 'firstName', type: 'text', placeholder: 'Enter firstname' },
    { name: 'lastName', type: 'text', placeholder: 'Enter lastname' },
    { name: 'birthDate', type: 'date' },
    { name: 'gender', type: 'id', source: 'gender' },
    { name: 'birthCountry', type: 'id', source: 'country' },
    { name: 'birthPlace', type: 'text' },
    { name: 'fullname', type: 'calculated',value:['concat',['firstNmae','lastName']] },
    {
      name: 'maritalStatus',
      type: 'id',
      source: 'maritalStatus',
      filter: 'gender'
    },
    { name: 'countryOfResidence', type: 'id', source: 'country' },
    { name: 'addressOfResidence', type: 'text' },
    { name: 'employee', type: 'id', source: 'person' },
    { name: 'relation', type: 'id', source: 'relation', filter: 'gender' },

    {
      name: 'project',
      type: 'id',
      source: 'project',
      visible: ['personType', true]
    },
    {
      name: 'subcontractor',
      type: 'id',
      source: 'subcontractor',
      visible: ['personType', true]
    },
    {
      name: 'salary',
      type: 'id',
      source: 'salary',
      visible: ['personType', true]
    },
    { name: 'active', type: 'bool' },
    { name: 'outsideOfCountry', type: 'bool' },
    {
      name: 'birthPlace',
      type: 'text',
      placeholder: 'Enter place of birth'
    }
  ],
  collections: [
    { name: 'passports', type: 'passport' },
    { name: 'educations', type: 'education' },
    { name: 'addresses', type: 'address' },
    {
      name: 'workpermits',
      type: 'employeeInWorkPermit',
      visible: ['personType', true]
    },
    { name: 'invitations', type: 'personInInvitation' },
    { name: 'applications', type: 'personInApplication' },
    { name: 'familyMembers', type: 'person', visible: ['personType', true] }
  ]
};

export const maritalStatus = {
  objectName: 'maritalStatus',
  propNames: [
    { name: 'nameOfMaritalStatus', type: 'text' },
    { name: 'gender', type: 'id', source: 'gender' }
  ]
};

export const gender = {
  objectName: 'gender',
  propNames: [{ name: 'nameOfGender', type: 'text' }]
};
