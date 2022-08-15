import React, { useRef, useState } from 'react';
import { useAddUser } from '../state/hooks/useAddUser';
import { useErrorMessage } from '../state/hooks/useErrorMessage';

const Form = () => {
  const [name, setName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const addToList = useAddUser();
  const errorMessage = useErrorMessage();

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
      { errorMessage && <p role='alert'>{errorMessage}</p> }
    </form>
  )
}

export default Form;