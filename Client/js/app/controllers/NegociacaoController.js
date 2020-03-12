class NegociacaoController {

    constructor(){

      this._inputData = document.querySelector('#data');
      this._inputQuantidade = document.querySelector('#quantidade');
      this._inputValor = document.querySelector('#valor');

      this._listaNegociacoes = new Bind( 
        new ListaNegociacoes(),
        new NegociacoesView(document.querySelector('#negociacoesView')),
        'adiciona', 'esvazia');
      
      this._mensagem = new Bind(
        new Mensagem(),
        new MensagemView(document.querySelector('#mensagemView')),
        'texto');

    }

    adiciona(event){
      
      event.preventDefault();
  
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = "Negociação adicionada com sucesso";
      this._limpaFormulario();
    }

    apaga() {

      this._listaNegociacoes.esvazia();
      this._mensagem.texto ="Negociação apagada."
    }

    _criaNegociacao() {

      return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
      )  
    }

    _limpaFormulario(){

      this._inputData.value="";
      this._inputQuantidade.value= 1;
      this._inputValor.value= 0.0;
      this._inputData.focus();
    }
}