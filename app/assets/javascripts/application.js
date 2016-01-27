// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
	function variables() {
   blindSift = $('input[name="blind-sift"]:checked').val();
   cvCurrent = $('input[name="CV-upload"]:checked').val();
   supportCurrent = $('input[name="supporting-upload"]:checked').val();
   cvNew = $('input[name="CV-new"]:checked').val();
   skillsNew = $('input[name="skills-new"]:checked').val();
	};

	function addRemove() {
		if(blindSift === "Yes" || blindSift === "Not selected"){
			$('.current').addClass('hidden');
			$('.new').removeClass('hidden');
			$('.enter-details').removeClass('hidden');
		}
		else if(blindSift === "No") {
			$('.new').addClass('hidden');
			$('.current').removeClass('hidden');
		};

		if(supportCurrent === "No" || supportCurrent === "Not selected"){
			$('.enter-details').addClass('hidden');
		}
		else if(supportCurrent === "Yes"){
			$('.enter-details').removeClass('hidden');
		}
		else {
			$('.enter-details').removeClass('hidden');
		};
	};

	$('input').click(function(){
		variables();
		addRemove();
	});
		variables();
		addRemove();
});