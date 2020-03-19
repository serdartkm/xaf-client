export default [
  {
    objectName: 'employee',
    propNames: [
      { name: 'firstName', type: 'text', placeholder: 'Enter firstname' },
      { name: 'lastName', type: 'text', placeholder: 'Enter lastname' },
      { name: 'birthDate', type: 'date' },
      { name: 'birthPlace', type: 'text', placeholder: 'Enter place of birth' }
    ],
    embeddedCollection: [
      { source: 'passport', name: 'passports' },
      { source: 'address', name: 'addresses' },
      { source: 'positon', name: 'positions' },
      { source: 'familymember', name: 'familymembers' },
      { source: 'education', name: 'educations' }
    ],
    subtreeCollections: [
      { name: 'invitations' },
      { name: 'workpermits' },
      { name: 'applications' },
      { name: 'rejections' }
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
        type: 'text'
        // placeholder: 'Enter Visa Number',
        // validation:['NotEmpty','MaxLength','MinLength','ofType'],
        // link:{type:'one-to-one',target:'passport'}
      }
    ]
  },
  {
    objectName: 'application',
    type: 'object',
    propNames: [
      {
        name: 'number',
        type: 'text',
        placeholder: 'App Number'
      }
    ],
    embeddedObjectCollection: [
      { source: 'invitation', name: 'invitations' },
      { source: 'workpermit', name: 'workpermits' },
      { source: 'rejection', name: 'rejections' }
    ],
    embeddedIdCollection:[{source:'employee'}]
  },
  {
    objectName: 'invitation',
    propNames: [
      { name: 'registrationNumber', type: 'text' },
      { name: 'issuedDate', type: 'date' }
    ],
    isSharedBySubTrees: false,
    subtreeEditors: [{}]
  },
  {
    objectName: 'personInApp',
    type: 'subtree',
    containerObject: 'employee',
    sharedObject: 'application',
    propNames: [
      { name: 'passport', type: 'objectid' },
      { name: 'visa', type: 'objectid' },
      { name: 'workpermit', type: 'objectid' }
    ]
  },
  {
    objectName: 'personInWorkpermit',
    type: 'subtree',
    containerObject: 'workpermit',
    sharedObject: 'application',
    propNames: [
      { name: 'passport', type: 'objectid' },
      { name: 'visa', type: 'objectid' },
      { name: 'workpermit', type: 'objectid' }
    ]
  }
];
