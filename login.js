
function register()
{
    if( document.form.mail.value == "" ) {
        alert( "There was an error(s) in your form: Email ID is required" );
        document.form.mail.focus() ;
        return false;
     }
   
     if( document.form.pass.value == "" ) {
        alert( "There was an error(s) in your form: A Password is required"  );
        document.form.pass.focus() ;
        return false;
     }
    
   return(true);
}