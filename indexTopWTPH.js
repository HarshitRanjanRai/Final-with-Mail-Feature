
const email1 = document.getElementById('mail1');
const submit = document.getElementById('submit1');


submit.addEventListener('submit',(e)=>{
  
    e.preventDefault();
    let ebody = `
    <h1>Top: </h1>${email1.value}
    <br>
    
    
    `;

    Email.send({
        SecureToken : "0b3a2094-92d7-4f68-9d27-1dbc3c06f055", //add your token here
        To : 'ranjanraiharshit@gmail.com', 
        From : "harshitranjanrai0@gmail.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
//footer
