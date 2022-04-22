import { Senju } from "./clans/senju";
import { Uchiha } from "./clans/uchiha";
import { Hyuga } from './clans/hyuga';
import { Uzumaki } from './clans/uzumaki';

type Konoha = {
	name: string,
	uchiha: string,
	senju: string,
	hyuga?: string[],
	nara?: string,
}

function konoha(): Konoha {
	const nameVillage = '【 Vila Oculta da Folha 】';
	console.log(nameVillage);

	const uchihaClan: Uchiha = Uchiha.getInstance();
	const senjuClan: Senju = Senju.getInstance();
	const hyugaClan: Hyuga = Hyuga.getInstance();
	Uzumaki.getInstance();
	Uzumaki.getInstance();

	return {
		name: nameVillage,
		uchiha: uchihaClan.getName(),
		senju: senjuClan.main(),
		hyuga: hyugaClan.getMembers()
	}
}

konoha();