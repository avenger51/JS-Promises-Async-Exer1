
let URL = "http://numbersapi.com/random/year?json"
axios.get(URL)
  .then(function (response) {
    console.log(response.data);
    console.log("first request");
    return axios.get(URL)
  })

  .then(function (response) {
      console.log(response.data);
      console.log("second request");
      return axios.get(URL)
  })
  .then(function (response) {
    console.log(response.data);
    console.log("third request")
    return axios.get(URL)
  })
  .then(function (response) {
    console.log(response.data);
    console.log("fourth request")
  })

  .catch(function (error) {
   
    console.log(error);
  });








