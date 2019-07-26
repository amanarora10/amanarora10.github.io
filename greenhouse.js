var margin = {top: 10, right: 10, bottom: 25, left: 50};
height = 500 - margin.top - margin.bottom;
width = 960 - margin.left - margin.right;
var xs = d3.scaleTime().range([0, width]);
var ys = d3.scaleLinear().range([height, 0]);

 function scaleX(d)
    {
      return xs(d.Year);
    }

function scaleY(d)
    {
      return ys(d.Greenhouse);
    }
  
  function draw_greenhouse(margin,height,width,svg)
  {
   var parseDate= d3.timeParse("%Y");

   // set line  x and y co-ordinates
   var valueline = d3.line()
      .x(scaleX)
      .y(scaleY);


   /* Read the data*/
   d3.csv("models.csv", function(data) {
      data.forEach(function(d) {
         d.Year = parseDate(d.Year);
         d.Greenhouse = parseFloat(d.Greenhouse-287.4590308);
      });

     // data scaling
      xs.domain(d3.extent(data, function(d) { return d.Year; }));
      ys.domain(d3.extent(data, function(d) { return d.Greenhouse; }));

      // Add the valueline path.
      svg.append("path")
         .data([data])
         .attr("class", "line")
         .attr("d", valueline)
         .style("stroke", "yellow");

   });

   }