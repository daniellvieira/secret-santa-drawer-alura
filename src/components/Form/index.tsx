import React, { useRef, useState } from 'react';
import { useAddUser } from '../../state/hooks/useAddUser';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';
import './styles.css'

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
      <div className="group-input-btn">
        <input
          ref={inputRef}
          value={name}
          type="text"
          onChange={event => setName(event.target.value)}
          placeholder='Insira os nomes dos participantes'
        />
        <button disabled={!name}>Adicionar</button>
      </div>
      { errorMessage &&
        <p
          role='alert'
          className='alert error'
        >{errorMessage}</p>
      }
    </form>
  )
}

export default Form;