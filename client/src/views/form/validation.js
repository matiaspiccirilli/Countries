const validation = (activityData) => {
    const errors = {}

    if(!activityData.name || /\d/.test(activityData.name)) {
        errors.name = "Debe tener un nombre y El nombre no puede contener un numero"
    }

    if(!activityData.duracion || activityData.duracion > 8) {
        errors.duracion = "La actividad no puede durar más de 8 horas"
    }

    if(!activityData.dificultad || activityData.dificultad > 5 || activityData.dificultad < 1) {
        errors.dificultad = "Debe tener una dificultad y La dificultad debe ser un numero entre 1 y 5"
    }

    if(!activityData.temporada ||!["verano", "otoño", "invierno", "primavera"].includes(activityData.temporada.toLowerCase())) {
        errors.temporada = "Debe tener una estación y La estación debe ser verano, otoño, invierno o primavera"
    }

    if(activityData.countries.length === 0) {
        errors.countries = "Debe incluir al menos un pais"
    }

    return errors
}

export default validation