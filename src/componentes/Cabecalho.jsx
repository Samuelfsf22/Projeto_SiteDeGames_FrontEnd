import '../componentes_css/Cabecalho.css'
import { BrowserRouter, Routes, Router, Route, Link , Outlet} from "react-router-dom";

import Produtos from '../pages/MainPage'
export default function Cabecalho() {

    return (
        <header className="cabecalho">
            <Link to="/Produtos"><h2>Lojinha Show De Bola</h2></Link>

            <input type="text" placeholder='Buscar Aqui'/>
            <nav>
                <ul>
                    <li>Gêneros</li>
                </ul>
            </nav>

        </header>
    )
}