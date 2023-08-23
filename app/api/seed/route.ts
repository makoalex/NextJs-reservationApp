import { PRICE, PrismaClient } from '@prisma/client';
import { data } from 'autoprefixer';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export async function GET(request: Request) {
  await prisma.item.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.location.deleteMany();
  await prisma.cuisine.deleteMany();

  await prisma.location.createMany({
    data: [{ name: 'oslo' }],
  });
  await prisma.cuisine.createMany({
    data: [{ name: 'indian' }, { name: 'italian' }, { name: 'mexican' }],
  });
  const locations = await prisma.location.findMany();
  const cuisines = await prisma.cuisine.findMany();

  const indianCuisineId =
    cuisines.find((cuisine) => cuisine.name === 'indian')?.id || 1;
  const mexicanCuisineId =
    cuisines.find((cuisine) => cuisine.name === 'mexican')?.id || 1;
  const italianCuisineId =
    cuisines.find((cuisine) => cuisine.name === 'italian')?.id || 1;
  const osloLocationId =
    locations.find((location) => location.name === 'oslo')?.id || 1;

  await prisma.restaurant.createMany({
    data: [
      //Indian
      {
        name: '1947 By Gandhi',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-s/25/23/5f/bc/modern-indian-restaurant.jpg',
        price: PRICE.REGULAR,
        description:
          'Vi tilbyr en moderne indisk kulinarisk opplevelse med eventyrlige, autentiske indiske smaker. Vi har sommelier (vinkelner) på huset, som hjelper dere med vin som passer til maten',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-f/2a/0f/af/81/starter.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/2a/0f/af/7e/minimalistic-and-elegant.jpg',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/00/76/de/fire-up-your-taste-buds.jpg?w=700&h=500&s=1',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/00/75/b2/modern-indian-kitchen.jpg?w=1000&h=-1&s=1'
        ],
        openTime: '16:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: '1947-ghandi-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'Der Peppern Gror',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-s/26/92/a2/af/caption.jpg',
        price: PRICE.REGULAR,
        description:
          'Der Pepperen Gror går vi tilbake til røttene. Har du smakt gol gappe, indiske smaksbomber laget av semulina boller, som selges fra traller på gata i India. ',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/0b/da/d2/78/der-peppern-gror.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/09/e3/74/34/foto-monica-stromdahl.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/01/7e/57/caption.jpg',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: ' Der-Pepperen-Gror-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'MANTRA by Mr India',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/56/93/9e/food.jpg?w=1200&h=800&s=1',
        price: PRICE.REGULAR,
        description:
          'En smaksopplevelse rett i hjertet. Når du tror du har smakt det beste av hva India har å by på, bør du ta turen innom oss i Mantra ',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/04/82/18/51/mister-india.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/14/56/92/b7/interior.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/17/2f/83/2c/tandoors-mantra.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/17/2f/83/1f/tandoor-tikkas.jpg',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: 'mantra-indian-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'Spice Rootz',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-s/1b/e9/f2/7d/dessert.jpg',
        price: PRICE.EXPENSIVE,
        description:
          'En kulinarisk reise. Spice Rootz  tilbyr Indisk kvalitetsmat fra Punjab provinsen med crossover mot moderne matlaging og teknikker brukt på flere high-end restauranter og hoteller.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-w/1b/e9/f1/bc/spice-rootz.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1b/e9/f1/ed/pista-kulfi.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/26/9d/38/e5/caption.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/26/9d/38/dc/caption.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/a0/a3/3d/spice-rootz.jpg',
        ],
        openTime: '15:00:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: 'Spice-Rootz-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'New Anarkali',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/9e/a6/c6/20190803-164117-largejpg.jpg?w=1200&h=800&s=1',
        price: PRICE.REGULAR,
        description:
          'Vi ønsker å gi deg en sanseopplevelse som du sent vil glemme. De smaksrike krydderne. De velbalanserte smakene. Dybden av alt det beste som det indiske kjøkkenet har å by på. Velkommen til en kulinarisk reise gjennom India, midt i hjertet av Oslo.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/0d/25/04/67/interior.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/18/9e/a6/c5/20190803-164731-largejpg.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/01/41/17/f4/the-food.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/18/e7/75/1c/mmmmm-mmh.jpg  ',
        ],
        openTime: '14:00:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: 'New-Anarkali-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'Village Tandoori',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e5/9e/7d/village-tandoori.jpg?w=500&h=400&s=1',
        price: PRICE.REGULAR,
        description:
          'Village er en indisk restaurant som representerer det gamle India. Lokalet, atmosfæren, maten og gjestfriheten er inspirert av Punjab-provinsen som idag er delt mellom India og Pakistan, men tidligere tilhørte en nasjonen, India.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/02/e5/9e/ae/village-tandoori.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/02/e5/9e/b2/village-tandoori.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/02/e5/9e/b8/village-tandoori.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/02/e5/9e/d5/village-tandoori.jpg',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: 'Village-Tandoori-cuisine-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'New Ambassadør Restaurant',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/81/cb/eat-drink-and-enjoy.jpg?w=1200&h=800&s=1',
        price: PRICE.REGULAR,
        description: ' Indisk restaurant med fokus på kvalitet i alle ledd',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-f/1a/5d/88/b6/premises.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/11/fd/6d/3a/entrance.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/11/fd/6d/6e/happy-weekend.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/5d/89/92/hhhmmm.jpg',
        ],
        openTime: '15:00:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: ' New-ambassadør-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      {
        name: 'IndiSpice Restaurant',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/5d/ff/d7/bunch-of-starters.jpg?w=1200&h=-1&s=1',
        price: PRICE.REGULAR,
        description:
          'Klar for en spicy opplevelse? Hos Indispice får du alltid ferske råvarer og smakfulle autentisk indiske retter',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-f/21/5d/ff/39/king-prawns.jpg',
          'https://no.tripadvisor.com/Restaurant_Review-g190479-d8004004-Reviews-IndiSpice_Restaurant-Oslo_Eastern_Norway.html#photos;aggregationId=101&albumid=101&filter=7&ff=559808270',
          'https://no.tripadvisor.com/Restaurant_Review-g190479-d8004004-Reviews-IndiSpice_Restaurant-Oslo_Eastern_Norway.html#photos;aggregationId=101&albumid=101&filter=7&ff=559808472',
          'https://no.tripadvisor.com/Restaurant_Review-g190479-d8004004-Reviews-IndiSpice_Restaurant-Oslo_Eastern_Norway.html#photos;aggregationId=101&albumid=101&filter=7&ff=559807751',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: 'indie-spice-oslo',
        locationId: osloLocationId,
        cuisineId: indianCuisineId,
      },
      //Mexican
      {
        name: 'Cielito Oslo',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5f/c9/29/el-cielito-lindo-y-los.jpg?w=900&h=-1&s=1',
        price: PRICE.CHEAP,
        description: 'Lite sted, med autentisk meksikansk mat.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/12/5f/c9/22/ienchiladas-rojas.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/12/5f/c9/27/campechanos.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/12/5f/c9/20/crispy-quesadillas-taste.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/12/5f/c9/30/vitamin-t.jpg',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '21:00:00.000Z',
        slug: 'Cielito-oslo',
        locationId: osloLocationId,
        cuisineId: mexicanCuisineId,
      },
      {
        name: 'Mucho Mas',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-s/12/f2/f8/1f/mucho-mas.jpg',
        price: PRICE.CHEAP,
        description:
          'Mucho mas hadde som mål å bringe California style meksikansk mat til Grünerløkka på en tid da både meksikansk mat og bydelen ennå var ukjent for folk flest. Siden den gang har Mucho Mas vært en vennlig nabolagsrestaurant med god mat og hyggelig atmosfære.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/02/f7/e1/86/mucho-mas.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/16/ed/0f/da/burritos.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-o/07/63/c4/3e/chilaquiles.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/04/7b/80/19/mucho-mas.jpg',
        ],
        openTime: '15:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: 'mucho-mas-oslo',
        locationId: osloLocationId,
        cuisineId: mexicanCuisineId,
      },
      {
        name: "Cartel's Latin American",
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/56/da/94/cartel-s.jpg?w=1200&h=-1&s=1',
        price: PRICE.CHEAP,
        description:
          'Friends! Amigos! Familia! Salsa has taken the next step in it’s journey and become Cartel’s Latin American Kitchen & Bar. We are the same fantastic team, with the same great menu, but starting a new chapter in our story. Cartel’s is a celebration!',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/25/56/db/3e/dining.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/25/56/db/29/nachos.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/25/56/da/b9/nachos-fried-rice-fajitas.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/25/56/db/14/cocktails.jpg',
        ],
        openTime: '15:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: 'Cartel-oslo',
        locationId: osloLocationId,
        cuisineId: mexicanCuisineId,
      },
      {
        name: 'El Camino',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/bf/d5/09/visit-our-brand-new-bar.jpg?w=1200&h=800&s=1',
        price: PRICE.REGULAR,
        description:
          'Nothing beats fast fresh Mexican fare. California is overflowing with taquerias and burrito spots – and we decided that Norway needs ’em too!',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1a/da/0e/d9/a-great-place-to-work.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/18/c6/5d/1e/outside-area.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/1a/da/0e/ad/the-patio-bar-has-a-happy.jpg',
        ],
        openTime: '11:00:00.000Z',
        closeTime: '20:00:00.000Z',
        slug: 'El-camino-oslo',
        locationId: osloLocationId,
        cuisineId: mexicanCuisineId,
      },
      {
        name: 'Freddy Fuego Burrito Bar',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-s/08/74/f8/ff/freddy-fuego.jpg',
        price: PRICE.CHEAP,
        description:
          "At Freddy's we take great pride in our healthy, freshly-made burritos. We only use the freshest of ingredients. We don’t freeze, and we don’t fry. We serve it up fresh and fast in the heart of Oslo.",

        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/08/74/f9/03/freddy-fuego.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/12/c6/b0/cb/slow-cooked-pork-burrito.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-l/0f/f0/1d/b8/photo0jpg.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/0c/02/b3/ad/20160716-135539-largejpg.jpg',
        ],
        openTime: '15:30:00.000Z',
        closeTime: '21:00:00.000Z',
        slug: 'Freddy- fueego-oslo',
        locationId: osloLocationId,
        cuisineId: mexicanCuisineId,
      },
      //Italian
      {
        name: 'Ruffino Ristorante Italiano',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-w/1c/3a/20/ff/bar.jpg',

        price: PRICE.REGULAR,
        description: 'Blant byens meste populære restauranter.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1c/3a/21/02/saletta.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/0a/e3/15/12/20160411-194041-largejpg.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/3a/20/fd/plato.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/3a/21/03/ingresso.jpg',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '21:00:00.000Z',
        slug: 'ruffino-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
      {
        name: 'Basso Social',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1f/e9/ab/basso-social.jpg?w=1200&h=800&s=1',
        price: PRICE.REGULAR,
        description: 'ITALIAN SOCIAL DINING I HJERTET AV OSLO.',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/24/90/7a/01/menu.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/24/90/7c/a3/the-interior.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/24/90/7c/98/private-space.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/24/90/7c/95/the-interior.jpg',
        ],
        openTime: '15:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: 'Basso-Social-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
      {
        name: 'Mangiamo Ristorante & Bar',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9f/df/13/velkommen-til-italia.jpg?w=1200&h=-1&s=1',
        price: PRICE.REGULAR,
        description:
          'Velkommen til vårt lille Italia – midt på Grünerløkka. Våre italienske kokker og serveringspersonale vil gjerne dele sin kjærlighet til italiensk mat med deg, tilberedt med lidenskap og servert med et smil..',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/17/e2/03/45/velkommen-til-var-hyggelige.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/17/a2/61/6f/calzone-classico.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/17/9f/df/b0/deilig-sjomat.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/17/a2/61/74/grillet-lammecarre.jpg',
        ],
        openTime: '16:00:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: 'Mangiamo-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
      {
        name: 'Olivia Aker Brygger',
        mainImage:'https://media-cdn.tripadvisor.com/media/photo-s/0f/8c/78/80/olivia-aker-brygge.jpg',
        price: PRICE.REGULAR,
        description: '... NÆRMERE ITALIA KOMMER DU IKKE',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-f/18/0c/14/78/our-sala-private-houses.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/0f/8c/79/c1/olivia-fireplace.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/11/7d/e8/54/olivia-s-ambition-is.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/18/0c/14/78/our-sala-private-houses.jpg',
        ],
        openTime: '11:00:00.000Z',
        closeTime: '23:00:00.000Z',
        slug: 'Olivia-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
      {
        name: 'Proseccheria Restaurant',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c0/be/8b/try-our-own-import-wines.jpg?w=700&h=500&s=1',
        price: PRICE.REGULAR,
        description:
          'taliensk mat, italiensk drikke og italiensk gjestfrihet er det ssom skal til for å drive en ekte italiensk restaurant',
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/18/fa/b6/18/vongole.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/0b/a5/df/63/limoni-di-capri.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/0b/a5/db/0d/estate-in-proseccheria.jpg',
          'https://www.proseccheria.no/images/banner_1_shv.jpg?crc=295687064',
        ],
        openTime: '11:30:00.000Z',
        closeTime: '22:00:00.000Z',
        slug: 'Proseccheria-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
      {
        name: 'Scarpetta Pasta Bar',
        mainImage:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f5/5a/4a/scarpetta-pasta-bar.jpg?w=800&h=-1&s=1',

        price: PRICE.EXPENSIVE,
        description:
          'Scarpetta Pastabar tilbyr tradisjonelle retter som ravioli, pici, ragu - for å nevne noe - med grande passione for det italienske kjøkkenet. I vår delikatesseavdeling kan du få kjøpt forskjellige typer fersklaget pasta, Sicilianske arancini og basisvarer som olivenolje, ost, skinke og oliven.',

        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/1c/f6/81/3a/arancini.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/f6/81/5b/pizza-fritta.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/f6/81/89/ravioli-tricolore.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/1c/f6/80/e7/foooooood.jpg',
        ],
        openTime: '11:30:00.000Z',
        closeTime: '21:00:00.000Z',
        slug: 'Scarpetta-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
      {
        name: 'Roald & Umberto',
        mainImage:
          'https://media-cdn.tripadvisor.com/media/photo-s/14/1a/e7/73/summer-in-schweigaards.jpg',
        price: PRICE.CHEAP,
        description: 'Et svært hyggelig og autentisk sted som oser av sjarm',

        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/14/1a/f1/85/utvalg-spekemat-og-ost.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/10/3b/b7/4a/our-buffet-include-also.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-f/10/3b/dc/aa/utvalg-spekemat-og-ost.jpg',
          ' https://media-cdn.tripadvisor.com/media/photo-f/10/3b/b6/e2/our-buffet-when-you-reserve.jpg',
        ],
        openTime: '15:30:00.000Z',
        closeTime: '21:00:00.000Z',
        slug: 'Roald&Umberto-cuisine-oslo',
        locationId: osloLocationId,
        cuisineId: italianCuisineId,
      },
    ],
  });
  const restaurants = await prisma.restaurant.findMany();
  const gandhiId =
    restaurants.find((restaurant) => restaurant.name === '1947 By Gandhi')
      ?.id || 1;
  const peppernId =
    restaurants.find((restaurant) => restaurant.name === 'Der Peppern Gror')
      ?.id || 1;
  const mantraId =
    restaurants.find((restaurant) => restaurant.name === 'MANTRA by Mr India')
      ?.id || 1;
  const spiceId =
    restaurants.find((restaurant) => restaurant.name === 'Spice Rootz')?.id ||
    1;
  const anarkaliId =
    restaurants.find((restaurant) => restaurant.name === 'New Anarkali')?.id ||
    1;
  const villageId =
    restaurants.find((restaurant) => restaurant.name === 'Village Tandoori')
      ?.id || 1;
  const ambassadorId =
    restaurants.find(
      (restaurant) => restaurant.name === 'New Ambassadør Restaurant'
    )?.id || 1;
  const indieSpiceId =
    restaurants.find((restaurant) => restaurant.name === 'IndiSpice Restaurant')
      ?.id || 1;
  const cielitoId =
    restaurants.find((restaurant) => restaurant.name === 'Cielito Oslo')?.id ||
    1;
  const muchoMasId =
    restaurants.find((restaurant) => restaurant.name === 'Mucho Mas')?.id || 1;
  const cartelId =
    restaurants.find(
      (restaurant) => restaurant.name === "Cartel's Latin American"
    )?.id || 1;
  const freddyId =
    restaurants.find(
      (restaurant) => restaurant.name === 'Freddy Fuego Burrito Bar'
    )?.id || 1;
  const caminoId =
    restaurants.find((restaurant) => restaurant.name === 'El Camino')?.id || 1;
  const ruffinoId =
    restaurants.find(
      (restaurant) => restaurant.name === 'Ruffino Ristorante Italiano'
    )?.id || 1;
  const bassoId =
    restaurants.find((restaurant) => restaurant.name === 'Basso Social')?.id ||
    1;
  const mangiamoId =
    restaurants.find(
      (restaurant) => restaurant.name === 'Mangiamo Ristorante & Bar'
    )?.id || 1;
  const oliviaId =
    restaurants.find((restaurant) => restaurant.name === 'Olivia Aker Brygger')
      ?.id || 1;

  const proseccheriaId =
    restaurants.find(
      (restaurant) => restaurant.name === 'Proseccheria Restaurant'
    )?.id || 1;
  const scarpettaId =
    restaurants.find((restaurant) => restaurant.name === 'Scarpetta Pasta Bar')
      ?.id || 1;
  const roaldId =
    restaurants.find((restaurant) => restaurant.name === 'Roald & Umberto')
      ?.id || 1;

  await prisma.item.createMany({
    data: [
      {
        name: 'Ghee roast chicken wings',
        description:
          'Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.',
        price: '225 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Sol Kadhi scallop ceviche',
        description: 'Cured scallop served with mangosteen and coconut broth',
        price: '240 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Butte ka kees',
        description:
          'Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers',
        price: '170 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Shaadi Waala Chicken Curry',
        description:
          'Chicken curry usually served in weddings back home (Must Try)',
        price: '260 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Burrata Paapdi Chaat',
        description:
          'Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys',
        price: '285 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Shaadi Waala Chicken Curry',
        description:
          'Chicken curry usually served in weddings back home (Must Try)',
        price: '345 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Shahi Tukda',
        description:
          'Chef’s signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.',
        price: '185 kr',
        restaurantId: gandhiId,
      },
      {
        name: 'Four-In-One Chicken',
        description:
          'Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven',
        price: '285 kr',
        restaurantId: peppernId,
      },
      {
        name: 'Chicken Tikka',
        description:
          'Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven',
        price: '275 kr',
        restaurantId: peppernId,
      },
      {
        name: 'Paneer Tikka',
        description:
          'Tandoori Paneer Tikka is made from homemade cottage cheese which is marinated in yogurt and dry aromatic Indian spices along with diced onions and capsicum and grilled in clay oven',
        price: '$16.99',
        restaurantId: peppernId,
      },
      {
        name: 'Fish Tikka',
        description:
          'Deboned fish marinated in ginger, garlic and other spices and grilled in clay oven',
        price: '295 kr',
        restaurantId: peppernId,
      },
      {
        name: 'Prawn Tandoori',
        description:
          'Large juicy prawn marinated in ginger, garlic, fresh squeezed lemon juice and along with various dry spices and grilled in clay oven',
        price: '285 kr',
        restaurantId: peppernId,
      },
      {
        name: 'Mixed Grill',
        description:
          'Tandoori chicken, lamb tikka, chicken tikka and fish grilled in our clay oven',
        price: '200 kr',
        restaurantId: peppernId,
      },
      {
        name: 'Coconut Curry',
        description:
          'Choice of boneless chicken breast, lamb, beef, fish or shrimp cooked in a creamy coconut, butter and onion sauce',
        price: '285 kr',
        restaurantId: peppernId,
      },
      {
        name: 'Pala Lamb Peralan',
        description: 'tender morsels of lamb in an exotic masala',
        price: '285 kr',
        restaurantId: mantraId,
      },
      {
        name: 'Roasted Salmon In Moilee Sauce',
        description: 'marinated in green mango, spices and roasted',
        price: '285 kr',
        restaurantId: mantraId,
      },
      {
        name: 'Vegetable Aviyal',
        description:
          'assorted vegetables cooked in yoghurt, coconut spiked with cumin',
        price: '$22.00',
        restaurantId: mantraId,
      },
      {
        name: 'Aloo Tiki',
        description:
          'Potato croquette topped with pickled seasonal vegetables and an assortment of chutneys',
        price: '385 kr',
        restaurantId: spiceId,
      },
      {
        name: 'Spicy Lamb Chops',
        description:
          "Lamb chops are coated in a spicy marinade and seared. It's paired with mint chutney, mango chutney, and raita. Allergens: Meat",
        price: '285 kr',
        restaurantId: spiceId,
      },
      {
        name: 'Crispy Shrimp',
        description:
          'Tandoori shrimp wrapped in crispy potato accompanied by a seasonal chutney and micro greens from the garden',
        price: '$295 kr',
        restaurantId: spiceId,
      },
      {
        name: 'Bhaingan Bharta',
        description: 'Smokey eggplant and peas',
        price: '550 kr',
        restaurantId: spiceId,
      },
      {
        name: 'Kofta Curry',
        description:
          'Indian kofta served with bottleneck gourds and potatoes in a cashew coconut sauce',
        price: '335 kr',
        restaurantId: spiceId,
      },
      {
        name: 'murgh salaad',
        description: 'Chicken breast, mix greens, mint vinegar dressing',
        price: '$180 kr',
        restaurantId: anarkaliId,
      },
      {
        name: 'papad ki tokri',
        description: 'Papadams, assorted chutneys & salsa',
        price: '180 kr',
        restaurantId: anarkaliId,
      },
      {
        name: 'khumb korma',
        description:
          'Aged basmati rice, marinated lamb & puff pastry cover, garlic yogurt',
        price: '$360 kr',
        restaurantId: anarkaliId,
      },
      {
        name: 'dal tadka',
        description: 'Yellow lentils, indian tempering',
        price: '$20.00',
        restaurantId: anarkaliId,
      },
      {
        name: 'cocochoco rasmalai cheese cake',
        description:
          'Coconut crémeux, chocolate hazelnut crunch, coconut snow, citrus gel, cardamom ice cream',
        price: '$190 kr',
        restaurantId: anarkaliId,
      },
      {
        name: 'Molasses Braised Beef Cheeks Curry',
        description:
          'Caramelised root vegetables, deggi mirch, buttermilk onion rings',
        price: '$220 kr',
        restaurantId: villageId,
      },
      {
        name: 'Coconut Vatan Stuffed Whole Branzino',
        description: 'Turmeric lemon butter sauce, curry leaves, mustard seeds',
        price: '$390 kr',
        restaurantId: villageId,
      },
      {
        name: 'Goan Chorizo + Braised Pork Shoulder Curry',
        description:
          'Double smoked bacon, roasted parsnips, red kidney beans, apple achar',
        price: '$310 kr',
        restaurantId: villageId,
      },
      {
        name: 'Screech Rum Soaked Gulab Jamun',
        description: 'Whipped mascarpone cream, pistachio crumble',
        price: '190 kr',
        restaurantId: villageId,
      },
      {
        name: 'Ontario Apple + Almond Halwa Tart',
        description: 'Whipped cinnamon malai, red currants',
        price: '$140 kr',
        restaurantId: villageId,
      },
      {
        name: 'Vegetable samosa',
        description: 'Seasoned potatoes and peas wrapped in a light pastry',
        price: '$4.00',
        restaurantId: ambassadorId,
      },
      {
        name: 'Goan fish curry',
        description:
          'Filet of salmon cooked in a traditional hot and tangy coconut curry',
        price: '$15.00',
        restaurantId: ambassadorId,
      },
      {
        name: 'Lamb vindaloo',
        description:
          'A delicacy from Goa - Boneless lamb cooked in a hot, spicy and tangy sauce with potatoes',
        price: '$14.00',
        restaurantId: ambassadorId,
      },
      {
        name: 'Matar paneer',
        description:
          'Cottage cheese and green peas cooked in butter flavored onion and tomato gravy',
        price: '$10.00',
        restaurantId: ambassadorId,
      },
      {
        name: 'Chicken vindaloo',
        description:
          'Chicken cooked with herbs and spices in special hot spicy and tangy sauce with potatoes',
        price: '$14.00',
        restaurantId: ambassadorId,
      },
      {
        name: 'Chicken jalfrezi',
        description:
          'Chicken cooked with delicious mix of green peppers, onions, green chillies and tomatoes',
        price: '$14.00',
        restaurantId: ambassadorId,
      },
      {
        name: 'Lamb Lollipops',
        description: 'grilled chops with turmeric, mint and fenugreek curry',
        price: '$44.00',
        restaurantId: indieSpiceId,
      },
      {
        name: 'Vegan Tikka Masala',
        description: 'tofu, sweet peppers, red onion, tomato and cashew cream',
        price: '$23.00',
        restaurantId: indieSpiceId,
      },
      {
        name: 'Short Ribs',
        description:
          'PEI beef braised with black cumin, cloves, cardamom and fennel seeds',
        price: '$32.00',
        restaurantId: indieSpiceId,
      },
      {
        name: 'Punjabi Chicken Curry',
        description: 'spicy home-style chicken curry',
        price: '$24.00',
        restaurantId: indieSpiceId,
      },
      {
        name: 'Pukka Chaat',
        description:
          'string vegetables, sprouts, rice crisps, pomegranate, mango, green apple, chutneys and yoghurt',
        price: '$16.00',
        restaurantId: indieSpiceId,
      },
      {
        name: 'Fettuccine Pescatore',
        description: 'Scallops, mussels, shrimp and crab meat in a rose sauce',
        price: '$33.00',
        restaurantId: muchoMasId,
      },
      {
        name: 'Colosseo Pizze',
        description:
          "Luciano's spicy Italian sausage, black olives, hot peppers, mozzarella and parmigiano cheeses",
        price: '$22.00',
        restaurantId: muchoMasId,
      },
      {
        name: 'Vitello alla Griglia',
        description:
          'Grilled veal medallion, with seasonal vegetables and potatoes',
        price: '$35.00',
        restaurantId: muchoMasId,
      },
      {
        name: 'Agnello',
        description:
          'Grilled lamb chops in a citrus marinade, with seasonal vegetables and potatoes',
        price: '$35.00',
        restaurantId: muchoMasId,
      },
      {
        name: 'Orata ai Porri',
        description: '$32.00',
        price:
          'Pan seared sea bream filet with sautéed leeks, served over a wild rice medley and greens',
        restaurantId: muchoMasId,
      },
      {
        name: 'Insalata di Mare',
        description:
          'Mixed greens tossed in our house viniagriette, topped with grilled shrimp and crab meat',
        price: '$25.00',
        restaurantId: muchoMasId,
      },
      {
        name: 'Seafood Molcajete',
        description: 'Grilled calamari, morita garlic shrimp, octopus',
        price: '$23.00',
        restaurantId: cielitoId,
      },
      {
        name: 'Sirloin Steak & Tuetano Osso Buco',
        description:
          'Bone marrow, slow cooked in the oven, topped with our seasoning',
        price: '$26.00',
        restaurantId: cielitoId,
      },
      {
        name: 'Fajitas',
        description:
          'A sizzling bed of onions and bell peppers topped with your choice of protein',
        price: '$17.50',
        restaurantId: cielitoId,
      },
      {
        name: 'Tartare de Thon',
        description:
          'Soja Yuzu, piment serrano [Hot Hamachi, Yuzu soy, Serrano pepper]',
        price: '$24.00',
        restaurantId: caminoId,
      },
      {
        name: 'Tataki de Saumon',
        description:
          "Purée d'avocat, chili soja [Tuna Tartar, Avocado puree, Chili soy]",
        price: '$27.00',
        restaurantId: caminoId,
      },
      {
        name: 'Hamachi',
        description:
          'Ponzu à la truffe, truffe noire râpée [Salmon Tataki, Truffle ponzu, Shaved black truffle]',
        price: '240 kr',
        restaurantId: caminoId,
      },
      {
        name: 'El Pollo Pachanga - Juicy Chicken',
        description:
          'Tender chicken marinated in chillies, herbs and spices. Comes with Mexican rice, healthy black beans, roasted peppers and onions, cheese, sour cream, and one of our fresh regional salsas',
        price: '199 kr',
        restaurantId: freddyId,
      },
      {
        name: 'El Clásico - Tender Beef',
        description:
          "Select cuts of quality Strøm Larsen beef marinated in Freddy's secret blend of spices and chillies.",
        price: '220 kr',
        restaurantId: freddyId,
      },
      {
        name: 'Cochinita Pibil Burrito',
        description:
          'Strøm Larsen supplied pork, slow-cooked overnight in a marinade of achiote, citrus fruits and cinnamon. The burrito is made with coriander and onions.',
        price: '220 kr',
        restaurantId: freddyId,
      },
      {
        name: 'El Veggie Verde - Vegetarian',
        description:
          'Veggie burrito with roasted sweet potato, red peppers and onions, healthy black beans, cheese, sour cream, and one of our fresh regional salsas. (no rice).',
        price: '185 kr',
        restaurantId: freddyId,
      },
      {
        name: 'El Puerco Picante - Succulent Pork',
        description:
          "Succulent pork marinated in Freddy's famous blend of dried whole chilies. Comes with Mexican rice, black beans, roasted peppers, coriander, onions, cheese, sour cream, and one of our fresh regional salsas.",
        price: '199kr',
        restaurantId: freddyId,
      },

      {
        name: 'PASTOR',
        description:
          'Marinated shaved pork, pineapple, red onion dice, cilantro, salsa verde, corn tortilla',
        price: '$23.00',
        restaurantId: cartelId,
      },
      {
        name: 'COCHINITA PIBIL',
        description:
          'Achiote rubbed pork, black bean puree, pickled red onion, cilantro, habanero salsa',
        price: '$23.00',
        restaurantId: cartelId,
      },
      {
        name: 'Roasted Butternut Squash Ravioli',
        description:
          'Gorgonzola, Balsamic Reduction, Brown Butter, Crispy Sage',
        price: '235 kr',
        restaurantId: ruffinoId,
      },
      {
        name: 'Pan Seared Atlantic Salmon',
        description:
          'Heirloom Carrots, Green Beans, Parsnip Puree, Beluga Lentils & Barley, Chive Oil',
        price: '230 kr',
        restaurantId: ruffinoId,
      },
      {
        name: 'Woodfire Grilled 12oz AAA Ribeye',
        description:
          'Heirloom Carrots, Green Beans, Sweet Potato Gratin, Mushroom Veal jus',
        price: '350 kr',
        restaurantId: ruffinoId,
      },
      {
        name: 'Pizzoccheri di Teglio',
        description:
          'Homemade short buckwheat Pasta coated in three-cheese sauce, savoy cabbage, potatoes, butter and sage',
        price: '$240 kr',
        restaurantId: oliviaId,
      },
      {
        name: 'Gnocchi al Gorgonzola',
        description: 'Fresh homemade Gnocchi served in a blue cheese sauce',
        price: '230 kr',
        restaurantId: oliviaId,
      },
      {
        name: 'Risotto ai Funghi',
        description: 'Aironi Carnaroli risotto served with mushrooms',
        price: '260 kr',
        restaurantId: oliviaId,
      },
      {
        name: 'Spezzatino con Polenta',
        description:
          'Traditional Northern Italian Specialty. Slow-cooked feef stew, cooked in tomato sauce and red wine reduction, served over soft polenta',
        price: '250 kr',
        restaurantId: oliviaId,
      },
      {
        name: 'Pizzoccheri di Teglio',
        description:
          'Homemade short buckwheat Pasta coated in three-cheese sauce, savoy cabbage, potatoes, butter and sage',
        price: '$240 kr',
        restaurantId: bassoId,
      },
      {
        name: 'smoked pork breast with blasmaic glaze and corn',
        description:
          'Homemade por dish coated in a swet balsamic glaze, and minty corn',
        price: '$200 kr',
        restaurantId: bassoId,
      },
      {
        name: 'Cnocchi browned butter artichoke chips',
        description:
          'fried gnocchi with brown butter, sage mascarpone cream and artichoke chips',
        price: '$220 kr',
        restaurantId: bassoId,
      },
      {
        name: 'Bolognese',
        description: ' homemade tagliatelle bolognese',
        price: '189 kr',
        restaurantId: mangiamoId,
      },
      {
        name: 'Arrabbiata',
        description: ' Linguini with nduja kapers and olives alla arrabiata',
        price: '195 kr',
        restaurantId: mangiamoId,
      },
      {
        name: 'Bistecca',
        description:
          ' served ith truffel baked potatoes seasonal vegetables and red wine reduction',
        price: '299 kr',
        restaurantId: mangiamoId,
      },
      {
        name: 'Poletto',
        description:
          ' baked marinated small chicken with mustard and honey, served with arrabiata sauce and baked potatoes',
        price: '289 kr',
        restaurantId: mangiamoId,
      },
      {
        name: 'Tagliatelle al pesto',
        description:
          'Fresh made tagliatelle with basilica, pecorino chesse, parmesan cheese, garlic, olive oil,',
        price: '285 kr',
        restaurantId: proseccheriaId,
      },
      {
        name: 'Ravioli porcini',
        description:
          ' Homemade ravioli with mushroom, crispy bacon, cream sauce & parmesan cheese',
        price: '285 kr',
        restaurantId: proseccheriaId,
      },
      {
        name: 'pasta alla scoglio',
        description:
          ' Fresh pasta with mussels, white wine sauce, chilli, garlic,tomatosauce',
        price: '280 kr',
        restaurantId: proseccheriaId,
      },
      {
        name: 'Pappardelle al ragu Piemontese',
        description: 'Long pasta with pork and beef ragù',
        price: '330 kr',
        restaurantId: scarpettaId,
      },
      {
        name: 'Tubini salsiccia,  ricotta e friarielli',
        description: 'short pasta with salsiccia, ricotta and friariell',
        price: '330 kr',
        restaurantId: scarpettaId,
      },
      {
        name: 'Tonno peperoni e marmellata di cipolla',
        description: 'Light grilled tuna, roasted bell pepper, onion marmalade',
        price: '420 kr',
        restaurantId: scarpettaId,
      },
      {
        name: 'Salsiccia al sugo e polenta',
        description: 'Salsiccia in tomato sauce served with polenta',
        price: '300 kr',
        restaurantId: scarpettaId,
      },
      {
        name: "Bucatini all'matriciana",
        description:
          'Long pasta with Amatriciana sauce with guanciale and pecorino cheese',
        price: '210 kr',
        restaurantId: roaldId,
      },
      {
        name: 'Rigatoni alla Bartinli',
        description:
          'Chicken, guanciale, chilli , mushrooms,tomatoes, garlic with a creamy parmesan sauce',
        price: '200 kr',
        restaurantId: roaldId,
      },
      {
        name: 'Rigatoni pollo e curcuma',
        description:
          'Rigatoni pasta with chicken,red paprika,turmeric wiith cream sauce',
        price: '220 kr',
        restaurantId: roaldId,
      },
    ],
  });
  return new Response('hello');
}
