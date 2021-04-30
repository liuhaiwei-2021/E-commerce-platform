
const siteUrl = `${window.location.origin}/websites`

 if(sessionStorage.getItem('accessToken') === null)
    {
    let returnUrl = window.location.pathname.split('/').pop().split('.')[0];
    window.location.href  = `${siteUrl}/signin.html?returnUrl=${returnUrl}`
    }

function signOut(){
    sessionStorage.removeItem('accessToken')
    window.location.href = siteUrl
}