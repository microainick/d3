var parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("prices.csv")
        .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1)) }; })
        .get(function(error,data){

          var height = 300;
          var width = 500;

          var max = d3.max(data, function(d){ return d.price; });
          console.log(max)

})
