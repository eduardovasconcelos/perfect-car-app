import { Cliente } from "./cliente";
import { Mercadoria } from "./mercadoria";

export interface OrdemServico {
    id: number;
    client: Cliente;
    mercadorias: Mercadoria[];
    totalPrice: number;
    created: string;
}