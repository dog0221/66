window.onload=function(){
            var obox=document.getElementById('box');
			var odiv=obox.getElementsByTagName('div');
			var oipt=obox.getElementsByTagName('input');
			
			for(var i=0;i<oipt.length;i++){
				oipt[i].index=i
				oipt[i].onclick=function(){
					for(var j=0;j<oipt.length;j++){
						oipt[j].className='';
						odiv[j].style.display='none';
					}
					this.className='active';
					odiv[this.index].style.display='block';
				}
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
}
