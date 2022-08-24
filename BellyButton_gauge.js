// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = [];

    // Create a variable that filters the samples for the object with the desired sample number.
    var desiredSample = samples.map(buildCharts => samples.id);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = samples.map(samples.metaFirstSample);

    // Create a variable that holds the first sample in the array.
    var firstSample = samples.filter(id);

    // 2. Create a variable that holds the first sample in the metadata array.
    var metaFirstSample = samples.filter(metadataArray);
    
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = samples.otu_ids;
    var otuLabels = samples.otu_labels;
    var sampleValues = samples.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var washingFrequency = samples.washingFrequency;
   
    // Create the yticks for the bar chart.
    var yticks = otuIds, otu_labels, sample_values;    

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar-data", washingFrequency, yticks);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble-data", washingFrequency, yticks);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = {
      x: washingFrequency,
      y: yticks,
      type: "gauge"
     
   };
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      title: "BellyButton Gauge Chart",
      xaxis: {title: "Washing Frequency"},
      yaxis: {title: "Data"}
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("Gauge", data, layout);
  });
}
