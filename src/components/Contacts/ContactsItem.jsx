import PropTypes from 'prop-types';

export const ContactsItem = ({item, onDelete})=> {
    return (
        <div>
            <span>{item.name}: {item.number}</span>
            <button type="button" onClick = {()=>onDelete(item.id)}>Delete</button>
        </div>     
)}

ContactsItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    onDelete: PropTypes.func.isRequired,
}