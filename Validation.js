function Validation(regex) {
    let error = {}
    const email_regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
    const name_regex = /^[a-zA-Z\s]*$/
    const age_regex = /^[1-9][0-9]?$|^45$/

    if (regex.email === ""){
        error.email = "Email cannot be empty."
    }
    else{
        error.email = ""
    }

    if (regex.name === ""){
        error.name = "Name cannot be empty."
    }
    else{
        error.name = ""
    }

    if (regex.age === ""){
        error.age = "Age cannot be empty."
    }
    else{
        error.age = ""
    }
    return error;
}

export default Validation;