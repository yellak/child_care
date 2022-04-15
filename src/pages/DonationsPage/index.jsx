import { Container } from './styles'
import DonationRow from '../../components/DonationRow'
import image from '../../assets/foto.png'

const DonationsPage = () => {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan={6}><p className="title">Minhas Doações</p></th>
          </tr>
          <tr>
            <th></th>
            <th>Instituição</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <DonationRow image={image}/>
          <DonationRow image={image}/>
          <DonationRow image={image}/>
          <DonationRow image={image}/>
          <DonationRow image={image}/>
        </tbody>
      </table>
    </Container>
  )
}

export default DonationsPage