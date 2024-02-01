function sendMail(){
  
 var params ={
    from_name : document.getElementById("fullname").Value,
    to_name : document.getElementById("email_id").value,
    message : document.getElementById("message").value
 }
emailjs.send("service_xlw2m28","template_3pv2i2t",params).then(function(res){
    alert("success!"+res.status);
})

}