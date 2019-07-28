function populate_scenes(narration)
{
    var scene0 = {
                  color:"red",
                  model:"Actual",
                  annotation:["Global temperatures have been increasing over past century", "The graphs shows the actual increase over 1880-1990"],
                  axis:true
                  };
   narration.push(scene0)

   var scene1 = {
    color:"Dimgray",
    model:"Volcanic",
    annotation:["Volcanic eruptions can change the atmospehric compositon","But does not show strong corelation with temp."],
    axis:false
    };
narration.push(scene1)

   var scene2 = {
                  color:"blue",
                  model:"Orbital",
                  annotation:["Earth's axis wobbles can cause changes in global temp.","This also does not seems to be a factor for temp. change"],
                  axis:false
                  };
   narration.push(scene2) 

   var scene3 = {
    color:"gold",
    model:"Solar",
    annotation:["Sun's heat output changes over time. Solar activity though","for 1880-1990 does not look co-related to temp. increase"],
    axis:false
    };
   narration.push(scene3) 

   var scene4 = {
    color:"purple",
    model:"Aerosol",
    annotation:["Aerosols scatter and absorb solar radiation","  the effect of aerosols is to cool down global temperatures"],
    axis:false
    };
   narration.push(scene4) 


   var scene5 = {
    color:"green",
    model:"Greenhouse",
    annotation:["Model based on Greenhouse gases shows strong correlation","with actual temp. increase, its very likely the primary factor"],
    axis:false
    };
   narration.push(scene5) 


   return narration;

}