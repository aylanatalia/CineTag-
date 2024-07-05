import { Outlet } from "react-router-dom"
import Cabecalho from "../../componentes/Cabecalho"
import Container from "../../componentes/Container"
import FavoritosProvider from "../../contexto/Favoritos"
import Rodape from "../../componentes/Rodape"

function PaginaBase(){
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase