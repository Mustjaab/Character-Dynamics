
function produce(value){

const source1 = document.getElementById('source1').value;
const target1 = document.getElementById('target1').value;
const interaction1 = document.getElementById('interaction1').value;
const source2 = document.getElementById('source2').value;
const target2 = document.getElementById('target2').value;
const interaction2 = document.getElementById('interaction2').value;
const source3 = document.getElementById('source3').value;
const target3 = document.getElementById('target3').value;
const interaction3 = document.getElementById('interaction3').value;
const source4 = document.getElementById('source4').value;
const target4 = document.getElementById('target4').value; 
const interaction4 = document.getElementById('target4').value;
const source5 = document.getElementById('source5').value;
const target5 = document.getElementById('target5').value;
const interaction5 = document.getElementById('interaction5').value;

var cy = cytoscape({
    container: document.getElementById('cy'),
		

		
elements: [
  // nodes
  { data: { id: source1 } },
  { data: { id: target1 } },
  { data: { id: source2 } },
  { data: { id: target2 } },
  { data: { id: source3 } },
  { data: { id: target3 } },
  { data: { id: source4 } },
  { data: { id: target4 } },
  { data: { id: source5 } },
  { data: { id: target5 } },
  // edges
  {
    data: {
      id: source1+target1,
      source: source1,
      target: target1,
	  interaction: interaction1
    }
  },
  {
  data: {
	  id: source2+target2,
	  source: source2,
	  target: target2,
	  interaction: interaction2
  }
 },
 {
	 data: {
		id: source3+target3,
		source: source3,
		target: target3,
		interaction: interaction3
	 }
 },
 {
	data: {
	id: source4+target4,
	source: source4,
	target: target4,
	interaction: interaction4
	}
 },
 {
	data: {
	id: source5+target5,
	source: source5,
	target: target5,
	interaction: interaction5
	}
 },
],
		  style: [
			{
				selector: 'node',
				style: {
					shape: 'hexagon',
					'background-color': '#c5003c',
					label: 'data(id)',
					'color': 'white'
					}
			},
			{
				selector: 'edge',
				style: {
					width: 2,
					'line-color': '#467fa1',
					'opacity': 0.7,
					'curve-style': 'unbundled-bezier',
					label: 'data(interaction)',
					'color': 'white'
				}
			}
		]
		  
});

cy.layout({name: 'circle'}).run();
}

function myCreateFunction() {
  var table = document.getElementById("character-table");
  var row = table.insertRow(5);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertcell(2);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL2"; 
}

function myDeleteFunction() {
  document.getElementById("character-table").deleteRow(5);
}
