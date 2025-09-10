import "./style.css";

const Addnovodispositivo = () => {
  return (
    <div className="adicionar-novo">
      <div className="div">

        <div className="text-wrapper-6">Adicionar novo dispositivo</div>

        <div className="frame">
          <div className="nome-do-dispositivo">
            Nome do
            dispositivo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex:
            Chuveiro
          </div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-7">Potência (W ou kW) e Voltagem</div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-8">Uso médio por dia</div>
        </div>

        <div className="frame-3">
          <div className="text-wrapper-8">Selecione o espaço</div>
        </div>

        <p className="p">Deseja receber sugestões para esse dispostivo?</p>

        <div className="frame-4">
          <div className="text-wrapper-9">Adicionar imagem</div>
        </div>

        <div className="input-button">
          <button className="button">
            <div className="frame-5">
              <div className="text-wrapper-10">SALVAR</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addnovodispositivo;