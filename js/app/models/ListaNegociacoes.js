class ListaNegociacoes {

    constructor( updateview){

      this._negociacoes = []
      this._updateview = updateview;
    }
    
    adiciona(negociacao){

      this._negociacoes.push(negociacao);
       this._updateview(this);
      
    }

    get negociacoes() {

      return [].concat(this._negociacoes);
    }

    esvazia() {

      this._negociacoes = [];
      this._updateview(this);
      
    }
}