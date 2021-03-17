import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg } alt="Entradas"/>
                </header>
                <strong>R$ 1200,00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg } alt="Saídas"/>
                </header>
                <strong> - R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Saída</p>
                    <img src={totalImg } alt="total"/>
                </header>
                <strong>R$ 700,00</strong>
            </div>
        </Container>
    );
}