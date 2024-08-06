import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   // console.log(event.target);
  //   console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log(event.target);
  //   console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isAgree: true,
    type: "",
    Branch: "",
  });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      // console.log(prevFormData);
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Give DAta");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First name"
          // onChange={changeFirstNameHandler}
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />
        <input
          type="text"
          placeholder="Last name"
          // onChange={changeLastNameHandler}
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your email... "
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />
        <textarea
          name="comment"
          id="comment"
          placeholder="Enter your Comments"
          onChange={changeHandler}
          value={formData.value}
        ></textarea>

        <br />
        <br />

        <input
          type="checkbox"
          name="isAgree"
          onChange={changeHandler}
          id="isAgree"
          checked={formData.isAgree}
        />

        <label htmlFor="isAgree">Agree Term and Condition</label>

        <br />
        <br />

        <fieldset>
          <input
            type="radio"
            name="type"
            id="male-type"
            value="male-type"
            onChange={changeHandler}
            checked={formData.type === "male-type"}
          />

          <label htmlFor="male-type">Male</label>

          <input
            type="radio"
            name="type"
            id="female-type"
            value="female-type"
            onChange={changeHandler}
            checked={formData.type === "female-type"}
          />
          <label htmlFor="female-type">Female</label>
        </fieldset>

        <label htmlFor="Branch">Branch </label>
        <select
          name="Branch"
          id="Branch"
          value={formData.Branch}
          onChange={changeHandler}
        >
          <option value="scarpio">CSE</option>
          <option value="russian">IT</option>
          <option value="thar">MECH</option>
          <option value="bmw">CIVIL</option>
          <option value="other" selected>
            Other
          </option>
        </select>

        {/* <label htmlFor="Branch">Branch</label> */}

        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
