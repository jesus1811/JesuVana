import { Movie } from './model/Movie.model';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Rick and Morty',
    description:
      'Rick and Morty" es una serie de animación para adultos que sigue las aventuras de un científico loco, Rick Sánchez, y su ingenuo nieto, Morty Smith. Viajando por el multiverso, la pareja se enfrenta a peligrosos extraterrestres, dimensiones alternativas y problemas familiares, todo mientras lidian con sus propios defectos y problemas emocionales. La serie es conocida por su humor negro, su inteligencia y su exploración de temas complejos como la existencia, la realidad y la moralidad.',
    image:
      'https://occ-0-4104-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdMUNdcbQh_S_Ctn0Gc67G-8Hl8Uaw4tNcrGEGGrT_VWlv2M-rHbMbtgOKO2XJa-U637bRfWv_IMgSQEhTkFlUZtWB8fW5mDeZQU.webp?r=9b9',
    episodes: [
      {
        title: 'Episode 1',
        description: 'description test',
        image:
          'https://occ-0-4104-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdMUNdcbQh_S_Ctn0Gc67G-8Hl8Uaw4tNcrGEGGrT_VWlv2M-rHbMbtgOKO2XJa-U637bRfWv_IMgSQEhTkFlUZtWB8fW5mDeZQU.webp?r=9b',
        number: 1,
        season: 1,
        movie:
          'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x01.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3',
      },
      {
        title: 'Episode 2',
        description: 'description test',
        image:
          'https://occ-0-4104-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdMUNdcbQh_S_Ctn0Gc67G-8Hl8Uaw4tNcrGEGGrT_VWlv2M-rHbMbtgOKO2XJa-U637bRfWv_IMgSQEhTkFlUZtWB8fW5mDeZQU.webp?r=9b',
        number: 2,
        season: 1,
        movie:
          'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x02.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3',
      },
      {
        title: 'Episode 3',
        description: 'description test',
        image:
          'https://occ-0-4104-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdMUNdcbQh_S_Ctn0Gc67G-8Hl8Uaw4tNcrGEGGrT_VWlv2M-rHbMbtgOKO2XJa-U637bRfWv_IMgSQEhTkFlUZtWB8fW5mDeZQU.webp?r=9b',
        number: 3,
        season: 1,
        movie:
          'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x03.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3',
      },
    ],
  },
  // {
  //   id: 2,
  //   title: 'Avatar',
  //   description:
  //     'La trama se desarrolla en el año 2154, en un futuro en el que la humanidad ha agotado los recursos de la Tierra y busca un nuevo planeta habitable en una luna llamada Pandora.',
  //   image:
  //     'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  // },
];
