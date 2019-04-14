import { SalesConsultant } from './sales-consultant'
import { Arquiteto } from './arquiteto'
import { Note } from './note'
export class Poc {

    public codigoOpp:string;
    public valorOpp:number;
    public dataAbertura:Date;
    public dataFechamento:Date;
    public sponsor:string;
    public vendedor:string;
    public manager:string;
    public arquiteto:Arquiteto;
    public scs:SalesConsultant[];
    public notes:Note[];
}
