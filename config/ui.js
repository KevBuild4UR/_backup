window.onload = function() {
  var url=location.search;
  var testfunc;
  var Request = new Object();
  if(url.indexOf("?")!=-1)
  {
  var str = url.substr(1);
  strs= str.split("&");
  for(var i=0;i
  {
  Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
  }
  }
  testfunc = Request["testfunc"];
  document.getElementById('main').innerHTML = testfunc
}
