var cy = cytoscape({
    container: document.getElementById('cy'),
		

		
elements: [
  // nodes
  { data: { id: 'Alex' } },
  { data: { id: 'Allie' } },
  { data: { id: 'Sean' } },

  // edges
  {
    data: {
      id: 'AlexAllie',
      source: 'Alex',
      target: 'Allie',
	  interaction: 'likes'
    }
  },
  {
    data: {
      id: 'AlexSean',
      source: 'Alex',
      target: 'Sean',
	  interaction: 'indifferent'
    }
  },
  {
  data: {
	id: 'AllieAlex',
	source: 'Allie',
	target: 'Alex',
	interaction: 'likes'
  }
 },
 {
	data: {
		id: 'AllieSean',
		source: 'Allie',
		target: 'Sean',
		interaction: 'indifferent'
	}
},
 {
	data: {
		id: 'SeanAllie',
		source: 'Sean',
		target: 'Allie',
		interaction: 'indifferent'
	}
},
{
	data: {
		id: 'SeanAlex',
		source: 'Sean',
		target: 'Alex',
		interaction: 'indifferent'
	}
},

],
		  style: [
			{
				selector: 'node',
				style: {
					shape: 'hexagon',
					'background-color': '#c5003c',
					label: 'data(id)'
					}
			},
			{
				selector: 'edge',
				style: {
					width: 2,
					'line-color': '#467fa1',
					'opacity': 0.7,
					'curve-style': 'unbundled-bezier',
					label: 'data(interaction)'
				}
			}
		]
		  
});

cy.layout({name: 'circle'}).run();


