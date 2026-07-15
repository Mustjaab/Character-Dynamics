
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
 }
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

