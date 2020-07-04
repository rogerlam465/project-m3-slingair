const reservations = [
  {
    id: '88a33c23-3332-4ef2-bd71-be7a6430485f',
    flight: 'SA666',
    seat: '4D',
    clientId: '0e4be532-562b-462a-b5fe-ffc5329ec0c8'
  },
];

// ok. We're going to create a specific users array
// each user will have a unique UUID
// and then we can go back and replace name/email data
// in the reservations array with the user UUID
// nice.

const clients = [
  {
    id: '0e4be532-562b-462a-b5fe-ffc5329ec0c8',
    givenName: 'Marty',
    surname: 'McFly',
    email: 'marty@backfuture.com'
  },
  {
    id: '702460d4-df26-4577-9b29-1a1164c75db1',
    givenName: 'Adrianne',
    surname: 'Huhta',
    email: 'loskot@nuduldic.call'
  },
  {
    id: '651c6c68-b3f4-4254-8217-6d8f38d8ca06',
    givenName: 'Latoya',
    surname: 'Uhlenhopp',
    email: 'mihor@ubzik.gmx'
  },
  {
    id: '139c1e2a-8ca8-4f77-9646-0f12494bf1f1',
    givenName: 'Alva',
    surname: 'Obarr',
    email: 'zana@ojbe.bid'
  },
  {
    id: 'de3014f8-899c-4695-8140-4f327bc73e75',
    givenName: 'Isidro',
    surname: 'Mclelland',
    email: 'civ@zicife.host'
  },
  {
    id: '22e80e14-7e35-40aa-b7d7-9e5e5eef39bf',
    givenName: 'Chante',
    surname: 'Terrill',
    email: 'woz@hifsovec.foodnetwork'
  },
  {
    id: '506ac3db-8b67-4924-96cb-55bed1dd9e30',
    givenName: 'Brad',
    surname: 'Ellingham',
    email: 'rajku@ved.skin'
  },
  {
    id: 'b478863f-232c-42a6-a21d-4dba792d7d31',
    givenName: 'Jenise',
    surname: 'Gouty',
    email: 'ke@vuiniefi.ابوظبي'
  },
  {
    id: '29c5c259-6eb9-4e99-9087-61cba53730ec',
    givenName: 'Franklyn',
    surname: 'Leukhardt',
    email: 'emgel@evel.reliance'
  },
  {
    id: '800dc021-b243-413f-bd81-754c3686f984',
    givenName: 'Hilton',
    surname: 'Dimariano',
    email: 'si@gumci.plumbing'
  },
  {
    id: '64203995-7fca-41b7-bdea-26ac0d65c234',
    givenName: 'Elvina',
    surname: 'Illiano',
    email: 'hil@jivsem.ntt'
  },
  {
    id: '24e3dc3d-36cf-4da6-bddb-023043ef0d04',
    givenName: 'Galen',
    surname: 'Maleonado',
    email: 'sec@dien.mv'
  },
  {
    id: '1ee8f89b-0f2b-4635-be68-c0b7a62cfe74',
    givenName: 'Hoyt',
    surname: 'Tei',
    email: 'kep@ha.gives'
  },
  {
    id: '8b9c1913-c818-440c-b0ab-4c8f2f93e82d',
    givenName: 'Kraig',
    surname: 'Beman',
    email: 'ravowdij@lidimlo.հայ'
  },
  {
    id: '5dc94cf2-a83a-4de1-b11b-4348da587769',
    givenName: 'Fernando',
    surname: 'Crantz',
    email: 'favi@dedoj.fire'
  },
  {
    id: '272e002b-4b40-4a09-97af-d459f15efec9',
    givenName: 'Miquel',
    surname: 'Agudelo',
    email: 'larditic@jelzod.crs'
  },
  {
    id: '3678bc89-0b83-47e7-b6dd-2c31318352d7',
    givenName: 'Bella',
    surname: 'Stilwell',
    email: 'cez@meronmor.rest'
  },
  {
    id: 'e542592c-4f52-4979-b3a1-7e69f1a256dc',
    givenName: 'Henry',
    surname: 'Macmullan',
    email: 'ko@wapakewo.photos'
  },
  {
    id: '63f10133-25b7-4799-b280-8bd931d32bde',
    givenName: 'Arlie',
    surname: 'Butterworth',
    email: 'aldiget@ehofoawo.kiwi'
  },
  {
    id: '59c9fbe3-2e25-491f-a16d-34c046fab3f4',
    givenName: 'Fredricka',
    surname: 'Michioka',
    email: 'ekuwe@hidof.xfinity'
  },
  {
    id: '405cb8ed-8985-43ea-bfc3-1b2b6a1bcdad',
    givenName: 'Julianne',
    surname: 'Schaap',
    email: 'raecir@tepile.慈善'
  },
  {
    id: '0e2e6f1b-8e54-4ddd-8ef7-997d06ab0a4e',
    givenName: 'Ezekiel',
    surname: 'Zapanta',
    email: 'gingu@pupikubi.pl'
  },
  {
    id: 'fc7ff49e-d5fd-4e08-9bb8-bd0bc791642e',
    givenName: 'Nicky',
    surname: 'Weyer',
    email: 'regu@lepitzon.amsterdam'
  },
  {
    id: '88e007c1-efb5-424f-a9a6-04bd836e8c07',
    givenName: 'Merrie',
    surname: 'Hickman',
    email: 'bizcuodi@lotda.iveco'
  },
  {
    id: 'ce7614f4-cf7b-4518-b528-88aa2f8c6d7c',
    givenName: 'Waltraud',
    surname: 'Bastidos',
    email: 'cucep@cefi.glade'
  },
  {
    id: '2ccf4380-639c-4608-a58a-f684d7eb205d',
    givenName: 'Pamella',
    surname: 'Mcmulen',
    email: 'pacov@nucago.casino'
  },
  {
    id: '07927b11-4017-4972-a50a-3e6456287e44',
    givenName: 'Garret',
    surname: 'Santoro',
    email: 'dali@ujgo.brother'
  },
  {
    id: 'e21d0e72-b026-42c1-ad82-be898dead82d',
    givenName: 'Ha',
    surname: 'Drobot',
    email: 'ce@wire.cool'
  },
  {
    id: 'f475e09d-9478-4166-995e-9fdeb8727dff',
    givenName: 'Willard',
    surname: 'Gilpatrick',
    email: 'barus@erohahow.maserati'
  },
  {
    id: '9b962f41-bea1-4c43-8cd1-30be76ae16e9',
    givenName: 'Esperanza',
    surname: 'April',
    email: 'mawkel@abepemot.bloomberg'
  },
  {
    id: '2a8f1d16-e0ca-46fc-9e62-19de6a66b276',
    givenName: 'Raye',
    surname: 'Haza',
    email: 'derzevnek@onbebjof.aq'
  },
  {
    id: 'b2b30333-7cee-4658-85aa-8559f5b6091a',
    givenName: 'Jeanelle',
    surname: 'Shilt',
    email: 'napopkik@anedisik.中国'
  },
  {
    id: '43611d72-4c4b-4f51-bc0d-a8ba9f41b46b',
    givenName: 'Delmer',
    surname: 'Tharp',
    email: 'kodo@rerkuute.joburg'
  },
  {
    id: 'a7a6eea0-b671-4df9-b9c2-72280faa46d1',
    givenName: 'Jude',
    surname: 'Lanasa',
    email: 'vomo@dulig.ht'
  },
  {
    id: '1089b2a0-8349-48be-92d0-c53a6350c4e9',
    givenName: 'Dannielle',
    surname: 'Morinville',
    email: 'zaci@rede.ice'
  },
  {
    id: 'dd198584-8f3f-49c2-bcd1-b045da8316ce',
    givenName: 'Blythe',
    surname: 'Yamada',
    email: 'zevek@doli.group'
  },
  {
    id: 'afec2c8d-62d9-44bc-ab9b-4a1fc81f690c',
    givenName: 'Golden',
    surname: 'Straker',
    email: 'gokva@rebig.kpn'
  },
  {
    id: '53988ff1-5d07-4580-9e4a-d6f5d59d17f7',
    givenName: 'Ignacio',
    surname: 'Castiola',
    email: 'carjef@ikofes.pf'
  },
  {
    id: 'a9966860-c71a-4e91-b822-b263486015e4',
    givenName: 'Chester',
    surname: 'Kingdom',
    email: 'menej@coiw.lk'
  },
  {
    id: '327eddff-ab32-4d95-8e79-94f336e28e36',
    givenName: 'Terry',
    surname: 'Hoefert',
    email: 'habju@lichic.dell'
  },
  {
    id: '32613b97-fc82-4d73-9873-aa8e603eef32',
    givenName: 'Darcy',
    surname: 'Nault',
    email: 'owowuc@teijo.goldpoint'
  },
  {
    id: 'abf2212e-d033-4b52-9308-afa6a3c64c78',
    givenName: 'Nelly',
    surname: 'Vilcan',
    email: 'lofjef@vik.blog'
  },
  {
    id: 'a5ad2894-6f7f-4246-8eee-3beba8806a91',
    givenName: 'Lacy',
    surname: 'Carullo',
    email: 'pidogava@vo.tjmaxx'
  },
  {
    id: '4a3dd2fa-bfff-4454-924a-0101f3f008e7',
    givenName: 'Beau',
    surname: 'Swinton',
    email: 'mejiwmu@di.com'
  },
  {
    id: 'edc473ce-c6cd-4094-a8a2-958913f976e3',
    givenName: 'Antonio',
    surname: 'Garlock',
    email: 'sadke@verdif.عراق'
  },
  {
    id: '56dfb019-23f1-4c56-8e7d-e3064e48291d',
    givenName: 'Beata',
    surname: 'Brookskennedy',
    email: 'ana@oronawu.gmo'
  },
  {
    id: 'd0105a34-2a41-48bd-a884-24d670540419',
    givenName: 'Jody',
    surname: 'Gackle',
    email: 'vahke@kunoh.comcast'
  },
  {
    id: 'd8f6a95f-e72d-4d8f-9456-987439a4413b',
    givenName: 'Magaly',
    surname: 'Godwyn',
    email: 'tacu@si.fo'
  },
  {
    id: '6b1646ba-3329-4d63-8834-fffcd1ec67c6',
    givenName: 'Hiedi',
    surname: 'Aflalo',
    email: 'asvefin@zovti.catholic'
  },
  {
    id: '33801701-3502-4fa5-bb2c-a2330418477f',
    givenName: 'Isaias',
    surname: 'Sanford',
    email: 'oh@zo.政务'
  },
  {
    id: '3723f1a0-2aaf-4f17-a980-43c12877ca8c',
    givenName: 'Jeanine',
    surname: 'Mckendry',
    email: 'saupi@moome.中国'
  },
  {
    id: 'fd09a51e-c57b-4795-8272-7f25ba414f23',
    givenName: 'Levi',
    surname: 'Romandia',
    email: 'raziw@fejne.link'
  },
  {
    id: '23a9c358-48c3-4821-ae00-0298c8908482',
    givenName: 'Clemencia',
    surname: 'Docherty',
    email: 'kenji@puti.is'
  },
  {
    id: 'f0fceb5c-1963-450d-b6b9-e21358b87101',
    givenName: 'Laurence',
    surname: 'Doyel',
    email: 'vihonan@firek.hangout'
  },
  {
    id: '41236a88-887a-424e-bfd6-8068dcfdf3fe',
    givenName: 'Stevie',
    surname: 'Yanuaria',
    email: 'tit@em.football'
  },
  {
    id: '41d33007-3e85-4f46-978e-16945edc2247',
    givenName: 'Eliseo',
    surname: 'Roby',
    email: 'aphos@lef.nr'
  },
  {
    id: '06dc391c-87af-42d7-8cd5-4ab05f26a7bf',
    givenName: 'Florentino',
    surname: 'Omdahl',
    email: 'ni@joikgoh.passagens'
  },
  {
    id: 'cd4b3e9e-bb68-4bac-9f78-25dc10b0a2e6',
    givenName: 'Jerold',
    surname: 'Jablonsky',
    email: 'zithibro@jiniv.cpa'
  },
  {
    id: '13d87f93-aaa7-4dd8-9ea1-9b66853e10a5',
    givenName: 'Ginette',
    surname: 'Deland',
    email: 'teil@rasabi.caseih'
  },
  {
    id: '56e37444-0ccc-4156-9075-71932d6cefbd',
    givenName: 'Jamal',
    surname: 'Lunemann',
    email: 'merjisak@zezegha.intel'
  },
  {
    id: 'e3f0b285-45a5-42d6-b897-b99e8510e99b',
    givenName: 'Mose',
    surname: 'Dorin',
    email: 'kofuiji@bodde.mv'
  },
  {
    id: 'cf5d2f17-001e-491a-b7e7-456b4835f1bd',
    givenName: 'Lester',
    surname: 'Ostlund',
    email: 'junif@poden.se'
  },
  {
    id: '11036d0c-4e6a-4fd8-a26f-f3fa62b25100',
    givenName: 'Delcie',
    surname: 'Pujals',
    email: 'reegfo@sape.theater'
  },
  {
    id: '9ecc5aae-374e-4933-bb79-e03adcadc71c',
    givenName: 'Marcelina',
    surname: 'Annis',
    email: 'newcibo@besom.mw'
  },
  {
    id: '3393741d-0e6c-4c52-b0f2-7d20236afefb',
    givenName: 'Eddy',
    surname: 'Reutlinger',
    email: 'esapi@rewih.frontier'
  },
  {
    id: '69a85e26-4c20-498b-9d18-754d1d333a3d',
    givenName: 'Gisela',
    surname: 'Turkmay',
    email: 'no@ojici.holiday'
  },
  {
    id: '86e4ba42-ca2c-44ec-aa51-6927743f4f15',
    givenName: 'Kelley',
    surname: 'Strandberg',
    email: 'vir@ji.contractors'
  },
  {
    id: '50e79cd2-04c0-4749-8f2d-0a9a31b1318b',
    givenName: 'Shalon',
    surname: 'Rokisky',
    email: 'leh@hemsubu.creditunion'
  },
  {
    id: '65337ecb-8788-44a7-9c89-01034ad8fc9f',
    givenName: 'Mario',
    surname: 'Sanke',
    email: 'gu@pito.இந்தியா'
  },
  {
    id: '041b5cd1-0226-4369-a487-f6408c22350f',
    givenName: 'Richie',
    surname: 'Binggeli',
    email: 'pifufu@mokima.goodyear'
  },
  {
    id: '783584e2-4f36-447a-a914-79f353ab7364',
    givenName: 'Bruna',
    surname: 'Falce',
    email: 'wotef@retwir.diamonds'
  },
  {
    id: '7e7326af-1981-4012-afb9-1addfa9ed8ae',
    givenName: 'Trent',
    surname: 'Grivetti',
    email: 'huhor@jomat.sas'
  },
  {
    id: '8ed1382d-84e2-4fda-957c-0d15771fa35c',
    givenName: 'Lanny',
    surname: 'Heggie',
    email: 'pefa@teb.photography'
  },
  {
    id: 'f3a468be-d035-4fdd-bfaa-255987db6bcb',
    givenName: 'Eugene',
    surname: 'Wise',
    email: 'fobu@cabu.law'
  },
  {
    id: '74496029-f840-40bc-a02b-4df857146919',
    givenName: 'Bertram',
    surname: 'Yerger',
    email: 'wuwo@iciese.boutique'
  },
  {
    id: '1e13b418-1ad4-4a3e-8d0f-0ca79357fded',
    givenName: 'Tracy',
    surname: 'Lothrop',
    email: 'konmo@ani.zone'
  },
  {
    id: '9d734c33-91f9-4e98-9ab2-f3d5ece7e763',
    givenName: 'Noemi',
    surname: 'Pruiett',
    email: 'vohoj@zewifiza.yachts'
  },
  {
    id: 'e3aac7c1-a724-48e5-9705-ebbed060497d',
    givenName: 'Wade',
    surname: 'Yamaguchi',
    email: 'am@rewdapdo.nc'
  },
  {
    id: '0165783a-a704-427d-97dd-28243cf69281',
    givenName: 'Williams',
    surname: 'Dukas',
    email: 'cartoz@iloicji.aaa'
  },
  {
    id: '840e747a-4f63-4792-8766-1b201d03a45c',
    givenName: 'Jammie',
    surname: 'Bekele',
    email: 'jivi@napginre.airtel'
  },
  {
    id: '06e34c62-ef84-4b7f-a562-163d3874523f',
    givenName: 'Jonathan',
    surname: 'Wingfield',
    email: 'afrehoc@ki.channel'
  },
  {
    id: '4dacfca0-350d-4b53-bee4-a45174e9ffde',
    givenName: 'Marcell',
    surname: 'Empie',
    email: 'hijmusvoj@gopojavo.dnp'
  },
  {
    id: 'c6f1c0b5-83b9-4a54-a679-ed05a780bc06',
    givenName: 'Janell',
    surname: 'Milare',
    email: 'vo@ovgiw.catering'
  },
  {
    id: 'b1bcc5ab-3512-49c5-a974-61b7e756eefe',
    givenName: 'Monique',
    surname: 'Kluka',
    email: 'hedenodi@rubaac.weatherchannel'
  },
  {
    id: '4f110c37-d6d1-4cf2-b04e-80167b53c10f',
    givenName: 'Cleotilde',
    surname: 'Misiak',
    email: 'vopo@pokib.ricoh'
  },
  {
    id: '62706e16-7e5e-4e72-8262-a77c8bfb87d3',
    givenName: 'Reinaldo',
    surname: 'Speyrer',
    email: 'wecden@ko.bt'
  },
  {
    id: '609a69f0-6dfa-4517-963b-40e02119cf51',
    givenName: 'Fredrick',
    surname: 'Kilcullen',
    email: 'oce@anokubok.foodnetwork'
  },
  {
    id: '0e19125a-af9d-4634-ba28-4ea52d236927',
    givenName: 'Becki',
    surname: 'Sama',
    email: 'elaowce@necvo.walmart'
  },
  {
    id: '96aa5131-966e-48ed-ae81-1f7c90da2794',
    givenName: 'Julianne',
    surname: 'Obyrne',
    email: 'ja@fewmih.tech'
  },
  {
    id: '271a15ed-60eb-4cf2-a401-3024c3da38ac',
    givenName: 'Oscar',
    surname: 'Avita',
    email: 'regin@zaftoti.ss'
  },
  {
    id: '9da6a0c7-4bd3-410a-9589-bdf0943ddb52',
    givenName: 'Margorie',
    surname: 'Difede',
    email: 'pecilkeg@gikze.citadel'
  },
  {
    id: 'cd157fab-b1a5-4713-ba7b-4d2fdc7ff034',
    givenName: 'Lee',
    surname: 'Goebel',
    email: 'tohvep@wobik.jetzt'
  },
  {
    id: 'bf0d3441-6a56-4aeb-89c2-38ac2cb05fc5',
    givenName: 'So',
    surname: 'Demien',
    email: 'verig@migev.channel'
  },
  {
    id: '2cf6c9c1-5158-45ef-b595-ebe4dda08662',
    givenName: 'Deadra',
    surname: 'Schug',
    email: 'jarhaj@nifzigpos.ups'
  },
  {
    id: '7b8b939c-e26a-41e7-b6e0-e144ca8299fd',
    givenName: 'Donnie',
    surname: 'Ringenberg',
    email: 'fonek@tifi.cn'
  },
  {
    id: 'bfe5db26-de77-4ad7-95f4-1c4fe2be854f',
    givenName: 'Rick',
    surname: 'Teramoto',
    email: 'wivverap@ewlewle.ps'
  },
  {
    id: '504bd5d1-deae-4969-b818-034f1a8a6d9e',
    givenName: 'Sol',
    surname: 'Masupha',
    email: 'jevapen@ja.ec'
  },
  {
    id: 'd449ffd8-e2cc-4f39-ab8a-501af9b2342e',
    givenName: 'Rosena',
    surname: 'Maholmes',
    email: 'ido@ve.supply'
  },
  {
    id: 'e6279da5-9ce6-4191-9cd6-c8fdb3b5c84a',
    givenName: 'Dawn',
    surname: 'Ogborn',
    email: 'zibhu@ma.cheap'
  },
  {
    id: '65b77ceb-9a0b-4e61-8080-a846f3326685',
    givenName: 'Rebbeca',
    surname: 'Balley',
    email: 'megcev@kevora.ком'
  }
]


module.exports = { reservations, clients };
