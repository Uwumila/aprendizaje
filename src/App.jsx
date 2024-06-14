import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './assets/imagenes-slider/data';
import { data2 } from './assets/imagenes-slider/data2';
import './App.css';
import ReactPlayer from 'react-player';

export const App = () => {
  const vidUrl1 = 'https://www.youtube.com/watch?v=E6TA-LdyUjA'
  const vidUrl2 = 'https://www.youtube.com/watch?v=yc_HsLrl6lY'
 
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = curr === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  const listRef2 = useRef();
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const listNode2 = listRef2.current;
    const imgNode2 = listNode2.querySelectorAll("li > img")[currentIndex2];

    if (imgNode2) {
      imgNode2.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex2]);

  const scrollToImage2 = (direction) => {
    if (direction === 'prev2') {
      setCurrentIndex2(curr => {
        const isFirstSlide = curr === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex2 === data2.length - 1;
      if (!isLastSlide) {
        setCurrentIndex2(curr => curr + 1);
      }
    }
  }

  const goToSlide2 = (slideIndex) => {
    setCurrentIndex2(slideIndex);
  }
  
  const CardWithImages = ({ image1, image2 }) => {
    return (
      <div className="card">
        <div className="images-container">
          <img src={image1} alt="Imagen 1" className="card-image" />
          <img src={image2} alt="Imagen 2" className="card-image" />
        </div>
      </div>
    );
  };
  return (
    <div className="main-containeruwu">
      <div>
        <button type="button" className="btn btn-secondary custom-button">INICIO</button>
      </div>
      <div className='Titulo-containeruwu'>
        <p>______________________________________________________________________</p>
        <h1 className="display-4" id="titulo">Actividades que enseñan y divierten</h1>
        <p>______________________________________________________________________</p>
      </div>
      <div className='Reutilizar-container' >
        <h1>_________</h1>
        <h2>¿Sabías que es Reutilizar?</h2>
        <h1>_________</h1>
        <h3 className='reutilizar-letras'> Reutilizar siginifica usar algo de nuevo en vez de desecharlo después de su primer uso, es decir, darle una segunda vida útil a un objeto, material o recurso, ya sea reparándolo, renovándolo o usándolo de manera diferente. Es una forma de reducir la cantidad de residuos que generamos. </h3>
        <div className="App">
          <CardWithImages
            image1="src/assets/fotos-card/llantas.jpg"
            image2="src/assets/fotos-card/botas.jpg"
          />
        </div>
        <h3> Esta "R" del reciclaje está presente en todas las actividades que les vamos a presentar en esta sección:</h3>
        <p>______________________________________________________________________</p>
      </div>
      <div className='Papel-container'>
        <h2>¿Sabías que puedes crear tu propio papel?</h2>
        <h4>Crea divertidas hojas de papel para tus cartas</h4>

        <div className="slider-containeruwu">
          <div className='leftArrowuwu' onClick={() => scrollToImage('prev')}>&#10092;</div>
          <div className='rightArrowuwu' onClick={() => scrollToImage('next')}>&#10093;</div>
          <div className="container-imagesuwu">
            <ul ref={listRef}>
              {
                data.map((item) => {
                  return <li key={item.id}>
                    <img src={item.imgUrl} width={700} height={350} />
                  </li>
                })
              }
            </ul>
          </div>
          <div className="dots-containeruwu">
            {
              data.map((_, idx) => (
                <div key={idx}
                  className={`dot-container-itemuwu ${idx === currentIndex ? "activeuwu" : ""}`}
                  onClick={() => goToSlide(idx)}>
                  &#9865;
                </div>))
            }
          </div>

        </div>
        <div>
          <p>______________________________________________________________________</p>
        </div>

        <div className='videoyutuwu'>
          <div className='aaaa'>
            <ReactPlayer
              url={vidUrl1} width={700} height={350}
              playing={false}
              volume={0.5}
              controls
            />
          </div>
        </div>
        <div>
          <p>______________________________________________________________________</p>
        </div>
        <div className='Macetero-container2'>
          <h2>Crea un conejo macetero!</h2>
          <h4>Aprende a crear tu propio conejo macetero con botellas plásticas</h4>

          <div className="slider-container2uwu">
            <div className='leftArrow2uwu' onClick={() => scrollToImage2('prev2')}>&#10092;</div>
            <div className='rightArrow2uwu' onClick={() => scrollToImage2('next2')}>&#10093;</div>
            <div className="container-images2uwu">
              <ul ref={listRef2}>
                {
                  data2.map((item) => {
                    return <li key={item.id}>
                      <img src={item.imgUrl2} width={700} height={350} />
                    </li>
                  })
                }
              </ul>
            </div>
            <div className="dots-container2uwu">
              {
                data2.map((_, idx) => (
                  <div key={idx}
                    className={`dot-container-item2uwu ${idx === currentIndex2 ? "active2uwu" : ""}`}
                    onClick={() => goToSlide2(idx)}>
                    &#9865;
                  </div>))
              }
            </div>
          </div>
          <div>
            <p>______________________________________________________________________</p>
          </div>

          <div className='videoyutuwu'>
            <ReactPlayer
              url={vidUrl2} width={700} height={350}
              playing={false}
              volume={0.5}
              controls
            />
          </div>
          <div>
            <p>______________________________________________________________________</p>
          </div>
        </div>

      </div>
    </div>
  );
};
