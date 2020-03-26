export default {
  objectName: 'position',
  propNames: [{ name: 'titleOfPosition', type: 'text' }]
};

export const department = {
  objectName: 'department',
  propNames: [{ name: 'nameOfDepartment', type: 'text' }]
};

export const workhistory = {
  objectName: 'workhistory',
  propNames: [
    { name: 'company', type: 'id', source: 'company' },
    { name: 'department', type: 'id', source: 'department' },
    { name: 'position', type: 'id', source: 'position' }
  ]
};

export const salary = {
  objectName: 'salary',
  propNames: [{ name: 'amount', type: 'text' }]
};

export const subcontractor = {
  objectName: 'subcontractor',
  propNames: [{ name: 'nameOfSubcontractor', type: 'text' }]
};

export const project = {
  objectName: 'project',
  propNames: [{ name: 'nameOfProject', type: 'text' }]
};
