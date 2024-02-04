/**
 * Modelo para Enviar Peticiones a La API
 */

export class RequestCommitsModels {

    // Propiedad privada que almacena el nombre de la librería.
    private _libreria: string;

    // Propiedad privada que almacena la cantidad de repositorios.
    private _cantidadRepo: number;

    /**
     * Constructor de la clase RequestCommitsModels.
     * @param {string} libreria - Nombre de la librería.
     * @param {number} cantidadRepo - Cantidad de repositorios.
     */
    constructor(libreria: string, cantidadRepo: number) {
        // Inicializa las propiedades con los valores proporcionados al constructor.
        this._libreria = libreria;
        this._cantidadRepo = cantidadRepo;
    }

    /**
     * Método getter para obtener el nombre de la librería.
     * @returns {string} - Nombre de la librería.
     */
    get libreria(): string {
        return this._libreria;
    }

    /**
     * Método setter para establecer el nombre de la librería.
     * @param {string} value - Nuevo valor para el nombre de la librería.
     */
    set libreria(value: string) {
        this._libreria = value;
    }

    /**
     * Método getter para obtener la cantidad de repositorios.
     * @returns {number} - Cantidad de repositorios.
     */
    get cantidadRepo(): number {
        return this._cantidadRepo;
    }

    /**
     * Método setter para establecer la cantidad de repositorios.
     * @param {number} value - Nuevo valor para la cantidad de repositorios.
     */
    set cantidadRepo(value: number) {
        this._cantidadRepo = value;
    }
}

