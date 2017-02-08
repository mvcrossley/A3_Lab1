(function(){
	
	var $images = $(".thumb"),
		$name = $(".modelName"),
		$info = $(".priceInfo"),
		$details = $(".modelDetails");

		function changeInfo()
		{
			//$images.removeClass("fullopacity");
			//$images.addClass("fullopacity");

			//$toggledClass = event.currentTarget.id;
			console.log(event.currentTarget.id);

			$name.text(content[event.currentTarget.id].name);
			$info.text(content[event.currentTarget.id].info);
			$details.text(content[event.currentTarget.id].details);
		}

		$images.click(function(){
			changeInfo();
		});

})();