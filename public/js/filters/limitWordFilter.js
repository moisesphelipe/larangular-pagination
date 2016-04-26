(function(){
	var app = angular.module('app');
	app.filter('limitWord',function(){
		return function(text,limit,moreChar){
			limit = parseInt(limit) || 8;
			moreChar = moreChar || '[...]';
			return limitWord(text,limit, moreChar);
		}
	})
	function limitWord (text,limit, moreChar){

		var limitedText = text.trim().split(' ');
		if(limitedText.length < limit){
			return text;
		}else{
			limitedText = text.trim().split(' ',limit);
			text = limitedText.join(' ');
			return text+moreChar;
		}
	}

})();
