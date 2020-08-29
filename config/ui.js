var url = window.location.href;

function getCaption(obj)
{
	var index = obj.lastIndexOf("\#/status/");
	obj = obj.substring(index + 9, obj.length);
	//  console.log(obj);
	return obj;
}

window.onload = function ()
{
	document.getElementById('app').innerHTML = '<div class="card-deck mb-3"><div class="card mb-4 shadow-sm"><div class="card-body text-center"><img src="https://a.rsg.sc//n/' + getCaption(url).toLowerCase( ) + '/l" height="128" width="128" alt="' + getCaption(url) + '" style="border-radius: 50%!important;"><h2 style="padding-top: 1.25rem;">' + getCaption(url) + '</h2><p>DescriptionTest</p><div class="d-inline-flex"><svg style="fill: currentColor; " viewBox="0 0 16 16" version="1.1" width="32" height="32" role="img" class="text-success"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg><h4 class="ml-1">Active</h4></div></div><nav class="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm" style="border-bottom-left-radius: .625rem; border-bottom-right-radius: .625rem; "><div class="container"><a class="navbar-brand" href="#">Relative URLs</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault1" aria-controls="navbarsExampleDefault1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarsExampleDefault1"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '"><i class="fa fa-home"></i>&nbsp;Profile</a></li><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '/games/gtav/pc/career/overview/gtaonline"><i class="fa fa-pie-chart"></i>&nbsp;Overview (PC)</a></li><li class="nav-item"><a class="nav-link" href="https://socialclub.rockstargames.com/member/' + getCaption(url) + '/jobs"><i class="fa fa-map-marker"></i>&nbsp;Jobs</a></li></ul></div></div></nav></div>'
}
