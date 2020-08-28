var url = window.location.href;

function getCaption(obj)
{
	var index = obj.lastIndexOf("\#/status/");
	obj = obj.substring(index + 9, obj.length);
	//  console.log(obj);
	return obj;
}
