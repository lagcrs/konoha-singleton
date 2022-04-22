export class Hyuga {

	private static instance: Hyuga;

	private constructor() { 
		console.log('Clã Hyuga criado!')
	};

	public static getInstance(): Hyuga {
		if(!Hyuga.instance) {
			Hyuga.instance = new Hyuga();
		}
		return Hyuga.instance;
	}

	public getMembers(): string[] {
		const members = ['Hinata', 'Neji'];
		console.log(members);
		return members;
	} 
}