import React, { useRef, useState } from 'react';
import { useAddUser } from '../state/hooks/useAddUser';

const Form = () => {
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const addToList = useAddUser();

  const addUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToList(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addUser}>
      <input
        ref={inputRef}
        value={name}
        type="text"
        onChange={event => setName(event.target.value)}
        placeholder='Insira os nomes dos participantes'
      />
      <button disabled={!name}>Adicionar</button>
    </form>
  )
}

export default Form;