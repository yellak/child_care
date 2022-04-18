import { createContext, useContext, useEffect, useState } from "react";
import ins1 from '../assets/foto.png'
import joao from '../assets/child1_male.png'
import maria from '../assets/child2_female.png'
import alex from '../assets/child3_male.png'
import ronaldo from '../assets/child4_male.png'
import luisa from '../assets/child5_female.jpeg'

const DonationContext = createContext()

const ContextProvider = ({children}) => {

  const [donations, setDonations] = useState([])

  const [institutions, setInstitutions] = useState([{
    id: 1,
    name: 'Instituição Criança Top',
    monthly: 3500,
    necessities: 4000,
    supporters: 100,
    image: ins1,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac. 
           \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. 
           \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac.`,
    children: [
        {
          id: 1,
          name: "João da Silva",
          description: "O João é um garoto muito brincalhão, gosta de se sujar bastante na lama.",
          age: 12,
          origin: "Brasília, Brazil",
          food: "Pizza",
          game: "Xadrez",
          img: joao,
          selected: false
      },
      {
          id: 2,
          name: "Maria Mercedes",
          description: "Maria é uma garota muito estudiosa e focada, tem poucos amigos mas ainda consegue ser uma garota bem comunicativa.",
          age: 9,
          origin: "São Paulo, Brazil",
          food: "Azeitona",
          game: "Adedonha",
          img: maria,
          selected: false
      },
      {
          id: 3,
          name: "Alex de Deus",
          description: "Alex é um garoto mais na dele quando você tenta falar com ele, mas ainda se dá muito bem com outras crianças.",
          age: 7,
          origin: "Brasília, Brazil",
          food: "Pizza",
          game: "Pega-pega",
          img: alex,
          selected: false
      },
      {
          id: 4,
          name: "Ronaldo Fenomenal",
          description: "Ronaldo é um garoto bem entrosado, gosta de juntar as outras crianças pra brincar, esse cara ainda vai ser capitão um dia.",
          age: 6,
          origin: "Rio de Janeiro, Brazil",
          food: "Melancia",
          game: "Esconde-esconde",
          img: ronaldo,
          selected: false
      },
      {
          id: 5,
          name: "Luísa Sonza",
          description: "Luísa é uma garota tímida que gosta de jogar video-game e assistir animes, não fala muito normalmente, a não ser que você toque nos assuntos que ela gosta.",
          age: 10,
          origin: "Lisboa, Portugal",
          food: "Pizza",
          game: "Clash of Clans",
          img: luisa,
          selected: false
      },
    ]
  }])

  const formatValue = (value) => {
    let val = value.toLocaleString('pt-BR',{ minimumFractionDigits: 2 });
    return "R$ " + val
  }

  const getProg = (initial, total) => {
    let prog = '100%'
    let notProg = '0%'
    let color = '#1848d3'

    if(initial < total){
        let perc = initial/total;
        if(perc < 0.5){
            color = '#db341a'
        }
        else if(perc < 0.8) {
            color = '#D2BD01'
        }
        else{
            color = '#2ad104'
        }
        prog = Math.round(perc*100).toString() + '%'
        notProg = Math.round(100 - (perc*100)).toString() + '%'
    }

    return [prog, notProg, color]
  }

  const addDonation = (donation) => {
    var donate = donations
    donate.push(donation)
    setDonations(donate)

    var insts = institutions
    institutions[donation.inst-1].monthly += donation.value
    setInstitutions(insts)
  }

  return(
    <DonationContext.Provider value={{donations, setDonations, institutions, setInstitutions, formatValue, getProg, addDonation}}>
            {children}
    </DonationContext.Provider>
  )
}

export const useDonationContext = () => {
    const context = useContext(DonationContext)

    return context
}

export default ContextProvider