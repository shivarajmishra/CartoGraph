import Cartogram from 'cartogram-chart';

// Assuming you have a valid TopoJSON object and DOM element
const myChart = Cartogram();
const myTopology = {};  // Replace this with your actual TopoJSON data
const myDOMElement = document.getElementById('myChart');

myChart
  .topoJson(myTopology)
  (index);
