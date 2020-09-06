export interface Role{
    name:string;
    description:string;
}

export interface Psychologist{
    fullName:string;
    practiceNo:string;
    hPCSANo:string;
    practiceTitle:string;
}

export interface Centre{
    name:string;
    location:string;
    psychologistsCount:number;
    employeesCount:number;
}