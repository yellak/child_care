import { Container } from './styles'
import { Link} from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return(
    <Container>
      <div className="elements">
        <img src={logo} alt="" />
        <Link to="/" className='link'> Explorar </Link>
        <Link to="/" className='link'> Sugerir uma Instituição </Link>
        <Link to="/" className='link'> Sobre Nós </Link>
        <Link to="/" className='link'> Minhas Doações </Link>
        <Link to="/" className='link'> Login </Link>
      </div>
      <hr></hr>
    </Container>
  )
}

export default Navbar