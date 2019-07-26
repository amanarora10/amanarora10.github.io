 
var xs = d3.scaleTime().range([0, width]);
var ys = d3.scaleLinear().range([height, 0]);

 function scaleX(d)
    {
      return xs(d.Year);
    }

function scaleY(d)
    {
      return ys(d.Annual_Mean);
    }
  
  function draw_actual(margin,height,width,svg)
  {
   var parseDate= d3.timeParse("%Y");

   // set line  x and y co-ordinates
   var valueline = d3.line()
      .x(scaleX)
      .y(scaleY);


   /* Read the data*/
   d3.csv("actual.csv", function(data) {
      data.forEach(function(d) {
         console.log(d.Year)
         d.Year = parseDate(d.Year);
         console.log(d.Year)
         d.Annual_Mean = parseFloat(d.Annual_Mean);
      });

     // data scaling
      xs.domain(d3.extent(data, function(d) { return d.Year; }));
      ys.domain(d3.extent(data, function(d) { return d.Annual_Mean; }));

      // Add the valueline path.
      svg.append("path")
         .data([data])
         .attr("class", "line")
         .attr("d", valueline)
         .style("stroke", "red");
   // Add  X Axis
   svg.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xs));
   // Add  Y Axis
      svg.append("g")
         .call(d3.axisLeft(ys));
   });

   }