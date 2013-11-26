function getToolbar(){
	var toolbar=new Ext.toolbar.Toolbar({
					//renderTo:'toolbar',
					
				});
	toolbar.add(
				{text:'新建',
					handler:function(btn){
						alert(btn.text);
					},
			   },{text:'导入'}
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
	return toolbar;
}

