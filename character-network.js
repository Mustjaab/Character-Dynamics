var cy = cytoscape({
    container: document.getElementById('cy'),
		

		
elements: [
  // nodes
  { data: { id: 'Alex' } },
  { data: { id: 'Allie' } },
  { data: { id: 'Ronald' } },

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
      id: 'AlexRonald',
      source: 'Alex',
      target: 'Ronald',
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
		id: 'AllieRonald',
		source: 'Allie',
		target: 'Ronald',
		interaction: 'indifferent'
	}
},
 {
	data: {
		id: 'RonaldAllie',
		source: 'Ronald',
		target: 'Allie',
		interaction: 'indifferent'
	}
},
{
	data: {
		id: 'RonaldAlex',
		source: 'Ronald',
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
					'background-color': '#430A5D',
					label: 'data(id)'
					}
			},
			{
				selector: 'edge',
				style: {
					width: 2,
					'line-color': 'purple',
					'opacity': 0.7,
					'curve-style': 'unbundled-bezier',
					label: 'data(interaction)'
				}
			}
		]
		  
});

cy.layout({name: 'circle'}).run();

	
	function extractNetworkData() {
		var nodesTable = document.getElementById('nodes-table');
		var edgesTable = document.getElementById('edges-table');
		
		// Clear nodes table (keep header)
		nodesTable.innerHTML = `
			<tr>
				<th>ID</th>
			</tr>
		`;
		
		// Clear edges table (keep header)
		edgesTable.innerHTML = `
			<tr>
				<th>Source</th>
				<th>Target</th>
				<th>Interaction</th>
			</tr>
		`;
		
		// Extract nodes
		var nodes = cy.nodes();
		for (var i = 0; i < nodes.length; i++) {
			var nodeData = nodes[i].data();
			var newRow = nodesTable.insertRow();
			var cell = newRow.insertCell(0);
			cell.innerHTML = nodeData.id;
		}
		
		// Extract edges
		var edges = cy.edges();
		for (var i = 0; i < edges.length; i++) {
			var edgeData = edges[i].data();
			var newRow = edgesTable.insertRow();
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);
			cell1.innerHTML = edgeData.source;
			cell2.innerHTML = edgeData.target;
			cell3.innerHTML = edgeData.interaction;
		}
	}
	
	// Extract data when page loads
	extractNetworkData();


