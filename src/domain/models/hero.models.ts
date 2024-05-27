export interface HeroDTO {
    createdAt: Date;
    name:      string;
    avatar:    string;
    power:     string;
    height:    number;
    id:        string;
}


export interface HeroModel {
    name:      string;
    avatar:    string;
    power:     string;
    height:    number;
    id:        string;
}

export interface HeroDao{
    id: string;
    name : string;
    power: string;
    height: number;
    avatar: string;
}

