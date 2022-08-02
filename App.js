import { React, Component } from "react";
import "./App.css";
import Header from "./Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "CRUD",
      employeeData: [],
      act: 0,
      index: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    let mob = this.refs.txtMob.value;
    let add = this.refs.txtAdd.value;
    if (this.state.act === 0) {
      let newEmployee = {
        "name": name,
        "age": age,
        "mob": mob,
        "add": add,
      };
      employeeData.push(newEmployee);
    } else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
      employeeData[index].mob = mob;
      employeeData[index].add = add;
    }

    this.setState({ employeeData: employeeData, act: 0 });
    this.refs.myForm.reset();
  };
  handleEdit = (i) => {
    let employee = this.state.employeeData[i];

    this.refs.txtName.value = employee.name;

    this.refs.txtAge.value = employee.age;

    this.refs.txtMob.value = employee.mob;

    this.refs.txtAdd.value = employee.add;

    let employeeData = [...employeeData, employee];

    this.setState({ employeeData: employeeData, act: 1, index: i });
  };
  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1);
    this.setState({
      employeeData: employeeData,
    });
  };

  render() {
    let employeeData = this.state.employeeData;
    return (
      <>
      <Header/>
      
      <br /><br />
        <div className="form">
          <h1>{this.state.title}</h1>
          <form ref="myForm" className="main">
            <label className="label"> Name</label>
            <br />
            <input
              type="text"
              ref="txtName"
              placeholder="Enter your name"
            ></input>
            <br />
            <label className="label"> Age</label>
            <br />

            <input
              type="text"
              ref="txtAge"
              placeholder="Enter your Age"
            ></input>
            <br />
            <label className="label">Mobile</label>
            <br />
            <input
              type="text"
              ref="txtMob"
              placeholder="Enter your Mobile"
            ></input>
            <br />
            <label className="label">Address</label>
            <br />
            <input
              type="text"
              ref="txtAdd"
              placeholder="Enter your Address"
            ></input>
            <br />
            <button
              onClick={(e) => {
                this.handleSubmit(e);
              }} className="submit"
            >
              Submit
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <td className="td">S No</td>
                <td className="td">Name</td>
                <td className="td">Age</td>
                <td className="td">Mobile</td>
                <td className="td">Address</td>
              </tr>
            </thead>
            {employeeData.map((data, i) => (
              <tbody>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.mob}</td>
                  <td>{data.add}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(i);
                      }} className="submit2"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(i);
                      }} className="submit1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </>
    );
  }
}

export default App;

