const validation = (activityData) => {
    const errors = {}

    if(/\d/.test(activityData.name)) {
        errors.name = "el nombre no puede contener un numero"
    }

    if(activityData.duration > 8) {
        errors.duration = "la actividad no puede durar más de 8 horas"
    }

    if(activityData.dificult > 5 || activityData.dificult < 1) {
        errors.dificult = "la dificultad debe ser un numero entre 1 y 5"
    }

    if(!["verano", "otoño", "invierno", "primavera"].includes(activityData.season.toLowerCase())) {
        errors.season = "la estación debe ser verano, otoño, invierno o primavera"
    }

    return errors
}

export default validation