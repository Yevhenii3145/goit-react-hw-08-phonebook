import PropTypes from "prop-types";
import { Input } from '@chakra-ui/react';

import styles from "./text-field.module.css";

const TextField = ({id, label, value, name, handleChange, type, checked, className, placeholder, required, pattern}) => {
    const fullClassName = className ? `${styles.field} ${className}` : styles.field;

    return (
        <div className={styles.formGroup}>
            {label && <label style={{width: "80px", color: "orange"}} htmlFor={id}>{label}</label>}
            <Input variant='filled'  id={id} value={value} checked={checked} name={name} onChange={handleChange} type={type} className={fullClassName} placeholder={placeholder} required={required} pattern={pattern} />
        </div>
    );
};

export default TextField;

TextField.defaultProps = {
    type: "text",
    required: false,
};

TextField.propTypes = {
    id: PropTypes.string, 
    label: PropTypes.string, 
    value: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    handleChange: PropTypes.func.isRequired, 
    type: PropTypes.string, 
    className: PropTypes.string, 
    placeholder: PropTypes.string,  
    required: PropTypes.bool, 
    pattern: PropTypes.string,
};