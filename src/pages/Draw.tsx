import { useState } from "react";
import { useResultDraw } from "../state/hooks/useResultDraw";
import { useUsersList } from "../state/hooks/useUsersList";

const Raffle = () => {
  const users = useUsersList();
  const result = useResultDraw();

  const [userOfTheTurn, setUserOfTheTurn] = useState('');
  const [secretSanta, setSecretSanta] = useState('');

  const makeDraw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSecretSanta(result.get(userOfTheTurn) || '');
  }

  return (
    <section>
      <form onSubmit={makeDraw}>
        <select
          required
          name="userOfTheTurn"
          id="userOfTheTurn"
          placeholder="Selecione o seu nome"
          value={userOfTheTurn}
          onChange={event => setUserOfTheTurn(event.target.value)}
        >
          { users.map(user => (
            <option key={user}>{user}</option>
          )) }
        </select>

        <button>Sortear</button>
      </form>
      { secretSanta && <p role='alert'>{secretSanta}</p>}
    </section>
  )
}

export default Raffle;