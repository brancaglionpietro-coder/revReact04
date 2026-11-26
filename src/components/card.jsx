import s from './card.module.css';
import Tilt from 'react-parallax-tilt';
import champions from '/champions.webp'

export const Card = () => {
    return(
        <Tilt tiltReverse>
            <div className={s.card}>
                <div className={s.wrapImg}>
                    <img className={s.imagem} src={champions} alt="taça" />
                </div>
                <div className={s.wrapCardTexts}>
                    <h2 className={s.cardTitle}>TÍTULO</h2>
                    <p className={s.cardText}>BLA BLA BLA</p>
                </div>
            </div>
        </Tilt>
    )
}