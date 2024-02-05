/**
 * Modelo para Enviar Peticiones a La API
 */

export class RequestCommitsModels {

    // Propiedad privada que almacena el nombre de la librería.
    private libreria: string;

    // Propiedad privada que almacena la cantidad de repositorios.
    private cantidadRepo: number;

    /**
     * Constructor de la clase RequestCommitsModels.
     * @param {string} libreria - Nombre de la librería.
     * @param {number} cantidadRepo - Cantidad de repositorios.
     */
    constructor(libreria: string, cantidadRepo: number) {
        // Inicializa las propiedades con los valores proporcionados al constructor.
        this.libreria = libreria;
        this.cantidadRepo = cantidadRepo;
    }

    /**
     * Método getter para obtener el nombre de la librería.
     * @returns {string} - Nombre de la librería.
     */
    getLibreria(): string {
        return this.libreria;
    }

    /**
     * Método setter para establecer el nombre de la librería.
     * @param {string} value - Nuevo valor para el nombre de la librería.
     */
    setLibreria(value: string) {
        this.libreria = value;
    }

    /**
     * Método getter para obtener la cantidad de repositorios.
     * @returns {number} - Cantidad de repositorios.
     */
    getCantidadRepo(): number {
        return this.cantidadRepo;
    }

    /**
     * Método setter para establecer la cantidad de repositorios.
     * @param {number} value - Nuevo valor para la cantidad de repositorios.
     */
    setCantidadRepo(value: number) {
        this.cantidadRepo = value;
    }
}

