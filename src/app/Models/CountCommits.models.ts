//Modelo para La cantidad de Commits Semanales por repositorio
export class CountCommitsModels {

    // Propiedad privada que almacena el número total de commits.
    private All: number[];

    // Propiedad privada que almacena el número de commits del propietario.
    private Owner: number[];

    /**
     * Constructor de la clase CountCommitsModels.
     * @param {number} all - Número total de commits.
     * @param {number} owner - Número de commits del propietario.
     */
    constructor(all: number[], owner: number[]) {
        // Inicializa las propiedades con los valores proporcionados al constructor.
        this.All = all;
        this.Owner = owner;
    }

    /**
     * Método getter para obtener el número total de commits.
     * @returns {number} - Número total de commits.
     */
    get all(): number[] {
        return this.All;
    }

    /**
     * Método setter para establecer el número total de commits.
     * @param {number} value - Nuevo valor para el número total de commits.
     */
    set all(value: number[]) {
        this.All = value;
    }

    /**
     * Método getter para obtener el número de commits del propietario.
     * @returns {number} - Número de commits del propietario.
     */
    get owner(): number[] {
        return this.Owner;
    }

    /**
     * Método setter para establecer el número de commits del propietario.
     * @param {number} value - Nuevo valor para el número de commits del propietario.
     */
    set owner(value: number[]) {
        this.Owner = value;
    }
}
