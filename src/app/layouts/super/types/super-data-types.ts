export interface Role{
    id:number;
    name:string;
    description:string;
}

export interface Psychologist{
    id:number;
    fullName:string;
    practiceNo:string;
    hpcsaNo:string;
    practiceTitle:string;
}

export interface Centre{
    id:number;
    name:string;
    location:string;
    psychologistsCount:number;
    employeesCount:number;
}

export interface SubSystem{
    id:number;
    name:string;
    privileges:Array<Operation>;
}
export interface Operation{
    id:number;
    name:string;
}