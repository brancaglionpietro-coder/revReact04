import { Card } from './components/card'
import { Menu } from './components/menu'
import dados from './mock/produtos.json'
import s from './Products.module.css'
 
function Products() {
    return (
        <>
            <Menu/>
            <section className={s.wrapProducts}>
                {dados.map((item)=> {
                    return(
                        <div key={item.id}>
                            <Card imagem={item.imagem} titulo={item.titulo} texto={item.texto}/>
                        </div>
                    )
                })}
            </section>
        </>

    )
}

export default Products