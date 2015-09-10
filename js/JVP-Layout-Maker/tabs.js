function Tab(tabset, tabHead, tabContent){
  var tab = this
    , tabs = tabset.tabs;

  tab.unselect = function(){
    tabHead.classList.remove('selected');
    tabContent.style.display = 'none';
  }
  tab.select = function(){
    tabset.currentTab.unselect();
    tabset.currentTab = tab;
    tabHead.classList.add('selected');
    tabContent.style.display = '';
  }
}

function Tabset(selector){
  var tabset = this
    , tabsetDOM = document.querySelector(selector)
    , tabs = {};

  tabset.tabs = tabs;

  for(var i = 0; i < tabsetDOM.children.length; ++i){
    var tabDOM = tabsetDOM.children[i];
    var tabContentSelector = tabDOM.dataset.for;
    var tabContent = document.querySelector('#'+tabContentSelector);

    tabDOM.addEventListener('click', function(e){
      var name = this.dataset.for;
      tabs[name].select();
    });

    tabs[tabContentSelector] = new Tab(tabset, tabDOM, tabContent);
    tabset.currentTab = tabs[tabContentSelector];
  }

  function unselectAll(){
    for(var i in tabs){
      tabs[i].unselect();
    }
  }

  unselectAll();
  tabset.currentTab.select();
}

var layersProp = new Tabset('.jvp-tabs-set');