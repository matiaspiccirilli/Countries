const validation = (activityData) => {
    const errors = {}

    if(/\d/.test(activityData.name)) {
        errors.name = "El nombre no puede contener un numero"
    }

    if(activityData.duracion > 8) {
        errors.duracion = "La actividad no puede durar más de 8 horas"
    }

    if(activityData.dificultad > 5 || activityData.dificultad < 1) {
        errors.dificultad = "La dificultad debe ser un numero entre 1 y 5"
    }

    if(!["verano", "otoño", "invierno", "primavera"].includes(activityData.temporada.toLowerCase())) {
        errors.temporada = "La estación debe ser verano, otoño, invierno o primavera"
    }

    return errors
}

export default validation