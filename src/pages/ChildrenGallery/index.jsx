import { Container, SliderAndDetails } from './styles'
import BackButton from '../../components/BackButton'
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { children, dummy_text } from './children';


class ChildrenGallery extends React.Component {

  constructor(props) {
    super(props);
    children[0].selected = true
    this.state = {
      child: children[0]
    };
  }

  update = (child_selected) => {
    if (this.state.child) {
      children.forEach(child => {
        child.selected = false;
      })
    }
    child_selected.selected = true
    this.setState({child: child_selected})
  }

  render() {
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
                    <img className={element.selected ? "selected" : ""} src={element.img} alt={element.name} onClick={() => this.update(element)}></img>
                  </div>
                );
              })}
            </Slider>
            <div className="details">
              <div id="detail-left">
                <h1>{this.state.child?.name}</h1>
                <p>{this.state.child?.description}</p>
                <br/>
                <p>{dummy_text}</p>
                <br/>
                <p>{dummy_text}</p>
                <br/>
                <p>{dummy_text.substring(0, 140)}</p>
              </div>
              <div id="detail-right">
                <div className="info-box">
                  <p>{`${this.state.child?.age} anos`}</p>
                  <p>{`É de ${this.state.child?.origin}`}</p>
                  <p>{`Gosta de comer ${this.state.child?.food}`}</p>
                  <p>{`Gosta de jogar ${this.state.child?.game}`}</p>
                </div>
                <button className="apadrinhar">Apadrinhar</button>
              </div>
            </div>
          </SliderAndDetails>
        </Container>
      </>
    );
  }
}

export default ChildrenGallery