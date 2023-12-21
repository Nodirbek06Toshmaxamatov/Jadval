import { Button, Toast } from 'reactstrap'
import React, { useState } from 'react'
import ModalPages from './ModalPages'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

var CheckboxStyle = { transform: 'scale(2)' }

const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      FirstName: 'Ronaldo',
      LastName: 'Cristiano',
      UserName: 'C.R.7',
      count: 0,
      active: false
    },
    {
      id: 2,
      FirstName: 'John',
      LastName: 'Doe',
      UserName: 'Johon',
      count: 0,
      active: false
    },
  ])
  const [ModalVisible, setModalVisible] = useState(false)
  const [user, setUser] = useState({
    id: '',
    FirstName: '',
    LastName: '',
    UserName: '',
    count: 0,
    active: false

  })
  const [selectUser, setSelectUSer] = useState('')
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [Count, setCount] = useState(0)

  var Puls = () => {
    setCount(prev => prev + 1)
  }
  var Minus = () => {
    setCount(prev => prev - 1)
  }

  var ToggleModal = () => {
    setModalVisible(prev => !prev)
  }
  var SubmitForm = (event) => {
    event.preventDefault()
    var FirstName = event.target[0].value
    var LastName = event.target[1].value
    var UserName = event.target[2].value
    var u = user
    u.id = users.lenght + 1
    u.FirstName = FirstName
    u.LastName = LastName
    u.UserName = UserName
    setUser({ ...u })
    users.push(user)
    setUsers([...users])
    setModalVisible(false)
    toast.success("User added successfully!")
  }

  var DelUser = (index) => {
    users.splice(index, 1)
    setUsers([...users])
  }

  var EditUser = (item) => {
    setSelectUSer(item)
    setEditModalVisible(prev => !prev)
  }


  var ToggleEditModal = () => {
    setEditModalVisible(prev => !prev)
  }

  var EditSubmitFOrm = (event) => {
    event.preventDefault()
    var FirstName = event.target[0].value
    var LastName = event.target[1].value
    var UserName = event.target[2].value
    users.map((item,index) =>{
      if(item.id===selectUser.id){
        item.FirstName=FirstName
        item.LastName=LastName
        item.UserName=UserName
      }
    })
  
    setUsers([...users])
    setEditModalVisible(false)
    toast.warning("User edited successfully!")

  }
  return (
    <div className='container'>
      <ToastContainer />
      {/* Modal */}
      <ModalPages
        ModalVisible={ModalVisible}
        ToggleModal={ToggleModal}
        SubmitForm={SubmitForm}
        editModalVisible={editModalVisible}
        ToggleEditModal={ToggleEditModal}
        EditSubmitFOrm={EditSubmitFOrm}
        Count={Count}
        selectUser={selectUser}
      />
      <div className="row my-3" >
        <div className="col-3">
          <input type="search" placeholder='search' className='form-control' />
        </div>
        <div className="col-3">
          <input id='par' type="checkbox" style={CheckboxStyle} />
          <label htmlFor="par" className='mx-3'>
            <h4>Active</h4>
          </label>
        </div>
        <div className="col-6">
          <Button color='dark float-end px-4' onClick={ToggleModal}>Add</Button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>№</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>UserName</th>
                <th>Count</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.UserName}</td>
                    <td>
                      <Button color='outline-light btn-sm mx-1' onClick={Puls}>+</Button>
                      {Count}
                      <Button color='outline-light btn-sm mx-1' onClick={Minus}>-</Button>
                    </td>
                    <td>
                      <input type="checkbox" checked={item.active} style={CheckboxStyle} />
                    </td>
                    <td>
                      <Button color='warning btn-sm' onClick={() => EditUser(item)}>edit</Button>
                      <Button color='danger mx-2 btn-sm' onClick={() => DelUser(index)}>dalete</Button>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App