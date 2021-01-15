function saveUser(){
    var data = {
        "Username": $("%Username").val(),
        "Name": $("%Name").val()
    };
    
    fetch('http://3.236.11.27:8080/accusers', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('Created Gist:', data);
  });
}