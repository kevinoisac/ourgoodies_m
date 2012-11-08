/**
 * @author  shukai chang
 */

$(document).ready(function(){     
	
	/*
	 *  loading dependencies
	 */  
	var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', './css/bootstrap.css');
    document.body.appendChild(css);
    
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', './css/bootstrap-responsive.css');
    document.body.appendChild(css);
    
    var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/bootstrap.js');
    document.body.appendChild(ScriptNode);
     
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', './css/jquery.fileupload-ui.css');
    document.body.appendChild(css);
       
     
    
    	var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/vendor/jquery.ui.widget.js');
    document.body.appendChild(ScriptNode);
    
   	var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/jquery.iframe-transport.js');
    document.body.appendChild(ScriptNode);
  
    var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/load-image.js');
    document.body.appendChild(ScriptNode);
    
    var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/tmpl.js');
    document.body.appendChild(ScriptNode);
    
    var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/canvas-to-blob.js');
    document.body.appendChild(ScriptNode);
    
    	var ScriptNode=document.createElement('script');
    ScriptNode.setAttribute('type','text/javascript');
    ScriptNode.setAttribute('src','./js/jquery.fileupload.js');
    document.body.appendChild(ScriptNode);
    
    
    
    /*
     * loading jquery file Upload UIs
     */
    
    var fileUpLoadForm=document.getElementById('head_form');
    
    var fileUpLoadUiDiv=document.createElement('div');
    fileUpLoadUiDiv.id='fileUploadUiDiv';
    var addFileBtn=document.createElement('button');
    var startAllUpBtn=document.createElement('button');
    var cancelAllBtn=document.createElement('button');
    fileUpLoadUiDiv.appendChild(addFileBtn);
    fileUpLoadUiDiv.appendChild(startAllUpBtn);
    fileUpLoadUiDiv.appendChild(addFileBtn);
   // fileUpLoadUiDiv.appendChild();
    	// $(function() {
				// $('#fileupload').fileupload({
					// dataType : 'json',
					// done : function(e, data) {
						// $.each(data.result, function(index, file) {
							// $('<p/>').text(file.name).appendTo(document.body);
						// });
					// },
					// progressall : function(e, data) {
						// var progress = parseInt(data.loaded / data.total * 100, 10);
						// $('#progress .bar').css('width', progress + '%');
					// }
				// });
			// });
    
    
    

});
