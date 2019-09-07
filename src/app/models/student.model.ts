


export class Student{
    username:string;
    firstname:string;
    lastname:string;
    age:number;
    career:string;
    id;

    constructor(obj){
        this.username = obj && obj.username || null
        this.firstname =  obj && obj.firstname || null
        this.lastname =  obj && obj.lastname || null
        this.age = obj && obj.age || null
        this.career =  obj && obj.career || null
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