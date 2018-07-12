import React from 'react';
import axios from 'axios';

class ConnectDB extends React.Component {
  componentWillMount() {
    this.getData();
  }

  async getData() {
    axios.get('https://eu1.locationiq.org/v1/search.php?key=YOUR_PRIVATE_TOKEN&q=SEARCH_STRING&format=json', {
      key: '614efa1e317855',
      q: '56 MARY STREET     DUBLIN 1 Ireland',
    })
      .then(function(response) {
        console.log(response);
      });
}
  render() {
    return (
      <div>Connecting to DB</div>
    );
  }
}


export default ConnectDB;
