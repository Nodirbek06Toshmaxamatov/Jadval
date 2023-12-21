import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ModalPages = ({ ModalVisible, ToggleModal, SubmitForm, editModalVisible, ToggleEditModal , EditSubmitFOrm}) => {

  return (
    <div>
      {/* Modalfor ADD USER */}
      <Modal isOpen={ModalVisible} toggle={ToggleModal}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <form id='form' onSubmit={SubmitForm}>
            FirstName <input name='FirstName' type="text" className='form-control' required />
            LastName <input name='LastName' type="text" className='form-control' required />
            UserName <input name='UserName' type="text" className='form-control' required />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button form='form' color='success'>save</Button>
          <Button color='danger mx-1' onClick={ToggleModal}>celcel</Button>
        </ModalFooter>

      </Modal>


        {/* Modalfor Edit USER */}
        <Modal isOpen={editModalVisible} toggle={ToggleEditModal}>
        <ModalHeader>Edit User</ModalHeader>
        <ModalBody>
          <form id='form2' onSubmit={EditSubmitFOrm}>
            FirstName <input name='FirstName' type="text" className='form-control' required />
            LastName <input name='LastName' type="text" className='form-control' required />
            UserName <input name='UserName' type="text" className='form-control' required />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button form='form2' color='warning'>Edit</Button>
          <Button color='danger mx-1' onClick={ToggleEditModal}>celcel</Button>
        </ModalFooter>

      </Modal>
    </div>
  )
}

export default ModalPages