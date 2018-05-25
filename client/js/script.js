$(document).ready(function() {
    
	$("#search-button").click(function() {
		var input = $("#search-box").val();	
        console.log(input);
        $.post("/submitUsername", input, function(data){
            alert(data);
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