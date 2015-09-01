function JVPLM(debug){
  debug = debug || false;
  var jvplm = this
    , beginTime = new Date();

  jvplm.getTime = function(){
    return (new Date() - beginTime) / 1000;
  }

  jvplm.log = function(msg){
    console.log('['+jvplm.getTime()+'] '+msg);
  };

  if(!debug)
    jvplm.log = function(){};
}