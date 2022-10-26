import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.clube.createMany({
    data: [
      {
        nome: 'ÁGUIAS DA AMÉRICA',
        codigo: '13357',
        pais: 'NEPAL',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/aguias_da_america.png',
      },
      {
        nome: 'ALFA DO ARAGUAIA',
        codigo: '13167',
        pais: 'VENEZUELA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/alfa_do_araguaia.png',
      },
      {
        nome: 'AMANTES DA NATUREZA',
        codigo: '13088',
        pais: 'ANGOLA',
        regiao: 'MÉDIO NORTE - AZUL - ÁFRICA',
        ativo: true,
        logo: 'dbv/amantes_da_natureza.png',
      },
      {
        nome: 'AMÉRICA DO SUL',
        codigo: '13058',
        pais: 'CATAR',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/america_do_sul.png',
      },
      {
        nome: 'AMIGOS DO PARAISO',
        codigo: '13090',
        pais: 'ARÁBIA SAUDITA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/amigos_do_paraiso.png',
      },
      {
        nome: 'ARAUTOS DO REI',
        codigo: '13301',
        pais: 'MÉXICO',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/arautos_do_rei.png',
      },
      {
        nome: 'CENTRO AMÉRICA',
        codigo: '13050',
        pais: 'ISAREL',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/centro_america.png',
      },
      {
        nome: 'CONSTELAÇÃO DE ÓRION',
        codigo: '24899',
        pais: 'MALÁSIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/constelacao_de_orion.png',
      },
      {
        nome: 'CONSTELAÇÃO DO SUL',
        codigo: '13094',
        pais: 'SÍRIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/constelacao_do_sul.png',
      },
      {
        nome: 'CRUZEIRO DO SUL',
        codigo: '13052',
        pais: 'JAPÃO',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/cruzeiro_do_sul.png',
      },
      {
        nome: 'DUQUE',
        codigo: '13122',
        pais: 'POLÔNIA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/duque.png',
      },
      {
        nome: 'ESTRELA DE DAVI',
        codigo: '13201',
        pais: 'PANAMÁ',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/estrela_de_davi.png',
      },
      {
        nome: 'EXÉRCITO DO SENHOR',
        codigo: '13232',
        pais: 'JAMAICA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/exercito_do_senhor.png',
      },
      {
        nome: 'FALCÃO NEGRO',
        codigo: '13244',
        pais: 'ROMÊNIA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/falcao_negro.png',
      },
      {
        nome: 'FERAS DO ARAGUAIA',
        codigo: '13170',
        pais: 'REPUBLICA DOMINICANA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/feras_do_araguaia.png',
      },
      {
        nome: 'GUARDIÕES DA FÉ',
        codigo: '13181',
        pais: 'MIANMAR',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/guardioes_da_fe.png',
      },
      {
        nome: 'GUARDIÕES DA MORADA',
        codigo: '21026',
        pais: 'TAILÂNDIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/guardioes_da_morada.png',
      },
      {
        nome: 'GUARDIÕES DE ISRAEL',
        codigo: '30358',
        pais: 'NOVA ZELÂNDIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/guardioes_de_israel.png',
      },
      {
        nome: 'GUARDIÕES DO ARAGUAIA',
        codigo: '13138',
        pais: 'ESTADOS UNIDOS',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/guardioes_do_araguia.png',
      },
      {
        nome: 'GUARDIÕES DO ÉDEN',
        codigo: '13102',
        pais: 'EGITO',
        regiao: 'MÉDIO NORTE - AZUL - ÁFRICA',
        ativo: true,
        logo: 'dbv/guardioes_do_eden.png',
      },
      {
        nome: 'GUARDIÕES DO RIO VERDE',
        codigo: '13171',
        pais: 'MARROCOS',
        regiao: 'MÉDIO NORTE - AZUL - ÁFRICA',
        ativo: true,
        logo: 'dbv/guardioes_do_rio_verde.png',
      },
      {
        nome: 'GUARDIÕES DO VALE',
        codigo: '17453',
        pais: 'PERU',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/guardioes_do_vale.png',
      },
      {
        nome: 'GUERREIROS DO VALE',
        codigo: '46204',
        pais: 'COSTA RICA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/guerreiros_do_vale.jpeg',
      },
      {
        nome: 'HERÓIS',
        codigo: '13158',
        pais: 'IRLANDA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/herois.png',
      },
      {
        nome: 'LEÃO DA MONTANHA',
        codigo: '13110',
        pais: 'LÍBANO',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/leao_da_montanha.png',
      },
      {
        nome: 'LEÃO DE JUDÁ',
        codigo: '13363',
        pais: 'VIETNÃ',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/leao_de_juda.png',
      },
      {
        nome: 'LOBOS DO CERRADO',
        codigo: '22564',
        pais: 'COREIA DO SUL',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/lobos_do_cerrado.png',
      },
      {
        nome: 'LUZEIROS DO LESTE',
        codigo: '18166',
        pais: 'BÉLGICA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/luzerios_do_leste.png',
      },
      {
        nome: 'MAANAIM',
        codigo: '26567',
        pais: 'DINAMARCA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/maanaim.png',
      },
      {
        nome: 'MARECHAL RONDON',
        codigo: '13235',
        pais: 'CAZAQUISTÃO',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/marechal_rondon.png',
      },
      {
        nome: 'MENSAGEIROS',
        codigo: '21024',
        pais: 'ÁFRICA DO SUL',
        regiao: 'MÉDIO NORTE - AZUL - ÁFRICA',
        ativo: true,
        logo: 'dbv/mensageiros.png',
      },
      {
        nome: 'MENSAGEIROS DE CRISTO',
        codigo: '13197',
        pais: 'SUÍÇA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/mensageiros_de_cristo.png',
      },
      {
        nome: 'PEDRA ANGULAR',
        codigo: '13145',
        pais: 'PORTUGAL',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/pedra_angular.png',
      },
      {
        nome: 'PEDRAS PRECIOSAS',
        codigo: '13224',
        pais: 'INDONÉSIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/pedras_preciosas.png',
      },
      {
        nome: 'PÉGASUS',
        codigo: '13137',
        pais: 'BOLÍVIA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/pegasus.png',
      },
      {
        nome: 'PIONEIROS DO ARAGUAIA',
        codigo: '13141',
        pais: 'CHILE',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/pioneiros_do_araguaia.png',
      },
      {
        nome: 'PRIMAVERA',
        codigo: '13144',
        pais: 'ITÁLIA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/primavera.png',
      },
      {
        nome: 'SENTINELAS DO ARAGUAIA',
        codigo: '45881',
        pais: 'URUGUAI',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/sentinelas_do_araguaia.png',
      },
      {
        nome: 'SERRA AZUL',
        codigo: '13123',
        pais: 'CANADÁ',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/serra_azul.png',
      },
      {
        nome: 'SÍRIUS',
        codigo: '13148',
        pais: 'ÍNDIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/sirius.png',
      },
      {
        nome: 'SÍRIUS DO ARAGUAIA',
        codigo: '13142',
        pais: 'EQUADOR',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/sirius_do_araguaia.png',
      },
      {
        nome: 'TRIBO DE JUDÁ',
        codigo: '13139',
        pais: 'ARGENTINA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/tribo_de_juda.png',
      },
      {
        nome: 'VERDES CAMPOS',
        codigo: '13111',
        pais: 'GRÈCIA',
        regiao: 'SUL - VERMELHO - EUROPA',
        ativo: true,
        logo: 'dbv/verdes_campos.png',
      },
      {
        nome: 'VIGILANTES DA CHAPADA',
        codigo: '13059',
        pais: 'AUSTRÁLIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/vigilantes_da_chapada.png',
      },
      {
        nome: 'VOO LIVRE',
        codigo: '13195',
        pais: 'GUATEMALA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        ativo: true,
        logo: 'dbv/voo_livre.png',
      },
      {
        nome: 'ZENITH',
        codigo: '13124',
        pais: 'IRAQUE',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        ativo: true,
        logo: 'dbv/zeneth.png',
      },
      {
        nome: 'ABELHINHAS',
        pais: 'ARGENTINA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '25583',
        logo: 'avt/abelhinhas.png',
      },
      {
        nome: 'ESTRELINHAS',
        pais: 'PORTUGAL',
        regiao: 'SUL - VERMELHO- EUROPA',
        codigo: '13200',
        logo: 'avt/estrelinhas.png',
      },
      {
        nome: 'ESTRELINHAS DE JESUS',
        pais: 'IRAQUE',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '41457',
        logo: 'avt/estrelinhas_de_jesus.png',
      },
      {
        nome: 'FALCÃO KIDS',
        pais: 'NORUEGA',
        regiao: 'SUL - VERMELHO- EUROPA',
        codigo: '28398',
        logo: 'avt/falcao_kids.png',
      },
      {
        nome: 'GRANDES COMO DAVI',
        pais: 'JAPÃO',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '34372',
        logo: 'avt/grandes_como_davi.png',
      },
      {
        nome: 'GUARDIÕES DA BÍBLIA',
        pais: 'MÉXICO',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '43727',
      },
      {
        nome: 'HEROIZINHOS',
        pais: 'RÚSSIA',
        regiao: 'SUL - VERMELHO- EUROPA',
        codigo: '13186',
        logo: 'avt/heroizinho.png',
      },
      {
        nome: 'LEÃO DA MONTANHA KIDS',
        pais: 'CHINA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '13190',
        logo: 'avt/leao_da_montanha_kids.png',
      },
      {
        nome: 'MARCHANDO PARA O CÉU',
        pais: 'COSTA RICA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '13299',
        logo: 'avt/marchando_para_ceu.png',
      },
      {
        nome: 'PANTANAL KIDS',
        pais: 'POLÔNIA',
        regiao: 'SUL - VERMELHO- EUROPA',
        codigo: '13127',
      },
      {
        nome: 'PEQUENINA LUZ',
        pais: 'TURQUIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '13125',
        logo: 'avt/pequenina_luz.png',
      },
      {
        nome: 'PEQUENINOS DO REI',
        pais: 'PERU',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '13136',
        logo: 'avt/pequeninos_do_rei.png',
      },
      {
        nome: 'PEQUENOS CONSTRUTORES',
        pais: 'EGITO',
        regiao: 'MÉDIO NORTE - AZUL - ÁFRICA',
        codigo: '14330',
        logo: 'avt/pequenos_construtores.png',
      },
      {
        nome: 'PEQUENOS GUARDIÕES DO CÉU',
        pais: 'CUBA',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '17395',
        logo: 'avt/pequenos_guardioes_do_ceu.png',
      },
      {
        nome: 'PRIMAVERA',
        pais: 'ITÁLIA',
        regiao: 'SUL - VERMELHO- EUROPA',
        codigo: '13185',
        logo: 'avt/primavera.png',
      },
      {
        nome: 'QUERUBINS DO CÉU',
        pais: 'CANADÁ',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '13335',
        logo: 'avt/querubins_do_ceu.png',
      },
      {
        nome: 'SERRA AZUL KIDS',
        pais: 'CHILE',
        regiao: 'ARAGUAIA - VERDE - AMÉRICAS',
        codigo: '15065',
        logo: 'avt/serra_azul_kids.png',
      },
      {
        nome: 'TUIUIU',
        pais: 'ÍNDIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '13096',
        logo: 'avt/tuiuiu.png',
      },
      {
        nome: 'TURMINHA DA MORADA',
        pais: 'ISRAEL',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '13355',
        logo: 'avt/turminha_da_morada.png',
      },
      {
        nome: 'VIGILANTES DA CHAPADA JR',
        pais: 'AUSTRÁLIA',
        regiao: 'CUIABÁ - AMARELO - ÁSIA E OCEANIA',
        codigo: '22356',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.usuario.createMany({
    data: [
      {
        codigo: '4042026',
        nome: 'ALESSANDRO GONÇALVES BUENO',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147870',
        nome: 'ALEXSANDRO MESQUITA SOUSA DE ARAUJO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042057',
        nome: 'ALICE VITORIA SCHMIDT MUNIZ BRENTANO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042031',
        nome: 'AMANDA ALMEIDA DA COSTA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042059',
        nome: 'ANA CAROLINA SCHMIDT MUNIZ BRETANO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042032',
        nome: 'ANA KAROLINA SOUSA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147874',
        nome: 'ANA LUIZA RAMOS BORGES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042034',
        nome: 'ANA LUÍZA LINDENMAYR DA SILVA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042035',
        nome: 'ANA LÍVIA RAMOS DE SOUZA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042036',
        nome: 'ANDREIA SILVA BRITES RIBEIRO',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042038',
        nome: 'ANNA LUIZA MOREIRA PENTEADO',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4066563',
        nome: 'BIBIANA TOMÉ SALAMONI',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042039',
        nome: 'ELIEZER JANDIR ANÇAY RODRIGUES',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4077865',
        nome: 'ELISANGELA CARLOS RAMALHO',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4227131',
        nome: 'ERNANDES COELHO GUIMARÃES',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042040',
        nome: 'FERNANDA MENDES DE NOVAIS',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042041',
        nome: 'FRANCISCA ADRIANA BARBOSA RAMOS',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4186306',
        nome: 'FRANCISCA JOYCE RAMOS BENICIOS',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042043',
        nome: 'GABRIELA ALMEIDA DA COSTA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042045',
        nome: 'GILVANA OLIVEIRA PEREIRA VIEIRA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147875',
        nome: 'GISELE SOARES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147877',
        nome: 'GUILHERME PEREIRA DE ARAUJO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042046',
        nome: 'HIAGO SILVA MILNIKEL',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4068037',
        nome: 'IAN GABRIEL FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042047',
        nome: 'IASMIN OLIVEIRA ZANDONÁ',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042049',
        nome: 'IASMIN SILVA MILINKEL',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4122351',
        nome: 'ISABELA DE OLIVEIRA GOMES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042051',
        nome: 'JAIR LORENZON',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147879',
        nome: 'JEFFERSON SOUSA SANTOS',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147880',
        nome: 'JESSICA SOARES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042053',
        nome: 'KAYKI LINO FERREIRA ALCANTARA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042055',
        nome: 'KEMILLY ELISABETTE SILVA SANTOS',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042056',
        nome: 'LEUDIANE PEREIRA DA SILVA MILNIKEL',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043190',
        nome: 'LIDIO FERNANDES DA SILVA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042019',
        nome: 'LUCIENE BONIFÁCIO DOS SANTOS',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4068030',
        nome: 'LUIS OTAVIO FIGUEIRO KULMANN',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043196',
        nome: 'LUIZ FELIPE ZAMBENEDETTI ALVES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043197',
        nome: 'LUIZ FERNANDO RODRIGUES VALADARES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043201',
        nome: 'MARIA EDUARDA AVRELLA DA SILVA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4068035',
        nome: 'MARIA EDUARDA RODRIGUES TEIXEIRA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4130602',
        nome: 'MARIA LUIZA FERREIRA DE MORAES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4147882',
        nome: 'MARIA VICTORIA RAMOS BORGES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043206',
        nome: 'MARYEL LIMA SILVA',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4067936',
        nome: 'MARYON ALVES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043211',
        nome: 'MATHEUS HENRIQUE DANTAS CELESTINO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043216',
        nome: 'MATHEUS OLIVEIRA GALVAO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042020',
        nome: 'MAURA RODRIGUES DOS SANTOS VASCONCELOS',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043217',
        nome: 'MILENA FERNANDES DE NOVAIS',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043220',
        nome: 'NEIDA JOANA LINDENMAYER',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043221',
        nome: 'NEUSA DE ALMEIDA MOURÃO SANTOS',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043225',
        nome: 'NITCHELLY BRITES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4042061',
        nome: 'PAULO RICARDO SCHMIDT MUNIZ BRENTANO',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4066560',
        nome: 'PEDRO HENRIQUE BONIFÁCIO DA SILVA',

        funcao: 'diretoria',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043226',
        nome: 'PRISCILA GEHM',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043227',
        nome: 'RAFAEL DE SOUZA CORANDINI',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4067996',
        nome: 'RAYANDERSON ARAÚJO DA SILVA',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043229',
        nome: 'SABRINA TOMAZ BUENO',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4068032',
        nome: 'SORAYA SOPHIA BARROS BASTOS RODRIGUES',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043231',
        nome: 'THAMIRYS LOPES TOMÉ',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4043235',
        nome: 'THAYNARA LOPES TOMÉ',

        funcao: 'desbravador',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4186299',
        nome: 'THIAGO MARTINS DUARTE',

        funcao: 'apoio',
        clubeId: 2,
        password: 'senha',
      },
      {
        codigo: '4132591',
        nome: 'ANA BEATRIZ BABUGIA VENANCIO',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4204445',
        nome: 'ANNA LUIZA OLIVAIRA LOURENÇO',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132600',
        nome: 'BERNARDO DE FARIA MELO',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132814',
        nome: 'BRUNA MARIANA DOS SANTOS',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132685',
        nome: 'CAUAN PEREIRA RICARDI',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4204443',
        nome: 'CESAR AUGUSTO DA SILVA COSTA',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132688',
        nome: 'CHRYSTIAN KENZO UENO MORI',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132692',
        nome: 'DANIELLY ARAUJO DE SOUZA',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132696',
        nome: 'DYRLE ALVES DE OLIVEIRA',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132607',
        nome: 'EDUARDA DE JESUS PIRES',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132813',
        nome: 'ELINEIDE DE SOUZA BARBOSA NEIVA DE AQUINO',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132610',
        nome: 'EMILLY NATHALY DE ALMEIDA DAMBROS',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132612',
        nome: 'FELIPE FAGUNDE SILVA',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132700',
        nome: 'FELYPE RODRIGUES FIALHO',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132614',
        nome: 'FRANCISCO ASSIS ARAÚJO SILVA',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132615',
        nome: 'GABRIELA SANTOS SALMENTO',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132703',
        nome: 'GUILHERME FARIA DA SILVEIRA',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132616',
        nome: 'GUSTAVO DA COSTA NOGUEIRA GUEDES',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132668',
        nome: 'HYAN GABRIEL GONÇALVES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132624',
        nome: 'JADER LUCAS GODOI PILLER',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132704',
        nome: 'JAQUELINE FAXINA CARDOSO',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4205974',
        nome: 'JOSE ANTONIO FARIAS',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132706',
        nome: 'KAROLINY ARAÚJO SILVA',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132708',
        nome: 'KIMBERLLY LUIZE PILLER',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4204442',
        nome: 'LINDOSMAR OLIVEIRA CARDOSO',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132633',
        nome: 'MARCO ANTONIO RABELO PILLER',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132636',
        nome: 'MARCOS VINÍCIUS DE ALMEIDA LIMA',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132642',
        nome: 'MAYSA KAORI VENO MORI',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132648',
        nome: 'MELL KIMBERLY SANCHES',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132660',
        nome: 'PEDRO FAYMESON BARBOSA MEDEIROS',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132709',
        nome: 'RAFAEL JUNIOR PEREIRA',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132715',
        nome: 'RHAYSSA LHORRAINNY DA SILVA MARQUES',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132674',
        nome: 'SARAH BEATRIZ DIAS RIBEIRO',

        funcao: 'desbravador',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4189780',
        nome: 'SIRLENE DIAS DE SOUZA',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4189781',
        nome: 'TANIA MARIANA DA SILVA',

        funcao: 'apoio',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4132711',
        nome: 'THIAGO FELIPE PALMEIRA MARTINS',

        funcao: 'diretoria',
        clubeId: 3,
        password: 'senha',
      },
      {
        codigo: '4201738',
        nome: 'ANA PAULA JESUS PEREIRA',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4201915',
        nome: 'ANDREIA PEREIRA LIMA',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048603',
        nome: 'ANNA JÚLIA FERREIRA BARROS GANDES',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048605',
        nome: 'ANNY GABRIELY MORAES DOS REIS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4128563',
        nome: 'DANILO BORGES BELÉM',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4060743',
        nome: 'GISLAYNY LIMA NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048609',
        nome: 'GUILHERME FERREIRA DE ALMEIDA',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4201917',
        nome: 'INACIO FLORES DA SILVA',

        funcao: 'apoio',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4189382',
        nome: 'ISABELLY FERREIRA SOARES',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048585',
        nome: 'ISMAEL PEREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048587',
        nome: 'IVANILDO DE LARA SILVA',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4128571',
        nome: 'JANAINA SOUZA CAMPOS',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4201768',
        nome: 'JEAN MARIANO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048611',
        nome: 'KETYLEN EDUARDA DE OLIVEIRA SANTOS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4065815',
        nome: 'LEONARDO FIGUEIREDO DA SILVA',

        funcao: 'apoio',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4201740',
        nome: 'LUIS CLÁUDIO CORREA DE MORAES',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4065810',
        nome: 'LUZIANE MENDES DE ALMEIDA DE JESUS',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4186321',
        nome: 'MARIA BEATRIZ GIMENEZ CABREIRA',

        funcao: 'apoio',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048589',
        nome: 'MARIENE CARLA DA SILVA LARA',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4065817',
        nome: 'MICHELLY BARBOSA DE CAMPOS',

        funcao: 'apoio',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4071287',
        nome: 'NICOLLI LEITE GONÇALVES ARAÚJO',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048613',
        nome: 'NILZA DOS SANTOS DA SILVA',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4060748',
        nome: 'PAULO HENRIQUE SALGADO DOS REIS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048590',
        nome: 'PAULO RICARDO CAMILO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4201739',
        nome: 'PAULO ROBERTO CAMILO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4065811',
        nome: 'PAULO ROBERTO SALGADO DA SILVA',

        funcao: 'diretoria',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048594',
        nome: 'RAISSA EMANUELLEY REIS ALMEIDA',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4189538',
        nome: 'RODRIGO RAMOS DA SILVA',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4201771',
        nome: 'RYAN MARIANO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048596',
        nome: 'SAMUEL PEREIRA DE JESUS',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048598',
        nome: 'SARA ALMEIDA NUNES',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048599',
        nome: 'SOPHIA VITÓRIA MOURA LEITE',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048600',
        nome: 'TAINÁ DE ALMEIDA VIEIRA',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4048602',
        nome: 'WENDER JESUS CARDOSO',

        funcao: 'desbravador',
        clubeId: 5,
        password: 'senha',
      },
      {
        codigo: '4082165',
        nome: 'ANTONIO MARCOS ALVES PINTO',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082171',
        nome: 'CAMILA ROBERTA SOUZA DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082173',
        nome: 'CAMILA VITÓRIA DE SOUZA LUCAS',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082175',
        nome: 'CRISLAINE MESQUITA TAQUES SOBRINHO',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082265',
        nome: 'DANIELA SOUZA DA COSTA',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082177',
        nome: 'DANIELLE SOUZA DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082178',
        nome: 'DANYELLE CARLINDO DE MORAES',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082179',
        nome: 'DEIVID GUSTAVO BRAGA',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082163',
        nome: 'ELTON MÁRCIO DIAS JÚNIOR',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4086473',
        nome: 'ENIS DE JESUS MACEDO',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082215',
        nome: 'ENY FERNANDES DE OLIVEIRA MACEDO',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082222',
        nome: 'FERNANDA NOEMY SILVA BARBOSA',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082219',
        nome: 'GABRIEL VINICIUS SILVA VAVIER',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082196',
        nome: 'GIOVANI MESQUITA TAQUES',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082268',
        nome: 'GLEICE CRISTINA DA SILVA PINTO',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082192',
        nome: 'GUILHERME ALBUQUERQUE CAMPOS',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082203',
        nome: 'HELLEN BEATRIZ  FERNANDES MACEDO',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082170',
        nome: 'HENZO DE MORAES PREZA LIBANIO',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082214',
        nome: 'IRENE PEREIRA DE CAMPOS',

        funcao: 'apoio',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082166',
        nome: 'IVONE SILVA BARBOSA BOTELHO',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082202',
        nome: 'JANAINE TORTORELLI DA SILVA',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082205',
        nome: 'JOSE FELIPE DA SILVA GUSMÃO',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4104459',
        nome: 'KARROLAYNE DA SILVA CARVALHO',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082200',
        nome: 'LARISSA SILVA MACEDO',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082168',
        nome: 'LUIS GUSTAVO VIEIRA LEDIO',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082207',
        nome: 'MARCOS HENRIQUE DA SILVA PINTO',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082190',
        nome: 'NEURIAM GONZAGA JÚNIOR',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082189',
        nome: 'PEDRO LUCAS FERNANDES MACEDO',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082184',
        nome: 'RAFAELA FERNANDES ALBUQUERQUE',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082188',
        nome: 'RAFAELLA DA SILVA ALVES',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082186',
        nome: 'REBECA SOARES ROSA',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082181',
        nome: 'THAILA  AYALA CARVALHO DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4082280',
        nome: 'VITORIA CAROLINE SILVA MARQUES',

        funcao: 'diretoria',
        clubeId: 4,
        password: 'senha',
      },
      {
        codigo: '4149563',
        nome: 'ADEMIR MARCIO KEMPF',

        funcao: 'apoio',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054537',
        nome: 'AMANDA VITÓRIA DANGELO SOARES',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054552',
        nome: 'BRENDA MARIA AGUIAR DA SILVA',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4128057',
        nome: 'BRUNILDA BONI SCHULZ',

        funcao: 'apoio',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054522',
        nome: 'CEZAR VIRGULINO ANACLETO',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054536',
        nome: 'CLARA EMILIA DA SILVA SCHULZ',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054556',
        nome: 'DAFNY FERNANDA BOHRER CARDOSO',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054525',
        nome: 'DANIELE MARELI SCHULZ MIRANDA',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054532',
        nome: 'DHONY DA PAZ PASCOLAR',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054554',
        nome: 'DIEGO DA PAZ PASCOLAR',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4204512',
        nome: 'EMANUELLY MACHADO GABRIEL DA SILVA',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054557',
        nome: 'ERIC NATAN SCHULZ MIRANDA',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4204501',
        nome: 'HUGO SAMUEL DA SILVA SOUZA',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054559',
        nome: 'JOSÉ ROSINAL AKAY MUNDURUKU',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4203651',
        nome: 'KEVIN AUGUSTO DE SOUZA FERREIRA',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054560',
        nome: 'LUAN CARLOS PREHL',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4203654',
        nome: 'MARIA SOPHIA GLIENKA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054565',
        nome: 'MARLENE CLARICE SCHULZ KEMPF',

        funcao: 'apoio',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054531',
        nome: 'NATALIA SCHULZ MIRANDA',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4189443',
        nome: 'RAIANDRA PERES DE ANDRADE FERNANDES',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054534',
        nome: 'RICARDO OTAVIO GHIZONI ANTUNES',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054527',
        nome: 'ROGÉRIO FERREIRA MIRANDA',

        funcao: 'apoio',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054561',
        nome: 'SILVIA PULQUERI ANACLETO',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054563',
        nome: 'THALYSON BOHRER CARDOSO',

        funcao: 'desbravador',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054529',
        nome: 'THAYNARA DIAS',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4054523',
        nome: 'THÁCILA ALINE KEMPF',

        funcao: 'diretoria',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4204565',
        nome: 'WIRES BARBOSA GOMES',

        funcao: 'apoio',
        clubeId: 6,
        password: 'senha',
      },
      {
        codigo: '4127212',
        nome: 'ALEXANDRE DEAR DOS SANTOS SOUZA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063309',
        nome: 'ALICE DOS SANTOS MONTEIRO',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063579',
        nome: 'ALICE SANTOS SILVA SOLA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063587',
        nome: 'ALICIA LIRA MENDES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064257',
        nome: 'ANDERSON DOS SANTOS DE MORAES',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063607',
        nome: 'ANDRÉ LIRA MENDES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064072',
        nome: 'ANNY KAROLYNE MORALECO DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063610',
        nome: 'ARTHUR FIRMO DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063611',
        nome: 'BEATRIZ DE OLIVEIRA BADOTTI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4081917',
        nome: 'CALEB RODRIGUES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063617',
        nome: 'CALEBE ESCOBAR SANTOS DE MORAES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064075',
        nome: 'CLEIA DA SILVA RODRIGUES OLIVEIRA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4133804',
        nome: 'DANIEL ANDREANI',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063620',
        nome: 'DANIEL VIEIRA GORSKI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064078',
        nome: 'DORAIL SANTANA DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063621',
        nome: 'EDUARDA CAROLINE MOREIRA NEVEZ',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064326',
        nome: 'ELIEZER ZAFFANI',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064401',
        nome: 'ELIZEO DE OLIVEIRA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063624',
        nome: 'EMANUELLY MUSSATO SOARES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063626',
        nome: 'ENZO TASSARO CASTRO',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064081',
        nome: 'ERICK SCHALM',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064085',
        nome: 'ESTER ESCOBAR SANTOS DE MORAES',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4190761',
        nome: 'ESTEVAN LOESCHKE ROSA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063634',
        nome: 'ESTHER DOS REIS BARBOSA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063636',
        nome: 'FABRICIO NASCIMENTO DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063639',
        nome: 'FELIPE DO VALE FERNANDES SOARES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063643',
        nome: 'FERNANDO BRAGHIN MANTOVANI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063674',
        nome: 'GABRIELY PRADO NUNES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064393',
        nome: 'GEAZI ZAFFANI',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064099',
        nome: 'GETULIO FERREIRA DA COSTA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064101',
        nome: 'GILSON LARA BARBOSA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4190768',
        nome: 'GIULIA SILVA PANIAGO',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064396',
        nome: 'GLORIA CHRISTA FLOR PHIDOR',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064109',
        nome: 'GUALBERTO MARTINS',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4127217',
        nome: 'GUILHERME ALEXANDRE DOS SANTOS SOUZA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063693',
        nome: 'HELENA SILVA BULHÕES NEIVA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063709',
        nome: 'ISABELA CAMARA CAMPOS',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063722',
        nome: 'JOÃO DANIEL SEGALA GONÇALVES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063737',
        nome: 'JOÃO PEDRO BATISTA GUMS BELCHÓ',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4081918',
        nome: 'KAROLINE SCHREIBER',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063743',
        nome: 'LAURIANY MAIA DE A. COSTA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064312',
        nome: 'LENNA DO VALE CASTILHO',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063753',
        nome: 'LEONARDO JORGE LUCHESI CRESTANI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064428',
        nome: 'LOVE LEARLIE ESPERANZA PHILDOR',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063757',
        nome: 'LUCAS DOS SANTOS FERREIRA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063765',
        nome: 'LUCAS GABRIEL DE SOUZA CAMPOS',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063770',
        nome: 'LUDYMILA OLIVEIRA BITTNER',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063775',
        nome: 'LUIZ GUSTAVO PUERTAS ALVES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064115',
        nome: 'MAICON DA SILVA NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063779',
        nome: 'MARCELO DA SILVA NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4190771',
        nome: 'MARCOS JOSE DO NASCIMENTO',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4127206',
        nome: 'MARIA CLARA BITTENCOURT CARVALHO',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063794',
        nome: 'MARIA LUIZA SANTOS SILVA SOLA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064296',
        nome: 'MARILAINE OLIVEIRA DA SILVA NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063802',
        nome: 'MATEUS DUARTE ZAVIASKY',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063809',
        nome: 'MATHEUS MARQUES PERES',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063817',
        nome: 'MAX DAVI KRUGER',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063821',
        nome: 'MIGUEL VIEIRA GORSKI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063825',
        nome: 'MIRELA CRISTINA BRAZ ALMEIDA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4127219',
        nome: 'MÁRCIO DA SILVA NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064128',
        nome: 'OSIEL MENDES DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063929',
        nome: 'RAFAELA BEZERRA CAPILÉ',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063939',
        nome: 'RAQUEL COLETA ZAFANNI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063945',
        nome: 'REBECA SIVA ZAFFANI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064133',
        nome: 'RENATO GORSKI',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063951',
        nome: 'ROBERTO DE ARAUJO CRUZ JR',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4081919',
        nome: 'ROSENI PRADO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063953',
        nome: 'RUBENS RODRIGUES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063956',
        nome: 'SAMUEL DE PAULA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063959',
        nome: 'SARAH LOPES MORAES BERGAMINI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064143',
        nome: 'SAULO ANANIAS DE OLIVEIRA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064150',
        nome: 'SOLANGE SILVA ROCHA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4063961',
        nome: 'SONIA COSTA MARQUES DE ARRUDA ANDREANI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064024',
        nome: 'SÂMIA GRABRIELLE SILVA DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064028',
        nome: 'VALENTIM LUCHESI CRESTANI',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064157',
        nome: 'VANESSA PRADO NASCIMENTO MARTINS',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064029',
        nome: 'WEVERTON ARAUJO BRASIL SANTOS',

        funcao: 'desbravador',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4064266',
        nome: 'WILLIAM CASTILHO DA SILVA',

        funcao: 'apoio',
        clubeId: 7,
        password: 'senha',
      },
      {
        codigo: '4085376',
        nome: 'ADRIANA CHAGAS EDUARDO',

        funcao: 'apoio',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085307',
        nome: 'ADRYAN MARTINS MAGALHAES',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085323',
        nome: 'AMANDA CRISTINA CELESTINA CAMPOS',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4128015',
        nome: 'ANE VITÓRIA SILVA QUEIROZ OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4201295',
        nome: 'ARLENE LUIZA SIQUEIRA PAIXAO',

        funcao: 'apoio',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4204119',
        nome: 'CARLOS EDUARDO SANTOS BARRETO',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4201293',
        nome: 'CLEDEVALDO ARRUDA PAIXAO',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085285',
        nome: 'GABRIEL AFONSO LIMA DA SILVA SANTOS',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085312',
        nome: 'GABRIEL SIQUEIRA PAIXAO',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4203952',
        nome: 'GUILHERME SANTOS BARRETO',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085361',
        nome: 'JOSE PAULO JUNIOR PEREIRA SOUZA',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085290',
        nome: 'MARIA FÁTIMA DE SOUZA ALMEIDA',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4221970',
        nome: 'NATÁLIA VITÓRIA DO NASCIMENTO SOUZA',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085327',
        nome: 'PAULINA PEREIRA DE SOUZA VISNARDI DOS SANTOS',

        funcao: 'apoio',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085295',
        nome: 'SOLANGE SOUZA MARTINS',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4203910',
        nome: 'VICTOR HUGO PAIXÃO',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085300',
        nome: 'WELLINGTON DOS SANTOS MAGALHAES',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085363',
        nome: 'WILLIAN CIRQUEIRA MATIAS',

        funcao: 'diretoria',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '4085352',
        nome: 'YASMIN SOUZA MARTINS',

        funcao: 'desbravador',
        clubeId: 8,
        password: 'senha',
      },
      {
        codigo: '3984002',
        nome: 'AMANDA BEATRIZ SOUZA COSTA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984006',
        nome: 'ANA BEATRIZ ALMEIDA COSTA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984010',
        nome: 'ANA CLARA DE SOUZA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984013',
        nome: 'ANA VITORIA DE SOUSA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984420',
        nome: 'ANDRELINA COSTA LOURENÇO GERALDES',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984022',
        nome: 'ANDRÉ VINICIUS VILLABA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984026',
        nome: 'ANTONIO GABRIEL FARIAS DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984028',
        nome: 'ARTHUR HENRICK OLIVEIRA DO NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984031',
        nome: 'BEATRIZ CASTELLOCARVALHO',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984040',
        nome: 'BRENNO CARLOS DE SOUZA MARTINS',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984041',
        nome: 'CAMILA LINHARES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984046',
        nome: 'CARLOS VITOR DA SILVA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984051',
        nome: 'CRISTINA ANDREIA LINHARES DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4077870',
        nome: 'EDUARDA VITORIA L. S. DOS PASSOS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984058',
        nome: 'EMILCE RODRIGUEZ VILLALBA',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984060',
        nome: 'EVELLIN DA SILVA ALMEIDA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984062',
        nome: 'FERNANDA GABRIELLY GOMES SEREIA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4191927',
        nome: 'GABRIEL ARAUJO RODRIGUES ANDRADE SOUZA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984064',
        nome: 'GABRIEL PIRES DA SILVA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984067',
        nome: 'GABRIELA OLIVEIRA DA SILVA',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984068',
        nome: 'GABRIELA PIRES DA SILVA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984071',
        nome: 'GABRIELLY FERNANDA PEREIRA RIBEIRO',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984073',
        nome: 'GABRIELLY ROSA GOMES',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984076',
        nome: 'GABRIELY DA SILVA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4117648',
        nome: 'GERSON LOPES PEREIRA',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984080',
        nome: 'HELDER MAYLSON OLIVEIRA GONÇALVES',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984084',
        nome: 'HEMANUELY CRISTINY MAGALHÃES ALVES',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984088',
        nome: 'IGOR DE VILLABA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984089',
        nome: 'ISABELY VITÓRIA MAGALHÃES ALVES',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984091',
        nome: 'JANAINA DA SILVA PIMENTEL',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984092',
        nome: 'JAQUELINE DE OLIVEIRA ABREU',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4135441',
        nome: 'JOSE CARLOS DA SILVA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984105',
        nome: 'JULIA GABRIELLY OLIVEIRA ALMEIDA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984107',
        nome: 'JULIANE LOURENÇO  DE BARROS',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984108',
        nome: 'JULIER LOURENÇO  DE BARROS GERALDES',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984111',
        nome: 'JULIO CESAR ABREU DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984112',
        nome: 'KATYLAINE AMANDA DA SILVA PARANHO',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4077881',
        nome: 'KETULI JANAY LOPES DE FREITAS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984114',
        nome: 'LAIANNE LILIAM ROSA SILVA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984118',
        nome: 'LUAINNY THAMMIRYS DE SOUZA DE JESUS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984119',
        nome: 'LUCAS NASCIMENTO SILVA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984437',
        nome: 'LUÍS HENRIQUE CARVALHO DA SILVA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984120',
        nome: 'MAIKE VITOR HUGO DA SILVA LESMO',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984121',
        nome: 'MARIA BRASILINA DA SILVA',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984123',
        nome: 'MARIA EDUARDA FERNANDES SOUZA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984124',
        nome: 'MARIANY CRISTINA DA SOUZA',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984126',
        nome: 'MICHAEL EDUARDO DA SILVA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4192257',
        nome: 'RANYELLI MOURA MARTINS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984128',
        nome: 'ROSALINA FRANCISCA DA SILVA NETA',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984130',
        nome: 'ROSANA ANDREIA LINHARES DOS SANTOS SILVA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4135433',
        nome: 'SAMANTA AMARAL DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4124381',
        nome: 'SARA ANGELINI SANTOS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984134',
        nome: 'SARAH SAMPAIO DOS PASSOS',

        funcao: 'desbravador',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984137',
        nome: 'SHERMAN CAUÃ FERREIRA CARVALHO',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984136',
        nome: 'STEFANY KAMILY DE SOUSA OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4135446',
        nome: 'WANDERSON DOS SANTOS',

        funcao: 'apoio',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '3984139',
        nome: 'WICTORIA LETTICIA PEREIRA RIBEIRO',

        funcao: 'diretoria',
        clubeId: 9,
        password: 'senha',
      },
      {
        codigo: '4071245',
        nome: 'ADRIANA LUCIA LEITE DE M. CATANILLA',

        funcao: 'apoio',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4185807',
        nome: 'ADRIANE SCHWARZ SANTOS SERRA',

        funcao: 'apoio',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4142315',
        nome: 'ADRYAN GABRIEL FIGUEIREDO DE PAULA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071175',
        nome: 'ANDREW RUGGERI MARAGNO SILVA WIERZLER',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071196',
        nome: 'BRENDA LAYNARA ROCHA CATANILLA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4142316',
        nome: 'DAVI VILHA SOUZA MELO',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071177',
        nome: 'DIEGO CATANILLA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071229',
        nome: 'EMANUELLY MARTINS DALPIAZ',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071221',
        nome: 'ENZO EMMANUEL DE OLIVEIRA FIGUEIREDO',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071241',
        nome: 'ESTHER SILVA MARTINS',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4142157',
        nome: 'FERNANDA CATANILLA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071233',
        nome: 'GABRIELA DE MORAES SILVA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071249',
        nome: 'GABRIELA ORDONEZ MELO CATANILLA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4148794',
        nome: 'GUILHERME HENRIQUE PEREIRA DE MELO SILVA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071173',
        nome: 'GUILHERME HENRIQUE PIRONI MENDONÇA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4148351',
        nome: 'GUILHERME LEVY ANDRADE DOS SANTOS FLORENTINO',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071214',
        nome: 'HAGATHA ANDROMEDA CARIOCA DE ARRUDA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071226',
        nome: 'IEDA MARIA SANTANA DE MORÂES',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071209',
        nome: 'ISABELI CRISTINA SANTANA DE MORAIS',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4202048',
        nome: 'ISABELLA PEREIRA LOBATO',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071225',
        nome: 'ISABELLY FERNANDES LIRA COSTA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071170',
        nome: 'JESSYKA DE ABREU MIRANDA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071211',
        nome: 'JOSUEL RODRIGUES JUNIOR',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071224',
        nome: 'JULIANA FLORENTINO CATANILLA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071243',
        nome: 'KAUANY NAIARA DE LIMA FERNANDES',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4202050',
        nome: 'LAURA LETICIA PEREIRA LOBATO',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4185811',
        nome: 'LEANDRO MONTEIRO DA SILVA',

        funcao: 'apoio',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071222',
        nome: 'LEONIDAS FLAVIO SILVA SOUZA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4185812',
        nome: 'LETICIA CRISTINA DE AZEVEDO SOUZA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4142215',
        nome: 'LUIZ GUSTAVO DA SILVA TAQUES DE ALBUQUERQUE',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071239',
        nome: 'MIGUEL ARISTON ETGES',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4148668',
        nome: 'MIGUEL MENDONÇA RIBEIRO',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4148318',
        nome: 'PEDRO ENZO DE SOUZA MELO',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4185819',
        nome: 'PEDRO HENRIQUE P. MENDONÇA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071193',
        nome: 'RAFAELA DE SOUZA DA SILVA MORAES',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071212',
        nome: 'REBEKA SIANE OELKE PEREIRA',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4071172',
        nome: 'THIAGO THARCIO SANTOS SERRA',

        funcao: 'diretoria',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4142237',
        nome: 'VALENTINA DO AMARAL GUIMARÃES',

        funcao: 'desbravador',
        clubeId: 10,
        password: 'senha',
      },
      {
        codigo: '4187426',
        nome: 'ADÃO NERIS DA SILVA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979482',
        nome: 'ALESSANDRE MAGNO B. COIMBRA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979483',
        nome: 'ALESSANDRO MURTHA BRANDAO SANTOS FILHO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979484',
        nome: 'ALESSANDRO MURTHA BRANDÃO SANTOS',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979486',
        nome: 'AMANDA CARLA DOS SANTOS DA CRUZ',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979487',
        nome: 'ANA LUISA SANTOS DA CRUZ',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979489',
        nome: 'APARECIDA FREITAS DOS SANTOS',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979491',
        nome: 'ARTHUR FRANCESCHI DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979493',
        nome: 'ARTHUR MARCOS BALDO FERES',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979494',
        nome: 'BEATRIZ GUILHERME GOVEIA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979496',
        nome: 'BEATRIZ SOARES DA SILVA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979500',
        nome: 'BRAIAN MORAES DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979504',
        nome: 'CARL BERNY PATRICK BIEN AIME',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979508',
        nome: 'CESAR CAMPOS OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979511',
        nome: 'DAVI DOS SANTOS GRIGOLO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979512',
        nome: 'DEBORA LOURDES DOS SANTOS DA CRUZ',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979513',
        nome: 'EDSON FERREIRA DA CRUZ',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979515',
        nome: 'EDUARDO NUNES PAULINO BRITO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4193011',
        nome: 'ELAINE CRISTINA DE PAULA BALDO FERES',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979517',
        nome: 'ELLEN BETÂNIA CORREIA DOURADO',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979519',
        nome: 'ELOIZA MARTINS DIAS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979520',
        nome: 'EMANUEL ZAIDEN DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979522',
        nome: 'GABRIEL ALBERTONI ROMERA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979524',
        nome: 'GABRIEL ALLEN ALVES OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979526',
        nome: 'GABRIEL CAMARGO HENRIQUE',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979528',
        nome: 'GABRIELLY CLAIR SOUSA MACHADO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979529',
        nome: 'GIOVANA DE CESARO RANGEL BERÇA',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3984048',
        nome: 'GIOVANI AZEVEDO SANTIAGO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979530',
        nome: 'GUILHERME DE MORAES VICTAL',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4193148',
        nome: 'GUILHERME HENRIQUE NOGUEIRA DA SILVA',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979532',
        nome: 'GUILHERME SANTIAGO DE MOURA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979534',
        nome: 'GUILHERME ZUMACH DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979536',
        nome: 'GUSTAVO DA SILVA FIGUEIREDO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979538',
        nome: 'HELOIZA GEANE DE A. CAMARGO HENRIQUE',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979540',
        nome: 'HENRIQUE PIRES MATZEMBACHER',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979543',
        nome: 'ISABELLA OLIVEIRA DAMACENO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979544',
        nome: 'ISABELLI NASCIMENTO LIMA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4070124',
        nome: 'ISABELLI VITÓRIA SALDANHA PEREIRA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979545',
        nome: 'ISAQUE YURI RODRIGUES SIMEÃO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979547',
        nome: 'JACSON FAVRETTO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979549',
        nome: 'JOÃO PEDRO DE MENEZES MORAIS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979550',
        nome: 'JOÃO VICTOR ZAIDEN DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979552',
        nome: 'JULIA BHYANKA BATISTA CAMARGO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979553',
        nome: 'JULIANA DAMASYA FERREIRA XAVIER',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979554',
        nome: 'JUSCELIO DA SILVA MORAIS',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979555',
        nome: 'KAYKE SAMUEL DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979557',
        nome: 'LARA NUNES PAULINO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4193031',
        nome: 'LARISSA SOUZA BALDO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4193154',
        nome: 'LARYANNE MACIEL ALBERTONI.',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979561',
        nome: 'MARIA CLARA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4193029',
        nome: 'MARIA EDUARDA PEREIRA SOUZA BALDO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979563',
        nome: 'MARIA FERNANDA CRISTAL SILVA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979565',
        nome: 'MARIA GABRIELA PROCOPIOU ALENCAR',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979566',
        nome: 'MARIA JÚLIA SANTOS DA CRUZ',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979568',
        nome: 'MARIA RITA GONTIJO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3997335',
        nome: 'MARILAINE ROSSETTI FAVRETTO',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979572',
        nome: 'MARISA MEIRA DE SOUZA',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979573',
        nome: 'MAYANA VALTENTIM',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979575',
        nome: 'MAYCON ALBERTONI ROMERA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979577',
        nome: 'MIGUEL ÂNGELO VIANA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979578',
        nome: 'MISAEL DA SILVA HENRIQUE',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979579',
        nome: 'MURILLO CARDOSO TEIXEIRA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979580',
        nome: 'NATHALIA BEATRIZ SILVA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4204570',
        nome: 'NATHALLY GABRIELI RODRIGUES',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979581',
        nome: 'NICOLAS GUILHERME DA SILVA MORAES',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4187428',
        nome: 'OBEDE RUFINO DE SOUZA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979585',
        nome: 'PYETRO RAYTER CAMPOS PEREIRA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979583',
        nome: 'PÂMELLA TODELO PROCOPIOU ALENCAR',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979589',
        nome: 'RAFAELA CORREIA DOURADO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979591',
        nome: 'RAFAELA SOUSA ALVES',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979592',
        nome: 'RAYSSA ARAUJO SOUZA',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4185380',
        nome: 'RITA FERREIRA GONÇALVES',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4191736',
        nome: 'ROSIMEIRE ROCHA DA GAMA TAVARES DA SILVA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3986442',
        nome: 'ROSIVANE LIMA DOS SANTOS VIANA',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4185502',
        nome: 'SALETE ANDRESSA PIRES RUFINO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979596',
        nome: 'SARAH PINHEIRO LOPES',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979603',
        nome: 'SIMEIA SILVEIRA DE MORAES VICTAL',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979607',
        nome: 'SOPHIA VITÓRIA PEREIRA MATOS',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979608',
        nome: 'STEFANY VITÓRIA PEREIRA MATOS',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3984045',
        nome: 'SÉRGIO FAVRETTO',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979498',
        nome: 'VALDETE FERREIRA DE MORAES',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979611',
        nome: 'VALENTINA PROCOPIOU ALENCAR',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979614',
        nome: 'VICENTE DE CESARO BERÇA',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4185356',
        nome: 'WELLINGTON DA SILVA VICTAL',

        funcao: 'apoio',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979617',
        nome: 'WILLIAM DE MORAES VICTAL',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979619',
        nome: 'WITTOR ALEXANDRE GONÇALVES ARAUJO',

        funcao: 'desbravador',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '3979734',
        nome: 'YASMIM PAULA BALDO FERES',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4193028',
        nome: 'YASMIN EMMILLY ALVES DE SOUZA',

        funcao: 'diretoria',
        clubeId: 11,
        password: 'senha',
      },
      {
        codigo: '4088654',
        nome: 'ALEXANDRE FERNANDES CUNHA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088655',
        nome: 'ANNE KAROLLYNE RIBEIRO DE MELO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088656',
        nome: 'CATIELLI LOPES DA SILVA',

        funcao: 'apoio',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088658',
        nome: 'CRISTIANO FERNANDES MARTINS',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088659',
        nome: 'DANIEL RODRIGUES FONSECA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088722',
        nome: 'EDUARDO RANZOLIN DAMASCENA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088732',
        nome: 'ELIANA TAVARES DA CUNHA',

        funcao: 'apoio',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088725',
        nome: 'ELOA RUTH DANTAS EVANGELISTA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088663',
        nome: 'EMILY TEREZINHA MACHADO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088665',
        nome: 'EMILYE MARIANA DANTAS EVANGELISTAS',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088667',
        nome: 'ESTEFANY SILVA RIBEIRO',

        funcao: 'apoio',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088668',
        nome: 'GABRIEL DE OLIVEIRA CUNHA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088671',
        nome: 'INÊS DE SOUZA TORRES',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4204557',
        nome: 'ISADORA CIRILO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088727',
        nome: 'JOSUÉ DE SOUZA TORRES',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088674',
        nome: 'JUAREZ PEREIRA LIMA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4204566',
        nome: 'JULIO  LEOPOLDINO CESAR MACIEL',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088677',
        nome: 'JÉSSICA ABREU RODRIGUES',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088673',
        nome: 'KAINE SANTOS ASSUNÇÃO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088679',
        nome: 'KARINY RODRIGUES DA PENHA',

        funcao: 'apoio',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088680',
        nome: 'LAVINIA MAVEL DA SILVA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088682',
        nome: 'LUANA SILVA DE MORAIS',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088686',
        nome: 'MARIA LURDES XIMENDES BRITO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088687',
        nome: 'MARIO NUNES DE LIMA',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088689',
        nome: 'MATHEUS DIAS DA SILVA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088690',
        nome: 'MONICA MATOS SOUSA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088692',
        nome: 'NAYLLA SISNANDES DA SILVA KILIM',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088724',
        nome: 'NICOLAS DANIEL RANZOLIN',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088696',
        nome: 'PAMELA PEREIRA GOMES',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088698',
        nome: 'PAULA DO NASCIMENTO TORRES',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088699',
        nome: 'RAYANE XIMENDES BRITO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088729',
        nome: 'RENETON MORAIS SILVA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088701',
        nome: 'RICARDO FELICIO MOREIRA',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088703',
        nome: 'RODRIGO PIRES ABREU',

        funcao: 'apoio',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088704',
        nome: 'RONALDO LIMA DA SILVA',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088706',
        nome: 'RUTE TORRES LIMA',

        funcao: 'apoio',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088710',
        nome: 'SHIRLEY MIRIELY DA SILVA MENESES',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088711',
        nome: 'TAMIRES SILVA RIBEIRO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088714',
        nome: 'THALLYTA SILVA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088716',
        nome: 'WANDERSON DOS SANTOS PINTO',

        funcao: 'desbravador',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4088718',
        nome: 'WEMERSON AMERICO DA SILVA',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4204567',
        nome: 'WEQUISON ANDRÉ',

        funcao: 'diretoria',
        clubeId: 12,
        password: 'senha',
      },
      {
        codigo: '4033376',
        nome: 'ANA PAULA CARNEIRO LEITE',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033464',
        nome: 'ANA VITORIA LEITE DA SILVA',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033407',
        nome: 'ANNY VITORIA SILVA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4204450',
        nome: 'BRUNO TEIXEIRA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4203985',
        nome: 'CARLOS AUGUSTO MACEDO ARAUJO',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033382',
        nome: 'DIOLINDA NUNES  GARCIA',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033417',
        nome: 'EDUARDO SILVA LEITE',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033378',
        nome: 'EZIO PEREIRA GARCIA',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033428',
        nome: 'FERNANDO SILVA LEITE ^',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4154604',
        nome: 'FRANCISCA VANUSA COSTA ARAÚJO',

        funcao: 'apoio',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033434',
        nome: 'GUILHERME CARVALHO DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033458',
        nome: 'IHAN LUCAS MORAIS DA SILVA',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033404',
        nome: 'KAUAN TEIXEIRA DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033439',
        nome: 'LUIS FELLYPE GONÇALVES FREITAS',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4067806',
        nome: 'MARIA LUZENILDE DOS SANTOS MORAIS',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033387',
        nome: 'MARILEIDE DOS ANJOS SANTOS',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033441',
        nome: 'PAMELA ARAUJO DA SILVA',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033442',
        nome: 'PEDRO LUCAS DE SOUSA',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4196994',
        nome: 'REGINALDO RODRIGUIS SANTOS',

        funcao: 'apoio',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4154470',
        nome: 'SARAH SANTOS BARROS',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4133104',
        nome: 'VERA LUCIA PEREIRA DA SILVA',

        funcao: 'apoio',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033396',
        nome: 'WALANDY NUNES REIS',

        funcao: 'diretoria',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4033444',
        nome: 'WALLANNA MIRLAINY NUNES REIS',

        funcao: 'desbravador',
        clubeId: 13,
        password: 'senha',
      },
      {
        codigo: '4201179',
        nome: 'ARIEL RODRIGUES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201253',
        nome: 'ARYELLA RODRIGUES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4203673',
        nome: 'CAMILA BORGES DE OLIVEIRA',

        funcao: 'apoio',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204699',
        nome: 'CARLOS HENRIQUE DIAS DA SILVA',

        funcao: 'diretoria',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201207',
        nome: 'DAVI SILVA SANTOS',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201258',
        nome: 'ELYAN ALVES ANDRADE',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204685',
        nome: 'EVA DIAS DAMASCENO DA SILVA',

        funcao: 'apoio',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201255',
        nome: 'FELIPE LOPES BARBOSA',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204714',
        nome: 'GABRIELE SOUSA DE ARAÚJO',

        funcao: 'diretoria',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201234',
        nome: 'ISA MIKAELLI FERREIRA GALVÃO',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204690',
        nome: 'ISABELLI RODRIGUES DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201251',
        nome: 'ISADORA LOPES DA SILVA',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201215',
        nome: 'LETICIA VIEIRA SILVA',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204687',
        nome: 'MARIA EDUARDA FREITAS DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201230',
        nome: 'MARIA EDUARDA PINHEIRO NOVAES RAYMUNDO',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201217',
        nome: 'MATHEUS HENRICKY LOPES DA SILVA',

        funcao: 'diretoria',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204717',
        nome: 'PYETRO LOPES PEREIRA',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204691',
        nome: 'RICARDO DA COSTA ALVES',

        funcao: 'diretoria',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4204689',
        nome: 'SANDRA REGINA MARTINS SANTOS',

        funcao: 'apoio',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201792',
        nome: 'WENDEL DAVI FREITAS DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201793',
        nome: 'WESLEY FREITAS DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4201795',
        nome: 'WILLEY FREITAS DE OLIVEIRA',

        funcao: 'apoio',
        clubeId: 14,
        password: 'senha',
      },
      {
        codigo: '4134316',
        nome: 'ANTONIO VILMAR DE LARA',

        funcao: 'diretoria',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134313',
        nome: 'ARTHUR ANTONIO BORGES',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204121',
        nome: 'CRISTINA VIEIRA DA CONCEIÇÃO',

        funcao: 'apoio',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204067',
        nome: 'ELOA RIBEIRO DE BASTOS',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134327',
        nome: 'ELOYZA GONÇALVES OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204069',
        nome: 'EMLLI VITORIA ANTONIO PIRES',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134329',
        nome: 'GABRIEL DOS SANTOS ALMEIDA',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134333',
        nome: 'GABRIELLEN FERREIRA MARGUES',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204123',
        nome: 'GLINRAULLE TOMOPTSE XAVANTE',

        funcao: 'apoio',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134342',
        nome: 'HEITOR TAYLLOR SILVA ALVES',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134338',
        nome: 'INES ANTONIA RODRIGUES BATISTA',

        funcao: 'diretoria',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134344',
        nome: 'JALES DE SOUZA SANTOS',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204070',
        nome: 'JORGE VARIAS CORREAS',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134347',
        nome: 'LARA GABRIELLY LIMA LUZ',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204127',
        nome: 'LAZARO BUTSE TSIRUIPI XAVANTE',

        funcao: 'apoio',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134356',
        nome: 'LUCAS LIMA VIEIRA',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204071',
        nome: 'MICAEL FERNANDO FERRAZ',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204125',
        nome: 'MOISES TSERE WAWA RAPUDZA NE XAVANTE',

        funcao: 'diretoria',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204128',
        nome: 'PEDRO HENRIQUE RIBEIRO DE SOUZA',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134372',
        nome: 'RAFAELLA TAVARES DO AMARAL',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4204118',
        nome: 'RYAN SIDNEY LEITE DA SILVA',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4134371',
        nome: 'STEFHANNY ALMEIDA MENDES',

        funcao: 'desbravador',
        clubeId: 15,
        password: 'senha',
      },
      {
        codigo: '4142642',
        nome: 'ALESSANDRA DE OLIVEIRA SECCOTTE SILVA',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143121',
        nome: 'ALINE DA SILVA SOARES',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142824',
        nome: 'ANA CAMYLI PEREIRA ABRANTES',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142828',
        nome: 'ANA CLARA RODRIGUES DA CUNHA SILVA',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143125',
        nome: 'ANNA LÍDIA SALES MONTEIRO',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143101',
        nome: 'ANY CAROLINE MORAIS MARTINS',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142831',
        nome: 'BRUNA LEITE CARVALHO',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4188874',
        nome: 'BRUNO VALLADARES DA MACENA',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143127',
        nome: 'DAVI ALEXANDRE MAIA DA SILVA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143134',
        nome: 'DAVI HEITOR MARQUES FERREIRA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143139',
        nome: 'DERYCK ALLAN FERNANDES DE BRITO',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142794',
        nome: 'DIOGO HENRIQUE DUARTE BEZERRA',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4151554',
        nome: 'DIOGO PINTO DE SOUSA',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143146',
        nome: 'ELOIZE ALVES SCARCELLA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4146427',
        nome: 'ELZA TEIXEIRA SABORÉ',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143151',
        nome: 'EMANUELE ALVES SCARCELLA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143153',
        nome: 'ESTER FREITAS GOMES GUIMARÃES',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143155',
        nome: 'EVELLYN KALLINE SILVA BATISTA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143157',
        nome: 'IAN DIMAS COSTA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143160',
        nome: 'JETRO NAOR ALBINO DE SOUZA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142833',
        nome: 'JOAO VICTOR LOPES CORRÊA',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143162',
        nome: 'JOÃO LUCAS LIMA DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143165',
        nome: 'JOÃO WITOR RODRIGUES',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143040',
        nome: 'LARISSA MEL DA SILVA MESQUITA',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143167',
        nome: 'LETÍCIA SABORÉ CERQUEIRA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142704',
        nome: 'LILIANE ALVES DE FREITAS',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143105',
        nome: 'LIVIA RODRIGUES DE SOUZA',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143111',
        nome: 'LUAN HENRIQUE RIBEIRO DE SOUSA',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143118',
        nome: 'LUANA APARECIDA BISPO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143044',
        nome: 'LUCAS HENRYQUE SILVA LEITE',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143168',
        nome: 'LUIS EDUARDO RODRIGUES MARTINS',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143171',
        nome: 'LUIZ FELIPE RODRIGUES PEREIRA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142672',
        nome: 'MARCIO PEREIRA SANTANA',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143173',
        nome: 'MARIA CELESTE RODRIGUES DA CUNHA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143175',
        nome: 'MAYARA VITÓRIA BARBOSA PRATES',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143179',
        nome: 'MAYSA KATHERYNE SILVA BATISTA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143182',
        nome: 'MIGUEL FABRINI SILVA SANTANA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142798',
        nome: 'NELMA DA COSTA LIMA LEITE',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143185',
        nome: 'NICOLLY ADAMASKI DIONIZIO',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143186',
        nome: 'PAULO CEZAR RODRIGUES DA CUNHA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143189',
        nome: 'PEDRO HENRIQUE SECCOTTE DA SILVA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142717',
        nome: 'ROSINEIDE COSME PEREIRA RODRIGUES',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143191',
        nome: 'RYAN RODRIGUES MENDES',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143196',
        nome: 'SAFIRAH DE SOUZA NOGUEIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143198',
        nome: 'SAMIRA ANITA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4143041',
        nome: 'SARA PRISCILA ALBINO DE SOUZA',

        funcao: 'apoio',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142843',
        nome: 'WEBER RODRIGUEZ LUZ',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142821',
        nome: 'WESLEY MATHEUS MARQUES DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4142840',
        nome: 'YSADORA FERREIRA MENDES FRANCISCO',

        funcao: 'diretoria',
        clubeId: 16,
        password: 'senha',
      },
      {
        codigo: '4187413',
        nome: 'ADRIANA DA SILVA SANTOS ZEFERINO',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4088014',
        nome: 'ANA MARIA FRANÇA DO NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087932',
        nome: 'ANDREW RICARDO ASSUNÇÃO ARRAIS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087936',
        nome: 'ANDRÉ LIRA CHAVES MOURA',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4088000',
        nome: 'ANDRÉ LUIZ ESCOBAL LEAL',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187542',
        nome: 'ANGELO CAIC ALVES SILVA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087949',
        nome: 'ANTONIO MARCOS ARAÚJO DA SILVA',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187526',
        nome: 'AQUILES FRANÇA DO NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087971',
        nome: 'BEATRIZ GOMES LOPES',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087991',
        nome: 'BRUNO ALVES CAMPOS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187539',
        nome: 'CAIO ANGELO ALVES DA SILVA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187446',
        nome: 'CLAUDINEY  JACINTO DE MORAES',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4088003',
        nome: 'CLYONE BALICA DE ALMEIDA',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087934',
        nome: 'DAIANA DOS SANTOS ASSUNÇÃO ARRAIS',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087969',
        nome: 'DANILO FERNANDES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087984',
        nome: 'DAVI LUCAS DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087995',
        nome: 'DAVI LUCAS LEITE GOMES',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087970',
        nome: 'DYLAN DOS SANTOS TEIXEIRA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087973',
        nome: 'ENZO THEODORO DOS SANTOS SOBRINHO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087953',
        nome: 'GABRIEL ALVES CAMPOS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087998',
        nome: 'GLEICIELE BATISTA HOLANDA',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087978',
        nome: 'HELENA GUSMÃO WILL MARTINS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087992',
        nome: 'HIAGO GONÇALVES OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087964',
        nome: 'ISADHORA LEITE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4088010',
        nome: 'JOELMA ELISANDRA MOREIRA DE MORAES',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4088006',
        nome: 'JOÃO EDUARDO DOS SANTOS SOBRINHO',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087997',
        nome: 'KAMILLY GONÇALVES DELGADO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187525',
        nome: 'KARLINE DE SOUZA ALVES ANGELO',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087962',
        nome: 'LUAN BATISTA VIEIRA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087951',
        nome: 'LUCAS GABRIEL CAMARA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087986',
        nome: 'LUCAS LUÍZ DE MORAES',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087960',
        nome: 'MARIA APARECIDA PONTES FERREIRA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087983',
        nome: 'MARIA DE FÁTIMA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187420',
        nome: 'MARIA EDUARDA FRANÇA DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087980',
        nome: 'MARIANA DE ALMEIDA MOTA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187519',
        nome: 'NAIR DA PAZ RIBEIRO',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087957',
        nome: 'PEDRO LUCAS PONTES SILVA',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087958',
        nome: 'PEDRO MARQUES DE SOUZA SIQUEIRA',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087976',
        nome: 'SAMUEL ANTÔNIO COUTO PINHEIRO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087993',
        nome: 'SAMUEL H. OSCAR PINHEIRO SCHULZ',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087945',
        nome: 'SARA DANIELLY ASSUNÇÃO ARRAIS',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087947',
        nome: 'SOFIA MACIEL',

        funcao: 'diretoria',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4088015',
        nome: 'VINÍCIUS FRANÇA PINHEIRO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187400',
        nome: 'WALDETH PONTES ALVES',

        funcao: 'apoio',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4187460',
        nome: 'YAN MATHEUS PAIN RAULINO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087942',
        nome: 'YASMIN KRYSTHYNE ZEFERINO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4087938',
        nome: 'YURI KRYSTHOFFER ZEFERINO',

        funcao: 'desbravador',
        clubeId: 17,
        password: 'senha',
      },
      {
        codigo: '4202308',
        nome: 'ALINE COELHO DE ARAUJO',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202110',
        nome: 'ANA JÚLIA RODRIGUES LEITE',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202131',
        nome: 'ANDRÉ LUIZ MARIM RODRIGUES',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202089',
        nome: 'ANNY GABRIELLY PONTES DA SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202099',
        nome: 'ARTHUR ARTONI HARTEN DE BRITO',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202090',
        nome: 'BEATRIS MIRELA DA SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202094',
        nome: 'BIANCA GABRIELY DOS SANTOS RODRIGUES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202312',
        nome: 'BIANCA OLIVEIRA FRAGA',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202109',
        nome: 'BRUNA EMANUELLY BARBOSA DA SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202132',
        nome: 'CAIO HENRIQUE ROSA FERREIRA',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202098',
        nome: 'CAIO MOREIRA TARGA DA SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202102',
        nome: 'DANIEL SÁVIO ALVES HENDES BARBOSA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202170',
        nome: 'DAVI SANTOS DA SILVA MIANG',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202118',
        nome: 'DENNER DE AZEVEDO E SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202169',
        nome: 'EMANUELLY LOPES DA SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202145',
        nome: 'GIOVANA KAMILY LOPES DA SILVA',

        funcao: 'apoio',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202111',
        nome: 'GIOVANNA BUENO FRANÇA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202112',
        nome: 'GRASIELLY ALMEIDA TAVARES',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202106',
        nome: 'GUSTAVO SANTANA NUNES',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202085',
        nome: 'JOÃO GABRIEL DO NASCIMENTO SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202091',
        nome: 'KEMILLY SANTANA NUNES',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202107',
        nome: 'LUA MORENA ALVES E SILVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202141',
        nome: 'LUCAS DE SOUZA PAULINO',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202104',
        nome: 'LUCAS FRANSCISCO FRANCO DE MIRANDA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202158',
        nome: 'LUCILENE SANTANA DA SILVA',

        funcao: 'apoio',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202741',
        nome: 'LUIZ ANTONIO AMARAL DE SOUZA',

        funcao: 'apoio',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202304',
        nome: 'MARINES LUCCHETTI OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202167',
        nome: 'MARJORY LUCCHETTI OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202119',
        nome: 'MATHEUS PEDROSO PROENÇA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202084',
        nome: 'MILLENA EMANUELLY SILVA DO ROZARIO',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202122',
        nome: 'NATALIA MORAES DE AMORIM',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202738',
        nome: 'NATHSON GABRIEL FERNANDES DA SILVA',

        funcao: 'apoio',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202100',
        nome: 'PAULO SOUZA GASPAE',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202302',
        nome: 'PEDRO HENRIQUE MORAES DE AMORIM',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202128',
        nome: 'RAYZA PRYSCILA DA SILVA AYLLON',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202096',
        nome: 'RHUAN FELIPE LUCCHETTI OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202120',
        nome: 'ROGGER SABINO DE OLIVEIRA RAMOS',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202116',
        nome: 'RONEY OLIVEIRA DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202154',
        nome: 'ROSANA AMARAL DE SOUZA',

        funcao: 'apoio',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202146',
        nome: 'ROSANE AMBRÓSIO DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202161',
        nome: 'SALVIA AMARAL DO ESPIRITO SANTO',

        funcao: 'apoio',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202086',
        nome: 'SÃMILLE RILHELLY SERRA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202092',
        nome: 'THAMARA VITORIA FIGUEIREDO NEVES',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4202087',
        nome: 'VANESSA ALEXANDRE  PAIVA',

        funcao: 'desbravador',
        clubeId: 18,
        password: 'senha',
      },
      {
        codigo: '4150702',
        nome: 'ADRIA BATISTA RODRIGUES',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4191302',
        nome: 'ALAN CAIO COSTA DA SILVA',

        funcao: 'apoio',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024371',
        nome: 'ARTHUR AIRES GARCIA DE AMORIM',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4150716',
        nome: 'CARINI REINHEIMER PFEIFER LESSA',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4150812',
        nome: 'EMANUELA MIRANDA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024369',
        nome: 'ENZO GABRIEL JESUS GUIMARAES',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024372',
        nome: 'EVELYN PERES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024374',
        nome: 'FELIPE MIRANDA CARVALHO',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4185379',
        nome: 'GUILHERME RODRIGUES  RIBEIRO',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4186733',
        nome: 'HIAGO SOUSA LIMA',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4186767',
        nome: 'IDAILDES BATISTA DOS SANTOS',

        funcao: 'apoio',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024377',
        nome: 'ISABELA MILLENA PERREIRA LIMA',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024365',
        nome: 'JOSÉ MILTON FERREIRA SOARES',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4191300',
        nome: 'LAURTE LEANDRO LESSA',

        funcao: 'apoio',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024361',
        nome: 'LUIS HENRIQUE DOS SANTOS LESSA',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024346',
        nome: 'MARCELA FERREIRA MACHADO',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024351',
        nome: 'MARIZA BELA DA SILVA REIS',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024355',
        nome: 'MAYARA SOUSA NASCIMENTO',

        funcao: 'apoio',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4202359',
        nome: 'OLIVIA OLIVEIRA LIMA',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024357',
        nome: 'PEDRO HENRIQUE ROSA BATISTA',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024359',
        nome: 'SAMUEL DE SOUSA MARTINS',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024353',
        nome: 'SULAMITA SANTOS PERUCCE MENEZES',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024349',
        nome: 'THIERLLYS MORAIS BRASIL',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024344',
        nome: 'UIARA CASTORINA PEREIRA SE SOUZA MARTINS',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024341',
        nome: 'VALDEMAR CARLOS DOS REIS',

        funcao: 'diretoria',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4024339',
        nome: 'VALENTINA PINHEIRO DA SILVA',

        funcao: 'desbravador',
        clubeId: 19,
        password: 'senha',
      },
      {
        codigo: '4033170',
        nome: 'ADRIANA MORAIS MIRANDA',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4038128',
        nome: 'ALEXANDRE CAMARGO LEMES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032916',
        nome: 'ALEXANDRE PABLO RIBEIRO SOARES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033174',
        nome: 'ALIANE PAULA CAPISTRANO PINTO',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209079',
        nome: 'ANA BEATRIZ NOBRE MORAIS',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033129',
        nome: 'ANA CAROLINA BATISTA PEREIRA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033130',
        nome: 'ANA CAROLINA DA SILVA CONCEIÇÃO',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033100',
        nome: 'ANA LUÍZA PESENTE MARTINS',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032918',
        nome: 'ANDERSON MATHEUS DE SOUZA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032924',
        nome: 'ANGELICA ROCHA DA SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033102',
        nome: 'ANGELITA ROSA GONCALVES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033202',
        nome: 'BEATRIZ ALVES DA SILVA DE ARRUDA',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032936',
        nome: 'BHAYAN LIMA DA SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033208',
        nome: 'BRUNO MORAIS PREDIGER',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209054',
        nome: 'CARMEM MATHIAS',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033203',
        nome: 'CONRADO VERARDI SOLETTI',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033134',
        nome: 'CRISLAINE GAMARRA ECKE',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033253',
        nome: 'DANIEL LIMA DO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033136',
        nome: 'DANIELA STEFFENS',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209057',
        nome: 'EDINALDO SANTIAGO DE SOUZA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209299',
        nome: 'EDSON LUIZ TAVARES',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209302',
        nome: 'EDUARDO DINIZ CASTRO',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033223',
        nome: 'EDUARDO RIBEIRO ALVES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033103',
        nome: 'ELAINE VICTÓRIA FERNANDES DA SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033205',
        nome: 'ELIDA MARIANA SANTANA EVARISTO',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033260',
        nome: 'EMILLY VITÓRIA RODRIGUES PEREIRA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033224',
        nome: 'ERICK EDUARDO SILVA SANTOS',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032938',
        nome: 'ERICK MURILO GONÇALVES DIAS FERREIRA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209059',
        nome: 'EZIEL NICOLLAS GONÇALVES DIAS FERREIRA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033148',
        nome: 'FERNANDA GARCIA DE SOUZA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209062',
        nome: 'FRANCINEIDE DA SILVA SOUSA',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209063',
        nome: 'GEANNY ANDRESSA SILVA DE SOUSA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033125',
        nome: 'GEOVANE GAMARRA ECKE',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033127',
        nome: 'GUILHERME DE OLIVEIRA DE SOUZA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209066',
        nome: 'HARILSON JOSÉ BRAYAN GUNTHER DA MAIA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033186',
        nome: 'HELIANY CRISTINA MACHADO CAPISTRANO PINTO',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033228',
        nome: 'HELOÁ LORENZI',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033128',
        nome: 'HIASMIM SARA ARANTES PASSOS SILVA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033138',
        nome: 'IGOR FARIA RAMOS',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032955',
        nome: 'ILANE NICOLLI FERNANDES DA SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032895',
        nome: 'ISABELLE ROSA GONÇALVES MARABA ARVANI',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033181',
        nome: 'ISMAEL MATHIAS',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209069',
        nome: 'JANDIRA ROSA',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209070',
        nome: 'JAQUELINE FILHOS',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209072',
        nome: 'JEFFERSON LUIS GUNTHER DA MAIA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032899',
        nome: 'JHERNEYZI RAMAYLAN BRUNACHE',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032957',
        nome: 'JHORBENZ STELNO BRUNACHE',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033091',
        nome: 'JOÃO GABRIEL MEDEIROS DA SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209076',
        nome: 'JOÃO VICTOR LIMA DE SOUSA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033243',
        nome: 'JOÃO VITOR DOS SANTOS DA SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209080',
        nome: 'JULIA JANING NICOLI',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033152',
        nome: 'JULIANO PADILHA DA SILVA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209093',
        nome: 'KASSYO RAFAEL ALVES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033230',
        nome: 'KAWÃ SILVA SANTOS',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209107',
        nome: 'KAYO CEZAR ALVES DE OLIVEIRA',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033232',
        nome: 'KAYRA LOHANE SOARES DA PAIXÃO',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033104',
        nome: 'KETHLEY REBECA OLIVEIRA DE SOUSA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033255',
        nome: 'LARISSA DO NASCIMENTO SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033141',
        nome: 'LARISSA SILVA DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032929',
        nome: 'LIVIA FILHOS DE MORAES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033108',
        nome: 'LUANA MEIRELES SOARES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033234',
        nome: 'MARCELO AUGUSTO GONÇAVES DA SILVA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033097',
        nome: 'MARIA FERNANDA DO NASCIMENTO RODRIGUES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033111',
        nome: 'MATEUS MORAIS PREDIGER',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033166',
        nome: 'MATHEUS EDUARDO ALVES DOS SANTOS',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209196',
        nome: 'MATHEUS ORTOLAN',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032902',
        nome: 'MICAELLY MARQUES SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033114',
        nome: 'MIRYAN DA CONCEIÇÃO VIEIRA DE SOUSA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033183',
        nome: 'NELSON LINO DOS SANTOS',

        funcao: 'apoio',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209308',
        nome: 'NICOLAS MATHEUS BARROS MONTEIRO',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033154',
        nome: 'PAULO RICARDO DE OLIVEIRA GOÉS',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4209312',
        nome: 'PEDRO HENRIQUE FORTUNATO CASTRO',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033236',
        nome: 'RAYSSA DE PINHO GUSMAO',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033258',
        nome: 'ROGERIO HENRIQUE ROCHA DE MATOS',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033157',
        nome: 'SABRINA ALVES DA SILVA DE ARRUDA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4038124',
        nome: 'SARA CRISTINA DO NASCIMENTO SILVA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032962',
        nome: 'TALITA MEIRELES SOARES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033117',
        nome: 'TAYLON MIKAEL TEIXEIRA RODRIGUES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033145',
        nome: 'THAINÁ OLIVEIRA PORFIRO MATIAS',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033168',
        nome: 'THALYSSON SOUSA RIBEIRO ROCHA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033238',
        nome: 'THIAGO DA SILVA CARDOSO',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4038127',
        nome: 'THIAGO ROGERIO ROCHA DE MATOS',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033204',
        nome: 'THIAGO SOLETTI',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032913',
        nome: 'WAYLON RENAN TEIXEIRA RODRIGUES',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033163',
        nome: 'WELDSON SILVA PEREIRA',

        funcao: 'diretoria',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4032960',
        nome: 'YAN LIMA DA COSTA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033240',
        nome: 'YANNA SOFHIE RODRIGUES PEREIRA',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4033099',
        nome: 'YASMIN ALVES NEGRI',

        funcao: 'desbravador',
        clubeId: 21,
        password: 'senha',
      },
      {
        codigo: '4088499',
        nome: 'ANA GABRIELLA CAETANO LEMES',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088388',
        nome: 'BEATRIZ CRISTINA PEREIRA RODRIGUES',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088397',
        nome: 'DAVI CALDEIRA SANTANA',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088434',
        nome: 'DEINE RIBEIRO DO VALE REIS',

        funcao: 'apoio',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088511',
        nome: 'DIANE HARY MARICATO',

        funcao: 'apoio',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088513',
        nome: 'ELENILDA RIBEIRO DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088439',
        nome: 'ERIZON DIVINO DA SILVA LIMA',

        funcao: 'diretoria',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088400',
        nome: 'EUREN JHULIA MEIRELES ALVES',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088530',
        nome: 'GESLANE STEINCK',

        funcao: 'apoio',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088406',
        nome: 'JESSICA FRANCISCA DA SILVA',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088445',
        nome: 'JHEIMYSON LIMA OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088543',
        nome: 'KAUA KAISA VARJÃO',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088542',
        nome: 'KLEBER JÚNIOR SILVA ARAÚJO',

        funcao: 'diretoria',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088411',
        nome: 'MARCELA LIRIEL HARY DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088416',
        nome: 'MARCIO GLEICON VARGAS DE OLIVEIRA FILHO',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088448',
        nome: 'NAYSLA DOS SANTOS FIGUEREDO',

        funcao: 'diretoria',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088420',
        nome: 'PEDRO HENRIQUE',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088449',
        nome: 'ROSANGELA BORGES PIMENTEL',

        funcao: 'diretoria',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088450',
        nome: 'SAIONARA DA SILVA',

        funcao: 'apoio',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088424',
        nome: 'SARA SANTOS OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4088429',
        nome: 'SOPHIA SANTOS OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '4189783',
        nome: 'THIAGO CARVALHO FREITAS DOS REIS',

        funcao: 'desbravador',
        clubeId: 22,
        password: 'senha',
      },
      {
        codigo: '3982989',
        nome: 'ALEJANDRO OLIVEIRA MACHADO DE SOUSA',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983000',
        nome: 'ANDRÉ RIBEIRO OLIVEIRA ARAÚJO',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3965578',
        nome: 'APARECIDA DALUZ ALVES DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982991',
        nome: 'BRUNO TOSCANO DA SILVA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3990658',
        nome: 'CAMILA DE SOUSA PEREIRA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4149986',
        nome: 'CLAUDINEY DA SILVA ARAUJO',

        funcao: 'apoio',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3990654',
        nome: 'DIEGO SOUSA CORRÊA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983012',
        nome: 'EDUARDA VITORIA SILVA DE AMORIM',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982998',
        nome: 'ENDRIWS MACHADO ARAUJO',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3990660',
        nome: 'ENZO RIBEIRO FERNANDES',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983002',
        nome: 'ERICK EDUARDO SILVA TAVARES',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983011',
        nome: 'EVELIN LIMA DA COSTA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4148513',
        nome: 'FELIPE NETO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4148530',
        nome: 'GUILHERMY SILVA BATELHO',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983005',
        nome: 'HAVILA OLIVEIRA MACHADO DE SOUSA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982995',
        nome: 'HELLEN CRISTINA MEL ALMEIDA CUSTÓDIO',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983014',
        nome: 'JENIFFER MAYARA SILVA DO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983010',
        nome: 'JOHN WELLES ALVES COSTA DA SILVA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983006',
        nome: 'JOÃO VITOR SILVA AMORIM',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3965579',
        nome: 'KAUÃ VASCONCELOS FERREIRA',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4149399',
        nome: 'LÍVIA MARIA DE OLIVEIRA TAVARES',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982990',
        nome: 'MARCOS PABLO FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983003',
        nome: 'MARIA EDUARDA SILVA AMORIM',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4149395',
        nome: 'MARIA JOSÉ MORAIS',

        funcao: 'apoio',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3983008',
        nome: 'MIRELLY DE SOUSA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3990661',
        nome: 'NAILANDE PREVIL',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982994',
        nome: 'RICHARLYSON SILVA AZEVEDO',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982997',
        nome: 'RIVALDO SOUSA LOPES',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3990652',
        nome: 'ROSENAILA PREVIL',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982993',
        nome: 'SILVANA  GABRIELI TOSCANO DA SILVA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4149394',
        nome: 'VALCIR GUIMARÃES BERALDO',

        funcao: 'diretoria',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '3982999',
        nome: 'VICTOR HUGO MAIDANA DE AMORIM',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4148533',
        nome: 'VITOR GABRIEL RODRIGUES SOUSA',

        funcao: 'desbravador',
        clubeId: 20,
        password: 'senha',
      },
      {
        codigo: '4149112',
        nome: 'AILTON LEMES DE SOUZA',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149940',
        nome: 'ALAN WALISON SANTOS SILVA',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149116',
        nome: 'ALEX VENÂNCIO PARREIRA BARBOSA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4150390',
        nome: 'ANA HELENA BARRETO TEIXEIRA',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149138',
        nome: 'CAROLAINE SILVA MENDES COSTA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149140',
        nome: 'CLAUDINEI GOMES',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4203971',
        nome: 'DAVI ARAUJO MORENO',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149141',
        nome: 'DAVI BOESSIO FERNANDES',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149143',
        nome: 'ENZO HENRIQUE PEZZINI',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149144',
        nome: 'EVA VILMA BOESSIO FERNANDES',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149146',
        nome: 'FLADILON EMANUEL SOUSA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149147',
        nome: 'FLAVIA SOUZA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149151',
        nome: 'GEOVANY RODRIGUES BARBOSA',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4203980',
        nome: 'GILMARA GONÇALVES RODRIGUES DA SILVA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149154',
        nome: 'GUILHERME LOPES BOSON',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149156',
        nome: 'GYSANNA MONTEIRO DE JESUS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149157',
        nome: 'HELOISE LEMES CAETANO',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149209',
        nome: 'IGOR AQUINO RIBEIRO',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149946',
        nome: 'JANAINA FRANCESCHET SARTORI DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149213',
        nome: 'JEREMIAS MENDES DA COSTA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4203972',
        nome: 'JOÃO ALBERI DE QUADROS',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149260',
        nome: 'JOÃO GABRIEL TORRES SALAMONI',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149285',
        nome: 'LARISSA DOS SANTOS CORREIA',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4203974',
        nome: 'LISANDRA RODRIGUES DA SILVA BARBOSA',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149290',
        nome: 'LIVIA BARROS BRITO',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149486',
        nome: 'LOANE PEREIRA SOUSA',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149291',
        nome: 'LUANA MATOS DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149292',
        nome: 'MARCIA PINTO MATOS',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149294',
        nome: 'MARCIONE RIBEIRO FERNANDES',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4150262',
        nome: 'MARIA APARECIDA SOARES',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149949',
        nome: 'MARIA EDUARDA FRANCESCHET DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149296',
        nome: 'MARIA VITORIA DA SILVA SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149297',
        nome: 'MIGUEL JOSÉ VIEIRA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149298',
        nome: 'NATALIA SIQUEIRA SILVA',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149300',
        nome: 'NICOLAS NILVO CAETANO SCHWARTZ',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149302',
        nome: 'ORISMAR PEREIRA DE SOUZA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4203976',
        nome: 'ORLANDO BENEDITO DE SOUZA',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149303',
        nome: 'PHAMELLA SOPHIA SOUSA NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4212215',
        nome: 'RANYELLE RODRIGUES DE SOUZA ALCÂNTARA',

        funcao: 'apoio',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149340',
        nome: 'ROSEMEIRE RAYMUNDO GOMES',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149344',
        nome: 'SARA BEATRIZ BARRETO TEIXEIRA',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149722',
        nome: 'VALEXSANDER PADILHA DE LIMA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149352',
        nome: 'WEMERSON ALERRANDRO DA SILVA',

        funcao: 'diretoria',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4149725',
        nome: 'WILLIAN FRANCESCHET DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 23,
        password: 'senha',
      },
      {
        codigo: '4204465',
        nome: 'ADILSON AGUILERA',

        funcao: 'apoio',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4203128',
        nome: 'ANGÉLICA VITÓRIA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '3996227',
        nome: 'BEATRIZ SAGUMA BATISTA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4203291',
        nome: 'CARLOS HUMBERTO LUIZ DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '3996229',
        nome: 'DANIEL DE MORAES NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '3996231',
        nome: 'EMANUEL DA SILVA LADISLAU',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '3996234',
        nome: 'EVELLYN GABRIELLY SIRQUEIRA SANTOS',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054291',
        nome: 'GABRIEL AGEU SANTOS DO E. SANTO',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054350',
        nome: 'GUILHERME LEMES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '3996236',
        nome: 'HELOÍSA TÁVORA OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4204492',
        nome: 'IGOR PEREIRA MENDES',

        funcao: 'apoio',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054309',
        nome: 'ISABELLY PAULINO BARBOZA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4078496',
        nome: 'JHENNYFFER KASSYENNE MENEZES ALMEIDA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054312',
        nome: 'JOAO HENRIQUE FERNANDES SILVA',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054315',
        nome: 'JONACIR FURINI DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4078495',
        nome: 'JOSILENE DE MORAES NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054324',
        nome: 'JOÃO GONÇALVES LIMA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054342',
        nome: 'JOÃO VITOR AMORIM SPANI',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054317',
        nome: 'KATIANA BASEGGIO DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054322',
        nome: 'KETLYN KAUANY SILVA MENDES',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054329',
        nome: 'LUIZ OTÁVIO DIONIZIO MOURA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054330',
        nome: 'MARIA LUÍSA EVANGELISTA DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4203130',
        nome: 'MARIANA NUNES DE SOUZA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4204467',
        nome: 'MARLON DOUGLAS TILLMAN',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054344',
        nome: 'MAXSUEL SIQUEIRA SANTOS',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054328',
        nome: 'PAULO HENRIQUE PAULINO BARBOZA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054338',
        nome: 'PEDRO CAUÃ R DE ARAUJO',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054320',
        nome: 'RHUAN CARLOS DA SILVA LUCAS',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054341',
        nome: 'ROBERTA DE MORAES NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054318',
        nome: 'ROSILENE S. NEVES MENDES',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4203132',
        nome: 'SANDIELY DOS SANTOS PEREIRA',

        funcao: 'diretoria',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054332',
        nome: 'THAWANY MARTINS DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054334',
        nome: 'VITÓRIA ASSUNÇÃO DE JESUS',

        funcao: 'desbravador',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4054313',
        nome: 'WARLEY BRYEN BORGES MENDES',

        funcao: 'apoio',
        clubeId: 24,
        password: 'senha',
      },
      {
        codigo: '4141516',
        nome: 'ADNIR MIRANDA NUNES',

        funcao: 'apoio',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141468',
        nome: 'ANNE GABRIELLY SOUSA DA SILVA',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141463',
        nome: 'BIANCA VITÓRIA  RODRIGUES DOS REIS',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4202744',
        nome: 'CAIO ALEXANDRE MACHADO NEVES',

        funcao: 'apoio',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4143366',
        nome: 'CHRISTIELLY DAIANE SILVA BOTELHO',

        funcao: 'diretoria',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141477',
        nome: 'DIOGO DOS REIS DE JESUS',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141529',
        nome: 'EMANUELLE ALVES MACHADO',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4204348',
        nome: 'EMANUELLY FERNANDA COSTA DE QUEIROZ',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141834',
        nome: 'EULÁLIA DA SILVA BOTELHO',

        funcao: 'diretoria',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4202753',
        nome: 'FELIPE RIQUELME R. DA SILVA',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141487',
        nome: 'GABRIEL BOTELHO DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141495',
        nome: 'GABRIEL DE OLIVEIRA APLINIO',

        funcao: 'diretoria',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141502',
        nome: 'GUSTAVO HENRIQUE CONCEIÇÃO XAVIER',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141481',
        nome: 'ISABELLY VICTÓRIA ÁVILA QUEIROZ',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141823',
        nome: 'IVANI RODRIGUES GALVÃO DOS REIS',

        funcao: 'apoio',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141712',
        nome: 'JAMYLLY KELLY FERREIRA DA SILVA',

        funcao: 'diretoria',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4143371',
        nome: 'LORIVALDO NUNES PEREIRA',

        funcao: 'apoio',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141474',
        nome: 'LUCIANO VICTOR DA SILVA LIMA',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141830',
        nome: 'MARCILEY ARGEMIRA DE SOUZA',

        funcao: 'apoio',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4141492',
        nome: 'MATEUS RODRIGUES DOS REIS',

        funcao: 'diretoria',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4204378',
        nome: 'SARALYNNY DA SILVA NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4202760',
        nome: 'VIVIANE ALVES MACHADO LEMES',

        funcao: 'diretoria',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4204359',
        nome: 'WELLINGTON DOUGLAS DA SILVA SIQUEIRA',

        funcao: 'desbravador',
        clubeId: 25,
        password: 'senha',
      },
      {
        codigo: '4122664',
        nome: 'ALICE GABRIELA JULIE LOPES SILVA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4193931',
        nome: 'ANA CLARA BARBOSA FERREIRA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122665',
        nome: 'ANNA BEATRIZ LINS DE ARRUDA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204734',
        nome: 'DANIELLE MOREIRA DE ALMEIDA',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122667',
        nome: 'DAVID LUKAS CUNHA DUARTE',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204729',
        nome: 'EDSON OLIVEIRA BELO DE BESSA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122800',
        nome: 'EDUARDO ANTONI LOPES SILVA',

        funcao: 'apoio',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122670',
        nome: 'EMANUELLY FERNANDA DA SILVA CUNHA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4193036',
        nome: 'EVILLY MICHELLY BISPO SILVA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122673',
        nome: 'GABRIEL THOMAS FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122677',
        nome: 'GUILHERME HENRIQUE DE JESUS FERREIRA',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122678',
        nome: 'HELOISA EMANUELY LINS DE ARRUDA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204730',
        nome: 'JOÃO PEDRO INÁCIO',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122679',
        nome: 'KAITO PABLO PEDROSO SILVA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122686',
        nome: 'KARINE SOUZA DE JESUS',

        funcao: 'apoio',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122824',
        nome: 'KATI NILZA DE ALMEIDA',

        funcao: 'apoio',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4190621',
        nome: 'KAYKE GABRIEL CARVARIO DA SILVA DIAS',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122689',
        nome: 'LETICIA AQUINO FERGUSON',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204682',
        nome: 'LUIZ CARLOS ALMEIDA BATISTA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4194816',
        nome: 'MARIA ELIZA SÃO BERNARDO',

        funcao: 'apoio',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204735',
        nome: 'MATHEUS JOAQUIM DA SILVA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122706',
        nome: 'MATHEUS LOPES PELIZARIO',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204732',
        nome: 'MIGUEL OTÁVIO DA COSTA SIQUEIRA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122694',
        nome: 'NAIELY DE JESUS LIMA',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122697',
        nome: 'OTAVIO MIGUEL LOPES SILVA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4204733',
        nome: 'ROBSON KAUÃ NASCIMENTO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122715',
        nome: 'SARA DE LIMA AQUINO FERGUSON',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4203989',
        nome: 'THAYLLA VITÓRIA LOPES DA SILVA',

        funcao: 'desbravador',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122720',
        nome: 'THAYNARA TURCATO DO ESPIRITO SANTO',

        funcao: 'apoio',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122716',
        nome: 'THAYSON CLÁUDIO ESPIRITO SANTO',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4122710',
        nome: 'WESLEY AQUINO FERGUSON',

        funcao: 'diretoria',
        clubeId: 26,
        password: 'senha',
      },
      {
        codigo: '4023110',
        nome: 'ADAIR MARIA CARMOSA ALMEIDA',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4187467',
        nome: 'ADRIANA SANTANA DA SILVA',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023108',
        nome: 'ADRIANO PEREIRA DE SANTANA',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023114',
        nome: 'ALANNY VITÓRIA REIS DE VASCONCELOS',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4040929',
        nome: 'ANA BEATRIZ ARRUDDA DE FIGUEIREDO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023112',
        nome: 'ANA JÚLIA OLIVEIRA NEPONOCENO',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4208618',
        nome: 'APARECIDA NOGUEIRA DOS SANTOS',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4040912',
        nome: 'BRUNO OLIVEIRA DA COSTA',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4066056',
        nome: 'CAROLINE NUNES DA CONCEIÇÃO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4204054',
        nome: 'DANIEL MARQUES DA SILVA',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023115',
        nome: 'DEUSIMAR MARQUES DA SILVA',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4066057',
        nome: 'ELISEU ANTÔNIO DOS SANTOS',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023130',
        nome: 'FLAVIA CONCEIÇÃO RONDON DA SILVA',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023117',
        nome: 'GABRIELA ANDRESSA DE OLIVEIRA NEPONOCENO',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4040916',
        nome: 'HORLANDO SOUZA DE FRANÇA  JUNIOR',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4208616',
        nome: 'IANQUE SANTOS LEITE',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023203',
        nome: 'JANETE ALBERTON DE. OLIVEIRA NEPONOCENO',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4066167',
        nome: 'JEMIZAEL NEPONOCENO DA SILVA',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023121',
        nome: 'JOÃO PEDRO OLIVI SIMÃO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4204053',
        nome: 'JUCIENE FRANCISCA DOS SANTOS ARRUDA',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4204458',
        nome: 'KAICK BRUNO DA SILVA RIBEIRO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4187887',
        nome: 'KATYÉLE MARQUES DA SILVA',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023166',
        nome: 'KAUANNE MENDES XAVIER',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4040917',
        nome: 'LEONARDO MATOS DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023122',
        nome: 'LUANA SANTANA DE AMORIM',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4204680',
        nome: 'LUIS FERNANDO DA SILVA',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023125',
        nome: 'MATHEUS DE OLIVEIRA NEPONOCENO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4040933',
        nome: 'MILENE DA SILVA ARRUDA',

        funcao: 'diretoria',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4187807',
        nome: 'SAMOEL MATOS DE ARRUDA',

        funcao: 'apoio',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4066059',
        nome: 'SAMYLLA ANTONIA NASCIMENTO SANTANA',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4066254',
        nome: 'TAYNAN CRUZ DO ESPIRITO SANTO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4023167',
        nome: 'TAYNARA CRUZ DO ESPIRITO SANTO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4208619',
        nome: 'TOM ALLAN SILVA TEIXEIRA',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4189039',
        nome: 'VITOR HUGO TOLEDO DA CONCEIÇÃO',

        funcao: 'desbravador',
        clubeId: 27,
        password: 'senha',
      },
      {
        codigo: '4134905',
        nome: 'ABBIE GALLE AIME',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134906',
        nome: 'ADRIA KAGELY MARTINS DA SILVA',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134908',
        nome: 'ALESSANDRO MOURA SILVA',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134909',
        nome: 'BEATRIZ GOMES NEGREIROS',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134910',
        nome: 'DANIEL LUCAS DA SILVA CINTRA',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134931',
        nome: 'DANIELIS CAROLINA URBANEJA FUENTES',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134948',
        nome: 'DORIANA CARREIRA CAMILO',

        funcao: 'apoio',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134912',
        nome: 'ESTEVAN CAMILO DOS PASSOS',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134913',
        nome: 'FRANCISCO DANIEL URBANEJA FUENTES',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134946',
        nome: 'IGOR HENRIQUE DA SILVA',

        funcao: 'apoio',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134915',
        nome: 'JOSE LUCAS SILVA CINTRA',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134944',
        nome: 'JOSE PAULO GOMES DA SILVA',

        funcao: 'apoio',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134917',
        nome: 'KEYSMER ALEJANDRO ARZOLAY SABALLO',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134930',
        nome: 'LAYLA GABRIELLY EVANGELISTA SANTOS',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134940',
        nome: 'LEOSMAR ANTONIO GUEVARA LOPEZ',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134919',
        nome: 'MILANYELI ALEJANDRA ARZOLAY SABALLO',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134935',
        nome: 'MURILO SANTANA SANTOS',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134936',
        nome: 'NADIR DOS SANTOS GONÇALVES PEREIRA',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134942',
        nome: 'NATHANA MONIQUE CUNHA DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134938',
        nome: 'OMAR ELIAS REQUENA BRICENO',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134933',
        nome: 'PATRICIA RAMOS DA SILVA',

        funcao: 'apoio',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134921',
        nome: 'TITUS MEDJINE WILENSKA',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134939',
        nome: 'WEVERTON MENDONÇA SANTANA',

        funcao: 'diretoria',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134922',
        nome: 'WOL KENSLEY TITUS',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4134924',
        nome: 'YOFRAINYS VERÓNICA GOYO INFANTE',

        funcao: 'desbravador',
        clubeId: 28,
        password: 'senha',
      },
      {
        codigo: '4029077',
        nome: 'ANDERSON LUIS DA SILVA NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029178',
        nome: 'CAIO AUGUSTO PEREIRA WEBER',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029079',
        nome: 'CLAUDIA MORAIS GARCIA',

        funcao: 'diretoria',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029206',
        nome: 'CÉLIO R GARCIA',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029227',
        nome: 'EDSON MOREIRA DOS SANTOS',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029177',
        nome: 'FRANCISCO RICARDO DE SOUZA',

        funcao: 'diretoria',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029185',
        nome: 'GEDEON CARLOS DE SOUZA JUNIOR',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029187',
        nome: 'GISELY DE SOUZA SILVA',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4052399',
        nome: 'HAYANDARA LORRAYNE OLIVEIRA NOVAKOSKI',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029189',
        nome: 'HUDSON DE OLIVEIRA MARTINS',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029190',
        nome: 'JOAO AUGUSTO DA SILVA LORAGIAM',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029191',
        nome: 'JULIA KEROLAYNE MORAIS DOS SANTOS ROCHA',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4186848',
        nome: 'JULIANA MORAIS DOS SANTOS',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4122248',
        nome: 'KAROLYNE BORGES DE MATOS',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029081',
        nome: 'LAURA LOPES FERREIRA',

        funcao: 'diretoria',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029193',
        nome: 'LUCAS HENRIQUE DA SILVA NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029205',
        nome: 'LUCILENE DOS SANTOS ABREU',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4213276',
        nome: 'MARIA ZILDA DE SOUZA SANTANA',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029195',
        nome: 'PATRICIA BISCOLI DE SOUZA',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029203',
        nome: 'PAULO SÉRGIO LÚCIO DA SILVA',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029199',
        nome: 'SAMUEL MORAIS DOS SANTOS GARCIA',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4213074',
        nome: 'TAYZA VITORIA ALVES MOREIRA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029200',
        nome: 'WANDERSON ALVES DA SILVA FILHO',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4122274',
        nome: 'YACHYMA CAROLINE OLIVERA DA SILVA SOUZA',

        funcao: 'diretoria',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4029201',
        nome: 'YASMIN DOS SANTOS SOUZA',

        funcao: 'desbravador',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4149470',
        nome: 'YEAN CARLOS ROJAS',

        funcao: 'apoio',
        clubeId: 29,
        password: 'senha',
      },
      {
        codigo: '4131252',
        nome: 'ADRIELLY ARAUJO DA SILVA',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4195608',
        nome: 'ALEX MAX SOARES',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085147',
        nome: 'ALICE REIS SILVA MAGALHÃES',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4086055',
        nome: 'ANDRE GUSTAVO SOARES',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085120',
        nome: 'BIANCA LARYSSA DE LIMA REIS',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085151',
        nome: 'CALEBE ARAUJO BATISTA SIQUEIRA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085153',
        nome: 'CINTIA EMANUELLE GONÇALVES REZENDE',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085155',
        nome: 'CLARA BEATRIZ SIQUEIRA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4198761',
        nome: 'DEBORA HAPUCK DA SILVA NEVES',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085159',
        nome: 'EVANDRO CESAR DA SILVA FILIPE',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085161',
        nome: 'EVERTON HENRIQUE DA SILVA FILIPE',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085165',
        nome: 'FELIPE GABRIEL ESCOBAR MATORÉ',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128789',
        nome: 'FERNANDA LAUREN SILVA CAMPOS SANTOS',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4086084',
        nome: 'GABRIEL ANTONY MACEDO PERUZZO',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128785',
        nome: 'GIOVANNA DA CRUZ SANTANA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085171',
        nome: 'GUILHERME GONÇALVES DOS REIS',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085172',
        nome: 'HEITOR PAZ GONÇALVES DA SILVA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085173',
        nome: 'HELDER NAALAAD DA BOA MORTE NEVES',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085175',
        nome: 'HELENA VEDOVATO FERREIRA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085177',
        nome: 'ISABELE CASTILHO LIRIO CIGANO DE SOUZA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085179',
        nome: 'ISAMARA JUREMEIRA ARRUDA',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085243',
        nome: 'ISIS SOPHIA ESCOBAR MATORE',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4131250',
        nome: 'JOSIELA PEREIRA BORGES DEVAI',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085247',
        nome: 'JOÃO ANTONIO MOREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085254',
        nome: 'JOÃO EMANUEL ARRUDA WARMLING',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085259',
        nome: 'JOÃO HENRIQUE BATISTA DA SILVA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4086045',
        nome: 'JÚLIA BENTO DOS SANTOS DINIZ',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085261',
        nome: 'LAURA BORGES DEVAI MARTINS',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4131251',
        nome: 'LAURA LENE S. CAMPOS SANTOS',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128787',
        nome: 'LAVINEA WAECHTER DA CRUZ',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128790',
        nome: 'LIVIA PAZ GONÇALVES DA SILVA',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085263',
        nome: 'LIZIE PAZ GONÇALVES CUNHA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128793',
        nome: 'LUIZA PAULA DE ARAUJO BATISTA',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4086112',
        nome: 'MARIA EDUARDA VICTORIA MARTINS WELCHEN',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085268',
        nome: 'MARIANE LUIZA SOARES',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085274',
        nome: 'MATHEUS KAUAN NUNES DE ARRUDA',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085276',
        nome: 'MIGUEL BORGES DE FIGUEIREDO SILVA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085283',
        nome: 'MIRIAM ALICE GONÇALVES RIBEIRO',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4086076',
        nome: 'MONIZE GABRIELLY DA SILVA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128791',
        nome: 'MYLENA GONÇALVES AZEVEDO',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085308',
        nome: 'NICOLAS BATISTA SIQUEIRA BARROS',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085365',
        nome: 'NIELY DAYANA BORGES BISPO SOARES',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4203682',
        nome: 'ODAIR GUSTAVO MACARIO MUNIZ',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085315',
        nome: 'RIHANNE VITÓRIA S. CAMPOS SANTOS',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085318',
        nome: 'SOFIA BORGES MEDEIROS',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085330',
        nome: 'THAILA GONCALVES VENTURA DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128788',
        nome: 'THAYLLA CRISTINA CAMPOS SOARES',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085350',
        nome: 'THAYNA GONÇALVES VENTURA DE CAMPOS',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085337',
        nome: 'THIAGO ALVES  MAKUS',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085339',
        nome: 'THIAGO VICTOR DE MIRANDA MONTEIRO',

        funcao: 'apoio',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085342',
        nome: 'VICTOR HUGO TEIXEIRA COELHO',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4128792',
        nome: 'VITOR FRANCISCO REGIS DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4086047',
        nome: 'WESLEY LEANDRO DA SILVA',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085359',
        nome: 'YASMIM LEANDRA DA SILVA',

        funcao: 'diretoria',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4085345',
        nome: 'YASMIN DE OLIVEIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 30,
        password: 'senha',
      },
      {
        codigo: '4082775',
        nome: 'ANTÔNIO RUDSON DOS REIS DE SOUSA',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083507',
        nome: 'BRYAN VINÍCIUS ECKERT SOARES',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082778',
        nome: 'CAIO BACELAR DE CAMPOS',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082785',
        nome: 'DANIEL BACELAR DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082818',
        nome: 'DAVILA SOUSA PROTACIO',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082870',
        nome: 'DEBORA SOUSA PROTACIO',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082906',
        nome: 'ELINETI MOREIRA BACELAR DE CAMPOS',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083485',
        nome: 'ESTER DOS SANTOS SOUZA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082876',
        nome: 'GABRIELLY GOTARDO VIER',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082853',
        nome: 'GEICIANE BACELAR OISSA',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082961',
        nome: 'HELOISA DE SOUZA MOREIRA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082909',
        nome: 'ITALO DOS SANTOS DA SILVA',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083400',
        nome: 'JEFFERSON DOUGLAS DE ARAÚJO DUTRA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083390',
        nome: 'JÚLIA GABRIELI SANTOS DO AMARAL',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082860',
        nome: 'KAUA VITOR FERREIRA SILVA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082847',
        nome: 'KAUANI DE ARAÚJO DO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4121731',
        nome: 'MARIA FERNANDA FARIAS DE CARVALHO',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083403',
        nome: 'MARIA LEILA DOS SANTOS SOUZA',

        funcao: 'apoio',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083393',
        nome: 'MARLON HENRIQUE SOARES',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082787',
        nome: 'MILENA EVELYN CRUZ DE CARVALHO',

        funcao: 'apoio',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082828',
        nome: 'RAFAEL BACELAR OISSA',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082932',
        nome: 'RAFAEL PROTÁCIO RODRIGUES',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082935',
        nome: 'RAFAELA DOS SANTOS COSTA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083508',
        nome: 'RAFAELLA DOS SANTOS PROTÁCIO',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083380',
        nome: 'RAYLA PEREIRA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082910',
        nome: 'RICARDO PINHEIRO DO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4083305',
        nome: 'SAMUEL SOARES PATEIS',

        funcao: 'apoio',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082882',
        nome: 'STEPHANIE DA SILVA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082912',
        nome: 'VALDECIR OISSA',

        funcao: 'apoio',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082949',
        nome: 'VINICIUS DE SOUZA MOREIRA',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4082884',
        nome: 'YONARA PEREIRA SANTOS',

        funcao: 'desbravador',
        clubeId: 31,
        password: 'senha',
      },
      {
        codigo: '4077759',
        nome: 'ABGAIL SOUSA VIANA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140318',
        nome: 'ALEKSSANDRO ARRUDA PAIXÃO',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140324',
        nome: 'ALLISON MANGABEIRA HONORIO',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082043',
        nome: 'ANTHONY PEREIRA NUNES',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082049',
        nome: 'ARIANY VITÓRIA CARVALHO HONORIO',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082127',
        nome: 'BIANCA BRANDAO DA SILVA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140310',
        nome: 'CAIO RAFAEL DA COSTA LOURENO',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4204360',
        nome: 'CAMILLA DUARTE SANTOS',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4208215',
        nome: 'DEUSELY SILVA SOUSA VIANA',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140363',
        nome: 'EVELYN DUARTE DOS SANTOS',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4146389',
        nome: 'FLAY JUNIOR DOS SANTOS PEIXOTO DA SILVA',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140368',
        nome: 'FRANCISCA BEATRIZ OLIVEIRA DE LIMA GOMES',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140365',
        nome: 'FRANCISCA DEYSE BIANCA OLIVEIRA DE LIMA',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082130',
        nome: 'FRANCISCO DYASSIS OLIVEIRA DE LIMA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4140372',
        nome: 'GABRIELE BARBOSA CARMOS',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144305',
        nome: 'GABRIELE DOS SANTOS SILVA',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082094',
        nome: 'ISABELLY VITORIA PEREIRA NUNES',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082106',
        nome: 'JAISSON KAUÃ LEAL PAES',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144308',
        nome: 'JOICI KAUNE DOS SANTOS BORGES',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144312',
        nome: 'JOÃO VICTOR ALVES DA SILVA',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144316',
        nome: 'KETHELY NAYARA ALVES DA COSTA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4082108',
        nome: 'LARISSA GABRIELY ALVES PEIXOTO DA SILVA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144320',
        nome: 'LEANDRO VIEIRA DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144322',
        nome: 'LEONARDO NEVES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144324',
        nome: 'LEONECIO MARCIANO GOMES DE LIMA',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4149398',
        nome: 'LUIZA VITORIA PEREIRA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4207501',
        nome: 'MARIA JOSE GONÇALVES PEREIRA',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144329',
        nome: 'MARYANNA DA CRUZ MOREIRA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144356',
        nome: 'NAYARA SANTANA PAIXÃO JULIANI',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144355',
        nome: 'PEDRO HENRIQUE ALVES PEIXOTO DA SILVA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144358',
        nome: 'RENATA ALVES DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4208102',
        nome: 'ROZELI BACH FERGUTZ',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4146398',
        nome: 'SANDRA DUARTE DA SILVA',

        funcao: 'apoio',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4144398',
        nome: 'SARA FREITAS MENDONÇA',

        funcao: 'desbravador',
        clubeId: 32,
        password: 'senha',
      },
      {
        codigo: '4189383',
        nome: 'ANDRESSA MARTINS MORETO',

        funcao: 'apoio',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067826',
        nome: 'ANDRÉ MARQUES DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067810',
        nome: 'ANNA CRISTINA SANTOS LEAL',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067829',
        nome: 'ANNA JULIA CAMARGO SILVA',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4088634',
        nome: 'BRUNO TRINDADE DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067835',
        nome: 'DAVID GUSTAVO FÉLIX DA SILVA',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4088576',
        nome: 'EDUARDO NEPOMUCENA LANDVOIGT DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067830',
        nome: 'EMANOELY MARETO CORDEIRO',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067837',
        nome: 'IASMIM MARQUES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067832',
        nome: 'IGOR LOPES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067839',
        nome: 'JAEDER GUIMARAES COLOMBO',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4189385',
        nome: 'JOSÉ LUCAS OLIVEIRA ALVES',

        funcao: 'diretoria',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067842',
        nome: 'MARIA ISABEL CAMARGO DA LUZ',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4202000',
        nome: 'NATHALI DE OLIVEIRA SHULTZ MACHADO',

        funcao: 'apoio',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4201974',
        nome: 'ROSENY DE OLIVEIRA MACHADO',

        funcao: 'apoio',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4202003',
        nome: 'ROSILAINE APARECIDA FREITAS MATTOS',

        funcao: 'apoio',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4088589',
        nome: 'SAMIRA FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067846',
        nome: 'SAMUEL CORREIA SOUZA',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4088631',
        nome: 'VICTOR GABRIEL REIS SARAIVA',

        funcao: 'diretoria',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067847',
        nome: 'VICTORIA MENDONÇA PIMENTEL ALVES',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4067849',
        nome: 'WILLIAN MATTOS WEBER',

        funcao: 'diretoria',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4088649',
        nome: 'YASMIN DOS SANTOS SILVA',

        funcao: 'desbravador',
        clubeId: 33,
        password: 'senha',
      },
      {
        codigo: '4123903',
        nome: 'ANNA RACKELLY RODRIGUES GONÇALVES',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4197858',
        nome: 'CARLOS MIGUEL BABINSKI',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002381',
        nome: 'CREODETE DA COSTA PRADO MARTINS',

        funcao: 'apoio',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4123913',
        nome: 'ENDER JESUS GARCIA LOPEZ',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4197862',
        nome: 'GABRIEL BORGES MATIAS',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002496',
        nome: 'GEOVANA DE SOUZA CAMPOS',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4123911',
        nome: 'HENDIMAR ALEXANDRA VILLA LOBOS GARCIA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4203699',
        nome: 'ISADORA EDUARDA LEORATTO SARAIVA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002385',
        nome: 'ISAQUE OLIVEIRA DE ALMEIDA FIGUEIREDO',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4204728',
        nome: 'JHUAN CASTILHO OLIVEIRA LIRIO',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002390',
        nome: 'LORENA OLIVEIRA DE ALMEIDA FIGUEIREDO',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002540',
        nome: 'LUANNA OHANNA SANTOS OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4203704',
        nome: 'LUCAS EDUARDO SOARES DA SILVA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002392',
        nome: 'LUCIANA FIGUEIREDO DA CRUZ',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4123908',
        nome: 'MARIA EDUARDA FERREIRA DE MIRANDA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4203978',
        nome: 'MARINÊZ DE OLIVEIRA CRUZ DOS SANTOS',

        funcao: 'apoio',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4125066',
        nome: 'NICOLAS DE SOUZA MENEZES',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4203701',
        nome: 'ODETE ACELINA CARVALHO LIMA',

        funcao: 'apoio',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4123906',
        nome: 'PABLO MIGUEL DOS SANTOS RODRIGUES FERREIRA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4132818',
        nome: 'PAOLA MARTINS DA COSTA',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4203710',
        nome: 'PEDRO HENRIQUE DAVID SANTANA CRUZ',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002397',
        nome: 'PRISCILLA DA COSTA MARTINS',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4132816',
        nome: 'RAIANE NAYARA LIMA DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002403',
        nome: 'RIAN VIEIRA DE ALMEIDA FERREIRA',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4152539',
        nome: 'RICARDO DA COSTA MARTINS',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4195606',
        nome: 'RICARDO GONÇALVES DA CRUZ',

        funcao: 'apoio',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4195618',
        nome: 'SABRINA VITÓRIA SOUZA TAQUES MARTINS',

        funcao: 'desbravador',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002659',
        nome: 'VILMA TIEEN  LÍRIO',

        funcao: 'apoio',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4002404',
        nome: 'WELYSSON AQUINO FERGUSON',

        funcao: 'diretoria',
        clubeId: 34,
        password: 'senha',
      },
      {
        codigo: '4204508',
        nome: 'ALDENILSON BULCÃO FERREIRA',

        funcao: 'diretoria',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4126818',
        nome: 'ANNA KAROLINA CARDOSO PEREIRA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204058',
        nome: 'ARTUR ALVES LUZ',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120648',
        nome: 'BONYER BEATRIZ ARAUJO DA SILVA',

        funcao: 'diretoria',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120659',
        nome: 'BRENO CESAR MAGALHÃES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4084479',
        nome: 'CAUAN RODRIGUES DE SOUZA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4084488',
        nome: 'DANIEL SANTOS FRAISSAT',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4194770',
        nome: 'ELIMAR DOS SANTOS SILVA',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4084495',
        nome: 'EMMILY VITORIA MEDRADO DE MOURA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120661',
        nome: 'FAGNER GONÇALVES DE MELO',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4126593',
        nome: 'FAGNER LUZ PIMENTEL',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120664',
        nome: 'GABRIEL NUNES DE MORAEIS',

        funcao: 'diretoria',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204496',
        nome: 'HADASSA CHARROW PEREIRA COSTA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120667',
        nome: 'IOLANDA LOURENÇO DE SOUZA',

        funcao: 'diretoria',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4084525',
        nome: 'JOÃO VICTOR CALISTO DOS REIS',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4194780',
        nome: 'KELLY JEANE RAMOS CAMPOS',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4143530',
        nome: 'LAYRANA ARAÚJO SILVA SOUZA',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204568',
        nome: 'LAYS FERREIRA COSTA',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120672',
        nome: 'LUCAS FRANCISCO DE SOUZA MORAES',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120804',
        nome: 'MARCELO BARBOSA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120679',
        nome: 'MARIA APARECIDA GONÇALVES DO NASCIMENTO',

        funcao: 'diretoria',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120683',
        nome: 'MARIA LUIZA ARAÚJO MARACAIPES.',

        funcao: 'diretoria',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4199912',
        nome: 'MIGUEL NUNES DE MORAES',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204055',
        nome: 'QUENTINO SEVERNO ALVES',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4203983',
        nome: 'RAQUEL OZORIO DE SOUZA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204498',
        nome: 'REBECA CHARROW PEREIRA COSTA',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120685',
        nome: 'RODRIGO MIRANDA SOARES',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204693',
        nome: 'SIMÃO COSTA DE JESUS',

        funcao: 'desbravador',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4120689',
        nome: 'WILLY GONÇALVES NASCIMENTO',

        funcao: 'apoio',
        clubeId: 36,
        password: 'senha',
      },
      {
        codigo: '4204562',
        nome: 'AGEU MARTINS ARAUJO',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082438',
        nome: 'ALINNE EDUARDA SIQUEIRA NOGUEIRA',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082439',
        nome: 'ANA CAROLLYNE CIRQUEIRA DE MORAIS',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4204559',
        nome: 'ANA JULIA DA SILVA GIEHL',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082442',
        nome: 'ANA ZATTA MARIN',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4136650',
        nome: 'ANTÔNIO CARLOS AMORIM CAMARGO',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4188991',
        nome: 'ANÍZIA CRISTINY GONÇALVES PEREIRA SOUZA',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4188994',
        nome: 'CARLA DOS REIS DA SILVA',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4130210',
        nome: 'CHARLES LEONARDO DE OLIVEIRA DO NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082443',
        nome: 'CLARA CRAUSS SOLETTI',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4121782',
        nome: 'DANIEL STECKER SANTOS',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4196283',
        nome: 'DENISE GALVAN BRAFF DE CASTELLO BRANCO',

        funcao: 'apoio',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082551',
        nome: 'ELIENE FÁTIMA DE LARA SILVA',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082453',
        nome: 'ELISA REINISCH',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4189013',
        nome: 'ENILDA RODRIGUES TERRES ANTUNES',

        funcao: 'apoio',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082456',
        nome: 'ERICA CRISTINA CIRQUEIRA DA SILVA DE MORAIS',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082458',
        nome: 'FRANCIELLE TERRES ANTUNES',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082500',
        nome: 'GABRIEL SILVA DE CARVALHO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082503',
        nome: 'GABRIELA TERRES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082504',
        nome: 'GRAZIELLA LOPES DOS SANTOS E SILVA',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4188993',
        nome: 'GUILERME HENRIQUE LEITE RUAS',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082507',
        nome: 'GUSTAVO NICOLAO',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082510',
        nome: 'HELENA BRAFF DE CASTELLO BRANCO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4196278',
        nome: 'HYAN PIETRO BEZERRA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082513',
        nome: 'JOSIVALDO NASCIMENTO DE AMORIM',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082516',
        nome: 'JOSMÁRIO RODRIGUES DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082518',
        nome: 'JOÃO PEDRO BRAFF DE CASTELO BRANCO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4204572',
        nome: 'JOÃO VITOR RIGO LEITE',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4196279',
        nome: 'KAUAN LEANDRO ALBRECHT',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082520',
        nome: 'LARA CRAUSS PEDÓ',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4136635',
        nome: 'LAYRONN WISLEY DA LUZ RIBEIRO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4121781',
        nome: 'LORRAINE BERNARDO DE SOUZA',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082523',
        nome: 'LUDMILA DA SILVA MARQUES',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4189000',
        nome: 'MAIREN BEATRIZ SOUZA DA SILVA',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4203445',
        nome: 'MARILEI HILLER GHEDINI',

        funcao: 'apoio',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4129054',
        nome: 'MICHELLE CRISTINA ROCHA DA CRUZ',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4204506',
        nome: 'NATALLY PEREIRA DE MELLO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4204503',
        nome: 'NATAN DA SILVA CAMPOS',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4121790',
        nome: 'NUBIA REGINA STECKER SANTOS',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082525',
        nome: 'OTÁVIO  MIGUEL ARAÚJO PRIMON',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082528',
        nome: 'OTÁVIO LEANDRO RODRIGUES',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082529',
        nome: 'REBECA BOTELHO DE CAMPOS',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082533',
        nome: 'VINICIUS NICOLAO',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4121796',
        nome: 'VITORIA MELK VIEIRA NUNES',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4121799',
        nome: 'WELLINGTON JOSE MEIRA RAMOS',

        funcao: 'diretoria',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082536',
        nome: 'YANN DA SILVA SOUSA',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082539',
        nome: 'YASMIN LARA COSTA MARQUES',

        funcao: 'desbravador',
        clubeId: 37,
        password: 'senha',
      },
      {
        codigo: '4082009',
        nome: 'ALANA LOUISE SANTOS DE CASTRO',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072593',
        nome: 'ANNE GABRIELLA DE SOUZA MARINHO',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072681',
        nome: 'ARTHUR FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4070081',
        nome: 'CAUANE QUEIROS MARTINS LAIKOVSKI',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4081980',
        nome: 'CHRYSTIAN PEREIRA COSTA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4082001',
        nome: 'DAYANE SAMARA CAMPOS ALVES',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065537',
        nome: 'ELIDA PINHEIRO DA SILVA CRUZ',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4070087',
        nome: 'ELLEN CRISTHINY PINHEIRO DA CRUZ',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4148024',
        nome: 'EMANUELLY SILVA QUEIROZ',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065494',
        nome: 'EMILY R ARTIAGA',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4185676',
        nome: 'ERSIVAL PEREIRA ARTIAGA',

        funcao: 'apoio',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065495',
        nome: 'FRANCIS PEREIRA ARTIAGA',

        funcao: 'apoio',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065496',
        nome: 'FRANCISCO SOARES DA SILVA',

        funcao: 'apoio',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4082004',
        nome: 'GEOVANA VELHO DO VALE',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4068421',
        nome: 'HYGOR HENRIQUE DE ARAUJO ARTIAGA',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4204463',
        nome: 'JANNE AMORIM ARTIAGA',

        funcao: 'apoio',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4148026',
        nome: 'KEIRRISSON RODRIGUES DA SILVA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4147972',
        nome: 'KELY CRISTINA RODRIGUES DA SILVA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4082016',
        nome: 'LAURA CHRISTINA DOS SANTOS CASTRO',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065542',
        nome: 'LEANDRO SILVA DE LIMA',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072603',
        nome: 'LUIZ SÉRGIO ROSA DA CRUZ',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4070085',
        nome: 'MAIMISSON PEREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065540',
        nome: 'MARCIA PEREIRA DE MORAIS',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4185696',
        nome: 'MARCOS ANTÔNIO PEREIRA DE SOUSA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4204316',
        nome: 'MARIA ANTÔNIA CORREIA SILVA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065533',
        nome: 'MARIA JANETE CUSTÓDIO BATISTA',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072606',
        nome: 'MATEUS DA SILVA BARROS',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072679',
        nome: 'NICOLA SILVA BARROS',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4081966',
        nome: 'PRISCILLA ALVES DE MATOS',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072612',
        nome: 'SABRINA OLIVEIRA COSTA',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4065492',
        nome: 'SILVIA MARIA R. ARTIAGA',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4151422',
        nome: 'VALDINEIVA SOUZA SILVA',

        funcao: 'apoio',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4072617',
        nome: 'VICTOR GABRIEL MARINHO NEPOMUCENO',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4082003',
        nome: 'YASMIM LOPES DE ALMEIDA',

        funcao: 'diretoria',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4081974',
        nome: 'YASMIN MARQUES CONSOLI',

        funcao: 'desbravador',
        clubeId: 35,
        password: 'senha',
      },
      {
        codigo: '4136665',
        nome: 'ADNA KERLLEN DOS SANTOS SILVA',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4203662',
        nome: 'ALEXANDRE SANTOS MACEDO',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4139042',
        nome: 'ALINE KACHINSKI RIBEIRO',

        funcao: 'apoio',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136670',
        nome: 'CAUÃ FERREIRA DE MELLO',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4138988',
        nome: 'CLEINE CORREIA DA SILVA',

        funcao: 'apoio',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4138975',
        nome: 'DIEGO MOURA SANTOS',

        funcao: 'apoio',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136679',
        nome: 'FERNANDA GONÇALVES WANDERLEY',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136680',
        nome: 'FRANCILENE DOS SANTOS SILVA',

        funcao: 'diretoria',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136682',
        nome: 'ISABELLA DE PAULA CARDOSO',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136707',
        nome: 'JACIRA MACHADO BARBOSA',

        funcao: 'diretoria',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4208707',
        nome: 'KETHLYN ISABELLA SOARES ALVES',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4203657',
        nome: 'LUISA MIRIAN FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4203659',
        nome: 'LUNA ALVES DA SILVA',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136691',
        nome: 'MARIA ISABELY BRITO BELEM',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136700',
        nome: 'MEIRE DA SILVA',

        funcao: 'apoio',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136711',
        nome: 'MILENA NATALINE PROCOPIO',

        funcao: 'diretoria',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4208729',
        nome: 'MIRELLY SOUSA DE ALMEIDA',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4208710',
        nome: 'MONALISA SILVA ARANTES',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136694',
        nome: 'ROBSON GUSTAVO SANTOS RESENDE',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4203661',
        nome: 'VALENTINA VITORIA ALVES',

        funcao: 'desbravador',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136718',
        nome: 'VALQUIRIA FERREIRA DOS ANJOS',

        funcao: 'diretoria',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136715',
        nome: 'VANDERLÉIA DA LUZ DE PAULA',

        funcao: 'diretoria',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4136709',
        nome: 'WILLEN RARYTTON DE SOUZA ROSA',

        funcao: 'diretoria',
        clubeId: 38,
        password: 'senha',
      },
      {
        codigo: '4147230',
        nome: 'CARLOS EDUARDO MOREIRA FARIA',

        funcao: 'apoio',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146762',
        nome: 'CHRYSTIAN MIGUEL FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146763',
        nome: 'CLARA BEATRIZ ATAIDES JESUS',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4147254',
        nome: 'DÂMARYS TAVARES DA SILVA',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4149697',
        nome: 'EDREANO JUNIOR ROSSI RINALDI',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4149686',
        nome: 'ELISAMA GOETZ',

        funcao: 'apoio',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146776',
        nome: 'FERNANDA GABRIELA CAMPOS DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146781',
        nome: 'GUILHERME RAFAEL KLEIN DA SILVA',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146784',
        nome: 'JHONNY OLIVEIRA RIBEIRO',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4186298',
        nome: 'LAURIENE BORGES SILVA',

        funcao: 'apoio',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146785',
        nome: 'LUKS GABRIEL CAMPOS DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146789',
        nome: 'MAYARA CRISTYNA BASSO DE JESUS',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146793',
        nome: 'MIGUEL FIGUEIREDO DANTAS ELIAS',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146795',
        nome: 'MIRELLA ESTELINA NASCIMENTO SANTANA',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4186303',
        nome: 'NATHALYA EVANGELISTA MARQUES',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146800',
        nome: 'NAÃMIH DA SILVA HONORATO',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4146997',
        nome: 'RAFAEL FERREIRA FARIA',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4200825',
        nome: 'RENACY SOARES MARQUES',

        funcao: 'apoio',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4186334',
        nome: 'ROBSOM RODRIGO BATISTA  DA SILVA',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4147000',
        nome: 'SAMIRA GOETZ',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4186331',
        nome: 'SUELI DA  SILVA',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4147158',
        nome: 'SUELLEN SILVA HONORATO',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4147002',
        nome: 'VITÓRIA MEDEIROS ESTEVES CARLOS',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4188612',
        nome: 'WALQUIRIA NASCIMENTO',

        funcao: 'apoio',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4147165',
        nome: 'WANDERSON FRANCISCO DE JESUS',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4186097',
        nome: 'YURI FERNANDES DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4147003',
        nome: 'ÉRICK ANDRADE SANTOS',

        funcao: 'desbravador',
        clubeId: 39,
        password: 'senha',
      },
      {
        codigo: '4066804',
        nome: 'ALANNA LIMA DE MATOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066808',
        nome: 'ALBERT COSTA HOFFMAN',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066810',
        nome: 'ALEX ALEXANDRE DE OLIVEIRA VIANA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066814',
        nome: 'ALEX DOS SANTOS DA COSTA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066812',
        nome: 'ALINA EMANUELLE DA SILVA LIMA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066815',
        nome: 'ANA CAROLINA ARRUDA SOARES',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066817',
        nome: 'ANA CAROLINE CÂMARA AMORIM PEREIRA',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066818',
        nome: 'ANA JÚLIA ARRUDA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066820',
        nome: 'ANGELINA CIOTTA SELES BERNINE',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066821',
        nome: 'ARLAN CAMPOS',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066823',
        nome: 'ARTHUR BARBOSA CARDOSO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066825',
        nome: 'ARTHUR DA COSTA HOFFMANN',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4121412',
        nome: 'ARTHUR DE LIMA REIS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4186729',
        nome: 'BRENDA ROCHA ZAZATT',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066827',
        nome: 'DANIEL GUSTAVO SABINO DE LIMA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066831',
        nome: 'DAVI VICENTE SILVA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4187860',
        nome: 'ELOYSA   FURQUIM  PAES  DOS  SANTOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066833',
        nome: 'EMANUELLY RIBEIRO DE CASTRO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066837',
        nome: 'ENDREW RODRIGUES DA SILVA CAROLLO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066839',
        nome: 'ERICK GABRIEL OLIVEIRA DE ANDRADE',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4185769',
        nome: 'EYTOR FURQUIM PAES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066843',
        nome: 'FELIPE BARBOSA GOUVEIA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067048',
        nome: 'FRANCISCA DE SALES BEZERRA',

        funcao: 'apoio',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066846',
        nome: 'GABRIEL SABINO SOARES DA SILVA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066852',
        nome: 'GABRIELLI NUNES LAUREANO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066951',
        nome: 'HELENA GABRIELA DE MOURA PAZ',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066952',
        nome: 'ISABELLE  ASSUNÇÃO DA SILVA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066954',
        nome: 'ISABELLE THAYNÁ BRAZ DE AZEVEDO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066955',
        nome: 'ISRAEL AUGUSTO DE OLIVEIRA VARANDA',

        funcao: 'apoio',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066957',
        nome: 'JOAO VICTOR ALVES DE CASTRO E SILVA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066958',
        nome: 'JOAO VITOR RONDON DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066959',
        nome: 'JORGE LOURENÇO ARAÚJO DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066963',
        nome: 'JOSÉ ENRIQUE ANDRADE FIGUEIREDO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066967',
        nome: 'JULIA NATALI MARTINS AMORIN',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066969',
        nome: 'KARINY RIBERO OLEGÁRIO',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066971',
        nome: 'KAUAN SOUZA SCHNEIDER',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066972',
        nome: 'KLARISSE YASMIN SOUSA DIAS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066980',
        nome: 'LAURA FERNANDA VAZ RIBEIRO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066974',
        nome: 'LUCAS DE EMÍDIO FARIAS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066978',
        nome: 'LUIS FELIPE ALVES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066984',
        nome: 'LUIZ FERNANDO SANTOS RIBEIRO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066982',
        nome: 'LUÍS FELLYPE ALMEIDA DE AZEVEDO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066987',
        nome: 'MAELI CRISTINA DE SIQUEIRA COSTA',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066994',
        nome: 'MANOEL FRANCELINO DA SILVA NETO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066989',
        nome: 'MANOEL HENRIQUE LIMA DOS REIS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4215061',
        nome: 'MARCOS SANTOS ANDRADE',

        funcao: 'apoio',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066991',
        nome: 'MARIA CLARA DOS SANTOS RIBEIRO',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067046',
        nome: 'MARIA DAS GRAÇAS SILVA COSTA',

        funcao: 'apoio',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4066996',
        nome: 'MARIA EDUARDA MOURA BASTOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067002',
        nome: 'MARIA FERNANDA DE MORAES',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067004',
        nome: 'MARIA FERNANDA DE SOUZA PEDROSA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067007',
        nome: 'MARIA LUCIANA E SILVA ROSA',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067008',
        nome: 'MARIANA SOUZA HOUKLEF',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067010',
        nome: 'MIGUEL DE EMÍDIO FARIAS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067012',
        nome: 'NATHALIA CRISTINA DE SIQUEIRA COSTA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4186731',
        nome: 'NICOLAS ROCHA ZAZATT',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067013',
        nome: 'NICOLLY BEVILACQUA CONTRIN',

        funcao: 'apoio',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067014',
        nome: 'PATRICK ADAN SANTANA DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067015',
        nome: 'PEDRO CARLOS BATISTA SANTOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067017',
        nome: 'PEDRO FELIX DE MIRANDA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067020',
        nome: 'PEDRO LUCAS GONÇALVES DE LIMA MACHARET',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067022',
        nome: 'RANDER PAULO DA COSTA',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067024',
        nome: 'RAPHAEL DE PAULA ARRUDA CAMPOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067025',
        nome: 'REBECCA BUENO GONZALES',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067026',
        nome: 'ROBERT WESLEY DE MOURA PAZ',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067029',
        nome: 'SAMARA THAIS CARVALHO QUARESMA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067031',
        nome: 'SARA TEIXEIRA TARGINO',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067034',
        nome: 'SARAH EMANUELLY P DE ANDRADE',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067047',
        nome: 'SEBASTIANA MARQUES DE SOUZA',

        funcao: 'apoio',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067035',
        nome: 'THALLES PIETRO LEAL SILVA DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067036',
        nome: 'THAYLLA IZABELLY MORAES DE AGUIAR',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067424',
        nome: 'VÍTOR HUGO ZANATTA',

        funcao: 'diretoria',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4067038',
        nome: 'YAGO GABRIEL BEZERRA MORAES DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 40,
        password: 'senha',
      },
      {
        codigo: '4204050',
        nome: 'ADRIANO SANTOS MALTA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151643',
        nome: 'ANA GABRIELLY DOS REIS CARVALHO',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151228',
        nome: 'CARLOS EDUARDO MORAES SOARES',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149535',
        nome: 'CRISOLITO MILENIO DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4150970',
        nome: 'DANILO DIVINO  FERNANDES JUNIOR',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151728',
        nome: 'DEBOH MARINE SILVA CRUZ',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149416',
        nome: 'DENNER PIETRO SOUZA PATRICIO',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149438',
        nome: 'EDILAINE TÁSSIA FERREIRA CRUZ',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151507',
        nome: 'EDILEISE BANDEIRA DE JESUS',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149620',
        nome: 'ERICK PATRICK LIMA ANDRADE',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151658',
        nome: 'ESTER DOS SANTOS PEREIRA SILVA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151394',
        nome: 'FERNANDO COSTA SANTOS',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4150887',
        nome: 'GABRYELLE CAMILO RODRIGUES DA SILVA',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151515',
        nome: 'GUSTAVO BEZERRA DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149440',
        nome: 'HALANA VITÓRIA SOUSA TAVARES',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4204676',
        nome: 'HEITOR SORES MOURA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149472',
        nome: 'HELIO VICTOR KULCENTY SA SILVA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151032',
        nome: 'HELLEN NAYARA PEREIRA NEVES',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149422',
        nome: 'INGO SERGIO DA SILVA FILHO',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4204677',
        nome: 'IRACEMA FERNANDES DA CONCEIÇÃO',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4150977',
        nome: 'ISAAC ARAUJO GUIMARAES',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149465',
        nome: 'JAMILLY LIMA SILVA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149469',
        nome: 'JEMIME BARREIRA CAMPOS',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4204673',
        nome: 'JOYLSON SOUZA SILVA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151234',
        nome: 'JULIA MICAELLY SILVA CONCEIÇÃO',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149632',
        nome: 'KAROLYNE COSTA SANTOS',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151556',
        nome: 'KAYKY SOARES DOS SANTOS',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149635',
        nome: 'KELY PATRICIA SOUZA DE LIMA',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149426',
        nome: 'LARISSA KELLY FERREIRA DA SILVA',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151290',
        nome: 'LIAN SINHORELI DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151506',
        nome: 'LIGIA S.KULCENTY',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149531',
        nome: 'LUDMILA ARAUJO DA COSTA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149562',
        nome: 'MARIELE SOUSA FERNANDES',

        funcao: 'diretoria',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149474',
        nome: 'PIETRO HAGAEL DE ALMEIDA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149800',
        nome: 'PRISCILLA CAMILO RODRIGUES DA SILVA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4150356',
        nome: 'RAISLANE MOREIRA MACHADO',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151334',
        nome: 'RAYNER SILVA COELHO',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151056',
        nome: 'RODRIGO LOPES FREITAS',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4204051',
        nome: 'ROSANGELA FERREIRA CAMILO',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149403',
        nome: 'SERGIO AUGUSTO FERREIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149431',
        nome: 'SERGIO GABRIEL SOUZA PATRICIO',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149546',
        nome: 'VICTOR HUGO SILVA ARAUJO',

        funcao: 'desbravador',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4149657',
        nome: 'VICTOR MATEUS BARREIRA DA SILVA',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4151579',
        nome: 'WESLEY COSTA NERATH',

        funcao: 'apoio',
        clubeId: 41,
        password: 'senha',
      },
      {
        codigo: '4203675',
        nome: 'ADILSON EXPEDITO DA SILVA',

        funcao: 'apoio',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202688',
        nome: 'ANA CLARA SOUSA OZZA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4203652',
        nome: 'BRUNO RINALDI DO SANTOS',

        funcao: 'diretoria',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202698',
        nome: 'CAROLINE RIBEIRO FRANCO',

        funcao: 'diretoria',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202523',
        nome: 'ENZO GABRIEL SOUZA DE ALMEIDA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202813',
        nome: 'ERONEIDE GOMES ARRUDA',

        funcao: 'apoio',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202724',
        nome: 'JHENNEFY JHÚLIA SOUSA RODRIGUES',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202725',
        nome: 'JHOSEFI SOUSA RODRIGUES',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202691',
        nome: 'JOÃO CARLOS BARBOSA DANTAS',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202583',
        nome: 'JULIANA  SANTANA CLARO RODRIGUES DA SILVA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202692',
        nome: 'KALEO ANDERSON ALMEIDA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202696',
        nome: 'KASSIANO ROSENO DE JESUS',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4203683',
        nome: 'M-LAYNEE COELHO LOPES DA CRUZ MARTINS',

        funcao: 'apoio',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4204456',
        nome: 'MATEUS HENRIQUE ALVES CAMARGO',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202718',
        nome: 'PAULO ROGÉRIO BATISTA DA COSTA',

        funcao: 'apoio',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202519',
        nome: 'RAICA DE OLIVEIRA ARRUDA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202513',
        nome: 'RAISSA CRISTINA DE OLIVERIA A. SILVA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202694',
        nome: 'RAQUEL LIONES DA COSTA',

        funcao: 'diretoria',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202716',
        nome: 'SARAH MIELICA DE  ALCÂNTARA ARAUJO',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202689',
        nome: 'VALDIVINO MARTINS DE FREITAS',

        funcao: 'apoio',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4203970',
        nome: 'VANESSA LIONES DA COSTA',

        funcao: 'apoio',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202697',
        nome: 'VITOR GABRIEL SAMPAIO DA COSTA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4203986',
        nome: 'VIVIAN THAINA SAMPAIO COSTA',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4202509',
        nome: 'WILLIAN ALMEIDA DE ABREU',

        funcao: 'desbravador',
        clubeId: 42,
        password: 'senha',
      },
      {
        codigo: '4126364',
        nome: 'ANA JULIA PORTELLA PANOSSO',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126433',
        nome: 'ANTONIO REIS DA SILVA FILHO',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126362',
        nome: 'ARTHUR MORALES CARVALHO DE JESUS',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126365',
        nome: 'BRENDA GABRIELLY AMARAL PONTES',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126419',
        nome: 'BRUNA DOS SANTOS SOUZA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126367',
        nome: 'CAROLINA CLAUDIA BORTOLOTTO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126434',
        nome: 'CLEITON DOS SANTOS SILVA',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126361',
        nome: 'DANIELA PRATI SILVA',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126432',
        nome: 'DANIELY MUZZO ALVES GRASSIA',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126485',
        nome: 'ELEN DOS SANTOS',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126404',
        nome: 'ELIANE MAITELLI PEREIRA DE MORAES',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126375',
        nome: 'EMILI VITÓRIA DE OLIVEIRA DE ARRUDA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126371',
        nome: 'ENZO MOURA CRIVELLI',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126428',
        nome: 'ENZO ZEMBRSKI CASTRO LORINI',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126370',
        nome: 'EVANDRO PIAIA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126376',
        nome: 'FRANCISCA MYKAELLEM DE JESUS LIRA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126527',
        nome: 'GABRIELLE VITORIA DE MELLO CAMPOS',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126393',
        nome: 'GUILHERME RODRIGO CAVALIERI CARVALHO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126395',
        nome: 'GUSTAVO FERREIRA DE JESUS',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126360',
        nome: 'HARLEI NEANDER KAPTEINAT',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126488',
        nome: 'ISAQUE ALVES CARDOSO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126418',
        nome: 'JOSIANE CLAUDIA DOS SANTOS',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126417',
        nome: 'JULIA DE FREITAS BORGES',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126491',
        nome: 'JULIETE DE SOUZA CASTRO',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126490',
        nome: 'KAUA DE MELLO GAUDENCIO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126459',
        nome: 'KEVILYN FASSICOLO DE ALMEIDA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126431',
        nome: 'LETÍCIA CONCEIÇÃO DE OLIVEIRA',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126410',
        nome: 'MARCOS BATISTA DE MORAES',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126435',
        nome: 'MARIA EDUARDA VILELA DE SOUZA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4204358',
        nome: 'MARIA HELOISA CABRAL SANTOS',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126421',
        nome: 'MARLI DE MOURA KAPTEINAT',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126455',
        nome: 'MATHEUS VINICIUS LEITE COSTA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126373',
        nome: 'MIGUEL PORTELLA PANOSSO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126453',
        nome: 'PAULA RAISSA DE LIMA MAIA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126396',
        nome: 'PAULO HENRIQUEDA SILVA COIMBRA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126427',
        nome: 'RAFAEL DOS SANTOS RIBEIRO',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126398',
        nome: 'RAISSA MAITELLI D. DE MORAES',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126472',
        nome: 'RENAN DE MOURA KAPTEINAT',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126389',
        nome: 'RENAN LUIS VAEZ FASSICOLO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126450',
        nome: 'RHAPHAEL PHELLYPE PINHEIRO DE SOUZA',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126420',
        nome: 'ROGERIO ANTONIO BORGES',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126438',
        nome: 'ROSENILDA VILELA DO REGO',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126422',
        nome: 'ROSENILZA DE FATIMA FREITAS',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126415',
        nome: 'SOFIA SCHMIDT',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126467',
        nome: 'THAYS PEREIRA BARBOSA',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126413',
        nome: 'VALCELÍ DE LIMA GONÇALVES',

        funcao: 'diretoria',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126386',
        nome: 'VALENTINA MORBECK SAMPAIO',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126379',
        nome: 'VALENTINA MOURA CRIVELLI',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126425',
        nome: 'VINICIUS FERREIRA DE JESUS',

        funcao: 'apoio',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126391',
        nome: 'VITOR DE FREITAS BORGES',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126387',
        nome: 'VITORIA PEREIRA MARTINS',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4126525',
        nome: 'WESCLEY ZEMBRZUSKI CASTRO LORINI',

        funcao: 'desbravador',
        clubeId: 43,
        password: 'senha',
      },
      {
        codigo: '4132319',
        nome: 'ANA LUZIA DE OLIVEIRA CRUZ',

        funcao: 'apoio',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132311',
        nome: 'BENEDITO TADEU DEL BARCO',

        funcao: 'apoio',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132346',
        nome: 'DANIEL MARTINS DOS ANJOS',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4204325',
        nome: 'DARALINE GOMES XAVIER',

        funcao: 'diretoria',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132299',
        nome: 'EDUARDO HENRIQUE SANTANA SILVA',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4135228',
        nome: 'ELIEL PIRES GONCALVES',

        funcao: 'diretoria',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4130',
        nome: 'EMILY KAROLYNE SANTANA SILVA',

        funcao: 'diretoria',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132306',
        nome: 'EMYLLY SILVA FILSINGER',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132291',
        nome: 'GEANDRO SOUZA BARROS',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132301',
        nome: 'GIULLIA MARIA BARROS SILVA',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132297',
        nome: 'GUSTAVO AUGUSTO SILVA FARIAS.',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132285',
        nome: 'IZABELLA SOARES DA CRUZ NASCIMENTO',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132345',
        nome: 'JORGE GABRIEL SILVA ALBUQUERQUE',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4138',
        nome: 'KAWANNE MYRELLE LIMA RIBEIRO',

        funcao: 'diretoria',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132309',
        nome: 'KLEBER AUGUSTO PIRES',

        funcao: 'diretoria',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132305',
        nome: 'LARISSA ADRIANE DA SILVA FARIA',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4134',
        nome: 'LUCINEIDE DA SILVA RIBEIRO DOS SANTOS',

        funcao: 'apoio',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132292',
        nome: 'MARCELO HENRIQUE DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132317',
        nome: 'MARIA SANTANA',

        funcao: 'apoio',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4204318',
        nome: 'MAYCON WENDISLEY FERNANDES MORAES',

        funcao: 'diretoria',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132283',
        nome: 'SOPHYE CAROLINE DA CRUZ',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4132296',
        nome: 'ÀVILA ESTHER BARBOSA DA SILVA',

        funcao: 'desbravador',
        clubeId: 44,
        password: 'senha',
      },
      {
        codigo: '4198606',
        nome: 'ALDORI BORGES DE QUADROS',

        funcao: 'apoio',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088202',
        nome: 'ANA CAROLINE PORTELA PINHEIRO',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088203',
        nome: 'ANAHI RAFAELA HELFENSTEIN SCHIPANSKI',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088204',
        nome: 'BRUNNA MYLENY SILVA ALVES',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088206',
        nome: 'CAMILI LANGER R. PFEIFER',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4197314',
        nome: 'CARLOS EDUARDO ARAUJO DE FARIAS',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088215',
        nome: 'CATIANE REINHEIMER PFEIFER',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088217',
        nome: 'CRISTIANE DE SOUZA',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088218',
        nome: 'CRISTIANE SANTANA GUIMARÃES',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088219',
        nome: 'DAVID SANTANA ALVES',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088223',
        nome: 'ELLEN FERNANDA PFEIFER',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088225',
        nome: 'ENZO SILVESTRE AGUIAR CAVALCANTE',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088227',
        nome: 'FELYPPE PFEIFER DIAS',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088228',
        nome: 'FLÁVIO MACIEL SOUSA CARDOSO',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088197',
        nome: 'GERLANIA DANTAS DA SILVA VALADAO',

        funcao: 'apoio',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088230',
        nome: 'GRAZIELLE SILVA DA SILVA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4189632',
        nome: 'GUSTAVO HENRIQUE ARAUJO SILVA',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4197306',
        nome: 'ISABELI SOUZA REZENDE',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088263',
        nome: 'ISABELLA CAROLINE SILVA GOMES',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088233',
        nome: 'JHENIFER SANTANA ALVES',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088234',
        nome: 'JOSE AGUIAR ALVES',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088235',
        nome: 'JOÃO EMANUEL BEZERRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088237',
        nome: 'KARINY SILVA MENEZES',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088238',
        nome: 'KELVIN HENRIQUE HOEHN BOLSANELLI',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088240',
        nome: 'KETLYN VITÓRIA DE OLIVEIRA SILVA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088242',
        nome: 'LEONARDO COLINS DOS PASSOS',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4189633',
        nome: 'LUDMILA DE SOUSA SILVA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088243',
        nome: 'MARCIO DOS SANTOS BARBOSA',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088245',
        nome: 'MAXUEL MENDES BARBOSA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088247',
        nome: 'MICAEL PEREIRA BARBOSA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4203120',
        nome: 'MOISES SILVA LUZ',

        funcao: 'apoio',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088248',
        nome: 'PATRICIA DE OLIVEIRA SILVA',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088249',
        nome: 'PEDRO EMANOEL SOUZA FERREIRA',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4198604',
        nome: 'PEDRO HENRIQUE DA SILVA ANDRADE',

        funcao: 'apoio',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088253',
        nome: 'PEDRO HENRIQUE DE SOUZA BUZZIN',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4189636',
        nome: 'RENATA CAVALCANTE DE ASSUNÇÃO',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088254',
        nome: 'RENNAN PORTELO RODRIGUES',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4189638',
        nome: 'SIDINEI BUZZIN',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088259',
        nome: 'THAIS SOLIDADE DE SOUSA SILVA',

        funcao: 'diretoria',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4088261',
        nome: 'WALQUIRIA SOUZA BARROS',

        funcao: 'desbravador',
        clubeId: 45,
        password: 'senha',
      },
      {
        codigo: '4057103',
        nome: 'ALCIDES GOMES',

        funcao: 'apoio',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4056470',
        nome: 'ALICE SOPHYA PEREIRA DE OLIVEIRA',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015837',
        nome: 'ANDREIA BARBOSA DA SILVA',

        funcao: 'diretoria',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4137533',
        nome: 'ANTHONY KAWAN RIBEIRO DA CONCEIÇÃO',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4185500',
        nome: 'CARLOS HENRIQUE DA SILVA JORDAO',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015846',
        nome: 'CRISTIAN CARLA DE CAMPOS',

        funcao: 'diretoria',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015870',
        nome: 'DANUZA MORAES FERREIRA ANDRADE',

        funcao: 'apoio',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4016203',
        nome: 'DIEGO BENICIO BARRETO BITENCOURT',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015848',
        nome: 'DIOGO MAKARVER SIMÕES DE SOUZA',

        funcao: 'apoio',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015868',
        nome: 'EDUARDO FELIPE PEREIRA VARGAS LOBO',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015844',
        nome: 'ELOIZA MORAES ANDRADE',

        funcao: 'diretoria',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4133049',
        nome: 'FABIO ALEXANDRE ALVES DE ALMEIDA',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4052599',
        nome: 'GUILHERME AUGUSTO CAMPOS DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015853',
        nome: 'HEITOR MATHEUS SOARES GOMES',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015841',
        nome: 'ISAQUE SOARES DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015839',
        nome: 'KENIER ROBERT DA SILVA',

        funcao: 'diretoria',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4052594',
        nome: 'LUIZ GABRIEL LIMA GOMES',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015855',
        nome: 'LUÍZA BARBOSA SELVÁTICO',

        funcao: 'diretoria',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4016205',
        nome: 'MARCOS VINICÍUS DA SILVA PRADO',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015849',
        nome: 'MATEUS ARMANDO RIBEIRO DE FREITAS',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4016213',
        nome: 'MICAEL MORAES ANDRADE',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015856',
        nome: 'RAYANE NERY SOUZA',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015851',
        nome: 'REBECA ARMANDO RIBEIRO DE FREITAS',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4133060',
        nome: 'REBECA MOREIRA LUCAS FREIRE',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015871',
        nome: 'ROMILDA ARANTES PINHEIRO',

        funcao: 'apoio',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015843',
        nome: 'SOFIA RESENDE FRAGA',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4015858',
        nome: 'SOPHIA DA SILVA MAXIMIANO',

        funcao: 'desbravador',
        clubeId: 46,
        password: 'senha',
      },
      {
        codigo: '4065926',
        nome: 'ADRIANO SILVA DE SOUZA',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065930',
        nome: 'ANNA VITORIA SIQUEIRA DA SILVA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4087011',
        nome: 'ARLENE PINHO DOS SANTOS SILVA',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075186',
        nome: 'CARLOS GABRIEL  ANDRADE',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4148900',
        nome: 'ECLAUDEMIR BRUGNOLI',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075123',
        nome: 'EDER CARLOS DA SILVA',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065936',
        nome: 'ELIANE PINHO DOS SANTOS',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4087071',
        nome: 'ELMA REGINA MARTINS VARGAS',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075263',
        nome: 'EVANIA SANTANA DE MORAES',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4203635',
        nome: 'FLÁVIA ALESSANDRA ALVES DA SILVA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4148928',
        nome: 'GIANLUCA MEDEIROS',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4148910',
        nome: 'GIULIA MEDEIROS COSTA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075121',
        nome: 'GUILHERME AMORIM FRANÇA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075124',
        nome: 'HEYLANDER ALEXANDRE RODRIGUES FERNANDES',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065933',
        nome: 'IZADORA OLIVEIRA PINHO DOS SANTOS',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075187',
        nome: 'JOAO GABRIEL DA SILVA SOUZA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065934',
        nome: 'JOEDILSON LUIZ DE MORAES',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065928',
        nome: 'JOILSON SANTOS DE MORAES',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065938',
        nome: 'JÚLIA FRATARI ANDRADE',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4203565',
        nome: 'KELVIN DOS REIS MARINHO',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4203633',
        nome: 'KIMBERLY LORRAINE RODRIGUES LECHENER',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075023',
        nome: 'LORENA CRISTINA MACHADO BRUNO DA SILVA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075172',
        nome: 'LUCAS DA SILVA COSTA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075174',
        nome: 'LUIS GUSTAVO SILVA DE MORAES',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4065932',
        nome: 'LUIZ AUGUSTO OLIVEIRA DOS SANTOS',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4204293',
        nome: 'LUIZ FELIPE NEVES SOUZA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4086964',
        nome: 'LURDES APARECIDA DE SOUZA',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075185',
        nome: 'MARCIA RAQUEL DE AMORIM FRANÇA',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4086953',
        nome: 'NAYARA PESSIDONIO  NASCIMENTO MACHADO',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075183',
        nome: 'PEDRO HENRIQUE FRATARI DA CRUZ',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4148976',
        nome: 'PEDRO KAUAN DOS SANTOS BORGES',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4203636',
        nome: 'ROBSON DE MELO ANDRADE',

        funcao: 'apoio',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4087073',
        nome: 'SAMUEL PINHO DOS SANTOS SILVA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075063',
        nome: 'SIDNEY ANTUNES JÚNIOR',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075180',
        nome: 'SILVANIA DOS SANTOS  E SILVA MORAES',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4148913',
        nome: 'THAWANY GABRIELLY DE LIMA MARTINS',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4086955',
        nome: 'WANDERSON LECHENER',

        funcao: 'diretoria',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075111',
        nome: 'WILLIAM ROCHA DA GLORIA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4075178',
        nome: 'YGOR MOREIRA DE SIQUEIRA',

        funcao: 'desbravador',
        clubeId: 1,
        password: 'senha',
      },
      {
        codigo: '4207500',
        nome: 'AGATHA DA SILVA FEREIRA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4207409',
        nome: 'CRISTÓVÃO RODRIGUES DA SILVA',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4185485',
        nome: 'MARCIONE RIBEIRO FERNANDES',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4185483',
        nome: 'VALERIA TAVARES PEREIRA BRASILEIRA',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4180878',
        nome: 'AGATHA DANIELLY MIRANDA EISTEDT',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4059657',
        nome: 'LUCIENE BONIFÁCIO DOS SANTOS',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4057683',
        nome: 'MARISA GEWEHR DE SOUZA',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4057669',
        nome: 'OTAVIO OLIVEIRA SANTOS',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4049011',
        nome: 'DAVI LOPES BOLSON',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043174',
        nome: 'PATRÍCIA SILVA PAULA RODRIGUES',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043173',
        nome: 'PAULO KAUAN RIBEIRO CAMPOS',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043172',
        nome: 'RAFAEL TIRLONI',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043170',
        nome: 'RIVALDO VALENZUELA GAMARRA',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043169',
        nome: 'SAMUEL ANDRADE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043167',
        nome: 'SAULLO DE LIMA RIZZI',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043165',
        nome: 'SIMONE GONÇALVES BUENO',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043164',
        nome: 'SOPHIA BRITO NUNES',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043163',
        nome: 'THAÍSA KAWTHEN MOREIRA CORREIA',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043159',
        nome: 'SORAIA SANTOS GIACOMINI',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043156',
        nome: 'VITOR CRISTIANO TAVARES FERREIRA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043153',
        nome: 'OTAVIO MARIANO ALENCAR GARCIA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043148',
        nome: 'NILSON DOS SANTOS PENTEADO',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043136',
        nome: 'MICHELE GEWEHR MOTTA',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4043135',
        nome: 'MELISSA SILVA LOURES',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042626',
        nome: 'MELISSA GUIMARÃES DE AZEVEDO',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042617',
        nome: 'MELISSA GEWEHR MOTTA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042613',
        nome: 'MARLENE BORGES DE QUADROS',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042611',
        nome: 'LUCIO ADALBERTO MOTTA FILHO',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042609',
        nome: 'LETICIA MENDES DELLAI',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042606',
        nome: 'LEO BARBOSA LUFT',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042605',
        nome: 'LAURA GABRIELLY BONIFÁCIO DA SILVA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042603',
        nome: 'JOAQUIM TORRES SALAMONI',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042524',
        nome: 'LARYSSA RODRIGUES PENTEADO',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042523',
        nome: 'ISMAEL DOS SANTOS SOUSA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042521',
        nome: 'ISABELLY VITÓRIA DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042519',
        nome: 'ISABELLA FERNANDES ANADÃO MOLINA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042517',
        nome: 'ISAAC OLIVEIRA ZANDONÁ',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042513',
        nome: 'ISAAC FERNANDES MARTINEZ',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042511',
        nome: 'HELENA BEATRIZ MURIBECA COSTA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042509',
        nome: 'GUILHERME SOARES GARCIA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042507',
        nome: 'GABRIELLY ARAUJO DEBASTIANI',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042505',
        nome: 'FERNANDO ARTUR FERREIRA DE MORAES',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042501',
        nome: 'ELOISA FERREIRA DE SOUZA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042500',
        nome: 'DAVI OLIVEIRA GIANSANTE',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042499',
        nome: 'CLEONICE RODRIGUES PEREIRA',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042497',
        nome: 'BENJAMIN ANTONIO DE JESUS VARJAO',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042495',
        nome: 'ARTHUR ZAMBENETTI',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042494',
        nome: 'ANA MARIA SOUZA DA SILVA',
        funcao: 'diretoria',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042493',
        nome: 'LUANA AMBROSIO DA SILVA DUTRA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042489',
        nome: 'SOPHIA SOUZA OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042487',
        nome: 'EDSON LUCAS SOUZA OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4042483',
        nome: 'PATRICIA RODRIGUES DA SILVA PENTEADO',
        funcao: 'apoio',
        clubeId: 47,
        password: 'senha',
      },
      {
        codigo: '4052991',
        nome: 'ANA JULIA PORTELLA PANOSSO',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4052990',
        nome: 'APARECIDO DE MENEZES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4043613',
        nome: 'JOSE WALDIR FERREIRA GRAIA',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041182',
        nome: 'AGATHA CAMILY MORAES FELIPE',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041181',
        nome: 'MARIA INES TAVELLA',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041179',
        nome: 'SOLANGE FERREIRA BRÁS',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041163',
        nome: 'SANDRA XAVIER DO AMARAL',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041161',
        nome: 'JULIETE DE SOUZA CASTRO',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041056',
        nome: 'BRYAN ASRIEL DE OLIVEIRA GONÇALVES',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4041055',
        nome: 'AMANDA LIMA DE MATOS',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4031025',
        nome: 'MARIA  PEREIRA ALVES DE LIMA',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4030958',
        nome: 'ANA PAULA DA ROCHA TORRES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023650',
        nome: 'LUIS SAMUEL PEREIRA ALVES LIMA',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023642',
        nome: 'VICTOR GABRIEL SILVA',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023641',
        nome: 'LUCAS DA SILVA COIMBRA',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023638',
        nome: 'ELIANE MAITELLI PEREIRA DE MORAES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023636',
        nome: 'JHEMYS MOISES DA SILVA NUNES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023634',
        nome: 'ALINE CRISTINA SANTOS RODRIGUES NUNES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023633',
        nome: 'ALICE EMANUELLY RODRIGUES NUNES',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023632',
        nome: 'ADRYAN LUAN LOPES NUNES',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023630',
        nome: 'MARISA BEATRIZ POLITO',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023628',
        nome: 'LARISSA VITORIA AMARAL RIBEIRO',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023626',
        nome: 'MAYKA VICTORIA CASTRO LORINI',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023624',
        nome: 'MARIA VICTORIA DA ROCHA O.CALDEIRA',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023622',
        nome: 'YASMIM DE MELO GUDÊNCIO',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023620',
        nome: 'MIGUEL AMARAL PONTES',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023619',
        nome: 'DANIELY MUZZO ALVES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4023618',
        nome: 'ANNA BELLY VARGAS LIMA',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '3967623',
        nome: 'RONEI VILAS BOAS DE SOUZA',
        funcao: 'diretoria',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '3953679',
        nome: 'RIANE ABREU VILAS BOAS',
        funcao: 'desbravador',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '3953677',
        nome: 'LUCIRLENE MARIA DE JESUS NUNES',
        funcao: 'diretoria',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '3953676',
        nome: 'MARCOS BATISTA DE MORAES',
        funcao: 'apoio',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '3953674',
        nome: 'CAMILA PORTELLA PANOSSO',
        funcao: 'diretoria',
        clubeId: 48,
        password: 'senha',
      },
      {
        codigo: '4203717',
        nome: 'ROSIANE DOS SANTOS W. LEITE',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4056453',
        nome: 'PEDRO HENRIQUE MARQUES PADILHA',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4056389',
        nome: 'FLÁVIO MARCÍLIO BISPO BRANDÃO',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4056388',
        nome: 'EDIANA PAULA DUARTE DA SILVA',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4052784',
        nome: 'CLECIANE MAXIMIANO TABILE',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4052618',
        nome: 'ISABEL MOIA SOUZA',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4052527',
        nome: 'DANIELLE PINHEIRO DE SOUSA',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4039923',
        nome: 'NATHAN AQUINO FERREIRA',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016118',
        nome: 'KAUAN BRYAN MOIA CABRAL',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016117',
        nome: 'ISABELLA LEME NETO BRANDÃO',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016116',
        nome: 'PAULA VANESSA LEME NETO BRANDÃO',
        funcao: 'diretoria',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016115',
        nome: 'HELENA MAXIMIANO GONÇALVES',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016113',
        nome: 'SÉRGIO CORRÊA GONÇALVES',
        funcao: 'apoio',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016112',
        nome: 'POLLIANA DE JESUS FRAGA DA CRUZ',
        funcao: 'diretoria',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016110',
        nome: 'RHUAN LEONARDO NERES DUARTE',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016109',
        nome: 'RAFAELLE DOS SANTOS LEITE',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016105',
        nome: 'MURILO RESENDE FRAGA',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016103',
        nome: 'NILVA SUELY SILVA RESENDE',
        funcao: 'diretoria',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016100',
        nome: 'MELISSA EVILYN SILVA RESENDE',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016099',
        nome: 'LUIZA PINHEIRO RAMALHO',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016097',
        nome: 'ISABELLA KAUANY DE ALMEIDA SANTOS',
        funcao: 'desbravador',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016006',
        nome: 'ILANA DE OLIVEIRA SHULTZ MACHADO',
        funcao: 'diretoria',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016005',
        nome: 'KENIER ROBERT DA SILVA',
        funcao: 'diretoria',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4016004',
        nome: 'ANA IZADORA CARNEIRO DOS SANTOS',
        funcao: 'diretoria',
        clubeId: 49,
        password: 'senha',
      },
      {
        codigo: '4151783',
        nome: 'JOSÉ ROBERTO PACHECO JÚNIOR',
        funcao: 'apoio',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4126902',
        nome: 'BRUNA ROSA DE ANDRADE',
        funcao: 'diretoria',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4063675',
        nome: 'MARIA APARECIDA S.N.TEIXEIRA',
        funcao: 'diretoria',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054653',
        nome: 'GUSTTAVO LORENZO DA SILVA SOUZA PACHECO',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054652',
        nome: 'ENZO GABRIEL DA SILVA PACHECO',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054650',
        nome: 'ELIANE MARIA DA SILVA',
        funcao: 'diretoria',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054647',
        nome: 'THEILLOR GABRIEL PEREIRA DE SOUZA',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054646',
        nome: 'MARIA EDUARDA DE LIMA PACHECO',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054644',
        nome: 'LUCAS SILVA SANTOS',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4054641',
        nome: 'MONICA NOGUEIRA DE LIMA',
        funcao: 'apoio',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018914',
        nome: 'LARYSSA ANDRADE DE JESUS',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018904',
        nome: 'SAMARA REBEKA GOMES DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018899',
        nome: 'LEONARDO CESAR MARQUES DE SOUSA',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018896',
        nome: 'ICARO KAUAN DE JESUS',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018812',
        nome: 'NILDA GOMES DA SILVA',
        funcao: 'diretoria',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018810',
        nome: 'FELLIPE FERREIRA DE SOUZA',
        funcao: 'desbravador',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018808',
        nome: 'VALDINEIA SANTOS LIMA',
        funcao: 'apoio',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018748',
        nome: 'ADILÂINE GUTIERRES',
        funcao: 'diretoria',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4018744',
        nome: 'ELIS REGINA LOPES DE SOUZA',
        funcao: 'diretoria',
        clubeId: 50,
        password: 'senha',
      },
      {
        codigo: '4134903',
        nome: 'NATHIELLY MARA LEIDE SILVA',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4134901',
        nome: 'VITÓRIA APARECIDA OLIVEIRA CASTRO',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4134897',
        nome: 'CALDENI MARTINS DE OLIVEIRA',
        funcao: 'apoio',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4134896',
        nome: 'GLAUCIA TRINDADE LIMA DE OLIVEIRA',
        funcao: 'apoio',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043419',
        nome: 'HELOISA DA TRINDADE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043417',
        nome: 'LAÍS SANTOS FUGIMURA CORREA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043415',
        nome: 'GABRIELA GOMES DE MELO',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043413',
        nome: 'BRUNA FERNANDA CARDOSO',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043411',
        nome: 'LIVIA CAROLINE SANTOS DA SILVA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043410',
        nome: 'TANIA IZABEL SANTOS DE SOUZA',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043409',
        nome: 'YAM MARCHESE OLIVEIRA FERREIRA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043408',
        nome: 'YASMIM ALVES MARCHESE',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043407',
        nome: 'ALEXANDRA GOMES SEREIA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043405',
        nome: 'LUIZ HENRIQUE LOREIAN SILVA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043403',
        nome: 'ETHYELLE DAMACENA DE ALMEIDA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043401',
        nome: 'JANAINA DAMACENA ZANOLI DE ALMEIDA',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043399',
        nome: 'ELIEZER SIMÃO DE ALMEIDA',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043398',
        nome: 'NATHALYA VITORIA OLIVEIRA ALMEIDA',
        funcao: 'desbravador',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4043397',
        nome: 'MARCIA HELENA DE OLIVEIRA ABREU',
        funcao: 'diretoria',
        clubeId: 51,
        password: 'senha',
      },
      {
        codigo: '4213163',
        nome: 'DEUZIRENE BORBA DA SILVA',
        funcao: 'diretoria',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4213161',
        nome: 'CAMILA ALVES RODRIGUES',
        funcao: 'diretoria',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4203559',
        nome: 'PEDRO HYNACIO SILVA LOIOLA',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4154126',
        nome: 'YURE GEHAD FERNANDES SILVA',
        funcao: 'diretoria',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4056524',
        nome: 'TAWAN DOS REIS SILVA SOUZA',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4056504',
        nome: 'JOSIMAR SOUSA GOMES',
        funcao: 'diretoria',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4056501',
        nome: 'KAUAN ABELARDO PIETROBON SIPAUBA',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055232',
        nome: 'GUILHERME OLIVEIRA FERNANDES',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055211',
        nome: 'JHONATTAN KALLEBE SILVA SANTOS',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055193',
        nome: 'DAVI OLIVEIRA BARBOSA',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055190',
        nome: 'JOAO VITOR ANASTACIO SILVA',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055183',
        nome: 'GUSTAVO HENRIQUE ANASTACIO SOBRINHO',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055180',
        nome: 'YASMIN RODRIGUES',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055178',
        nome: 'KEMILLY ABREU SOUSA',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055175',
        nome: 'CALEBE AIRES LUZ',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055173',
        nome: 'KETLEN NAYARA LOPES ABREU',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055171',
        nome: 'STEFANY LATIFY ANDRADE DE JESUS',
        funcao: 'desbravador',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055167',
        nome: 'ROSICLER A. REZENDE MACHADO',
        funcao: 'apoio',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055165',
        nome: 'GILVANIA SOUZA GOMES',
        funcao: 'apoio',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055161',
        nome: 'RUTIMAR LOPES DE CARVALHO DANTAS',
        funcao: 'diretoria',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055159',
        nome: 'CLEIDE CORREIA DA SILVA MENESES',
        funcao: 'diretoria',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055157',
        nome: 'JOELMA DA SILVA LUZ',
        funcao: 'apoio',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055156',
        nome: 'JOAO BOSCO TELES SANTOS',
        funcao: 'apoio',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4055153',
        nome: 'JODACY GASPAR DANTAS',
        funcao: 'apoio',
        clubeId: 52,
        password: 'senha',
      },
      {
        codigo: '4196190',
        nome: 'ARTHUR MOACIR DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4196184',
        nome: 'MIGUEL BELIZARIO DE PAULA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4196179',
        nome: 'HENRIQUE EMANUEL SANTOS DE LIMA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4196169',
        nome: 'EMMANUEL CAMPOS D SILVEIRA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4055300',
        nome: 'DAVI SANTOS DE LIMA',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4054519',
        nome: 'EVELIN LAVIGNE MARQUES SILVA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4053182',
        nome: 'MARIA NAZARETH RODRIGUES',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4045313',
        nome: 'VITORIA HELENA SOUSA SANTOS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4043810',
        nome: 'CLAUCIA JULIA WOLFF KEMP',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4043808',
        nome: 'FELIPE ALVES DE SOUZA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4043301',
        nome: 'EMANUELLY FERREIRA LOPES MARTINS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4043036',
        nome: 'JUSTINA ALVES DE SOUZA',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4043031',
        nome: 'CLEIDEMAR CABRAL CAMPOS',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4042799',
        nome: 'MÁRCIA DA SILVA PAULINO MATOS',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4042435',
        nome: 'KELY CRISTINA VIEIRA DE SOUZA',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041862',
        nome: 'MARIA DANIELE LOPES DA SILVA',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041802',
        nome: 'MARIANA MARIA FERREIRA DE ARAUJO',
        funcao: 'apoio',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041684',
        nome: 'REBECA NICOLE ARAÚJO MATOS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041682',
        nome: 'HAISON NICOLAS ARAUJO MATOS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041545',
        nome: 'SARA AURORA SANTOS DE LIMA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041542',
        nome: 'PEDRO FERREIRA LOPES MARTINS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041540',
        nome: 'PAULO PEREIRA CAMPOS',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041538',
        nome: 'JOÃO LUCAS FERREIRA DE BARROS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041537',
        nome: 'MARIA JULIA EVALDT BORGES DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041535',
        nome: 'KAIQUE MARQUES DE OLEIVEIRA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041534',
        nome: 'MARIA FERNANDA TIBÚRCIA DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041531',
        nome: 'EDER PORTIL DA SILVA',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041528',
        nome: 'LUCIENE TIBURCIO DE OLIVEIRA',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041527',
        nome: 'GUILHERME GLVES BRIDI',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041525',
        nome: 'DAVI ELIAS WOLF KENP',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041523',
        nome: 'ERIKA MARIANA SANTOS SOUZA',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041522',
        nome: 'GABRIELLA OLIVEIRA PORTI SILVA',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041521',
        nome: 'JAIR VARGAS DA VEIGA',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041520',
        nome: 'FELIPE LOURENÇO PAULINO MATOS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041519',
        nome: 'ISABELLY LOUISE MARTINS',
        funcao: 'desbravador',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041517',
        nome: 'GRACIELLA OLIVEIRA SILVA',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4041515',
        nome: 'BEATRIZ VEIGA FRANCISCO DE OLIVEIRA',
        funcao: 'diretoria',
        clubeId: 53,
        password: 'senha',
      },
      {
        codigo: '4201125',
        nome: 'GEISIANE OLIVEIRA DE SOUZA',
        funcao: 'apoio',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4201124',
        nome: 'EULÁLIA DA SILVA BOTELHO',
        funcao: 'diretoria',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4198734',
        nome: 'LUCCA SILVA PANIAGO',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4198699',
        nome: 'KARLA CRISTINA BATISTA SANTOS',
        funcao: 'apoio',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4198694',
        nome: 'FÁBIO FÁTIMO SILVA DE SOUZA',
        funcao: 'apoio',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4198691',
        nome: 'ELIAS SOUZA DUTRA',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056972',
        nome: 'FABIO FATIMO SILVA DE SOUZA',
        funcao: 'apoio',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056962',
        nome: 'SOFIA CRISTINA DE CAMPOS',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056955',
        nome: 'SARA TERESA ALMEIDA GOMES',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056953',
        nome: 'NICOLLY DA SILVA PAELO',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056952',
        nome: 'ISABELLA BATISTA SANTOS',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056950',
        nome: 'ISABELA SILVA CORREIA',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056948',
        nome: 'FELIPE SOARES DA SILVA',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056945',
        nome: 'ELIZABETH DA LUZ GONÇALVES',
        funcao: 'diretoria',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056943',
        nome: 'DAVI FERNANDO MACEDO DA SILVA',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056942',
        nome: 'CRISLENI FARIA DE CAMPOS',
        funcao: 'diretoria',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056940',
        nome: 'CLAUDINEI DA SILVA GOMES',
        funcao: 'apoio',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056939',
        nome: 'ANTHONNY RAPHAEL DA CRUZ BOTELHO',
        funcao: 'desbravador',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056937',
        nome: 'ANA MARIA VALDIVINO DA SILVA',
        funcao: 'apoio',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4056936',
        nome: 'ADNIR MIRANDA NUNES',
        funcao: 'diretoria',
        clubeId: 54,
        password: 'senha',
      },
      {
        codigo: '4204377',
        nome: 'NAICEMIRA FERNANDES PILICIE',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4204375',
        nome: 'CLEUDESON SOUZA E SILVA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4204373',
        nome: 'ROSA GABRIELA FERNANDES NERES',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4204371',
        nome: 'MARLEI MENDES FONSECA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4204367',
        nome: 'GILSON MIRANDADOS SANTOS',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4147886',
        nome: 'CLARA LUCIA FERREIRA MIRANDA MENDES',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4146676',
        nome: 'CLARISLEY SILVA SOUZA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4146372',
        nome: 'SOPHIA AIRES MIRANDA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4146367',
        nome: 'DAIANA DE OLIVEIRA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4146358',
        nome: 'ANGELLYCA BEATRYS MIRANDA DA SILVA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4061369',
        nome: 'JOÃO EMANUEL SERAFIM BASTOS',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4061308',
        nome: 'JOÃO LUCAS BATISTA DA COSTA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4061302',
        nome: 'VITOR VALDEZ DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059603',
        nome: 'NATHÁLIA MARQUES PANZERA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059594',
        nome: 'MARIANA MIRANDA MACHADO',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059586',
        nome: 'ISABELA BATISTA NOGUEIRA DO SANTOS',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059583',
        nome: 'KELVIN KAIQUE',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059582',
        nome: 'JOSÉ FABIO MIRANDA FERRAZ',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059577',
        nome: 'GUSTAVO MIRANDA FERRAZ',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059575',
        nome: 'GUILHERME OLIVEIRA DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059573',
        nome: 'CALOS JOSÉ MARQUES PANIAGO',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059568',
        nome: 'LUCAS MIRANDA FERRAZ',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059565',
        nome: 'CARLOS DANIEL MIRANDA LUZ',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059562',
        nome: 'MIGUEL CRUZ SOUZA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059560',
        nome: 'MARIA EDUARDA CRISTO MENDONÇA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059559',
        nome: 'EVELYN EMANUELLE DE SOUZA MIRANDA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059557',
        nome: 'MATHEUS SOKOLOSKI SENA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059556',
        nome: 'TIFFANY REZENDE SOARES',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059554',
        nome: 'VITOR ROCHA SOCOLOSKI',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059553',
        nome: 'NELCELI MIRANDA DE AZEVEDO',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059552',
        nome: 'MAYTÊ FIDELIS FERREIRA',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059550',
        nome: 'LAIS FIDELIS SOUSA MARTINS',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059549',
        nome: 'HEITOR ROCHA SOCOLOSKI',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059545',
        nome: 'DAVI SANTOS FRAISSAT',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059532',
        nome: 'MARIA LUIZA ARAÚJO MARACAIPES.',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059530',
        nome: 'VANESSA LUZ DE PAULA MIRANDA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059526',
        nome: 'LUCINAITH MARIA CRISTO',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059522',
        nome: 'MAISA PEREIRA COSTA SOKOLOSKI',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059514',
        nome: 'IEDA JOSÉ DE O. ARAUJO',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059507',
        nome: 'GUILHERME SILVA CABRAL',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059505',
        nome: 'FAGNER LUZ PIMENTEL',
        funcao: 'diretoria',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059504',
        nome: 'LAYRANA ARAÚJO SILVA SOUZA',
        funcao: 'diretoria',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059502',
        nome: 'ELIMAR DOS SANTOS SILVA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059501',
        nome: 'BONYER BEATRIZ ARAUJO DA SILVA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059499',
        nome: 'ANA LIMA DOS SANTOS',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059498',
        nome: 'FABIANA APARECIDA REZENDE DA SILVA SOARES',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059480',
        nome: 'FELIPE FERNANDES COSTA CABRAL',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059470',
        nome: 'MARIZETE ARAUJO DA SILVA',
        funcao: 'apoio',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4059182',
        nome: 'ADRIEL CONCEIÇÃO NUNES FILHO',
        funcao: 'desbravador',
        clubeId: 55,
        password: 'senha',
      },
      {
        codigo: '4207303',
        nome: 'GILMEIRE ALBERTONI ROMERA',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4201910',
        nome: 'GYSELE MARTINS DE MENEZES MORAIS',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4146325',
        nome: 'CLAUDINEI SOTO RUIZ',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4143869',
        nome: 'CAMILLA SANTOS MACHADO',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055240',
        nome: 'GEAN LUCAS MENEZES MORAIS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055239',
        nome: 'ALLANA MARIA LIMA OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055237',
        nome: 'CELISVÂNIA DA SILVA LIMA',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055231',
        nome: 'KARLA ANDREINA MARTELO CASTRO',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055213',
        nome: 'LOURIVAL LEIF LEAL',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055205',
        nome: 'GENYERBETH ABEL ESHLEIDER QUILARQUE MARTELO',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055202',
        nome: 'GABRIEL SANTIAGO MOURA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055191',
        nome: 'JOÃO VITOR BARCELOS VILELA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055187',
        nome: 'ARTHUR BARCELOS VILELA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055184',
        nome: 'ISABELLY GERMANO DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055181',
        nome: 'LIZ EDUARDA MACHADO TREVISOL',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055177',
        nome: 'MATHEUS HENRIQUE MENDES CAMPOS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055154',
        nome: 'PEDRO RAFAEL BARRETO RAMOS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055152',
        nome: 'REBEKA VITÓRIA PORTO',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055150',
        nome: 'THAYSA MARIA DO ESPIRITO SANTO',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055138',
        nome: 'VALDENOR DA SILVA DIAS',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055137',
        nome: 'SABRINA FONSECA MACHADO EFRREIRA',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055134',
        nome: 'SOFIA DE MELLO DIAS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055131',
        nome: 'THEO VITOR GOMES RUIZ',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055130',
        nome: 'ROSILENE BATISTA PANIAGO DE MIRANDA',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055128',
        nome: 'RAY - LENTZ GREGOIRE',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055125',
        nome: 'RAQUEL MIRIAN P. ALVES OLIVEIRA',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055121',
        nome: 'NICOLAS FAVRETTO CAETANO',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055119',
        nome: 'MÁRCIA PIRES DOS SANTOS MATZEMBACKER',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055116',
        nome: 'MIGUEL PIRES MATZEMBACKER',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055114',
        nome: 'MARVEL GREGOIRE',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055110',
        nome: 'MARIA EDUARDA MACHADO FERREIRA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055099',
        nome: 'LINCOLN CAETANO DE SOUZA',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055081',
        nome: 'LEANDRO DA SILVA MEDEIROS',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055078',
        nome: 'LEIZA CARLA DE MELLO DIAS',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055075',
        nome: 'JOÃO MARCELO MACHADO FERREIRA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055070',
        nome: 'IZABELLA ROCHA GONÇALVES',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055067',
        nome: 'HOMERO LUCENA MASSUIA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055064',
        nome: 'HENRIQUE RODRIGUES MASSON',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055061',
        nome: 'HEITOR MATOS FERREIRA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055037',
        nome: 'GISLAINE DANIELE PEREIRA GOMES SILVA',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055026',
        nome: 'GABRIELLI ALVES OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055024',
        nome: 'FERNANDA MARIANO MASSUIA',
        funcao: 'apoio',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055019',
        nome: 'FELIPE DE SOUZA MEDEIROS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055016',
        nome: 'ELISA CAROLINA HANTT MASSON',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4055012',
        nome: 'DOUGLAS RODRIGO FERREIRA',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4054851',
        nome: 'CLAUDIA DA SILVA BARRETO',
        funcao: 'diretoria',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4054849',
        nome: 'CAROLINA HANTT MASSON',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4054848',
        nome: 'ARTHUR DE MELLO DIAS',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4054659',
        nome: 'ANA CLARA LEAL',
        funcao: 'desbravador',
        clubeId: 56,
        password: 'senha',
      },
      {
        codigo: '4203951',
        nome: 'LARA REBECA MENDES MEIRELES',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4203950',
        nome: 'BERNARDO FERNANDES CONCEIÇÃO',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4203946',
        nome: 'MARINÊS DE FÁTIMA DA SILVA',
        funcao: 'apoio',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4189782',
        nome: 'MELISSA DANIELLY DA SILVA',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4152047',
        nome: 'WOLLACE ALMEIDA BACURI',
        funcao: 'apoio',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4151938',
        nome: 'LORHAYNE MIRIÃ BARBOSA WELCHEN',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4151933',
        nome: 'EDUARDO GUILHERME WELCHEN PEDAÇO',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4056649',
        nome: 'NEUTON EVANGELISTA DE MEDEIROS',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055621',
        nome: 'PALOMA SILVA MENDES',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055529',
        nome: 'CRISTIANE SOUZA DOS SANTOS SILVA',
        funcao: 'apoio',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055494',
        nome: 'JOSIAS GOMES BORGES',
        funcao: 'apoio',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055473',
        nome: 'SANDRA CECÍLIA SANTOS DE MEDEIROS',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055471',
        nome: 'RAPHAEL BARBOSA MEDEIROS',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055469',
        nome: 'ROZANE BORGES MEDEIROS',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055463',
        nome: 'RHANIEL BELTRAME DE ARRUDA BORGES',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055433',
        nome: 'NATHALIE OLIVEIRA ALMEIDA',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055431',
        nome: 'JUCILENE ALVES DE ARRUDA',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055426',
        nome: 'JOÃO LUCAS GOMES BARANOSKI',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055417',
        nome: 'HADASSA BELTRAME DE ARRUDA BORGES',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055413',
        nome: 'GEAN ADRIANO BARANOSKI',
        funcao: 'diretoria',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055409',
        nome: 'FERNANDO MACARIO MUNIZ',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055404',
        nome: 'DANIEL SANTOS SILVA',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055399',
        nome: 'DAVI SCHNEIDER PAZ GONÇALVES',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4055393',
        nome: 'BENJAMIM BORGES MEDEIROS',
        funcao: 'desbravador',
        clubeId: 57,
        password: 'senha',
      },
      {
        codigo: '4206847',
        nome: 'IRACEMA FERNANDES DA CONCEIÇÃO',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4203343',
        nome: 'JESSIKA MARTINS PIMENTA DE OLIVEIRA',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4193290',
        nome: 'JORDANA OLIVEIRA TELES',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4191915',
        nome: 'GABRIEL LUCAS AZEVEDO FARIAS',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4191882',
        nome: 'ELIEZER BERTOTTI PERES',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4187559',
        nome: 'SOLARA  NARVAES  DE ALMEIDA',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4186552',
        nome: 'LAURA CRISTINA SCHIRMANN',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4186394',
        nome: 'RUTH PEREIRA DE MIRANDA',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059767',
        nome: 'MARIA AGUIAR COSTA',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059765',
        nome: 'JUDITH DA SILVEIRA CARLOS',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059490',
        nome: 'ALEANE CARNEIRO RIBEIRO',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059469',
        nome: 'OSMAR LEIDE ALVES TORRES SILVA',
        funcao: 'diretoria',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059467',
        nome: 'REGINALDO RIBEIRO DA SILVA',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059464',
        nome: 'LUCIA DE FATIMA DE S ARAUJO',
        funcao: 'diretoria',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059460',
        nome: 'LUCEANDRO RODRIGUES DA SILVA',
        funcao: 'diretoria',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059458',
        nome: 'KAREN MORGANA LIMA DE SOUZA',
        funcao: 'diretoria',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059456',
        nome: 'GEREMIAS SILVA LUZ',
        funcao: 'apoio',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059454',
        nome: 'GISLEI MIRANDA SANTOS',
        funcao: 'diretoria',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059443',
        nome: 'REBECA TORRES SILVA',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059439',
        nome: 'MARIAH KULCENTY LUZ',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059434',
        nome: 'LUCAS RODRIGO ZINELLI BERTOTTI',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059433',
        nome: 'KAMILY LIMA SILVA',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059274',
        nome: 'GABRIEL COSTA MORAIS',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059268',
        nome: 'DAVI MIRANDA LIMA',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4059265',
        nome: 'ADÃO ALVES DA COSTA FILHO',
        funcao: 'desbravador',
        clubeId: 58,
        password: 'senha',
      },
      {
        codigo: '4203688',
        nome: 'UGOR SAMUEL DA SILVA FELIX',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4050747',
        nome: 'ABGAIR JOVINA DA COSTA',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4050742',
        nome: 'EVERSON NICOLI',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4050731',
        nome: 'CLAUDETE VIEIRA GUERINO',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4044010',
        nome: 'NUBIA ELLEN RIBEIRO ALVES',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4044003',
        nome: 'VANUSA SILVA LOPES',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4044002',
        nome: 'THAISA RIBEIRO FERREIRA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4044001',
        nome: 'SOFIA ROCHA DA SILVA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043997',
        nome: 'SOFIA DA SILVA VIEIRA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043995',
        nome: 'SAMUEL DA SILVA CARDOSO',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043994',
        nome: 'SABRINA LORENZI',
        funcao: 'diretoria',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043993',
        nome: 'PIETRO CABRAL FERREIRA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043992',
        nome: 'PAULA JANING NICOLE',
        funcao: 'diretoria',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043991',
        nome: 'NICOLLY MARQUES SILVA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043989',
        nome: 'MILENA RODRIGUES DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043988',
        nome: 'YASMIN EVARISTO CAZAL',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043987',
        nome: 'MIGUEL JANING NICOLI',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043986',
        nome: 'MARIO COSTA DE MELO',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043984',
        nome: 'MARIA SANTANA RODRIGUES PEREIRA',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043982',
        nome: 'MARIA RITA R. DA SILVA CARDOSO',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043980',
        nome: 'MARIA LUIZA NUNES GARCIA',
        funcao: 'diretoria',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043979',
        nome: 'MARIA JOSE DE OLIVEIRA GOES',
        funcao: 'apoio',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043977',
        nome: 'MAIRLA TEIXEIRA RODRIGUES',
        funcao: 'diretoria',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043974',
        nome: 'LUIZA MONTINELLE KRAUSER',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043972',
        nome: 'LUIZ MESSI SATURNINO DANTAS',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043970',
        nome: 'LUCAS HENRIQUE RODRIGUES DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043968',
        nome: 'LEVI DA CONCEICAO VIEIRA DE SOUSA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043967',
        nome: 'LAUREN RODRIGUES PEREIRA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043966',
        nome: 'LARA SOFIA NUNES GARCIA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043964',
        nome: 'KELLI MARQUES DOS SANTOS SILVA',
        funcao: 'diretoria',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043962',
        nome: 'ISABELLY CRISTINE LIMA DA SILVA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043960',
        nome: 'GUSTAVO ALVES DA COSTA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043944',
        nome: 'EMANUELLY NUNES DA COSTA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043938',
        nome: 'DAIANA DE OLIVEIRA MELLO MATHIAS',
        funcao: 'diretoria',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043921',
        nome: 'ARTHUR RIBEIRO ALVES',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043919',
        nome: 'ARTHUR LOPES DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4043914',
        nome: 'ANA JULIA NOBERTO SILVA',
        funcao: 'desbravador',
        clubeId: 59,
        password: 'senha',
      },
      {
        codigo: '4214142',
        nome: 'ELLEN GONÇALVES DE SOUSA',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4204692',
        nome: 'MIGUEL NATHAE CARLOS KEMERICH',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4202185',
        nome: 'THALITA PEREIRA CARLOS KEMERICH',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4132731',
        nome: 'UANDERSON GOMES DE OLIVEIRA',
        funcao: 'diretoria',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4132729',
        nome: 'ELIANE PEREIRA DE MIRANDA',
        funcao: 'diretoria',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4056605',
        nome: 'FERNANDO SILVA FERNANDES',
        funcao: 'diretoria',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4056540',
        nome: 'DAIANE MIRANDA DE SOUZA FERNANDES',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4052993',
        nome: 'NOÉLIA GOMES DA SILVA',
        funcao: 'diretoria',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4052988',
        nome: 'GABRIELLE MORAES RODRIGUES',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4052987',
        nome: 'MARIZA BELA DA SILVA REIS',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4052985',
        nome: 'SULAMITA SANTOS PERUCCE MENEZES',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4052983',
        nome: 'VALDEMAR CARLOS DOS REIS',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051062',
        nome: 'IDAILDES BATISTA DOS SANTOS LESSA',
        funcao: 'diretoria',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051059',
        nome: 'CARINI REINHEIMER PFEIFER LESSA',
        funcao: 'diretoria',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051021',
        nome: 'YASMIM TEODORA MIRANDA',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051019',
        nome: 'PEDRO HENRIQUE PERES DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051018',
        nome: 'PEDRO EMANUEL NATHAE KEMERICH',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051012',
        nome: 'MELISSA DE SOUZA FERNANDES',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051011',
        nome: 'LUIS HENRIQUE DOS SANTOS LESSA',
        funcao: 'apoio',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051008',
        nome: 'LIVIA OLIVEIRA SILVA',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4051003',
        nome: 'LARA VITORIA ROSA DA CRUZ',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4050995',
        nome: 'HENRY GABRIEL VIEIRA BUENO',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4050988',
        nome: 'GABRIEL MALDONADO MASS',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4050980',
        nome: 'ELOAH MIRANDA SEIXAS',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4050976',
        nome: 'ARTHUR SOARES DINIZ',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4050966',
        nome: 'AMANDA DOS REIS SOARES',
        funcao: 'desbravador',
        clubeId: 60,
        password: 'senha',
      },
      {
        codigo: '4204356',
        nome: 'MAIREN BEATRIZ SOUZA DA SILVA',
        funcao: 'diretoria',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4204355',
        nome: 'ARTHUR ALMEIDA FERREIRA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4204354',
        nome: 'MARIANA SIQUEIRA NOGUEIRA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4203446',
        nome: 'ERICA CRISTINA CIRQUEIRA DA SILVA DE MORAIS',
        funcao: 'diretoria',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4203443',
        nome: 'WELLINGTON JOSE MEIRA RAMOS',
        funcao: 'diretoria',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4203406',
        nome: 'PEDRO MARCELO CAETANO DE SOUZA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4203377',
        nome: 'BENICIO RAPHAEL RIGO',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056878',
        nome: 'PEDRO MIGUEL DIONÍSIO DE SOUZA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056877',
        nome: 'PHETALA FERNANDA PARANHOS DA SILVA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056875',
        nome: 'SARA NEUBUSER',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056873',
        nome: 'YURI SILVA SOUSA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056871',
        nome: 'RENATO MATEUS GRACIA',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056868',
        nome: 'MICHELLI SERAMIM',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056866',
        nome: 'MARIA DE FATIMA OLIVEIRA NASCIMENTO',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056865',
        nome: 'LUDMILA DA SILVA MARQUES',
        funcao: 'diretoria',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056863',
        nome: 'LUDIELLY DA SILVA MARQUES',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056861',
        nome: 'KEMILLY VICTORIA BEZERRA DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056860',
        nome: 'JULIANO DA SILVA GIEHL',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056859',
        nome: 'JULIA RODRIGUES LIMA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056857',
        nome: 'JORGE LUCAS GOMES SILVA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056855',
        nome: 'JONAS NEUBUSER',
        funcao: 'diretoria',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056853',
        nome: 'JESSICA RODRIGUES PEREIRA E SILVA',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056852',
        nome: 'JANICE CRAUS',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056849',
        nome: 'INARA CRAUSS DA SILVA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056847',
        nome: 'HELENA PLANTES PEREIRA DE JESUS',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056844',
        nome: 'HEITOR DIOGO DE OLIVEIRA RODRIGUES',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056842',
        nome: 'EDUARDO LORENZO NASCIMENTO COELHO',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056841',
        nome: 'DULCE NOEMIA MAICA',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056837',
        nome: 'CECILIA SERAMIN ZATTA',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056834',
        nome: 'BRENO HENRIQUE TRINDADE RAMOS',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056832',
        nome: 'AYSLA GABRIELA LEITE RUAS',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056764',
        nome: 'ANA PAULA DE BARROS NASCIMENTO',
        funcao: 'apoio',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056762',
        nome: 'ANA JULIA NASCIMENTO ZAGHI',
        funcao: 'desbravador',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4056753',
        nome: 'ALEXANDRE DOS SANTOS N. CHAVES',
        funcao: 'diretoria',
        clubeId: 61,
        password: 'senha',
      },
      {
        codigo: '4204351',
        nome: 'JOSÉ MATIAS VALADÃO',
        funcao: 'apoio',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4204350',
        nome: 'ACSSA CECILLYA SOUZA SILVA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4149263',
        nome: 'MARILENE PFEIFER',
        funcao: 'apoio',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4149254',
        nome: 'TATIANE SILVA DE ASSIS SAMPAIO',
        funcao: 'apoio',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4149248',
        nome: 'CRISTIANE DE SOUZA',
        funcao: 'apoio',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4056285',
        nome: 'PAULO HENRIQUE QUEIROZ DA COSTA',
        funcao: 'apoio',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055707',
        nome: 'DELCIDE GOMES VANDERLEY LIMA',
        funcao: 'diretoria',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055704',
        nome: 'MARCIANE SILVA DE SOUZA',
        funcao: 'diretoria',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055703',
        nome: 'GERLANIA DANTAS DA SILVA VALADAO',
        funcao: 'diretoria',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055701',
        nome: 'AMANDA DA SILVA VALADÃO',
        funcao: 'diretoria',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055699',
        nome: 'CÍCERO MONTEIRO DOS SANTOS',
        funcao: 'diretoria',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055697',
        nome: 'ALDENEIDE RODRIGUES OLIVEIRA COSTA',
        funcao: 'diretoria',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055623',
        nome: 'MAX FELICIO SILVA DE SOUSA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055524',
        nome: 'FERNANDA PRESTES SONNEBORN',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055522',
        nome: 'ESTHER GONÇALVES DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055521',
        nome: 'GRACIELA BERNADINA ROSA BORGES',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055517',
        nome: 'GUYLHERME PEREIRA BARBOSA SILVA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055515',
        nome: 'ISABELLA DE LIMA SOUSA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055513',
        nome: 'MIZAEL LEVY SILVA SAMPAIO',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055511',
        nome: 'NICOLLAS DE JESUS VIEIRA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055509',
        nome: 'RAIFRAN LOPES DE SOUSA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055507',
        nome: 'VICTOR NASCIMENTO MUCHEL',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055505',
        nome: 'VITORIA LOPES SILVA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055503',
        nome: 'YASMIN MARQUES BENTES',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055501',
        nome: 'JOSUÉ MARTINS LIONCIO DA SILVA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055498',
        nome: 'ENZO GABRIEL RODRIGUES LOPES',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4055497',
        nome: 'ALLAN JACKSON SILVA',
        funcao: 'desbravador',
        clubeId: 62,
        password: 'senha',
      },
      {
        codigo: '4191734',
        nome: 'SILVIA RODRIGUES GOMES LEMES',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4188810',
        nome: 'JANIRA MARIA DOS SANTOS',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4186881',
        nome: 'KATIANE RODRIGUES BRINQUEDO GUSMAO',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4126643',
        nome: 'SUELI DA  SILVA',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4122565',
        nome: 'JOQUEBEDE MARIA GONÇALVES',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4122561',
        nome: 'VILMAR NUNES NETO',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052531',
        nome: 'MELISSA REINY DE OLIVEIRA FREITAS',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052496',
        nome: 'LEA CORREA NUNES',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052494',
        nome: 'WASHINGTON JUNIO OLIVEIRA  SILVA',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052493',
        nome: 'WANDERSON FRANCISCO DE JESUS',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052477',
        nome: 'YAN CANTUARIO PIRES',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052474',
        nome: 'VALENTINA FONSECA DA SILVA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052470',
        nome: 'SOPHIA FERREIRA DA SILVA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052469',
        nome: 'SOPHIA DANTAS DIAS',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052465',
        nome: 'SOPHIA CANTUARIO PIRES',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052460',
        nome: 'SOFIA RODRIGUES BRINQUEDO GUSMÃO',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052457',
        nome: 'SAYMON LUIZ BEE DE SOUZA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052453',
        nome: 'ROGERIA FERREIRA LIMA',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052450',
        nome: 'PEDRO JORGE ASSUNÇÃO OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052449',
        nome: 'LUIZ MIGUEL BORGES PIMENTA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052445',
        nome: 'MAURINE FONSECA CIRINO DE SOUZA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052444',
        nome: 'MARIA EDUARDA FERREIRA LIMA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052443',
        nome: 'MARESA DOS SANTOS JESUS',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052433',
        nome: 'LUCAS GABRIEL RAMOS DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052431',
        nome: 'LIVIA GONÇALVES DO NASCIMENTO ROSSI RINALDI',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052430',
        nome: 'LIVIA CORREA SANTOS LEITE DE BRITO',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052359',
        nome: 'LAURIENE BORGES SILVA',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052357',
        nome: 'JULYEINE MONIKE PIVA FERNANDES',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052355',
        nome: 'JOAO PEDRO PIVA BEZERRA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052354',
        nome: 'JOAO GUILHERME PIVA BEZERRA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052351',
        nome: 'GLAUBER DOS SANTOS GOMES',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052349',
        nome: 'FABIANA GONÇALVES DO NASCIMENTO ROSSI RINALDI',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052344',
        nome: 'DAVI BORGES PIMENTEL ARRUDA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052343',
        nome: 'CRISTIANE BARROS DA SILVA',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052341',
        nome: 'CRISTIANA BUENO RAMOS',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052336',
        nome: 'CECILIA NUNES CORREA',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052335',
        nome: 'CAUÃ VINICIUS GONÇALVES',
        funcao: 'desbravador',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052333',
        nome: 'ANIKELY FERREIRA DE FREITAS',
        funcao: 'diretoria',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4052331',
        nome: 'ALEXSANDRA ALVES BEE DE SOUZA',
        funcao: 'apoio',
        clubeId: 63,
        password: 'senha',
      },
      {
        codigo: '4186509',
        nome: 'MARCOS RODRIGO DE MOURA',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4150549',
        nome: 'JORGEANA ALVES LOMGO',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4150542',
        nome: 'BEATRIZ CRISTINA B. F. ALMEIDA',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056165',
        nome: 'LUCILENE VARANDA PINHEIRO',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056098',
        nome: 'SOFIA GRAZIELLE SILVA DE CAMPOS',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056096',
        nome: 'VINICIUS WAECHTER ALVES',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056094',
        nome: 'STEPHANY RODRIGUES BARROS DO NASCIMENTO',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056091',
        nome: 'ANA LUISA BARROS VITALIANO',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056087',
        nome: 'CÉLIO CARLOS ÁVILA FERREIRA',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056083',
        nome: 'NICHOLAS NALIN AVILA FERREIRA',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056079',
        nome: 'DEBORA OLIVEIRA MARTINS',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056078',
        nome: 'JHONY LUCAS OLIVEIRA MARTINS',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056075',
        nome: 'SAMARA DE PAULA OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056073',
        nome: 'CRYSTHIANNE DE PAULA OLIVEIRA',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056072',
        nome: 'ARTHUR ALVES LONGO',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056070',
        nome: 'MARCELO MOREIRA DE CAMPOS',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056069',
        nome: 'RAIMUNDA DONATA JESUS ARAÚJO BORGES',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056017',
        nome: 'GABRIEL DE MORAES CREPIN',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056014',
        nome: 'JOVELINA DE MORAES',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056012',
        nome: 'JOÃO BELIZÁRIO DA SILVA',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056011',
        nome: 'MICHEL SOBRINHO QUENEHEN',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056010',
        nome: 'VANESSA CASSIA SOBRINHO QUENEHEN',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056008',
        nome: 'JOÃO LUCAS TRAGE BELIZÁRIO',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056006',
        nome: 'TAYLER BERNARDO VARANDA DA SILVA',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056005',
        nome: 'KALEBY THIAGO DO NASCIMENTO COSTA',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4056003',
        nome: 'LUCIENE DA SILVA NASCIMENTO COSTA',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055991',
        nome: 'MIGUEL PAZ AZEVEDO',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055989',
        nome: 'DAVID SAMUEL PAZ DELGADO',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055987',
        nome: 'GABRIEL DE CAMARGO BEZERRA',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055985',
        nome: 'LEÔNIDAS OLIVEIRA BITTNER',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055984',
        nome: 'CLÉIA OLIVEIRA BITTNER',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055958',
        nome: 'MARY ELLEN VIEIRA KRUGER',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055905',
        nome: 'VALENTINA BRAZ ALMEIDA',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055865',
        nome: 'ANA MARIA DOS REIS BARBOSA',
        funcao: 'desbravador',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055864',
        nome: 'GENISLAINE CONCEIÇÃO DOS REIS BARBOSA',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055863',
        nome: 'JEAN CARLOS ZAGO CAMARGO',
        funcao: 'apoio',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4055862',
        nome: 'FABIANE DE OLIVEIRA CAVALCANTE',
        funcao: 'diretoria',
        clubeId: 64,
        password: 'senha',
      },
      {
        codigo: '4215040',
        nome: 'MARIA APARECIDA ALVES DOS SANTOS',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4204044',
        nome: 'ADILSON DOS SANTOS',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4203959',
        nome: 'CÁSSIA ROSA RODRIGUES DOS SANTOS',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4196961',
        nome: 'TASSIA MORAES DE ASSIS DAMASCENO',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4138570',
        nome: 'ANTONIO BORGES BOTELHO',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4138560',
        nome: 'GEMIMA RODRIGUES DOS SANTOS',
        funcao: 'diretoria',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4138553',
        nome: 'JOCELENE DA SILVA VAZ',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4138550',
        nome: 'PAULO ALVES DE OLIVEIRA',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4138548',
        nome: 'VALENTINA OLIVEIRA SANTOS',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4138542',
        nome: 'VANESSA LIMA DOS SANTOS TEIXEIRA',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054803',
        nome: 'SARAH CAMPOS DA SILVA VAZ',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054781',
        nome: 'DAFNE DOS SANTOS TEIXEIRA',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054768',
        nome: 'IZADORA CAMPOS DE OLIVEIRA',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054243',
        nome: 'DIONE MIRANDA KELLER',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054218',
        nome: 'VALDINEY DA GUIA',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054109',
        nome: 'LUIZ FELIPE DE OLIVEIRA SOUZA',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054107',
        nome: 'FABIANE CAMPOS DOS SANTOS CAMARGO',
        funcao: 'diretoria',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054098',
        nome: 'CECÍLIA COSTA TEIXEIRA',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4054095',
        nome: 'SELMA COSTA TEIXEIRA',
        funcao: 'diretoria',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4053975',
        nome: 'DANYLO G. DE ALMEIDA SOUZA',
        funcao: 'apoio OCASIONAL',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4053917',
        nome: 'ELAINE CARDOSO DE OLIVEIRA SOUZA',
        funcao: 'apoio OCASIONAL',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4053755',
        nome: 'MARIA CRISTINA TEODORO DE SOUZA PAIVA',
        funcao: 'diretoria',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4053751',
        nome: 'MANASSES LUIZ BOTELHO',
        funcao: 'apoio',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4053750',
        nome: 'HEULLA FHERNANDA MENEZES BORGES',
        funcao: 'diretoria',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4044023',
        nome: 'PEDRO HENRIQUE SANTOS DA GUIA',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '3962500',
        nome: 'ARTUR VIDOVICH KELLER',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '3962499',
        nome: 'YASMIN VIDOVICH KELLER',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '3962217',
        nome: 'JOAQUIM ASSIS DAMASCENO',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '3960448',
        nome: 'CRISTOFER DE SOUZA PAIVA',
        funcao: 'desbravador',
        clubeId: 65,
        password: 'senha',
      },
      {
        codigo: '4055620',
        nome: 'RAQUEL BARBOSA DA SILVA',
        funcao: 'diretoria',
        clubeId: 66,
        password: 'senha',
      },
      {
        codigo: '4055491',
        nome: 'NEUSA BORGES LEAL',
        funcao: 'diretoria',
        clubeId: 66,
        password: 'senha',
      },
      {
        codigo: '4055487',
        nome: 'JUSCELINO MOREIRA DE COSTA',
        funcao: 'diretoria',
        clubeId: 66,
        password: 'senha',
      },
      {
        codigo: '4055483',
        nome: 'ANA CRISTINA DA SILVA NUNES',
        funcao: 'desbravador',
        clubeId: 66,
        password: 'senha',
      },
    ],
    skipDuplicates: true,
  });

  const password = await bcrypt.hash('trick123', 12);
  const passwordStaff = await bcrypt.hash('apoio123', 12);

  await prisma.clube.create({
    include: { membros: true },
    data: {
      codigo: '111',
      nome: 'ALM - Associação Leste Matogrossense',
      pais: 'ONU',
      regiao: 'ALM',
      membros: {
        createMany: {
          data: [
            {
              nome: 'Patrick Adan',
              codigo: '1111111',
              funcao: 'administrador',
              password,
              email: 'patrick.tafa@gmail.com',
            },
            {
              nome: 'Valquíria Maciel França Ribeiro',
              email: 'ribeiro.valzinha@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111112',
            },
            {
              nome: 'Gleiciele Batista Holandao',
              email: 'gleicielevieira6@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111113',
            },
            {
              nome: 'Lindalva Rodrigues Pereira Martins',
              email: 'lindalvamartins15@hotmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111114',
            },
            {
              nome: 'Eloiza Maria  Hantt',
              email: 'eloizzahantt@hotmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111115',
            },
            {
              nome: 'Lauany da Silva Gusmão',
              email: 'lauany.gusmao@adventistas.org',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111116',
            },
            {
              nome: 'Maria Izabel Samuel de Proença',
              email: 'izabel.pereira@adventistas.org',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111117',
            },
            {
              nome: 'Diaqueline Rodrigues da Conceição Ribeiro',
              email: 'diaqueline.ribeiro@adventistas.org',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111118',
            },
            {
              nome: 'Luciana Almeida do Bem Matos de Moura',
              email: 'luciana_mmoura@msn.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111119',
            },
            {
              nome: 'Joselene de Araújo Padilha',
              email: 'joselene.caninde2@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111120',
            },
            {
              nome: 'Dinha ( R. ALVES DE SOUSA)',
              email: 'falacomigochico@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111121',
            },
            {
              nome: 'Bianca Nicolly de Freitas Mendes',
              email: 'bianca.mendes@adventistas.org',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111122',
            },
            {
              nome: 'Raiany Paula dos Santos Dal Mas',
              email: 'raiany.santos@adventistas.org',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111123',
            },
            {
              nome: 'Claudia Cassemira de Arruda Warmling',
              email: 'claudiacassemira@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111124',
            },
            {
              nome: 'Danilo César Jesus Costa Fernandes',
              email: 'daniline1914@icloud.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111125',
            },
            {
              nome: 'Marcos Paulo Ferreira Lima Soprano',
              email: 'marcospaulosoprano@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111126',
            },
            {
              nome: 'Francisco Leonardo Silva Pereira De Sá',
              email: 'ls216450@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111127',
            },
            {
              nome: 'Raimunda Notato Vieira da Costa',
              email: 'raimundaerika@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111128',
            },
            {
              nome: 'Kayo Fernando de Lara Mendes',
              email: 'kayo.lara74.kl@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111129',
            },
            {
              nome: 'Nadia Concepción Britez Flores',
              email: 'nadia.britez.2bti@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111130',
            },
            {
              nome: 'Yara Adventista Mendes da Silva',
              email: 'yaramendes782@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111131',
            },
            {
              nome: 'Rogerio Moya dos Santos',
              email: 'mdkrogerio@gmail.com',
              funcao: 'staff',
              password: passwordStaff,
              codigo: '1111132',
            },
            {
              nome: 'Francielida Lira',
              email: 'francielida.lira@adventistas.org',
              funcao: 'administrador',
              password: passwordStaff,
              codigo: '1111133',
            },
          ],
        },
      },
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
