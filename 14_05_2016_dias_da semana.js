str = data.value,
    parts = str.split('-'),

    year = parseInt(parts[2], 10),
    month = parseInt(parts[1], 10) - 1, // NB: month is zero-based!
    day = parseInt(parts[0], 10),
    date = new Date(year, month, day);
    
    dia = date.getDay();
      if(dia == "0"){

        alert(" Domingo");
        data.value = "";
      };
      
      
