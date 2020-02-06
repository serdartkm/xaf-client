import React from 'react';
import ListView from '../../library/ListView';
import passportMeta from './passportMeta';

export default function PassportListView({ passports }) {
  return (
    <div>
      <ListView meta={passportMeta} />
    </div>
  );
}
