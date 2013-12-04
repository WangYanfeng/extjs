function getChart(){
	var dataStore=new Ext.data.JsonStore({
		fields:['name','percentage'],
		data:[{name:'x<30',percentage:1},
			{name:'30<X<40',percentage:3},
			{name:'40<x<50',percentage:2},
			{name:'50<x<60',percentage:2},
			{name:'x>60',percentage:1}]
	});
	var chart=Ext.create('Ext.panel.Panel',{
		title:'图表',
		bodyStyle:'padding:10px',
		items:[{
			xtype:'chart',
			width:900,
			height:600,
			animate:true,
			store:dataStore,
			shadow:true,
			theme:'Green',
			axes:[{
					title:'百分比%',
					type:'Numeric',
					position:'left',
					fields:['percentage'],
					grid:true				
				},{
					title:'年龄段',
					type:'Category',
					position:'bottom',
					fields:['name'],
					grid:true,
			}],
			series:[{
				type:'line',
				axis:'left',
				highlight:{
					size:5,
					radius:5
				},
				xField:'name',
				yField:'percentage',
				tips: {
						  trackMouse: true,
						  width: 140,
						  height: 28,
						  renderer: function(storeItem, item) {
						    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('percentage') + '%');
						  }
				},
				markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
			}]
		}]
	});
	return chart;
}