function getTreePanel(){
	// var store = Ext.create('Ext.data.TreeStore', {
 //        root: {
 //            expanded: true,
 //            children: [
 //                { text: "detention", leaf: true },
 //                { text: "homework", expanded: true, children: [
 //                    { text: "book report", leaf: true },
 //                    { text: "alegrbra", leaf: true}
 //                ] },
 //                { text: "buy lottery tickets", leaf: true }
 //                ]
 //        }
 //    });
 //  var tree=new Ext.tree.Panel({
 //      title: 'Simple Tree',
 //      width: 200,
 //      height: 150,
 //      store: store,
 //      rootVisible: false
 //  });

  //创建菜单数据模型
  Ext.regModel('Menu',{fields:['text','url','description']});
  var menuStore=Ext.create('Ext.data.TreeStore',{
      model:'Menu',
      proxy:{
          type:'memory',  //本地内存
          data:[{
              text:'子菜单1',
              expand:true,
              url:'a',
              children:[{
                          text:'a1',
                          leaf:true,
                          url:'a1',
                          description:'this is a1'
                      },{
                          text:'a2',
                          leaf:true,
                          url:'a2',
                          description:'this is a2'
                      }]
          },{
              text:'子菜单2',
              expand:true,
              url:'b',
              children:[{
                  text:'b1',
                  leaf:true,
                  url:'b1',
                  description:'this is b1'
              },{
                  text:'b2',
                  leaf:true,
                  url:'b2',
                  description:'this is b2'
              }]
          }]
      },
      root:{
          text:'系统菜单',
          url:'R',
          expanded:true,
          leaf:false,
          expanded:true
      },
      listeners:{
          expand:function(node){   //expand是展开事件
              //alert(node.get('url'));
              showtitle(node.get('url'),node.get('text'));
          }
      }
  });
  var treePanel=Ext.create('Ext.tree.Panel',{
      border:false,
      width:220,
      store:menuStore,
      animate:true,
      fields:['text','description'],
      columns:[{
        xtype:'treecolumn',
        width:160,
        text:'名称',
        dataIndex:'text'
      },{
        text:'描述',
        dataIndex:'description'
      }],
      //hrefTarget:'',
      listeners:{
        itemclick:function(view,rec,item,index,e){
          activePanel(rec,index);
        }
      }
  });
  return treePanel;
}
function activePanel(rec,index){
  var panel=rec.get('text');
  var centerPanel=Ext.getCmp('center');
  centerPanel.setActiveTab(panel);
}
function showtitle(url,title){
    //alert(url);
    var west=Ext.getCmp('westPanel');
    west.setTitle(title);
}