<?php if (!defined('THINK_PATH')) exit();?><!documentype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>extJs test</title>
		<link rel="stylesheet" type="text/css" href="/extjs/ext/resources/css/ext-all.css">
		<script type="text/javascript" src="/extjs/ext/adapter/ext/ext-base.js"></script>
		<script type="text/javascript" src="/extjs/ext/ext-all-debug.js"></script>
		<script type="text/javascript">
			Ext.onReady(function(){
				var toolbar=new Ext.toolbar.Toolbar({
					renderTo:'toolbar',
					width:500
				});
				toolbar.add(
							{text:'新建',
								handler:function(btn){
									alert(btn.text);
								}
						   },{text:'保存'}
					);
				var fileMenu=new Ext.menu.Menu({
					items:[{
						xtype:'textfield',
						hideLable:true,
						width:100
					},{
						text:"颜色选择",
						menu:Ext.create('Ext.menu.ColorPicker', { value: '000000'})
					}]
				});
				toolbar.add({text:'设置',menu:fileMenu});

				Ext.Ajax.request({
                url: '__APP__/Index/getInfo',
                method: 'post',
                success: function (response, options) {
                	var data=Ext.util.JSON.decode(response.responseText);
                },
                failure: function () {
                    alert('系统出错，请联系管理人员！');
                }
            });
				var store=new Ext.data.JsonStore({
						autoDestroy:true,
						storId:'mystore',
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
							height:130,
							html:'<div id="toolbar"></div>'
						};
				var south={
							region:'south',
							xtype:'panel',
							height:100,
							html:'south'
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
			});
		</script>
	</head>
	<body>
		<div id="toolbar"></div>
	</body>
</html>