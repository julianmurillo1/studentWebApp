


export class Student{
    Username:string;
    Firstname:string;
    Lastname:string;
    Age:number;
    Career:string;
    Id;

    constructor(obj){
        this.Username = obj && obj.Username || null
        this.Firstname =  obj && obj.Firstname || null
        this.Age = obj && obj.Age || null
        this.Career =  obj && obj.Career || null
    }
}

/*

[{
    "Id": 1,
    "Username":"string",
    "Firstname":"string",
    "Lastname":"string",
    "Age":22,
    "Career":"string"
},
{
    "Id": 2,
    "Username":"string",
    "Firstname":"string",
    "Lastname":"string",
    "Age":22,
    "Career":"string"
}
]
 
 */