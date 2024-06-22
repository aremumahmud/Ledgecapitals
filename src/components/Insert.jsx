import Header from "./header";
import '../css/insert.css'

function Insert (){
    return (
        <>
        <Header isAdmin={true}/> <br /><br /><br /><br /><br /><br />
        <div className="insert_new">
           
<p className="title">
    Admin Sector
</p>

<div className="section">
    <p className="subtitle">Insert new Client</p>
    <form action="">

        <input type="text" name='investor_name' placeholder="Investors Name"/>
        <input type="text" name="investor_position" placeholder="Investors Position"  />
        <input type="email" name="investor_email" placeholder="Investors Email" />
        <input type="tel" name="investor_phone" placeholder="Investors Phone number" />
        <button>Insert</button>
    </form>
</div>
        </div>
        </>
    )
}

export default Insert