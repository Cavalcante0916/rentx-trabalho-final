    export class carro {
        public id: string;
        public modelo: string;
        public cor: string;
        public ano: number;
        public placa: string;
        public valorAlugel: number;
        public disponibilidade: boolean;

            constructor(id: string,modelo: string,cor: string,ano: number,placa: string, valorAlugel: number  ) {
                this.id = id;
                this.modelo = modelo;
                this.cor = cor;
                this.ano = ano;
                this.placa = placa;
                this.valorAlugel = valorAlugel;

                this.disponibilidade = true; 
            }
    }



    export class infoAlugel {
        public idAlugel: string;
        public idcarro: string;
        public idUsuario: number;
        public inicioContrato: Date;
        public finContrato: Date;
        public valorPago: number;

            constructor(idAlugel: string, idcarro: string, idUsuario: number,finContrato: Date) {
                this.idAlugel = idAlugel;
                this.idcarro = idcarro;
                this.idUsuario = idUsuario;
                this.finContrato = finContrato;

            
                this.inicioContrato = new Date();
                this.valorPago = 0;            
            }
    }