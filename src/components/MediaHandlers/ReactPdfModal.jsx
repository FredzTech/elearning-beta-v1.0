import React, { useLayoutEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ReactPdfModal = ({ children }) => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="modal-overlay fixed">
      <XMarkIcon
        className="h-6 aspect-square absolute top-2 right-2 text-white"
        onClick={() => {
          navigate(-1);
        }}
      />
      {children}
    </div>
  );
};

export default ReactPdfModal;
