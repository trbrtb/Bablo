type="text/javascript">  
$.get('https://www.gonibablo.ml//otkuda.html', function (data) {  
  $('#loadcontent').html( $('.ameaning', data).html() )
});