 
  function draw_model(margin,height,width,svg,model,color,draw_axis,scene)
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
   model =="Actual"?file = "actual.csv":file = "models.csv";
   

   d3.csv(file, function(data) {
      data.forEach(function(d) {
         d.Year = parseDate(d.Year,10);
         if(model!="Actual")
            d.model = parseFloat(d[model]-287.4590308);
         else
            d.model = parseFloat(d.Annual_Mean,10);
        
      });

     // data scaling
      xs.domain(d3.extent(data, function(d) { return d.Year; }));
      ys.domain(d3.extent(data, function(d) { return d.model; }));

      // Add the valueline path.
      var path = svg.append("path")
         .data([data])
         .attr("class", "line")
         .attr("d", valueline)
         .style("stroke", color);
      
      var totalLength = path.node().getTotalLength();

         // Set Properties of Dash Array and Dash Offset and initiate Transition
         path
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition() 
            .duration(4000) 
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0); 

   //Add legend  
        
   svg.selectAll("dots")
   .data([model])
   .enter()
   .append("circle")
    .attr("cx", margin.left+10)
    .attr("cy", function(d,i){ return 10+scene*25}) 
    .attr("r", 7)
    .style("fill", function(d){ return color})
  
  
   //Add label
  svg.selectAll("labels")
  .data([model])
  .enter()
  .append("text")
    .attr("x", margin.left+30)
    .attr("y", function(d,i){ return 10+scene*25}) 
    .style("fill", function(d){ return color})
    .text(function(d){ return model})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
   
   if(draw_axis)
   {
    // Add  X Axis
      svg.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xs));
   // Add  Y Axis
      svg.append("g")
         .call(d3.axisLeft(ys));

   //Add axis labels      
      svg.append("text")             
         .attr("transform",
               "translate(" + (width/2) + " ," + 
                              (height + margin.top + 20) + ")")
         .style("text-anchor", "middle")
         .text("Year");
      
      svg.append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 0 - margin.left)
         .attr("x",0 - (height / 2))
         .attr("dy", "1em")
         .style("text-anchor", "middle")
         .text("Temp change from Normal (Kelvin)");      
   
   }       

   });

   }