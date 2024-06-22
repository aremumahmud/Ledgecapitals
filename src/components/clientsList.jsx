import "../css/clientlist.css";
import Header from "./header";
function ClientsList() {
  let userTables =  [{
    investor_email:'aremu@gmai;.vp,',
    investor_name:'Fuck boy indra',
    investor_phone:'1t3y2909t621',
    investor_position:'cheif executive'
  },{
    investor_email:'aremu@gmai;.vp,',
    investor_name:'Fuck boy indra',
    investor_phone:'1t3y2909t621',
    investor_position:'cheif executive'
  },{
    investor_email:'aremu@gmai;.vp,',
    investor_name:'Fuck boy indra',
    investor_phone:'1t3y2909t621',
    investor_position:'cheif executive'
  },{
    investor_email:'aremu@gmai;.vp,',
    investor_name:'Fuck boy indra',
    investor_phone:'1t3y2909t621',
    investor_position:'cheif executive'
  },{
    investor_email:'aremu@gmai;.vp,',
    investor_name:'Fuck boy indra',
    investor_phone:'1t3y2909t621',
    investor_position:'cheif executive'
  },]
  return (
    <>
      <Header isAdmin={true} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="client_list">
       <p className="title">
        Client List Table
       </p>
        <table>
          <tr>
            <td>Investor Name</td>
            <td>Investor Position</td>
            <td>Investor Email</td>
            <td>Investors Phone number</td>
          </tr>
          {userTables.map && userTables.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data?.investor_name}</td>
                <td>{data?.investor_position}</td>
                <td>{data?.investor_email}</td>
                <td>{data?.investor_phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ClientsList;
