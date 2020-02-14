export default {
  employee: {
    firstName: { value: '', type: 'text', placeholder: 'Enter firstname' },
    lastName: { value: '', type: 'text', placeholder: 'Enter lastname' },
    birthDate: { value: '', type: 'date' },
    birthPlace: {
      value: '',
      type: 'text',
      placeholder: 'Enter place of birth'
    },
    collections: ['passport']
  },
  passport: {
    passportNumber: { type: 'text', value: '0' },
    passportIssuedDate: { type: 'date' },
    collections: ['visa']
  },
  visa: {
    visaNumber: { type: 'text', value: '0' }
  }
};
