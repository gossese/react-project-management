import { useRef, useContext } from "react";
import Input from "./CoreComponent/Input";
import Modal from "./CoreComponent/Modal";
import { ProjectContext } from "../store/project-context";

export default function NewProject() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const {handleSaveNewProject, handleCancelProject} = useContext(ProjectContext);

  function saveNewProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    if (
      !enteredTitle.trim() ||
      !enteredDescription.trim() ||
      !enteredDate.trim()
    ) {
      modal.current.open();
      return;
    }

    handleSaveNewProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
      id: Math.random(),
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="font-bold text-stone-700 text-xl my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Vul alle velden in, alsjeblieft</p>
      </Modal>
      <div className="w-[35rem] mt-16 mr-8 flex flex-col items-stretch">
        <menu className="flex gap-4 items-center justify-end my-4">
          <li>
            <button
              type="reset"
              className="text-stone-700 hover:text-stone-950"
              onClick={handleCancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              type="submit"
              onClick={saveNewProject}
              className="bg-stone-800 hover:bg-stone-950 text-white rounded px-6 py-2 font-extralight"
            >
              Save
            </button>
          </li>
        </menu>
        <h2 className="hidden">New Project</h2>
        <div className="flex flex-col uppercase text-stone-500">
          <Input ref={title} label="Title" required></Input>
          <Input ref={description} label="Description" isTextarea></Input>
          <Input ref={dueDate} label="Due" type="date" required></Input>
        </div>
      </div>
    </>
  );
}
