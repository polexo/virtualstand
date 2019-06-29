export class Circuit{
    title: string;
    image: string;
    description: string;

    public static fromJson(json){
        let circuit = new Circuit();
        circuit.title = json["title"]["rendered"];
        circuit.image = json["_embedded"]["wp:featuredmedia"][0]["source_url"];
        
        circuit.description = json["content"]["rendered"];

        return circuit;
    }
}

export class Slide{
    title: string;
    image: string;
    description: string;
    
    public static fromJson(json){
        let slide = new Slide();
        slide.title = json["title"]["rendered"];
        slide.image = json["_embedded"]["wp:featuredmedia"][0]["source_url"];
        slide.description = json["content"]["rendered"];
        return slide;
    }
}


export interface Job{
    title: string;
    image: string;
    description: string;
    id: string;
}