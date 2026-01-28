    export class Carro {
        public id: string;
        public modelo: string;
        public cor: string;
        public ano: number;
        public placa: string;
        public disponibilidade: boolean;

            constructor(id: string,modelo: string,cor: string,ano: number,placa: string) {
                this.id = id;
                this.modelo = modelo;
                this.cor = cor;
                this.ano = ano;
                this.placa = placa;

                this.disponibilidade = true; 
            }
    }



    export class Aluguel  {
        public idAluguel: string;
        public idCarro: string;
        public idUsuario: number;
        public inicioContrato: Date;
        public finContrato: Date;
        public valorPago: number;

            constructor(idAluguel: string, idCarro: string, idUsuario: number,fimContrato: Date) {
                this.idAlugel = idAluguel;
                this.idCarro = idCarro;
                this.idUsuario = idUsuario;
                this.finContrato = fimContrato;

            
                this.inicioContrato = new Date();
                this.valorPago = 0;            
            }
    }
