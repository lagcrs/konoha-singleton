import { Senju } from "./clans/senju";
import { Uchiha } from "./clans/uchiha";

type Konoha = {
	name: void,
	uchiha: string,
	senju: string,
	hyuga?: string,
	nara?: string,
}

function konoha(): Konoha {
	const nameVillage = console.log('【 Vila Oculta da Folha 】 \n');

	const uchihaClan: Uchiha = Uchiha.getInstance();
	const senjuClan: Senju = Senju.getInstance()

	return {
		name: nameVillage,
		uchiha: uchihaClan.main(),
		senju: senjuClan.main()
	}
}

konoha();