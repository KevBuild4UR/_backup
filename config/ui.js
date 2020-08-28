AV.init({
  appId: "2p7X9CLbsFtbpTmPTccmt08D-MdYXbMMI",
  appKey: "SmVKjzzmz7K8Xf0Eo3FRK2AI",
});

var url = window.location.href;
var usrstatus = "#";

function getCaption(obj)
{
	var index = obj.lastIndexOf("\#/status/");
	obj = obj.substring(index + 9, obj.length);
	//  console.log(obj);
	return obj;
}
	  
function getUsrStatus(getUsrStatusresult)
{
if (UsrStatus='0')
{
document.getElementById('status').innerHTML = '<svg style="fill: currentColor; " viewBox="0 0 16 16" version="1.1" width="32" height="32" role="img" class="text-default"><path d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg><h4 class="ml-1">Not Registered</h4>'
}
else if (UsrStatus='1')
{
document.getElementById('status').innerHTML = '<svg style="fill: currentColor; " viewBox="0 0 16 16" version="1.1" width="32" height="32" role="img" class="text-success"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg><h4 class="ml-1">Active</h4>'
}
else (UsrStatus='2')
{
document.getElementById('status').innerHTML = '<svg style="fill: currentColor; " viewBox="0 0 16 16" version="1.1" width="32" height="32" role="img" class="text-danger"><path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg><h4 class="ml-1">Banned</h4>'
}
}

window.onload = function ()
{
	document.getElementById('app').innerHTML = '<div class="card-deck mb-3"><div class="card mb-4 shadow-sm"><div class="card-body text-center"><img src="https://a.rsg.sc//n/' + getCaption(url).toLowerCase( ) + '/l" height="128" width="128" alt="' + getCaption(url) + '" style="border-radius: 50%!important;"><h3 style="padding-top: 1.25rem;">' + getCaption(url) + '</h3><p>DescriptionTest</p><div class="d-inline-flex" id="status">' + getUsrStatus() + '</div></div><nav class="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm" style="border-bottom-left-radius: .625rem; border-bottom-right-radius: .625rem; "><div class="container"><a class="navbar-brand" href="#">Relative URLs</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault1" aria-controls="navbarsExampleDefault1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarsExampleDefault1"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '"><i class="fa fa-home"></i>&nbsp;Profile</a></li><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '/games/gtav/pc/career/overview/gtaonline"><i class="fa fa-pie-chart"></i>&nbsp;Overview (PC)</a></li><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '/jobs"><i class="fa fa-map-marker"></i>&nbsp;Jobs</a></li></ul></div></div></nav></div>'
}
