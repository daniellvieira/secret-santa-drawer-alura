import React from 'react'
import { useUsersList } from '../../state/hooks/useUsersList'

const Footer = () => {
  const usersList = useUsersList();

  return (
    <footer>
      <button disabled={usersList.length < 3}>Iniciar brincadeira!</button>
    </footer>
  )
}

export default Footer