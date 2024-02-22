import Modal from "../Ui/Modal";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Programming Hero"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a totam beatae quod. Earum, dignissimos quisquam fuga nemo quia quidem!
      </Modal>
    );
};

export default AddTaskModal;