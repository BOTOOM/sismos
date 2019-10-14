import { Injectable } from '@angular/core';

@Injectable()

export class TopnewsService {

    private topnews: Topnews_card[] = [
        {
            titulo: "ACM-IMS Data Science Summit",
            img: "https://materializecss.com/images/sample-1.jpg",
            descripcion: "ACM and the Institute of Mathematical Statistics held the ACM-IMS Interdisciplinary Summit on the Foundations of Data Science on June 15, 2019 in San Francisco.",
        },
        {
            titulo: "ACM Updates Code of Ethics",
            img: "https://materializecss.com/images/office.jpg",
            descripcion: "ACM recently updated its Code of Ethics and Professional Conduct. The revised Code of Ethics addresses the significant advances in computing technology since the 1992 version, as well as the growing pervasiveness of computing in all aspects of society.",
        },
        {
            titulo: "Bringing You the World’s Computing Literature",
            img: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg",
            descripcion: "The most comprehensive collection of full-text articles and bibliographic records covering computing and information technology includes the complete collection of ACM's publications.",
        }
    ]

    constructor() { }

    getTopnews() {
        return this.topnews;
    }

}

export interface Topnews_card {
    titulo: string;
    img: string;
    descripcion: string;
    //fecha: ?
}
