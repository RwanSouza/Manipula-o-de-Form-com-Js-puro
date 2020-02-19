class NegociacaoController {

    constructor(){


      this._inputData = document.querySelector('#data');
      this._inputQuantidade = document.querySelector('#quantidade');
      this._inputValor = document.querySelector('#valor');

    }
    adiciona(event){
      event.preventDefault();
      
      let data = new Date(...
        this._inputData.value
        .split('-')
        .map((item, indice) => item - indice % 2));
  
      let negociacao = new Negociacao(
        data,
        this._inputQuantidade.value,
        this._inputValor.value
      );  
        console.log(negociacao);
      }
}