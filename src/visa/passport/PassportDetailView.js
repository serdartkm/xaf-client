import React from 'react';
import DetailView from '../../library/DitailView';
import passportMeta from './passportMeta';

export default function PassportDetailView({ passport }) {
  return (
    <div>
      <DetailView meta={passportMeta} object={passport} />
    </div>
  );
}
