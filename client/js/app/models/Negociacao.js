class Negociacao {

    constructor(data, quantidade, valor){

      this._data = new Date(data.getTime()); // Encapsulamento
      this._quantidade = quantidade;
      this._valor= valor;
      Object.freeze(this)
    }

    get volume(){

      return this._quantidade * this.valor; // calcula o volume da negociação.
    }

    get data(){
      return new Date(this._data.getTime());
    }

    get quantidade(){
      return this._quantidade;
    }

    get valor(){
      return this._valor;
    }
  }