const data = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(JSON.parse(xhr.responseText));
    }
  };

  xhr.onerror = function () {
    console.log('Запрос не удался');
  };

  const getData = () => {
    fetch('db.json')
      .then((response) => response.json())
      .then((getData) => {
        sendData(
          'https://jsonplaceholder.typicode.com/posts',
          JSON.stringify(getData)
        ).then((sendData) => console.log(sendData));
        xhr.send(JSON.stringify(getData));
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  };

  const sendData = (url, data) => {
    return fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  };

  getData();
};

export default data;
