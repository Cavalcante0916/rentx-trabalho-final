// Importação da entidade Carro.
import { Carro } from "../entities/car";

// Interface que define o contrato do repositório de carros
export interface ICarroRepository {

    // Método pra salvar um carro sem retorno
    salvar(carro: Carro): void;

    // Método que listar todos os carros Retornando um array de Carro.
    listar(): Carro[];
