import { CountCommitsModels } from "./CountCommits.models";

/**Modelo de datos para la Respuesta que se espera de la API */
export class ResponseCommitsModels {

    // Propiedad privada que almacena el nombre del repositorio.
    public nameRepo:string;

    // Propiedad privada que almacena la información de los commits del repositorio.
    public infoRepo: CountCommitsModels;

    /**
     * Constructor de la clase ResponseCommitsModels.
     * @param {string} nameRepo - Nombre del repositorio.
     * @param {CountCommitsModels} infoRepo - Información de los commits del repositorio.
     */
    constructor(nameRepo: string, infoRepo: CountCommitsModels) {
        // Inicializa las propiedades con los valores proporcionados al constructor.
        this.nameRepo = nameRepo;
        this.infoRepo = infoRepo;
    }

    /**
     * Método getter para obtener el nombre del repositorio.
     * @returns {string} - Nombre del repositorio.
     */
    public getNameRepo(): string {
        return this.nameRepo;
    }

    /**
     * Método setter para establecer el nombre del repositorio.
     * @param {string} value - Nuevo valor para el nombre del repositorio.
     */
    public setNameRepo(value: string) {
        this.nameRepo = value;
    }

    /**
     * Método getter para obtener la información de los commits del repositorio.
     * @returns {CountCommitsModels} - Información de los commits del repositorio.
     */
    public getInfoRepo(): CountCommitsModels {
        return this.infoRepo;
    }

    /**
     * Método setter para establecer la información de los commits del repositorio.
     * @param {CountCommitsModels} value - Nuevo valor para la información de los commits del repositorio.
     */
    public setInfoRepo(value: CountCommitsModels) {
        this.infoRepo = value;
    }
}
