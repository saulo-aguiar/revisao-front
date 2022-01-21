import * as S from "./style";
import MegaLogo from "./images/Logo_Sena.png";

function App() {
  return (
    <S.Content>
      <S.LeftContainer>
        <S.Select>
          <option value="valor1" selected>
            MEGA-SENA
          </option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
        </S.Select>
        <S.MegaSenaContainer>
          <img src={MegaLogo} alt="Mega Sena" />
          <p>Mega-Sena</p>
        </S.MegaSenaContainer>
        <S.TextBottom>
          <p>Concurso</p>
          <h3>4531-07/04/2020</h3>
        </S.TextBottom>
      </S.LeftContainer>
      <S.RightContainer>
        <div>
          <S.Ball>
            <h3>06</h3>
          </S.Ball>
          <S.Ball>
            <h3>09</h3>
          </S.Ball>
          <S.Ball>
            <h3>28</h3>
          </S.Ball>
          <S.Ball>
            <h3>33</h3>
          </S.Ball>
          <S.Ball>
            <h3>37</h3>
          </S.Ball>
          <S.Ball>
            <h3>40</h3>
          </S.Ball>
        </div>
        <p className="text">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </S.RightContainer>
    </S.Content>
  );
}

export default App;
