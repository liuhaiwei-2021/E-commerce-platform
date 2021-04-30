document.getElementById('signInForm').addEventListener('submit', (e)=> {
    e.preventDefault()

    document.getElementById('signin-errormessage').innerText = ''
    errorText =  document.getElementById('signin-errormessage')
    errorText.innerText = ''


    if(e.target['email'].value !== '' && e.target['password'].value !== ''){
       
        fetch('http://127.0.0.1:8080/api/auth/signin', {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: e.target['email'].value, password: e.target['password'].value})
        })
        .then(res => res.json())
        .then(data => {
            sessionStorage.setItem('accessToken',data)

            // console.log(data)
            // console.log(window.location)            
            let returnUrl = window.location.href.split('=')[1]
            // console.log(window.location.href.split('='))
            // cons.log(window)
            // console.log(returnUrl)
            // console.log(`${window.location.pathname}`)

            if (returnUrl === '')
              window.location.href = `${window.location.origin}/websites/`
            else               
              window.location.href = `${window.location.origin}/websites/${returnUrl}.html`
            
        })
        .catch(() =>{
            errorText.innerText = 'Incorrect email or password'
        })

    }
    else{
      errorText.innerText = 'please add email and password'
    }
      
})