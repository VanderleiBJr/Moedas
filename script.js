function loadDoc() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        
        document.getElementById("demo").innerHTML = 
          "USD-BRL: " + data['USDBRL'].bid + "<br>" +
          "EUR-BRL: " + data['EURBRL'].bid + "<br>" +
          "BTC-BRL: " + data['BTCBRL'].bid;
      }
    };
    xhttp.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL", true);
    xhttp.send();
}