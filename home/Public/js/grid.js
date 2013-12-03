function getGrid(){
// Ext.Ajax.request({
//             url: '?m=Index&a=getInfo',
//             method: 'post',
//             success: function (response, options) {
//             	alert(response.responseText);
//             	var data=Ext.util.JSON.decode(response.responseText);
//             },
//             failure: function () {
//             	alert('__APP__/Index/getInfo');
//                 alert('系统出错，请联系管理人员！');
//             }
//         });
var store=new Ext.data.JsonStore({
		autoDestroy:true,
		proxy:{
			type:'ajax',
			url:'?m=Index&a=getInfo',
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
			tbar:getToolbar(),
			title:'交易数据表',
			store:store,
			viewConfig:{
				stripeRows:true
			},
			autoExpandColumn:'account',
			plugins:[
					Ext.create('Ext.grid.plugin.CellEditing',{clicksToEdit:1})
			],
			columns:[
						Ext.create('Ext.grid.RowNumberer',{text:'行号',width:35}),
						{header: "账单id", dataIndex: 'id',sortable:true}, 
				     	{header: "Account", dataIndex: 'account'}, 
				     	{header: "password", dataIndex: 'pwd'}, 
				     	{header: "email",width:150, dataIndex: 'email',
				     		editor:{xtype:'textfield',allowBlank:false}}, 
				     	{header: "comment", width:350,dataIndex: 'comment',
				     		editor:{xtype:'textfield'}} ,
				     	{header: "入库时间",xtype:'datecolumn',width:140, dataIndex: 'in_time',format:'Y-m-d',editor:{xtype:'datefield',allowBlank:false}},
				     	{header:"操作",xtype:'actioncolumn',icon:'__ROOT__/fa.ico',handler:function(){alert(1)}} 
			],
			listeners:{
				afterRender:function(){
					this.on('edit',function(){alert('edit grid'),this});
				}
			}
});
return grid;
}