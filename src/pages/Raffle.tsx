import { useUsersList } from "../state/hooks/useUsersList";

const Raffle = () => {
  const users = useUsersList();

  return (
    <section>
      <form action="">
        <select name="userOfTheTurn" id="userOfTheTurn">
          { users.map(user => (
            <option key={user}>{user}</option>
          )) }
        </select>
      </form>
    </section>
  )
}

export default Raffle;