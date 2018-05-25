$(document).ready(function() {
    
	$("#search-button").click(function() {
		var input = $("#search-box").val();	
        console.log(input);
        $.ajax()({
            type: "POST",
            url: "/submitUsername",
            data: JSON.stringify(input),

        });
		// $.post("/submitUsername" [, input]);
	});
});

// $(document).ready(function(){
//     $("#search-button").click(function(){
//         $.ajax({url: "demo_test.txt", success: function(result){
//             $("#div1").html(result);
//         }});
//     });
// });