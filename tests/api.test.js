const axios = require('axios');
API_URL="http://localhost:5000/api"

test('test device array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/devices`)
      .then(resp => resp.data)
      .then(resp => {
        expect(resp[1].user).toEqual('mary123');
      });
    });