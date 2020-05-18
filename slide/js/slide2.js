var mySlide2 ={};

function  Slide2Component(slide)
{
var  myLoadHtml = [];
var slideIndex = 0;
//var  slide_url = 'http://61.75.10.129:81/projects/slide/html/slide2.html';
var  slide_url = 'http://112.171.82.38:81/projects/slide/html/slide2.html';
var g_slide;

  g_slide = slide;

mySlide2.showSlides = function() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(mySlide2.showSlides, 2000); // Change image every 2 seconds
}


mySlide2.getFileAsURL  = function(url, index)
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
              mySlide2.showSlides();
       }
   }     
}
  //////////로딩함수 시작  함수 다 정의 된후 호출해야
  mySlide2.getFileAsURL(slide_url , 0);

 
}