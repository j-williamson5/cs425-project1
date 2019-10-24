function getAttendees(){
    var that = this;
    
    //Get the sessionid from the select box
    var sessionid = $("#sessionid").val();
    
    url = 'registration?ID=' + sessionid;
    
    //Make a get for table
    $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
            $("#table").html(response);;
        }
    });
}

function postRegistration(){
    var that = this;
    
    //Get the info from form boxes
    var firstname = $("#FirstName").val();
    var lastname = $("#LastName").val();
    var displayname = $("#DisplayName").val();
    var sessionid = $("#sessionid").val();
    
    
    var data = {
        firstname: firstname,
        lastname: lastname,
        displayname: displayname,
        sessionid: sessionid
    };
    
    //Make POST
    $.ajax({
        url: "registration",
        method: 'POST',
        data: data,
        dataType:"json",
        success: function(response){
            $("#responseArea").html("Congratulations! You have successfully registered as: " + response.displayname + "<br> <br>Your registration code is: <strong>" + response.code +"</strong>");
        }
    })
}
