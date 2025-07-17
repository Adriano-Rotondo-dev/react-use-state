import { useState } from "react";
import Btn from "./btns/Btn";
import Textbox from "./cards/Card";

export default function Main({ languages }) {
  const [open, setOpen] = useState(null);
  function handleMoreClick(id) {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  }
  return (
    <main className="main">
      <div className="btns row">
        <Btn languages={languages} onClick={handleMoreClick} />
      </div>
      <div className="textbox row">
        <Textbox open={open} languages={languages} />
      </div>
    </main>
  );
}
