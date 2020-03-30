export default {
  objectName: 'person',
  defaultProperty: 'firstName',
  navigations: ['employee', 'familyMember'],
  navFilters: [
    { nav: 'employee', filter: { personType: true } },
    { nav: 'familyMember', filter: { personType: false } }
  ],
  navListView: [
    {
      nav: 'employee',
      listView: ['maritalStatus', 'project', 'subcontractor', 'salary']
    },
    { nav: 'familyMember', listView: ['employee', 'relation'] },
    {
      nav: 'both'
    }
  ],
  listView: ['firstName', 'lastName', 'birthDate', 'active'],
  propNames: [
    { name: 'personType', type: 'bool', listView: false },
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'Enter firstname',
      listView: true
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter lastname',
      listView: true
    },
    { name: 'birthDate', type: 'date', listView: true },
    { name: 'gender', type: 'id', source: 'gender', listView: true },
    { name: 'birthCountry', type: 'id', source: 'country', listView: false },
    {
      name: 'birthPlace',
      type: 'text',
      placeholder: 'Enter place of birth',
      listView: false
    },
    {
      name: 'maritalStatus',
      type: 'id',
      source: 'maritalStatus',
      filter: 'gender',
      listView: false
    },
    {
      name: 'countryOfResidence',
      type: 'id',
      source: 'country',
      listView: false
    },
    { name: 'addressOfResidence', type: 'text', listView: false },
    { name: 'employee', type: 'id', source: 'person', listView: false },
    {
      name: 'relation',
      type: 'id',
      source: 'relation',
      listView: false,
      filter: 'gender'
    },
    {
      name: 'project',
      type: 'id',
      source: 'project',
      listView: true,
      visible: ['personType', true]
    },
    {
      name: 'subcontractor',
      type: 'id',
      source: 'subcontractor',
      visible: ['personType', true],
      listView: true
    },
    {
      name: 'salary',
      type: 'id',
      source: 'salary',
      visible: ['personType', true],
      listView: false
    },
    { name: 'active', type: 'bool' },
    { name: 'outsideOfCountry', type: 'bool' }
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
  defaultProperty: 'nameOfMaritalStatus',
  propNames: [{ name: 'nameOfMaritalStatus', type: 'text' }]
};

export const gender = {
  objectName: 'gender',
  defaultProperty: 'nameOfGender',
  propNames: [{ name: 'nameOfGender', type: 'text' }]
};
