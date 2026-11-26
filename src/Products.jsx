import s from './Products.module.css'
import { Card } from './components/card'
import { Menu } from './components/menu'
import neymar from '/neymar.jpg'
import mbappe from '/mbappe.jpg'
import vini from '/vini.jpg'
import cr7 from '/cr7.jpg'
import cherki from '/cherkii.webp'
import renan from '/renanzinhocaliel.avif'
import messi from '/ancara.jpg'
import goat from '/goat.jpg'
 
function Products() {
    return (
        <>
            <Menu/>
            <section className={s.wrapProducts}>
                <Card imagem={neymar} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={mbappe} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={vini} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={cr7} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={cherki} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={renan} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={messi} titulo="Título 01" texto="Texto sobre o título 01"/>
                <Card imagem={goat} titulo="Título 01" texto="Texto sobre o título 01"/>
                
            </section>
        </>

    )
}

export default Products