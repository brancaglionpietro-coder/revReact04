import s from './card.module.css';
import Tilt from 'react-parallax-tilt';

export const Card = ({imagem, titulo, texto}) => {
    return(
        <Tilt tiltReverse>
            <div className={s.card}>
                <div className={s.wrapImg}>
                    <img className={s.imagem} src={imagem} alt="imagem produto" />
                </div>
                <div className={s.wrapCardTexts}>
                    <h2 className={s.cardTitle}>{titulo}</h2>
                    <p className={s.cardText}>{texto}</p>
                </div>
            </div>
        </Tilt>
    )
}