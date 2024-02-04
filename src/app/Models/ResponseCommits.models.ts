import { CountCommitsModels } from "./CountCommits.models";

/**Modelo de datos para la Respuesta que se espera de la API */
export class ResponseCommitsModels {

    // Propiedad privada que almacena el nombre del repositorio.
    private nameRepo:string;

    // Propiedad privada que almacena la información de los commits del repositorio.
    private infoRepo: CountCommitsModels;

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
    get NameRepo(): string {
        return this.nameRepo;
    }

    /**
     * Método setter para establecer el nombre del repositorio.
     * @param {string} value - Nuevo valor para el nombre del repositorio.
     */
    set NameRepo(value: string) {
        this.nameRepo = value;
    }

    /**
     * Método getter para obtener la información de los commits del repositorio.
     * @returns {CountCommitsModels} - Información de los commits del repositorio.
     */
    get InfoRepo(): CountCommitsModels {
        return this.infoRepo;
    }

    /**
     * Método setter para establecer la información de los commits del repositorio.
     * @param {CountCommitsModels} value - Nuevo valor para la información de los commits del repositorio.
     */
    set InfoRepo(value: CountCommitsModels) {
        this.infoRepo = value;
    }
}
