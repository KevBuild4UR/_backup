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

window.onload = function ()
{
	document.getElementById('app').innerHTML = '<div class="card-deck mb-3"><div class="card mb-4 shadow-sm"><div class="card-body text-center"><img src="https://a.rsg.sc//n/' + getCaption(url).toLowerCase( ) + '/l" height="128" width="128" alt="' + getCaption(url) + '" style="border-radius: 50%!important;"><h3 style="padding-top: 1.25rem;">' + getCaption(url) + '</h3><p>DescriptionTest</p><div class="d-inline-flex" id="status">' + getUsrStatus(getCaption(url)) + '</div></div><nav class="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm" style="border-bottom-left-radius: .625rem; border-bottom-right-radius: .625rem; "><div class="container"><a class="navbar-brand" href="#">Relative URLs</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault1" aria-controls="navbarsExampleDefault1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarsExampleDefault1"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '"><i class="fa fa-home"></i>&nbsp;Profile</a></li><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '/games/gtav/pc/career/overview/gtaonline"><i class="fa fa-pie-chart"></i>&nbsp;Overview (PC)</a></li><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '/jobs"><i class="fa fa-map-marker"></i>&nbsp;Jobs</a></li></ul></div></div></nav></div>'
}
