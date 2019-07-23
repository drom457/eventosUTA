export class Conferencia{
    constructor(
        public documento_identificacion:string,
        public f_h_inicio:Date,
        public f_h_fin:Date,
        public titulo:string,
        public descripcion:string,
        public nombre:string,
        public ubicacion:string,        
        public coord_x:number,
        public coord_y:number,
        public expositor:string
    ) {
        
    }
}