export default {
  objectName: 'rejection',
  propNames: [
    { name: 'number', type: 'text' },
    { name: 'date', type: 'date' }
  ],
  collection: [{ name: 'personInrejection', type: 'personInrejection' }]
};


export const personInRejection ={
    objectName: 'personInRejection',
    propNames: [
      { name: 'passport', type: 'id', source: 'passport' },
      { name: 'rejection', type: 'id', source: 'rejection' }
    ]
  }
}
