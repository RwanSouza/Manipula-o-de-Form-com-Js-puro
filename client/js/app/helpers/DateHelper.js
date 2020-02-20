class DateHelper{

    dataParaTexto(data){
        
        return  data.getDate()
        + '/' + data.getMonth()
        + '/' + data.getFullYear();
    }

    textoParaData(texto){
    
      return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}