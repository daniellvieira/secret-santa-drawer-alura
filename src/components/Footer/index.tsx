import { useNavigate } from 'react-router-dom';
import { useUsersList } from '../../state/hooks/useUsersList';

const Footer = () => {
  const usersList = useUsersList();
  const navigateTo = useNavigate()

  const start = () => { navigateTo('/draw') }

  return (
    <footer>
      <button
        disabled={usersList.length < 3}
        onClick={start}
      >
        Iniciar brincadeira!
      </button>
    </footer>
  )
}

export default Footer;