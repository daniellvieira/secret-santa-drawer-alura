import { useState } from "react";
import Card from "../components/Card";
import { useResultDraw } from "../state/hooks/useResultDraw";
import { useUsersList } from "../state/hooks/useUsersList";

import './Draw.css'

const Draw = () => {
  const users = useUsersList();
  const result = useResultDraw();

  const [userOfTheTurn, setUserOfTheTurn] = useState('');
  const [secretSanta, setSecretSanta] = useState('');

  const makeDraw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSecretSanta(result.get(userOfTheTurn) || '');
  }

  return (
    <section className="draw">
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={makeDraw}>
        <select
          required
          name="userOfTheTurn"
          id="userOfTheTurn"
          placeholder="Selecione o seu nome"
          value={userOfTheTurn}
          onChange={event => setUserOfTheTurn(event.target.value)}
        >
          <option value="">Selecione seu nome</option>
          { users.map(user => (
            <option key={user}>{user}</option>
          )) }
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <button className="button-drawer">Sortear</button>
      </form>
      { secretSanta &&
        <p className="result" role='alert'>{secretSanta}</p>
      }
      <footer className="draw">
        <img src="/images/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
      </footer>
    </section>
  )
}

export default Draw;