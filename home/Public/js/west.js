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
  Ext.regModel('Menu',{fields:['text','url']});
  var menuStore=Ext.create('Ext.data.TreeStore',{
      model:'Menu',
      proxy:{
          type:'memory',  //本地内存
          data:[{
              text:'子菜单1',
              expand:true,
              url:'a',
              children:[{
                          text:'1',
                          leaf:true,
                          url:'a1'
                      },{
                          text:'2',
                          leaf:true,
                          url:'a2'
                      }]
          },{
              text:'子菜单2',
              expand:true,
              url:'b',
              children:[{
                  text:'1',
                  leaf:true,
                  url:'b1'
              },{
                  text:'2',
                  leaf:true,
                  url:'b2'
              }]
          }]
      },
      root:{
          text:'系统菜单',
          url:'R',
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
  function showtitle(url,title){
      //alert(url);
      var west=Ext.getCmp('westPanel');
      west.setTitle(title);
  }
  var treePanel=Ext.create('Ext.tree.Panel',{
      border:false,
      width:'100%',
      store:menuStore,
      //hrefTarget:'',
      listeners:{
        itemclick:function(){
          //alert(11);
        }
      }
  });
  return treePanel;
}