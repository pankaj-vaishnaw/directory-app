
import { useState,useEffect } from 'react';
function Adduser() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [singleDetail, setSingleDetail] = useState({});
  const [details, setDetails] = useState([]);
  const [hide, setHide] = useState("");

  useEffect(() => {
    setSingleDetail({
      Name: `${name}`,
      DateOfBirth: `${dob}`,
      AadharNumber: `${aadhar}`,
      MobileNumber: `${number}`,
      Age: `${age}`,
    });
  }, [name, dob, aadhar, number, age]);

  useEffect(() => {
    if (dob === "") {
    } else {
      let dod = new Date(dob);
      let month_diff = Date.now() - dod.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let Age = Math.abs(year - 1970);
      setAge(Age);
    }
  }, [dob]);

  // const add = () => {
  //   if (name === "" || dob === "" || aadhar === "" || number === "") {
  //     alert("Fill all the inputs!");
  //   } else if (aadhar.length !== 12) {
  //     alert("Aadhar Number should be 12 digits long.");
  //   } else if (number.length !== 10) {
  //     alert("Mobile Number should be 10 digits long.");
  //   } else {
  //     setDetails([...details, singleDetail]);
  //     setHide("none");
  //   }
  // };

const setLocalStorage =()=>{

  localStorage.setItem("data", JSON.stringify([singleDetail]));
}
  

  const removeAfterSave = (e) => {
    console.log(e);
    let arr = [];
    details.forEach((ele) => {
      if (ele.AadharNumber !== e.AadharNumber) {
        arr.push(ele);
      }
    });
    setDetails(arr);
  };

  const remove = () => {
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };

  const display = () => {
    setHide("");
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };
  return (
    <div className="main-borderd-box-container flex">
      <button type="button" className="name-button-inside-container"><b>Add New Person</b></button>
      <div>
        <table className='table-container'>
          <thead className='tablehead'>
            <tr>
              <th className="thead">Name</th>
              <th className="thead">Date of birth</th>
              <th className="thead">Aadhar Number</th>
              <th className="thead">Mobile Number</th>
              <th className="thead">Age</th>
              <th className="thead">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input defaultValue={e.Name} type={"text"} />
                  </td>
                  <td>
                    <input
                      defaultValue={e.DateOfBirth}
                      className="input-date"
                      type={"date"}
                    />
                  </td>
                  <td>
                    <input
                      className="input-num"
                      defaultValue={e.AadharNumber}
                      type={"number"}
                    />
                  </td>
                  <td>
                    <input
                      className="input-num"
                      defaultValue={e.MobileNumber}
                      type={"number"}
                    />
                  </td>
                  <td>{e.Age}</td>
                  <td>
                    <button className="row-btn-for-save">Save</button>
                    <button
                      className="row-btn-for-delete"
                      onClick={() => removeAfterSave(e)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr style={{ display: hide }}>
              <td>
                <input
                  value={name}
                  type={"text"}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input
                  value={dob}
                  className="input-date"
                  type={"date"}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={aadhar}
                  type={"number"}
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={number}
                  type={"number"}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
              <td>{age}</td>
              <td>
                <button className="row-btn-for-save" onClick={() => setLocalStorage()}>
                  Save
                </button>
                <button className="row-btn-for-delete" onClick={() => remove()}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="add-button" onClick={() => display()}>
        Add
      </button>
    </div>
  );
};

  
  export default Adduser;