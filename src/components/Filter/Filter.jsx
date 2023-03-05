import {FilterInput} from "../Filter/Filter.styled"
import PropTypes from 'prop-types';

export const Filter = ({value, onChange})=> {
    return (
        
        <label>
            <h3>Find contact by name</h3>
            <FilterInput type="text" value = {value} onChange = {onChange} />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}