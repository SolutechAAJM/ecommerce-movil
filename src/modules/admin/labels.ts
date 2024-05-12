import { config } from "../../../config"
const label = {
    spanishLabels:{
        login:"Iniciar sesión",
    },
    englishLables:{
        login:"Login",
    }
}

export const labels = (config.language=="english")?label.englishLables:label.spanishLabels;