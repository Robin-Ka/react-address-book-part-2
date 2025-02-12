import { Link } from "react-router-dom";

function Contact({ contact }){

    return (
        <>

            <li className="contact">
                <p> {contact.firstName} {contact.lastName}</p>
                <Link to={`/view/${contact.id}`}>View Contact</Link>
            </li>
        
        </>
    )

}


export default Contact