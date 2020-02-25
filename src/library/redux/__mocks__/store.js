import mockData from '../../mock-data/mockMetaData';


export default {
  getState: function getState() {
    return {
      ui: {
        metaData: mockData
      }
    };
  }
};
