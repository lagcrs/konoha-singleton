export class Uchiha {

	/** POO
	 * instance:objeto cujo comportamento e estado são definidos pela classe
	 * static: precisa de uma instância da classe para poder acessar
	 * constructor: define ações que devem ser executadas quando instanciar o objeto
	*/

	// guarda a instância única
	private static instance: Uchiha;

	//proibir que outras classes criem novas instâncias de Uchiha (construtor privado)
	private constructor() {}

	// método para acessar a instância única
	public static getInstance(): Uchiha {

		if(!Uchiha.instance) {
			Uchiha.instance = new Uchiha();
		}

		return Uchiha.instance;
	}

	// business logic
	public main(): any {
		let uchiha = console.log('» Clã Fundador Uchiha criado.');
		return uchiha;
	}
}