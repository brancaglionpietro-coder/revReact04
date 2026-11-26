import s from './Products.module.css'
import champions from '/champions.webp'
import Tilt from 'react-parallax-tilt';


function Products() {
    return (
        <section className={s.wrapProducts}>
            <Tilt>
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
        </section>

    )
}

export default Products