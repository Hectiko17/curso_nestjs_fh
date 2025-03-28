export class Consoles {
public id: number;
public name: string;

constuctor(id:number,name:string){

    this.id=id;
    this.name=name;
    console.log("constructor llamado")
}

}
export const ps5= new Consoles(5,"ps5")