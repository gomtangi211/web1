var ar_video= [];
var selectID = -1;
var server_video='http://61.75.10.129:81/projects/video/';

        function togglefunc(e)
        {
        var id = e.id;
        if(id == 'tog_title')
        {
            $('.vid_title').toggleClass('hide');
                       
        }
        else
        {
            $('.vid_singer').toggleClass('hide');
        }
        e.classList.toggle("change");
        }    

          var selectID = -1;
            function showVideo(id, visual)
            {
                if(visual ==true)
                {
                $('#'+id).hide();
                $('#video'+id).show();
                }
                else
                {
                $('#'+id).show();
                $('#video'+id).hide();
                }
            }
            
            function OnImageClick(e){
                var id = e.getAttribute('id');
                
                
                if(selectID != -1)
                {
                    var videoElement = document.getElementById('video'+selectID);
        
                    videoElement.pause();
                    var sources = videoElement.getElementsByTagName('source');
                    var src= sources[0].getAttribute('src');
                    sources[0].removeAttribute('src'); 
                    videoElement.load();
                    sources[0].setAttribute('src',src );

                    showVideo(selectID, false);
                }
                
                $('#dashboard').text(id + '선택'+ selectID +'예전');
                showVideo(id, true);
                document.getElementById('video'+id).play();
                selectID =id;

            }


function OnLoad()
{
   load_video();

}

function load_video()
{
//포토앨범3
var url="https://spreadsheets.google.com/feeds/list/1khF2rAKDuOz9jbs3VLvIoOKVgyVCfzT7OaXPqUPeUg0/1/public/values?alt=json";

    $.getJSON(url, function(data){
    var entry= data.feed.entry;

    ar_video=[];
    
    for(var i in entry) {

    var ar=[];
    ar['title'] = entry[i].gsx$title.$t;
    ar['code'] = entry[i].gsx$code.$t;
    ar['tag']= entry[i].gsx$tag.$t;
    ar['qul']= entry[i].gsx$qul.$t;
    ar['kind']= entry[i].gsx$kind.$t;
    ar['comment'] = entry[i].gsx$comment.$t;
    ar_video[i] = ar;
      }

   var width =  512/2;
   var height = 288/2;
      
   for(var i=0; i<  ar_video.length; i++)
   {

   $('#id_video').append(`
     <div  style='float:left'>
     <p class='vid_title hide'>${ar_video[i].title}</p>
     <img id=${i} width=${width} height=${height} src=${ar_video[i].code }  onclick='OnImageClick(this)' >
             <video id= 'video${i}'  width=${width} height=${height} controls preload='none'>
                    <source src='${server_video}T-ara _ DAY BY DAY [Dance Cover by Macchiato]_Trim.mp4' type='video/mp4'  >
            </video>    
     <p class='vid_singer hide'>${ar_video[i].tag}</p>
     </div>
     `);
   }       
     });    
}