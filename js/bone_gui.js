  
       var ScriptNode=document.createElement('script');
       ScriptNode.setAttribute('type','text/javascript');
       ScriptNode.setAttribute('src','https://dl.dropbox.com/u/79021836/jquery.mobile-1.1.1/jquery.mobile-1.1.1.min.js');
       document.head.appendChild(ScriptNode);
       
       
       var css = document.createElement('link');
       css.setAttribute('rel', 'stylesheet');
       css.setAttribute('href', 'https://dl.dropbox.com/u/79021836/jquery.mobile-1.1.1/jquery.mobile-1.1.1.min.css');
       document.head.appendChild(css);
       
       

       $(document).live('pageinit',function(event) {
           
          
          if (navigator.userAgent.match(/(iPhone|iPod)/)!=null ) {
              $('head').prepend('<meta name="viewport" content="target-densitydpi=device-dpi,user-scalable=no" />');
          }
          
         
         if (navigator.userAgent.match(/(Android)/)!=null ) {
              $('#content_search').remove();
          }
         
          
          
          $('.header_utility_btn').css('height','165px');
          $('.header_utility_btn').css('width','175px');
           $('.ui-icon-app_menu').css('height','150px');
           $('.ui-icon-app_menu').css('width','150px');    
          window.scrollTo(0,1); // for hiding address bar
              
             
              document.getElementById('header').style.height='180px'
              
                              
                
                  var previousOrientation = 0; //portrait
                  var checkOrientation = function(){
                        if(window.orientation !== previousOrientation){
                          previousOrientation = window.orientation;
                          alert('you just rotated');
                          
                     }
                   };

                 var  resetHeaderSize=function(){
                     if(window.orientation!=0){
                          // alert('here');
                           document.getElementById('header').style.height='100px'; 
                            $('.header_utility_btn').css('height','91px');
                            $('.header_utility_btn').css('width','97px');
                            $('.ui-icon-app_menu').css('background-image', 'url("https://dl.dropbox.com/u/79021836/mobile/icon/menu_landscpae.png")');
                            $('.ui-icon-app_menu').css('height','83px');
                            $('.ui-icon-app_menu').css('width','83px');       
                     }
                     
                     else{
                         document.getElementById('header').style.height='180px';
                          $('.header_utility_btn').css('height','165px');
                          $('.header_utility_btn').css('width','175px');
                          $('.ui-icon-app_menu').css('background-image', 'url("https://dl.dropbox.com/u/79021836/mobile/icon/menu_portrait.png")');
                          $('.ui-icon-app_menu').css('height','150px');
                          $('.ui-icon-app_menu').css('width','150px'); 
                     }
                 }; 

                  window.addEventListener("resize", checkOrientation, false);
                  window.addEventListener("orientationchange", checkOrientation, false);
                  window.addEventListener("resize", resetHeaderSize, false);
                  window.addEventListener("orientationchange",resetHeaderSize, false);
                  
                  setInterval(checkOrientation, 2000);
                   setInterval(resetHeaderSize, 500);
          

 
           
          
            var scrollTimer=-1;

           var showDivAtOffscroll=function(dom_obj){
                                    dom_obj.style.visibility="visible";
                                    //document.body.style.backgroundColor = "red";
                                  };

           window.onload = function() {
  
                  function getScrollTop() {
                       if (typeof window.pageYOffset !== 'undefined' ) {
                           return window.pageYOffset;
                          }

             var d = document.documentElement;
                   if (d.clientHeight) {
                        return d.scrollTop;
                   }
                   return document.body.scrollTop;
              }

  
  
            window.onscroll =function() {
                                
                                var header_area = document.getElementById('header');
                               
                                var scroll = getScrollTop();
                                //document.body.style.backgroundColor = "white";   
                                header_area.style.visibility="hidden";
                                console.log(scroll);
                                
                                
                                 if (scroll <= 28 && scroll >0) {
                                  header_area.style.top = "30px";  
                                     
                                }
                                if (scroll ==0) {
                                  header_area.style.top = "0px";  
                                     
                                }
                                else {
                                  header_area.style.top = (scroll + 2) + "px";
                                 // console.log('here');
                                }
    
    
                                if (scrollTimer != -1){
                                   clearTimeout(scrollTimer);
                                }
            
    
                                scrollTimer = window.setTimeout(function(){
                                //    console.log(header_area);
                                    showDivAtOffscroll(header_area);  
                                }, 1000);
                              };
  
           };
  
       });