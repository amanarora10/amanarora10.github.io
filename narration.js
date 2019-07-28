function populate_scenes(narration)
{
    var scene0 = {
                  color:"red",
                  model:"Actual",
                  annotation:["Global tempatures have been increasing over past century", "The graphs shows the increase over 1880-1990"],
                  axis:true
                  };
   narration.push(scene0)

   var scene1 = {
    color:"orange",
    model:"Volcanic",
    annotation:["Volcanic eruptions can change the atmospehric compositon","But does not show strong corelation with temp."],
    axis:false
    };
narration.push(scene1)

   var scene2 = {
                  color:"cyan",
                  model:"Orbital",
                  annotation:["Earth axis wobbles can cause changes in global temp.","This however does not seems to be a strong factor"],
                  axis:false
                  };
   narration.push(scene2) 

   var scene3 = {
    color:"yellow",
    model:"Solar",
    annotation:["Sun's heat output changes over time. Solar activity"," although for 1880-1990 it does not look co-related to temp."],
    axis:false
    };
   narration.push(scene3) 

   var scene4 = {
    color:"green",
    model:"Greenhouse",
    annotation:["Greenhouse gases have increased significantly.Its quite clear"," its effect is stongest and primary for global warming"],
    axis:false
    };
   narration.push(scene4) 


   return narration;

}