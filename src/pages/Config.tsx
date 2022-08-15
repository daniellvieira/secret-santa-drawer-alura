import Card from "../components/Card";
import Footer from "../components/Footer";
import Form from "../components/Form";
import UsersList from "../components/UsersList";

const Config = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <UsersList />
        <Footer />
      </section>
    </Card>
  )
}

export default Config;