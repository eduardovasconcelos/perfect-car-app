import { Cliente } from "./cliente";
import { Mercadoria } from "./mercadoria";

export interface OrdemServico {
    id: number;
    client: Cliente;
    mercadoria: Mercadoria
    price: number;
}