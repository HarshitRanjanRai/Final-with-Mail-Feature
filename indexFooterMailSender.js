
const email2 = document.getElementById('mail2');
const submitmlp = document.getElementById('submit2');

submitmlp.addEventListener('submit',(e)=>{
   
    e.preventDefault();
    let ebody = `
    <h1>Top: </h1>${email2.value}
    
    
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
