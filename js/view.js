var ar_video= [];

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
     <p>${ar_video[i].title}</p>
     <img width=${width} height=${height} src=${ar_video[i].code } >
     <p>${ar_video[i].tag}</p>
     </div>
     `);
   }       
     });    
}