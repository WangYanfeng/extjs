<?php if (!defined('THINK_PATH')) exit();?><!documentype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>extJs test</title>
		<link rel="stylesheet" type="text/css" href="/extjs/ext/resources/css/ext-all.css">
		<link rel="stylesheet" type="text/css" href="/extjs/home/Public/css/main.css">
		<script type="text/javascript" src="/extjs/ext/adapter/ext/ext-base.js"></script>
		<script type="text/javascript" src="/extjs/ext/ext-all-debug.js"></script>
		<script src="/extjs/home/Public/js/south.js"></script>
		<script type="text/javascript">
			Ext.onReady(function(){
				// Ext.Ajax.request({
    //             url: '__APP__/Index/getInfo',
    //             method: 'post',
    //             success: function (response, options) {
    //             	var data=Ext.util.JSON.decode(response.responseText);
    //             },
    //             failure: function () {
    //                 alert('系统出错，请联系管理人员！');
    //             }
    //         });
				var store=new Ext.data.JsonStore({
						autoDestroy:true,
						proxy:{
							type:'ajax',
							url:'__APP__/Index/getInfo',
							reader:{
								type:'json',
								root:'rows',
								idProperty:'id'
							}
						},
						fields:['id','account','pwd','email','comment','in_time']
					});
				store.load();
				var grid=new Ext.grid.GridPanel({
							//renderTo:Ext.get("moviegrid"),
							frame:true,
							title:'Movie grid',
							store:store,
							autoExpandColumn:'title',
							columns:[
											{header: "id", dataIndex: 'id'}, 
								     	{header: "Account", dataIndex: 'account'}, 
								     	{header: "password", dataIndex: 'pwd'}, 
								     	{header: "email", dataIndex: 'email'}, 
								     	{header: "comment", dataIndex: 'comment'} ,
								     	{header: "in_time", dataIndex: 'in_time'}, 
							]
				});
				var north={
					region:'north',
					xtype:'panel',
					height:80,
					bodyStyle:"background:#abcdef;padding-left:20px",
					html:'<div id="title">XX管理系统</div>',
					cls:'header'
				}
				var south={
							region:'south',
							xtype:'panel',
							height:250,
							title:'入库数据',
							collapsible:true,
							afterRender:function(){
								var toolbar=getToolbar();
								this.add(toolbar);
							}
						};
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
							split:true,
							collapsible:true,
							collapseModel:'mini',
							title:'Some Info',
							bodyStyle:'padding:5px',
							width:230,
							minSize:230,
							html:'west'
						};
				var center={
							region:'center',
							xtype:'tabpanel',
							activeTab:0,
							afterRender:function(){
								this.add(grid);
							},
							items:[{
								title:'Movie Descriptions',
								html:'MovieInfo'
							},{
								title:'Movie Grid',
								html:'movie grid'
							}]
						};
				var viewport=new Ext.Viewport({
					layout:"border",
					renderTo:Ext.getBody(),
					items:[north,south,east,west,center]
				});
				var toolbar=getToolbar();
			});
		</script>
	</head>
	<body>
		
	</body>
</html>