var mySlide1 = {};

function Slide1Component(slide )
{

var  myLoadHtml = [];


var slideIndex = 1;
//var  slide_url = 'http://61.75.10.129:81/projects/slide/html/slide.html';
var  slide_url = 'http://112.171.82.38:81/projects/slide/html/slide.html';
var g_slide;


       g_slide = slide;
     

mySlide1.plusSlides    = function(n) {
  mySlide1.showSlides(slideIndex += n);
}

mySlide1.currentSlide  = function(n) {
  mySlide1.showSlides(slideIndex = n);
}

mySlide1.showSlides  = function(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function slide_show(bl) //true or false
{
    if(bl == true)
    {
        g_slide.show();
    }
   else
   {
        g_slide.hide();
   }

}
 
mySlide1.getFileAsURL  = function(url, index)
{
      var reader = new  XMLHttpRequest();
     reader.open('GET',  encodeURI(url), true);
    reader.overrideMimeType('text/plain; charset=utf-8');
    reader.send(null);
 
   //readystatechange 여러번 호출된다...값이 변할때만다 호출 4번이 되야 완료
   reader.onreadystatechange= function() {
        if(reader.readyState ==4  &&   reader.status ==200)
        {
             myLoadHtml[index] = reader.responseText;   

              g_slide.append(myLoadHtml[index]);
              mySlide1.showSlides(slideIndex);
       }
   }     
}
  //////////로딩함수 시작  함수 다 정의 된후 호출해야
  mySlide1.getFileAsURL(slide_url , 0);
}