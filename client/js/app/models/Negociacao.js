class Negociacao {

    constructor(data, quantidade, valor){

      this._data = new Date(data.getTime()); // Encapsulamento
      this._quantidade = 1;
      this._valor= 0;
      Object.freeze(this)
    }

    get Volume(){

      return this._quantidade * this.valor; // calcula o volume da negociação.
    }

    get Data(){
      return this._data;
    }

    get Quantidade(){
      return this._quantidade;
    }

    get Valor(){
      return this._valor;
    }
  }