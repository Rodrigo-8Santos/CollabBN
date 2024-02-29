import './App.css';

function App() {
  return (
    <div className="geral">

      <div className="rotina">
        <button>
          Rotina Bolsistas
        </button>
      </div>

      <div className="ae">
      <div className="titulo">
        <h1 className="title">
          Gestão de Risco de Mercado e Liquidez - GRML
          GRML: Rotina Bolsistas
          </h1>
      </div>

      <div className="DiarioMensal">

        <div className="Diario">

            <button>Informativo diario</button>
          <div className="botoesDiario">
            <button>inicio</button>

              <p>(Texto descritivo)</p>

            <div className="rotina_manha">
              <button>Rotina manha</button>
              <p>(Descrição teorica das atividades, descrição das plataformas e descrição do passo)</p>
              
              <div className="guia reserva">
              <button>Saldo reserva bancario</button>

              <p>Para iniciar as rotina, abra o Outlook. No e-mail encaminhado ao “Grupo Gestão dos Riscos de Mercado e de Liquidez” 
                haverá um e-mail como assunto: “SALDO RESERVA BANCARIA” e Data-Base no formato Dia/Mês/Ano. Ver a figura,</p>

              <button>Extraindo dados e-mail</button>
              <button>Atualizando as planilhas</button>

              </div>

              <button>Relatorios S493</button>
              <button>Liquidez intradia</button>
              <button>Disponibilidades</button>
              <button>controle de limite</button>
              <button>Rotina Fundos</button>

            </div>

            <div className="rotina_tarde">
              <button>Rotina tarde</button>

              <p>(Descrição teorica das atividades, descrição das plataformas e descrição do passo)</p>

              <button>Alimentação de sistema DUXUS</button>
              <button>Relatórios Santader OPER</button>
              <button>Relatórios DUXUS</button>
              <button>Info DUXUS</button>

            </div>
          </div>
          
        </div>


        <div className="Mensal">
          <button>Informativo Mensal</button>

          <button>inicio</button>
          <button>atualização do PR</button>
          <button>LCR</button>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
