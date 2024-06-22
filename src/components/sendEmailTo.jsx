import Header from "./header";
import '../css/send_email.css'
function SendEmailToClient(){
    return (
        <>
        <Header isAdmin={true}/>
        <br /><br /><br /><br /><br /><br />
        
         <div className="send_email">
<p className="title">
    Send Email to client
</p>

<form action="">
    <input type="email" placeholder="Clients Email" />
    <select name="" id="">
        <option value="">Select Client</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>
    <button>
        Send Email
    </button>
</form>
        </div>
        </>
       
    )
}

export default SendEmailToClient