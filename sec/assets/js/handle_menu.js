var respond_size = 840;

var funcRef = function(){
  console.log(window.location.hash)
  if (window.location.hash) {
    $('#menu-checkbox').prop('checked', false)
    var name = window.location.hash.replace('#', '')
    var navH = $('nav').outerHeight();
    if (name == 'about-1') {
      navH = navH + 30
    }
    var top = $('[name='+name+']').offset().top - navH;
    console.log(navH)
    $("html, body").animate({scrollTop:top}, 500, 'swing');
  }
}

$(document).ready(function($) {
  window.addEventListener("hashchange", funcRef, false);
  
  funcRef()
  $("#menu-checkbox").change(function() {
    var checked = $("input[type='checkbox']").prop('checked')
    if (checked) {
      $('body').addClass('modal-open');
    }else{
      $('body').removeClass('modal-open');
    }
  });
}).on('click', '#changeTC', function(e){
  e.preventDefault()
}).on('click', 'nav [data-lang]', function(e){
  e.preventDefault()
  var location = window.location.pathname.slice(1).split('/')
  
  var lang = $(this).attr('data-lang')
  if (lang) {
    location[0] = lang
    location = location.join('/')
   
    window.location.href = '/'+location;
  }
})


$( window ).resize(function() {
  window_size = $(window).width();
  if (window_size > respond_size){
    $('body').removeClass('modal-open');
    $("#menu-checkbox").attr("checked",false);
  }
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvaGFuZGxlX21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlc3BvbmRfc2l6ZSA9IDg0MDtcblxudmFyIGZ1bmNSZWYgPSBmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaGFzaClcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgJCgnI21lbnUtY2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgdmFyIG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpXG4gICAgdmFyIG5hdkggPSAkKCduYXYnKS5vdXRlckhlaWdodCgpO1xuICAgIGlmIChuYW1lID09ICdhYm91dC0xJykge1xuICAgICAgbmF2SCA9IG5hdkggKyAzMFxuICAgIH1cbiAgICB2YXIgdG9wID0gJCgnW25hbWU9JytuYW1lKyddJykub2Zmc2V0KCkudG9wIC0gbmF2SDtcbiAgICBjb25zb2xlLmxvZyhuYXZIKVxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDp0b3B9LCA1MDAsICdzd2luZycpO1xuICB9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGZ1bmNSZWYsIGZhbHNlKTtcbiAgXG4gIGZ1bmNSZWYoKVxuICAkKFwiI21lbnUtY2hlY2tib3hcIikuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaGVja2VkID0gJChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIikucHJvcCgnY2hlY2tlZCcpXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwtb3BlbicpO1xuICAgIH1lbHNle1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2RhbC1vcGVuJyk7XG4gICAgfVxuICB9KTtcbn0pLm9uKCdjbGljaycsICcjY2hhbmdlVEMnLCBmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG59KS5vbignY2xpY2snLCAnbmF2IFtkYXRhLWxhbmddJywgZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKVxuICBcbiAgdmFyIGxhbmcgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGFuZycpXG4gIGlmIChsYW5nKSB7XG4gICAgbG9jYXRpb25bMF0gPSBsYW5nXG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5qb2luKCcvJylcbiAgIFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nK2xvY2F0aW9uO1xuICB9XG59KVxuXG5cbiQoIHdpbmRvdyApLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgd2luZG93X3NpemUgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgaWYgKHdpbmRvd19zaXplID4gcmVzcG9uZF9zaXplKXtcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW4nKTtcbiAgICAkKFwiI21lbnUtY2hlY2tib3hcIikuYXR0cihcImNoZWNrZWRcIixmYWxzZSk7XG4gIH1cbn0pO1xuXG4iXSwiZmlsZSI6ImFzc2V0cy9qcy9oYW5kbGVfbWVudS5qcyJ9
