export class Uzumaki {
	private static instance: Uzumaki;

	private constructor() {
		console.log('Chegou o clã principal pro Jãozin!');
	}

	public static getInstance(): Uzumaki {
		if(!Uzumaki.instance) {
			Uzumaki.instance = new Uzumaki();
		}

		return Uzumaki.instance;
	}
}