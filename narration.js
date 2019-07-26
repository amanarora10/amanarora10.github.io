function populate_scenes(narration)
{
    var scene0 = {
                  color:"red",
                  model:"actual",
                  annotation:"Actual increase over time",
                  axis:true
                  };
   narration.push(scene0)
   var scene1 = {
                  color:"cyan",
                  model:"Human",
                  annotation:"Human factors",
                  axis:false
                  };
   narration.push(scene1) 
   return narration;

}