import Table from "./componets/Table";
import React from 'react'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let response = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(commits => console.log(commits))

  //   if (response.ok) { // если HTTP-статус в диапазоне 200-299
  //   // получаем тело ответа (см. про этот метод ниже)
  //   let json = await response.json();
  //   } else {
  //   alert("Ошибка HTTP: " + response.status);
  // }
  }
  render() {
    return (
      <div className="App">
        <Table/>
      </div>
    );
  }
}

export default App;
