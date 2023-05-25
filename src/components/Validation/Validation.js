

const validation = (userData) => {
    const errors = {}; 

    if(!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,})+$/.test(userData.email)){
        errors.email = 'The email address you have entered is not valid. Please check the spelling and try again.'
    }
    if(!userData.email){
        errors.email = 'The email field cannot be left blank. Please enter a valid email address to continue.'
    }
    if(userData.email.length > 35){
        errors.email = 'The email field cannot exceed 35 characters. Please shorten the email address to continue.'
    }
    if(!/.*\d+./.test(userData.password)){
        errors.password = 'The password must contain at least one number. Please include a numeric character to continue.'
    }
    if(userData.password.length > 6 || userData.password.length > 10){
        errors.password = 'The password must be between 6 and 10 characters in length. Please enter a password within this range to continue'
    }


    return errors;
}

export default validation;