import { X } from "lucide-react";
import React from "react";

const CloseButton = () => {
  return (
    <X
      size={20}
      strokeWidth={1}
      className="absolute top-2 right-2 cursor-pointer"
    />
  );
};

export default CloseButton;
