class DateHelper{

    static dataParaTexto(data){
        
        return  data.getDate()
        + '/' + data.getMonth()
        + '/' + data.getFullYear();
    }

    static textoParaData(texto){
    
      return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}