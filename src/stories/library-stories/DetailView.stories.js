import React from 'react';
import DetailView from '../../library/DetailView';
import employeeMeta from '../../visa/employee/employeeMeta';
export default {
  title: 'DetailVIew'
};

export const detailView = () => (
  <DetailView
    meta={employeeMeta}
    object={{ firstName: 'serdar', lastName: 'ashirov' }}
  />
);
