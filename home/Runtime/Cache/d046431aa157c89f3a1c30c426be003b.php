<?php if (!defined('THINK_PATH')) exit();?><!documentype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>extJs test</title>
		<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css">
		<link rel="stylesheet" type="text/css" href="home/Public/css/main.css">
		<script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
		<script type="text/javascript" src="ext/ext-all.js"></script>
		<script src="home/Public/js/toolbar.js"></script>
		<script src="home/Public/js/west.js"></script>
		<script src="home/Public/js/grid.js"></script>
		<script src="home/Public/js/chart.js"></script>
		<script src="home/Public/js/chartPie.js"></script>
		<script type="text/javascript">
			Ext.onReady(function(){
				var north={
					region:'north',
					height:100,
					bodyStyle:"background:#abcdef;padding-left:20px",
					html:'<div id="title">XX管理系统</div>',
					cls:'header'
				}
				var east={
							region:'east',
							xtype:'panel',
							split:true,
							width:230,
							html:'east'
						};
				var west={
							region:'west',
							xtype:'panel',
							id:'westPanel',
							layout:'fit',
							split:true,
							collapsible:true,
							collapseModel:'mini',
							title:'Some Info',
							bodyStyle:'padding:5px',
							width:230,
							minSize:230,
							listeners:{
								afterRender:function(){
									var tree=getTreePanel();
									this.add(tree);
								}
							}
						};
				var center={
							region:'center',
							xtype:'tabpanel',
							activeTab:0,
							id:'center',
							items:[{
								title:'系统说明',
								id:'a2',
								html:'movie grid'
							}],
							listeners:{
								afterRender:function(){
									var grid=getGrid();
									this.add(grid);
									var chart=getChart();
									this.add(chart);
									var chartPie=getChartPie();
									this.add(chartPie);
								}
							}							
						};
				var viewport=new Ext.Viewport({
					layout:'border',
					renderTo:Ext.getBody(),
					items:[north,east,west,center]
				});
			});
		</script>
	</head>
	<body>
		
	</body>
</html>