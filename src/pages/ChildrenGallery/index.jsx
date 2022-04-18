import { Container, SliderAndDetails } from './styles'
import BackButton from '../../components/BackButton'
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDonationContext } from '../../context/useDonationContext';

const dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi. Erat luctus ac elit aliquet nunc pellentesque orci montes, dictum. Vitae, lorem euismod lobortis arcu senectus accumsan id ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vulputate habitasse nunc, sed. Cras fringilla amet ac dictum malesuada nunc mi."

const ChildrenGallery = () => {

  let {id} = useParams();

  const [child, setChild] = useState([])
  const { institutions } = useDonationContext();
  const institution = institutions[id-1];
  var children = institution.children

  useEffect(() => {
    children[0].selected = true
    setChild(children[0])
  }, [])

  const update = (child_selected) => {
    if (child) {
      children.forEach(child => {
        child.selected = false;
      })
    }
    child_selected.selected = true
    setChild(child_selected)
  }

    var slider_settings = {
      dots: true,
      slidesToShow: 3,
      focusOnSelect: true
    };

    return(
      <>
        <BackButton></BackButton>
        <Container>
          <SliderAndDetails>
            <Slider {...slider_settings}>
              {children.map(element => {
                return (
                  <div>
                    <img className={element.selected ? "selected" : ""} src={element.img} alt={element.name} onClick={() => update(element)}></img>
                  </div>
                );
              })}
            </Slider>
            <div className="details">
              <div id="detail-left">
                <h1>{child?.name}</h1>
                <p>{child?.description}</p>
                <br/>
                <p>{dummy_text}</p>
                <br/>
                <p>{dummy_text}</p>
                <br/>
                <p>{dummy_text.substring(0, 140)}</p>
              </div>
              <div id="detail-right">
                <div className="info-box">
                  <p>{`${child?.age} anos`}</p>
                  <p>{`É de ${child?.origin}`}</p>
                  <p>{`Gosta de comer ${child?.food}`}</p>
                  <p>{`Gosta de jogar ${child?.game}`}</p>
                </div>
                <Link to={`/donate/${institution.id}/${child.id}`}>
                  <button className="apadrinhar">Apadrinhar</button>
                </Link>
              </div>
            </div>
          </SliderAndDetails>
        </Container>
      </>
    );
}

export default ChildrenGallery