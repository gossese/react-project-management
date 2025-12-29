import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Modal({ buttonCaption, children, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-800/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="text-right mt-4">
        <PrimaryButton >{buttonCaption}</PrimaryButton>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
