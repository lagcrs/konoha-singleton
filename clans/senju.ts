export class Senju {
	private static instance: Senju;

	private constructor() {}

	public static getInstance(): Senju {

		if(!Senju.instance) {
			Senju.instance = new Senju();
		}

		return Senju.instance;
	}

	public main(): any {
		let senju = console.log('» Clã Fundador Senju criado.');
		return senju;
	}
}