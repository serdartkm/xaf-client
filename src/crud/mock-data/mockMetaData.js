export default [
  {
    objectName: 'person',
    propNames: [
      { name: 'personType', type: 'bool' },
      { name: 'firstName', type: 'text', placeholder: 'Enter firstname' },
      { name: 'lastName', type: 'text', placeholder: 'Enter lastname' },
      { name: 'birthDate', type: 'date' },
      { name: 'gender', type: 'id', source: 'gender' },
      { name: 'birthCountry', type: 'id', source: 'country' },
      { name: 'birthPlace', type: 'text' },
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
  },

  {
    objectName: 'subApplicationType',
    propNames: [
      { name: 'discription', type: 'text' },
      { name: 'applicationType', type: 'id', source: 'applicationType' }
    ]
  },
  {
    objectName: 'application',
    propNames: [
      { name: 'number', type: 'text' },
      { name: 'date', type: 'date' },
      { name: 'applicationType', type: 'id', source: 'applicationType' },
      {
        name: 'subApplicationType',
        type: 'id',
        source: 'subApplicationType',
        filter: ['applicationType']
      },
      {
        name: 'appliedOrganization',
        type: 'id',
        source: 'appliedOrganization'
      },
      {
        name: 'visaPeriod',
        type: 'id',
        source: 'visaPeriod',
        visible: 'visaVisible'
      },
      {
        name: 'visaCategory',
        type: 'id',
        source: 'visaCategory',
        visible: 'visaVisible'
      },
      {
        name: 'visaType',
        type: 'id',
        source: 'visaType',
        visible: 'visaVisible'
      }
    ]
  },
  {
    objectName: 'personInApplication',
    propNames: [
      { name: 'person', type: 'id', source: 'person' },
      {
        name: 'passport',
        type: 'id',
        source: 'passport',
        filter: 'person'
      },
      { name: 'visa', type: 'id', source: 'visa', filter: 'passport' },
      {
        name: 'workpermit',
        type: 'id',
        source: 'workpermit',
        visible: 'application.type==="0"'
      },
      { name: 'address', type: 'id', source: 'address' },
      { name: 'application', type: 'id', source: 'application' }
    ]
  },
  {
    objectName: 'invitation',
    propNames: [
      { name: 'asgh', type: 'text' },
      { name: 'asNumber', type: 'text' },
      { name: 'issuedDate', type: 'date' },
      { name: 'expireDate', type: 'date' },
      { name: 'visaCategory', type: 'id', source: 'visaCategory' },
      { name: 'visaPeriod', type: 'id', source: 'visaPeriod' },
      { name: 'notes', type: 'text' }
    ],
    collections: [{ name: 'personInInvitation', type: 'personInInvitation' }]
  },

  {
    objectName: 'personInInvitation',
    propNames: [
      { name: 'person', type: 'id', source: 'person' },
      { name: 'passport', type: 'id', source: 'passport', filter: 'person' },
      { name: 'invitation', type: 'id', source: 'invitation' }
    ]
  },
  {
    objectName: 'workpermit',
    propNames: [
      { name: 'issuedDate', type: 'date' },
      { name: 'number', type: 'text' },
      { name: 'issuedCompany', type: 'id', source: 'company' }
    ],
    collections: [{ name: 'personInWorkpermit', type: 'personInWorkPermit' }]
  },
  {
    objectName: 'workPermittedPlaces',
    propNames: [{ name: 'nameOfLocation', type: 'text' }]
  },
  {
    objectName: 'personInWorkPermit',
    propNames: [
      { name: 'asNumber', type: 'text' },
      { name: 'employee', type: 'id', source: 'employee' },
      { name: 'passport', type: 'id', source: 'passport', filter: 'employee' },
      { name: 'position', type: 'id', source: 'position' },
      {
        name: 'workPermittedPlaces',
        type: 'concat',
        source: 'workPermittedPlaces'
      },
      { name: 'startDate', type: 'date' },
      { name: 'expireDate', type: 'date' },
      { name: 'workpermitNumber', type: 'text' },
      { name: 'workpermit', type: 'id', source: 'workpermit' }
    ]
  },
  {
    objectName: 'signingAuthority',
    propNames: [{ name: 'fullName', type: 'text' }]
  },
  {
    objectName: 'representative',
    propNames: [
      { name: 'fullname', type: 'text' },
      { name: 'passportInfo', type: 'text' },
      { name: 'phoneNumber', type: 'text' }
    ]
  },
  {
    objectName: 'position',
    propNames: [{ name: 'titleOfPosition', type: 'text' }]
  },
  {
    objectName: 'department',
    propNames: [{ name: 'nameOfDepartment', type: 'text' }]
  },
  {
    objectName: 'company',
    propNames: [
      { name: 'titleOfCompany', type: 'text' },
      { name: 'address', type: 'text' },
      { name: 'phoneNumbers', type: 'text' },
      { name: 'taxRegistration', type: 'text' },
      { name: 'representative', type: 'id', source: 'representative' },
      { name: 'signingAuthority', type: 'id', source: 'signingAuthority' },
      { name: 'email', type: 'email' }
    ]
  },
  {
    objectName: 'workhistory',
    propNames: [
      { name: 'company', type: 'id', source: 'company' },
      { name: 'department', type: 'id', source: 'department' },
      { name: 'position', type: 'id', source: 'position' }
    ]
  },
  { objectName: 'salary', propNames: [{ name: 'amount', type: 'text' }] },
  {
    objectName: 'subcontractor',
    propNames: [{ name: 'nameOfSubcontractor', type: 'text' }]
  },
  {
    objectName: 'project',
    propNames: [{ name: 'nameOfProject', type: 'text' }]
  },
  {
    objectName: 'maritalStatus',
    propNames: [
      { name: 'nameOfMaritalStatus', type: 'text' },
      { name: 'gender', type: 'id', source: 'gender' }
    ]
  },
  {
    objectName: 'gender',
    propNames: [{ name: 'nameOfGender', type: 'text' }]
  },
  {
    objectName: 'country',
    defaultDisplay: 'name',
    propNames: [
      { name: 'codeOfCountry', type: 'text' },
      { name: 'nameOfCountry', type: 'text' }
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
      { name: 'personalId', type: 'text' },
      { name: 'citizenship', type: 'id', source: 'country' },
      { name: 'issuedCountry', type: 'id', source: 'country' },
      { name: 'passportType', type: 'id', source: 'passportType' },
      { name: 'issuedPlace', type: 'text' },
      { name: 'issuedDate', type: 'date' },
      { name: 'expireDate', type: 'date' }
    ]
  },
  {
    objectName: 'passportType',
    propNames: [{ name: 'typeOfPassport', type: 'text' }]
  },
  {
    objectName: 'visa',
    propNames: [
      {
        name: 'number',
        type: 'text',
        placeholder: 'Enter Visa Number'
      },
      {
        name: 'issuedDate',
        type: 'date'
      },
      {
        name: 'startDate',
        type: 'date'
      },
      {
        name: 'expireDate',
        type: 'date'
      },
      {
        name: 'typeOfVisa',
        type: 'id',
        source: 'visaType'
      },
      {
        name: 'borderZones',
        type: 'concat',
        source: 'borderzone'
      },
      {
        name: 'registrationNotRequired',
        type: 'bool'
      },
      {
        name: 'asNumber',
        type: 'text'
      }
    ]
  },
  {
    objectName: 'visaType',
    propNames: [{ name: 'nameOfVisaType', type: 'text' }]
  },
  {
    objectName: 'borderZone',
    propNames: [{ name: 'nameOfBorderZone', type: 'text' }]
  }
];
