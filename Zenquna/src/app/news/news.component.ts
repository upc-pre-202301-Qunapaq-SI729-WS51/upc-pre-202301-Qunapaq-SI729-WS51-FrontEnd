import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  posts: any[] = [
    {
      fecha: new Date(),
      user: "Yasmin Carrión",
      avatar: "https://i0.wp.com/serranojaimeconsultores.com/wp-content/uploads/2018/03/ong-2.jpg?fit=1024%2C682&ssl=1",
      text: "Las intensas lluvias registradas en la costa norte y central del Perú, ocasionadas por el ciclón Yaku, han dejado hasta el momento más de 12 mil damnificados de acuerdo con el Instituto Nacional de Defensa Civil. Conoce aquí los diferentes puntos de acopio de donaciones en Lima y provincias.",
      img: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/03/16/000941884W.jpg",
      link: "https://andina.pe/agencia/noticia-ciclon-yaku-lugares-acopio-donaciones-lima-y-provincias-932970.aspx"
    },
    {
      fecha: new Date("01/05/2023"),
      user: "Paola Barrantes",
      avatar: "https://quesignifica.club/wp-content/uploads/ong.jpg",
      text: "Distintos municipios, empresas y ciudadanos de todo el Perú se vienen uniendo para juntar toda la ayuda posible para los más necesitados por las fuertes lluvias del ciclón Yaku.",
      img: "https://www.infobae.com/new-resizer/HkQ_eHK-146XHeuAopdqd_mGtNg=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/6IG5D2Q2MFHALBMQMMKSJ2O7CM.jpg",
      link: "https://www.infobae.com/peru/2023/03/17/huaicos-en-peru-conoce-los-puntos-de-acopio-de-donaciones-en-lima-y-provincias-para-damnificados/"
    }
  ];
  latestNews: any[] = [
    {
      title: "Perú Da La Mano",
      description: "Campaña en alianza con el Grupo RPP,  busca ayudar a las familias afectadas por las inundaciones y huaicos que vienen ocurriendo en nuestro país, a través de alimentos no perecibles, materiales de construcción, artículos de higiene, ropa y calzado nuevos.",
      img: "https://f.rpp-noticias.io/2017/03/23/370998peru-da-la-manojpg.jpg",
    }
  ];

}
