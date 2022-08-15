import { useNavigate } from 'react-router-dom';
import { useUsersList } from '../../state/hooks/useUsersList';
import './styles.css'

const Footer = () => {
  const users = useUsersList();
  const navigateTo = useNavigate()

  const start = () => { navigateTo('/draw') }

  return (
    <footer className="footer-configs">
      <button 
        className='btn'
        disabled={users.length < 3}
        onClick={start}
      >Iniciar brincadeira!</button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}

export default Footer;