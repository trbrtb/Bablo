type="text/javascript">  
$.get('http://127.0.0.1:5500/Temp/otkuda.html', function (data) {  
  $('#loadcontent').html( $('.ameaning', data).html() )
});