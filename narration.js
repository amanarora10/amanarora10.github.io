function populate_scenes(narration)
{
    var scene0 = {
                  color:"red",
                  model:"Actual",
                  annotation:["Global temperatures have been increasing over past century", "The graphs shows the actual increase over 1880-1990"],
                  axis:true,
                  tooltip:"The basic GISS temperature analysis scheme was defined in the late 1970s by James Hansen when a method of estimating global temperature change was needed for comparison with one-dimensional global climate models. The scheme was based on the finding that the correlation of temperature change was reasonably strong for stations separated by up to 1200 km, especially at middle and high latitudes. This fact proved sufficient to obtain useful estimates for global mean temperature changes." 
                  };
   narration.push(scene0)

   var scene1 = {
    color:"Dimgray",
    model:"Volcanic",
    annotation:["Volcanic eruptions can change the atmospehric compositon. The","data however does not show it contributing to global warming"],
    axis:false,
    tooltip: "When a volcano erupts, it spews ash and aerosol droplets into the atmosphere. These are capable of cooling the planet, though typically it lasts a few days or weeks before they are removed from the atmosphere, according to the U.S. Geological Survey. The airborne particles reflect more sunlight, which otherwise would warm Earth. Also emitted is sulfur dioxide gas, which can cause cooling. As the sulfur dioxide is converted into sulfuric acid, it creates aerosol droplets, which further reflect the sun's rays away from Earth and contribute to cooling."
    };
   narration.push(scene1)

   var scene2 = {
                  color:"blue",
                  model:"Orbital",
                  annotation:["Earth's axis wobbles can cause changes in global temp.","This also does not seems to be a factor for temp. change"],
                  axis:false,
                  tooltip: "The Chandler wobble or variation of latitude is a small deviation in the Earth's axis of rotation relative to the solid earth,which was discovered by American astronomer Seth Carlo Chandler in 1891. It amounts to change of about 9 metres (30 ft) in the point at which the axis intersects the Earth's surface and has a period of 433 days. This wobble, combines with another wobble with a period of one year, so that the total polar motion varies with a period of about 7 years."
                  };
   narration.push(scene2) 

   var scene3 = {
    color:"gold",
    model:"Solar",
    annotation:["Sun's heat output changes over time. Solar activity though","for 1880-1990 does not look co-related to temp. increase"],
    axis:false,
    tooltip: "There have been many arguments as to whether or not the eleven-year sunspot cycle affects our weather and climate. With our increased ability to monitor the sun, we are now aware that there is a small change in the total solar irradiance accompanying shifts from solar maximum conditions (with many sunspots) to solar minimum (with, basically, none).The effect of these changes on our temperature record has been noted by some researchers, and, like the change in solar irradiance, it too appears to be small"
    };
   narration.push(scene3) 

   var scene4 = {
    color:"purple",
    model:"Aerosol",
    annotation:["Aerosols scatter and absorb solar radiation. The effect","of aerosols is to cool rather than warm global temperatures"],
    axis:false,
    tooltip: "Key aerosol groups include sulfates, organic carbon, black carbon, nitrates, mineral dust, and sea salt. The bulk of aerosols—about 90 percent by mass—have natural origins. The remaining 10 percent of aerosols are considered anthropogenic, or human-made, and they come from a variety of sources.Fossil fuel combustion produces large amounts of sulfur dioxide, which reacts with water vapor and other gases in the atmosphere to create sulfate aerosols. Biomass burning, a common method of clearing land and consuming farm waste, yields smoke that’s comprised mainly of organic carbon and black carbon"
    };
   narration.push(scene4) 


   var scene5 = {
    color:"green",
    model:"Greenhouse",
    annotation:["Greenhouse models shows strong correlation with actual temp." ,"increase. Its conclusively primary factor for global warming"],
    axis:false,    
    tooltip: "On Earth, human activities are changing the natural greenhouse. Over the last century the burning of fossil fuels like coal and oil has increased the concentration of atmospheric carbon dioxide (CO2). This happens because the coal or oil burning process combines carbon with oxygen in the air to make CO2. To a lesser extent, the clearing of land for agriculture, industry, and other human activities has increased concentrations of greenhouse gases."
    };
   narration.push(scene5) 

   var scene6 = {annotation:["Check/uncheck boxes above to contrast  temp increase"," attributed to greenhouse with other factors"],
   tooltip:"Compare different factors using the checkboxes above" }
   narration.push(scene6); 


   return narration;

}