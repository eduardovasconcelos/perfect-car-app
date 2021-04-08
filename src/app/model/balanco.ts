import { Despesa } from "./despesa";
import { Receita } from "./receita";

export interface Balanco {
    calculationDate: Date;
	totalPriceReceita: number;
	totalPriceDespesa: number;
	totalPrice: number;
	despesas: Despesa[];
	receitas: Receita[];
}