 
  function draw_model(margin,height,width,svg,model,color,draw_axis)
  {

   var margin = {top: 10, right: 10, bottom: 25, left: 50};
   height = 500 - margin.top - margin.bottom;
   width = 960 - margin.left - margin.right;
   var xs = d3.scaleTime().range([0, width]);
   var ys = d3.scaleLinear().range([height, 0]);
   var parseDate= d3.timeParse("%Y");

    function scaleX(d)
       {
         return xs(d.Year);
       }
   
   function scaleY(d)
       {
         return ys(d.model);
       }


   // set line  x and y co-ordinates
   var valueline = d3.line()
      .x(scaleX)
      .y(scaleY);


   /* Set the file accoding to model*/
   model =="actual"?file = "actual.csv":file = "models.csv";
   

   d3.csv(file, function(data) {
      data.forEach(function(d) {
         d.Year = parseDate(d.Year,10);
         if(model!="actual")
            d.model = parseFloat(d[model]-287.4590308);
         else
            d.model = parseFloat(d.Annual_Mean,10);
        
      });

     // data scaling
      xs.domain(d3.extent(data, function(d) { return d.Year; }));
      ys.domain(d3.extent(data, function(d) { return d.model; }));

      // Add the valueline path.
      svg.append("path")
         .data([data])
         .attr("class", "line")
         .attr("d", valueline)
         .style("stroke", color);

   if(draw_axis)
   {
    // Add  X Axis
      svg.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xs));
   // Add  Y Axis
      svg.append("g")
         .call(d3.axisLeft(ys));
   }       

   });

   }