import { useState, useRef } from "react";

export default function MyFuncComp(props){
  const [name, setName] = useState('NiiL');
  const [title, setTitle] = useState('Mr.');
  const nameRef = useRef();
  const titleRef = useRef();

  return (
    <div>
      <h1>
        {title} {name}
      </h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setName("Kanan");
          setTitle("Mister");
        }}
      >
        Change
      </button>

      <br />

      <input ref={nameRef} type="text" />
      <input ref={titleRef} type="text" />
      <button
        onClick={() => {
          setName(nameRef.current.value);
          setTitle(titleRef.current.value);
        }}
      >
        Change
      </button>

      <br />

      <input id="inputName" type="text" />
      <input id="inputTitle" type="text" />
      <button
        onClick={() => {
          setName(document.getElementById("inputName").value);
          setTitle(document.getElementById("inputTitle").value);
        }}
      >
        Change
      </button>
    </div>
  );
}