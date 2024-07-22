import validator from 'validator';

function validate(data){
    let errors = [];

    if (data.fname  && !validator.isAlpha(data.fname)){
        errors.push(`Error on FIRST NAME: Only LETTERS allowed!`)        
    }

    if (data.lname  && !validator.isAlpha(data.lname)){
        errors.push(`Error on LAST NAME: Only LETTERS allowed!`)
    }
    
    if(data.age && !validator.isNumeric(data.age)){
        errors.push(`Error on AGE: Only NUMBERS allowed!`)
    }

   
    return errors;
}

export default validate;