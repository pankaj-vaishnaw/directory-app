import { useState,useEffect } from 'react';
function Adduser() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [singleDetail, setSingleDetail] = useState({});
  const [data,setData]=useState([]);
  const [addRow,setAddRow]=useState(false)

  useEffect(()=>{setData(JSON.parse(localStorage.getItem('data')))},[])
 
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


  const setLocalStorage = (obj)=>{
    let a = [];
    a = JSON.parse(localStorage.getItem('data')) || [];
    a.push(obj);
    localStorage.setItem('data', JSON.stringify(a));
    window.location.reload()
  }
  
  const deleteData = (id) =>{
    let a = [];
    a = JSON.parse(localStorage.getItem('data')) || [];
    a.splice(a.findIndex(e=>e.AadharNumber===id),1)
   localStorage.setItem('data', JSON.stringify(a));
   window.location.reload()
  }
 
  return (
    <div className="main-borderd-box-container flex">
      <button type="button" className="name-button-inside-container"><b>Add New Person</b></button>
      
      <div>
        
        <table className='table-container'>
          <thead className='tablehead'>
            <tr>
              <th className="thead">Name</th>
              <th className="thead">Date of birth</th>
              <th className="thead">Aadhar No.</th>
              <th className="thead">Mobile No.</th>
              <th className="thead">Age</th>
              <th className="thead">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            data?.map((e,i)=>{
             return <tr id={i} key={i}>
              <td>
                {e.Name}
              </td>
              <td>
                {e.DateOfBirth}
              </td>
              <td>
                {e.AadharNumber}
              </td>
              <td>
                {e.MobileNumber}
              </td>
              <td>{e.Age}</td>
              <td>
                <button className="row-btn-for-delete" onClick={()=>deleteData(e.AadharNumber)}>
                  Delete
                </button>
              </td>
            </tr>
            })
            }
            {
              addRow?

              <tr>
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
                <button className="row-btn-for-save" onClick={() => setLocalStorage(singleDetail)}>
                  Save
                </button>
                <button className="row-btn-for-delete">
                  Clear
                </button>
              </td>
            </tr>
                : null
            }
           
          </tbody>
        </table>
      </div>
      <button className="add-button" onClick={()=>setAddRow(true)}>
        Add
      </button>
    </div>
  );
};
  export default Adduser;
