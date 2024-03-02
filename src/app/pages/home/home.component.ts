import { Component, OnInit } from '@angular/core';
export interface Card {
  id: number,
  label: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [
    { description: "Descubra a liberdade do desempenho portátil com nossos notebooks de última geração. Com processador poderoso, tela vibrante e armazenamento amplo, eles proporcionam uma experiência imersiva e eficiente. Ideal para trabalho, estudo e entretenimento, este notebook é a escolha perfeita para acompanhar seu estilo de vida dinâmico.", label: "Notebook", id: 1, image: "assets/images/notebook.jpg" },
    { description: "Experimente a perfeição tecnológica com nossos dispositivos iOS. Com design elegante, desempenho veloz e uma infinidade de recursos inovadores, eles são a combinação ideal de estilo e funcionalidade. Navegue pela interface intuitiva, desfrute de aplicativos poderosos e capture momentos incríveis com a câmera de alta qualidade. Seja para trabalho, diversão ou criatividade, os dispositivos iOS elevam sua experiência a um novo nível.", label: "iOS", id: 1, image: "assets/images/iphone.png" },
    { description: "Explore a versatilidade e a liberdade com nossos dispositivos Android. Com uma ampla seleção de marcas e modelos, você encontrará o dispositivo perfeito para atender às suas necessidades. Desfrute de uma interface personalizável, uma infinidade de aplicativos disponíveis na loja Google Play e recursos avançados que o mantêm conectado e produtivo. Seja você um entusiasta de jogos, um profissional ocupado ou um amante da fotografia, os dispositivos Android oferecem a flexibilidade e a potência que você procura.", label: "Android", id: 1, image: "assets/images/android.jpg" },
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
