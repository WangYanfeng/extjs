function getChartPie(){
	var dataStore=new Ext.data.JsonStore({
		fields:['name','percentage'],
		data:[{name:'<30',percentage:1},
			{name:'30<X<40',percentage:3},
			{name:'40<x<50',percentage:2},
			{name:'50<x<60',percentage:2},
			{name:'x>60',percentage:1}]
	});
	var chartPie=Ext.create('Ext.panel.Panel',{
		title:'利润分布图',
		bodyStyle:"margin:15px",
		items:[{
			xtype:'chart',
			store:dataStore,
			width:800,
			height:500,
			animate:true,
			legend:{position:'bottom'},
			shadow:true,
			donut:20,
			series:[{
				type:'pie',
				field:'percentage',
				showInLegend:true,
			  //colorSet:['#FFFF00','#669900','#FF6699','#66CCCC'],
				label:{
					field:'name',
					contrast:true,
					color:'#FFFF00',
					renderer:function(v){
						return "["+v+"]";
					},
					display:'middle',
					font:'18px "Lucida Grande"'
				},
				highlight:{
					segment:{
						margin:10
					}
				},
				tips:{
					trackMouse:true,
					width:50,
					height:28,
					renderer:function(storeItem){
						var title=storeItem.get('percentage')+'%';
						this.setTitle(title);
					}
				}
			}]
		}]
	});
	return chartPie;
}