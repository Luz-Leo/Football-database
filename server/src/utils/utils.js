function capitalize(string) {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
}


function format(string){

    return capitalize(string).trim()
}

export default {capitalize, format}