var url = window.location.href;

function getCaption(obj){
    var index=obj.lastIndexOf("\?nickname=");
    obj=obj.substring(index+10,obj.length);
//  console.log(obj);
    return obj;
}

window.onload = function() {
  document.getElementById('main').innerHTML ='<img src="https://a.rsg.sc//n/' + getCaption(url) + '/l" />';
}
