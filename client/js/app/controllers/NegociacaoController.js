class NegociacaoController {

    constructor(){


      this._inputData = document.querySelector('#data');
      this._inputQuantidade = document.querySelector('#quantidade');
      this._inputValor = document.querySelector('#valor');

    }
    adiciona(event){
      event.preventDefault();
      
      let data = new Date(this._inputData.value.replace(/-/g,','));
      console.log(data);
    } 

}