import React, { useState } from "react";

import { EventEmitter } from "fbemitter";

export const emitter = new EventEmitter();

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
 
  const reset = () => {
    setOpen(false);
  };
  const autoHideAfterTimeout = () => {
    setTimeout(() => reset(), 5000);
  };

  emitter.addListener("NOTIFICATION", (msg) => {
    setMessage(msg);
    setOpen(true);
    autoHideAfterTimeout();
  });
  if (!open) {
    return null;
  }
  return (
    <div className="p-4 border-1 mb-4 rounded-md font-semibold " >
      <span>{message}</span>
    </div>
  );
};

export default Notification;
