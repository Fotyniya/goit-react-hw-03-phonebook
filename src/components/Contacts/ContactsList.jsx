import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {ContactsItem} from "../Contacts/ContactsItem"

export const ContactsList = ({contactsList, onDelete})=> {
    return (
    <ul>
        {contactsList.map(item =>  
            <li key = {nanoid()}>
                <ContactsItem item = {item} onDelete = {onDelete}/>
            </li>
        )}
    </ul>
)}

ContactsList.propTypes = {
    contactsList: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
}