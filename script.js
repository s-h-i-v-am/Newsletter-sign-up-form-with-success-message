
let error = document.getElementById('error');
let btn = document.querySelector('.subscribe-btn');
let success = document.querySelector('.success');

function ValidateMail()
{
    let emailId = document.querySelector('.MailInput').value;

    if(emailId.length == 0)
    {
        error.innerHTML = 'Email is required';
        document.querySelector('.MailInput').classList.remove('err');
        btn.classList.remove('active');
        return false;
    }
    if(!emailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        error.innerHTML = 'Valid email required';
        document.querySelector('.MailInput').classList.add('err');
        btn.classList.remove('active');
        return false;
    }
    error.innerHTML = '';
    document.querySelector('.MailInput').classList.remove('err');
    btn.classList.add('active');
    return true;
}

btn.addEventListener('click',function(){

    document.body.classList.add('show');

})