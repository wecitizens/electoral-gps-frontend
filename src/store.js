import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

/* eslint-disable */

Vue.use(Vuex);

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_QUESTION_AGREEMENT = 'SET_QUESTION_AGREEMENT';
export const SET_QUESTION_IMPORTANCE = 'SET_QUESTION_IMPORTANCE';

export const SET_ZIP_CODE = 'SET_ZIP_CODE';


export default new Vuex.Store({
  getters: {
    questions: (state) => {
      console.log('Ici dans le getter filtrer par la lanque user');
      return state;
    },
    municipalities: state => state.municipalities
  },
  state: {
    questions: [],
    zipCode: null,
    municipalities: [
      {
        "value": "6250 Aiseau-Presles"
      },
      {
        "value": "4540 Amay"
      },
      {
        "value": "4770 Amel (Amblève)"
      },
      {
        "value": "5300 Andenne"
      },
      {
        "value": "6150 Anderlues"
      },
      {
        "value": "5537 Anhée"
      },
      {
        "value": "4430 Ans"
      },
      {
        "value": "4160 Anthisnes"
      },
      {
        "value": "7640 Antoing"
      },
      {
        "value": "6700 Arlon"
      },
      {
        "value": "5330 Assesse"
      },
      {
        "value": "7800 Ath"
      },
      {
        "value": "6717 Attert"
      },
      {
        "value": "6791 Guerlange"
      },
      {
        "value": "4880 Aubel"
      },
      {
        "value": "4340 Awans"
      },
      {
        "value": "4920 Aywaille"
      },
      {
        "value": "4837 Baelen"
      },
      {
        "value": "4690 Bassenge"
      },
      {
        "value": "6600 Bastogne"
      },
      {
        "value": "6500 Beaumont"
      },
      {
        "value": "5570 Beauraing"
      },
      {
        "value": "1320 Beauvechain"
      },
      {
        "value": "7972 Beloeil"
      },
      {
        "value": "4257 Berloz"
      },
      {
        "value": "7320 Bernissart"
      },
      {
        "value": "6687 Bertogne"
      },
      {
        "value": "6880 Bertrix"
      },
      {
        "value": "4610 Beyne-Heusay"
      },
      {
        "value": "7130 Binche"
      },
      {
        "value": "5555 Bièvre"
      },
      {
        "value": "4670 Blegny"
      },
      {
        "value": "6830 Bouillon"
      },
      {
        "value": "7300 Boussu"
      },
      {
        "value": "1420 Braine-l'Alleud"
      },
      {
        "value": "1440 Braine-le-Château"
      },
      {
        "value": "7090 Braine-le-Comte"
      },
      {
        "value": "4260 Braives"
      },
      {
        "value": "7940 Brugelette"
      },
      {
        "value": "7620 Brunehaut"
      },
      {
        "value": "4760 Büllingen"
      },
      {
        "value": "4210 Burdinne"
      },
      {
        "value": "4790 Burg-Reuland"
      },
      {
        "value": "4750 Bütgenbach"
      },
      {
        "value": "7760 Celles"
      },
      {
        "value": "5630 Cerfontaine"
      },
      {
        "value": "7160 Chapelle-lez-Herlaimont"
      },
      {
        "value": "6000 Charleroi"
      },
      {
        "value": "1450 Chastre"
      },
      {
        "value": "4053 Chaudfontaine"
      },
      {
        "value": "1325 Chaumont-Gistoux"
      },
      {
        "value": "6460 Chimay"
      },
      {
        "value": "6810 Chiny"
      },
      {
        "value": "7950 Chièvres"
      },
      {
        "value": "6200 Châtelet"
      },
      {
        "value": "5590 Ciney"
      },
      {
        "value": "4560 Clavier"
      },
      {
        "value": "7340 Colfontaine"
      },
      {
        "value": "4170 Comblain-au-Pont"
      },
      {
        "value": "7780 Comines-Warneton"
      },
      {
        "value": "6180 Courcelles"
      },
      {
        "value": "1490 Court-Saint-Etienne"
      },
      {
        "value": "5660 Couvin"
      },
      {
        "value": "4367 Crisnée"
      },
      {
        "value": "4607 Dalhem"
      },
      {
        "value": "6929 Daverdisse"
      },
      {
        "value": "5500 Dinant"
      },
      {
        "value": "4820 Dison"
      },
      {
        "value": "5680 Doische"
      },
      {
        "value": "4357 Donceel"
      },
      {
        "value": "7370 Dour"
      },
      {
        "value": "6940 Durbuy"
      },
      {
        "value": "7890 Ellezelles"
      },
      {
        "value": "7850 Enghien"
      },
      {
        "value": "4480 Engis"
      },
      {
        "value": "6560 Erquelinnes"
      },
      {
        "value": "4130 Esneux"
      },
      {
        "value": "7730 Estaimpuis"
      },
      {
        "value": "7120 Estinnes"
      },
      {
        "value": "4700 Eupen"
      },
      {
        "value": "4317 Faimes"
      },
      {
        "value": "6240 Farciennes"
      },
      {
        "value": "6637 Fauvillers"
      },
      {
        "value": "5380 Fernelmont"
      },
      {
        "value": "4190 Ferrières"
      },
      {
        "value": "4347 Fexhe-le-Haut-Clocher"
      },
      {
        "value": "6220 Fleurus"
      },
      {
        "value": "7880 Flobecq"
      },
      {
        "value": "5150 Floreffe"
      },
      {
        "value": "5620 Florennes"
      },
      {
        "value": "6820 Florenville"
      },
      {
        "value": "4400 Flémalle"
      },
      {
        "value": "4620 Fléron"
      },
      {
        "value": "6140 Fontaine-l'Evêque"
      },
      {
        "value": "5070 Fosses-la-Ville"
      },
      {
        "value": "7080 Frameries"
      },
      {
        "value": "7911 Frasnes-lez-Anvaing"
      },
      {
        "value": "6440 Froidchapelle"
      },
      {
        "value": "5575 Gedinne"
      },
      {
        "value": "4250 Geer"
      },
      {
        "value": "5030 Gembloux"
      },
      {
        "value": "1470 Genappe"
      },
      {
        "value": "6280 Gerpinnes"
      },
      {
        "value": "5340 Gesves"
      },
      {
        "value": "6671 Gouvy"
      },
      {
        "value": "1390 Grez-Doiceau"
      },
      {
        "value": "4460 Grâce-Hollogne"
      },
      {
        "value": "6720 Habay"
      },
      {
        "value": "6120 Ham-sur-Heure-Nalinnes"
      },
      {
        "value": "4180 Hamoir"
      },
      {
        "value": "5360 Hamois"
      },
      {
        "value": "4280 Hannut"
      },
      {
        "value": "5540 Hastière"
      },
      {
        "value": "5370 Havelange"
      },
      {
        "value": "7350 Hensies"
      },
      {
        "value": "6887 Herbeumont"
      },
      {
        "value": "4040 Herstal"
      },
      {
        "value": "4650 Herve"
      },
      {
        "value": "7387 Honnelles"
      },
      {
        "value": "6990 Hotton"
      },
      {
        "value": "6660 Houffalize"
      },
      {
        "value": "5560 Houyet"
      },
      {
        "value": "4500 Huy"
      },
      {
        "value": "1357 Hélécine"
      },
      {
        "value": "4218 Héron"
      },
      {
        "value": "1315 Incourt"
      },
      {
        "value": "1460 Ittre"
      },
      {
        "value": "4845 Jalhay"
      },
      {
        "value": "5190 Jemeppe-sur-Sambre"
      },
      {
        "value": "1370 Jodoigne"
      },
      {
        "value": "4450 Juprelle"
      },
      {
        "value": "7050 Jurbise"
      },
      {
        "value": "6860 Léglise"
      },
      {
        "value": "5080 La Bruyère"
      },
      {
        "value": "4720 Kelmis (La Calamine)"
      },
      {
        "value": "1310 La Hulpe"
      },
      {
        "value": "7100 La Louvière"
      },
      {
        "value": "6980 La Roche-en-Ardenne"
      },
      {
        "value": "1380 Lasne"
      },
      {
        "value": "7070 Le Roeulx"
      },
      {
        "value": "7870 Lens"
      },
      {
        "value": "6210 Les-Bons-Villers"
      },
      {
        "value": "7860 Lessines"
      },
      {
        "value": "7900 Leuze-en-Hainaut"
      },
      {
        "value": "6890 Libin"
      },
      {
        "value": "6800 Libramont-Chevigny"
      },
      {
        "value": "4990 Lierneux"
      },
      {
        "value": "4830 Limbourg"
      },
      {
        "value": "4287 Lincent"
      },
      {
        "value": "4000 Liège"
      },
      {
        "value": "6540 Lobbes"
      },
      {
        "value": "4710 Lontzen"
      },
      {
        "value": "4960 Malmedy"
      },
      {
        "value": "7170 Manage"
      },
      {
        "value": "6960 Manhay"
      },
      {
        "value": "6900 Marche-en-Famenne"
      },
      {
        "value": "4570 Marchin"
      },
      {
        "value": "6630 Martelange"
      },
      {
        "value": "6769 Meix-devant-Virton"
      },
      {
        "value": "6567 Merbes-le-Château"
      },
      {
        "value": "6780 Messancy"
      },
      {
        "value": "5640 Mettet"
      },
      {
        "value": "4577 Modave"
      },
      {
        "value": "6590 Momignies"
      },
      {
        "value": "7000 Mons"
      },
      {
        "value": "7750 Mont-de-l'Enclus"
      },
      {
        "value": "1435 Mont-Saint-Guibert"
      },
      {
        "value": "6110 Montigny-le-Tilleul"
      },
      {
        "value": "7140 Morlanwelz"
      },
      {
        "value": "7700 Mouscron"
      },
      {
        "value": "6750 Musson"
      },
      {
        "value": "5000 Namur"
      },
      {
        "value": "4550 Nandrin"
      },
      {
        "value": "6950 Nassogne"
      },
      {
        "value": "6840 Neufchâteau"
      },
      {
        "value": "4120 Neupré"
      },
      {
        "value": "1400 Nivelles"
      },
      {
        "value": "5350 Ohey"
      },
      {
        "value": "4877 Olne"
      },
      {
        "value": "5520 Onhaye"
      },
      {
        "value": "4360 Oreye"
      },
      {
        "value": "1350 Orp-Jauche"
      },
      {
        "value": "1340 Ottignies-Louvain-la-Neuve"
      },
      {
        "value": "4590 Ouffet"
      },
      {
        "value": "4684 Oupeye"
      },
      {
        "value": "6850 Paliseul"
      },
      {
        "value": "7740 Pecq"
      },
      {
        "value": "4860 Pepinster"
      },
      {
        "value": "1360 Perwez"
      },
      {
        "value": "5600 Philippeville"
      },
      {
        "value": "4850 Plombières"
      },
      {
        "value": "6230 Pont-à-Celles"
      },
      {
        "value": "5170 Profondeville"
      },
      {
        "value": "7600 Péruwelz"
      },
      {
        "value": "7390 Quaregnon"
      },
      {
        "value": "7380 Quiévrain"
      },
      {
        "value": "7041 Quévy"
      },
      {
        "value": "4730 Raeren"
      },
      {
        "value": "1367 Ramillies"
      },
      {
        "value": "1430 Rebecq"
      },
      {
        "value": "4350 Remicourt"
      },
      {
        "value": "6987 Rendeux"
      },
      {
        "value": "1330 Rixensart"
      },
      {
        "value": "5580 Rochefort"
      },
      {
        "value": "6767 Rouvroy"
      },
      {
        "value": "7618 Rumes"
      },
      {
        "value": "4470 Saint-Georges-sur-Meuse"
      },
      {
        "value": "7333 Saint-Ghislain"
      },
      {
        "value": "6870 Saint-Hubert"
      },
      {
        "value": "6747 Saint-Léger"
      },
      {
        "value": "4420 Saint-Nicolas"
      },
      {
        "value": "4780 Sankt Vith (Saint-Vith)"
      },
      {
        "value": "6680 Sainte-Ode"
      },
      {
        "value": "5060 Sambreville"
      },
      {
        "value": "7180 Seneffe"
      },
      {
        "value": "4100 Seraing"
      },
      {
        "value": "7830 Silly"
      },
      {
        "value": "6470 Sivry-Rance"
      },
      {
        "value": "7060 Soignies"
      },
      {
        "value": "5140 Sombreffe"
      },
      {
        "value": "5377 Somme-Leuze"
      },
      {
        "value": "4630 Soumagne"
      },
      {
        "value": "4900 Spa"
      },
      {
        "value": "4140 Sprimont"
      },
      {
        "value": "4970 Stavelot"
      },
      {
        "value": "4987 Stoumont"
      },
      {
        "value": "6927 Tellin"
      },
      {
        "value": "6970 Tenneville"
      },
      {
        "value": "4910 Theux"
      },
      {
        "value": "4890 Thimister-Clermont"
      },
      {
        "value": "6530 Thuin"
      },
      {
        "value": "4557 Tinlot"
      },
      {
        "value": "6730 Tintigny"
      },
      {
        "value": "7500 Tournai"
      },
      {
        "value": "4980 Trois-Ponts"
      },
      {
        "value": "4870 Trooz"
      },
      {
        "value": "1480 Tubize"
      },
      {
        "value": "6640 Vaux-sur-Sûre"
      },
      {
        "value": "4537 Verlaine"
      },
      {
        "value": "4800 Verviers"
      },
      {
        "value": "6690 Vielsalm"
      },
      {
        "value": "1495 Villers-la-Ville"
      },
      {
        "value": "4530 Villers-le-Bouillet"
      },
      {
        "value": "5670 Viroinval"
      },
      {
        "value": "6760 Virton"
      },
      {
        "value": "4600 Visé"
      },
      {
        "value": "5550 Vresse-sur-Semois"
      },
      {
        "value": "4950 Waimes"
      },
      {
        "value": "5650 Walcourt"
      },
      {
        "value": "1457 Walhain"
      },
      {
        "value": "4520 Wanze"
      },
      {
        "value": "4300 Waremme"
      },
      {
        "value": "4219 Wasseiges"
      },
      {
        "value": "1410 Waterloo"
      },
      {
        "value": "1300 Wavre"
      },
      {
        "value": "4840 Welkenraedt"
      },
      {
        "value": "6920 Wellin"
      },
      {
        "value": "5530 Yvoir"
      },
      {
        "value": "7190 Ecaussinnes"
      },
      {
        "value": "5310 Eghezée"
      },
      {
        "value": "6997 Erezée"
      },
      {
        "value": "6740 Etalle"
      },
      {
        "value": "1070 Bruxelles"
      },
      {
        "value": "1160 Bruxelles"
      },
      {
        "value": "1082 Bruxelles"
      },
      {
        "value": "1040 Bruxelles"
      },
      {
        "value": "1140 Bruxelles"
      },
      {
        "value": "1190 Bruxelles"
      },
      {
        "value": "1083 Bruxelles"
      },
      {
        "value": "1050 Bruxelles"
      },
      {
        "value": "1090 Bruxelles"
      },
      {
        "value": "1081 Bruxelles"
      },
      {
        "value": "1080 Bruxelles"
      },
      {
        "value": "1060 Bruxelles"
      },
      {
        "value": "1210 Bruxelles"
      },
      {
        "value": "1030 Bruxelles"
      },
      {
        "value": "1180 Bruxelles"
      },
      {
        "value": "1000 Bruxelles"
      },
      {
        "value": "1170 Bruxelles"
      },
      {
        "value": "1200 Bruxelles"
      },
      {
        "value": "1150 Bruxelles"
      },
      {
        "value": "9300 Aalst"
      },
      {
        "value": "9880 Aalter"
      },
      {
        "value": "3200 Aarschot"
      },
      {
        "value": "2630 Aartselaar"
      },
      {
        "value": "1790 Affligem"
      },
      {
        "value": "3570 Alken"
      },
      {
        "value": "8690 Alveringem"
      },
      {
        "value": "2000 Antwerpen"
      },
      {
        "value": "8570 Anzegem"
      },
      {
        "value": "8850 Ardooie"
      },
      {
        "value": "2370 Arendonk"
      },
      {
        "value": "3665 As"
      },
      {
        "value": "1730 Asse"
      },
      {
        "value": "9960 Assenede"
      },
      {
        "value": "8580 Avelgem"
      },
      {
        "value": "2387 Baarle-Hertog"
      },
      {
        "value": "2490 Balen"
      },
      {
        "value": "8730 Beernem"
      },
      {
        "value": "2340 Beerse"
      },
      {
        "value": "1652 Beersel"
      },
      {
        "value": "3130 Begijnendijk"
      },
      {
        "value": "3460 Bekkevoort"
      },
      {
        "value": "3580 Beringen"
      },
      {
        "value": "2590 Berlaar"
      },
      {
        "value": "9290 Berlare"
      },
      {
        "value": "3060 Bertem"
      },
      {
        "value": "1547 Bever"
      },
      {
        "value": "9120 Beveren"
      },
      {
        "value": "3360 Bierbeek"
      },
      {
        "value": "3740 Bilzen"
      },
      {
        "value": "8370 Blankenberge"
      },
      {
        "value": "3950 Bocholt"
      },
      {
        "value": "2530 Boechout"
      },
      {
        "value": "2820 Bonheiden"
      },
      {
        "value": "2850 Boom"
      },
      {
        "value": "3190 Boortmeerbeek"
      },
      {
        "value": "3840 Borgloon"
      },
      {
        "value": "2880 Bornem"
      },
      {
        "value": "2150 Borsbeek"
      },
      {
        "value": "3370 Boutersem"
      },
      {
        "value": "9660 Brakel"
      },
      {
        "value": "2930 Brasschaat"
      },
      {
        "value": "2960 Brecht"
      },
      {
        "value": "8450 Bredene"
      },
      {
        "value": "3960 Bree"
      },
      {
        "value": "8000 Brugge"
      },
      {
        "value": "9255 Buggenhout"
      },
      {
        "value": "8340 Damme"
      },
      {
        "value": "8420 De Haan"
      },
      {
        "value": "8660 De Panne"
      },
      {
        "value": "9840 De Pinte"
      },
      {
        "value": "8540 Deerlijk"
      },
      {
        "value": "9800 Deinze"
      },
      {
        "value": "9470 Denderleeuw"
      },
      {
        "value": "9200 Dendermonde"
      },
      {
        "value": "8720 Dentergem"
      },
      {
        "value": "2480 Dessel"
      },
      {
        "value": "9070 Destelbergen"
      },
      {
        "value": "3590 Diepenbeek"
      },
      {
        "value": "3290 Diest"
      },
      {
        "value": "8600 Diksmuide"
      },
      {
        "value": "1700 Dilbeek"
      },
      {
        "value": "3650 Dilsen-Stokkem"
      },
      {
        "value": "1620 Drogenbos"
      },
      {
        "value": "2570 Duffel"
      },
      {
        "value": "2650 Edegem"
      },
      {
        "value": "9900 Eeklo"
      },
      {
        "value": "9420 Erpe-Mere"
      },
      {
        "value": "2910 Essen"
      },
      {
        "value": "9940 Evergem"
      },
      {
        "value": "1570 Galmaarden"
      },
      {
        "value": "9890 Gavere"
      },
      {
        "value": "2440 Geel"
      },
      {
        "value": "3450 Geetbets"
      },
      {
        "value": "3600 Genk"
      },
      {
        "value": "9000 Gent"
      },
      {
        "value": "9500 Geraardsbergen"
      },
      {
        "value": "3890 Gingelom"
      },
      {
        "value": "8470 Gistel"
      },
      {
        "value": "3380 Glabbeek"
      },
      {
        "value": "1755 Gooik"
      },
      {
        "value": "1850 Grimbergen"
      },
      {
        "value": "2280 Grobbendonk"
      },
      {
        "value": "3150 Haacht"
      },
      {
        "value": "9450 Haaltert"
      },
      {
        "value": "3545 Halen"
      },
      {
        "value": "1500 Halle"
      },
      {
        "value": "3945 Ham"
      },
      {
        "value": "9220 Hamme"
      },
      {
        "value": "3930 Hamont-Achel"
      },
      {
        "value": "8530 Harelbeke"
      },
      {
        "value": "3500 Hasselt"
      },
      {
        "value": "3940 Hechtel-Eksel"
      },
      {
        "value": "3870 Heers"
      },
      {
        "value": "2220 Heist-op-den-Berg"
      },
      {
        "value": "2620 Hemiksem"
      },
      {
        "value": "3020 Herent"
      },
      {
        "value": "2200 Herentals"
      },
      {
        "value": "2270 Herenthout"
      },
      {
        "value": "3540 Herk-de-Stad"
      },
      {
        "value": "1540 Herne"
      },
      {
        "value": "2230 Herselt"
      },
      {
        "value": "3717 Herstappe"
      },
      {
        "value": "9550 Herzele"
      },
      {
        "value": "3550 Heusden-Zolder"
      },
      {
        "value": "8950 Heuvelland"
      },
      {
        "value": "3320 Hoegaarden"
      },
      {
        "value": "1560 Hoeilaart"
      },
      {
        "value": "3730 Hoeselt"
      },
      {
        "value": "3220 Holsbeek"
      },
      {
        "value": "8830 Hooglede"
      },
      {
        "value": "2320 Hoogstraten"
      },
      {
        "value": "9667 Horebeke"
      },
      {
        "value": "3530 Houthalen-Helchteren"
      },
      {
        "value": "8650 Houthulst"
      },
      {
        "value": "2540 Hove"
      },
      {
        "value": "3040 Huldenberg"
      },
      {
        "value": "2235 Hulshout"
      },
      {
        "value": "8480 Ichtegem"
      },
      {
        "value": "8900 Ieper"
      },
      {
        "value": "8770 Ingelmunster"
      },
      {
        "value": "8870 Izegem"
      },
      {
        "value": "8490 Jabbeke"
      },
      {
        "value": "2920 Kalmthout"
      },
      {
        "value": "1910 Kampenhout"
      },
      {
        "value": "2950 Kapellen"
      },
      {
        "value": "1880 Kapelle-op-den-Bos"
      },
      {
        "value": "9970 Kaprijke"
      },
      {
        "value": "2460 Kasterlee"
      },
      {
        "value": "3140 Keerbergen"
      },
      {
        "value": "3640 Kinrooi"
      },
      {
        "value": "9690 Kluisbergen"
      },
      {
        "value": "9910 Knesselare"
      },
      {
        "value": "8300 Knokke-Heist"
      },
      {
        "value": "8680 Koekelare"
      },
      {
        "value": "8670 Koksijde"
      },
      {
        "value": "2550 Kontich"
      },
      {
        "value": "8610 Kortemark"
      },
      {
        "value": "3470 Kortenaken"
      },
      {
        "value": "3070 Kortenberg"
      },
      {
        "value": "3720 Kortessem"
      },
      {
        "value": "8500 Kortrijk"
      },
      {
        "value": "1950 Kraainem"
      },
      {
        "value": "9150 Kruibeke"
      },
      {
        "value": "9770 Kruishoutem"
      },
      {
        "value": "8520 Kuurne"
      },
      {
        "value": "2430 Laakdal"
      },
      {
        "value": "9270 Laarne"
      },
      {
        "value": "3620 Lanaken"
      },
      {
        "value": "3400 Landen"
      },
      {
        "value": "8920 Langemark-Poelkapelle"
      },
      {
        "value": "9280 Lebbeke"
      },
      {
        "value": "9340 Lede"
      },
      {
        "value": "8880 Ledegem"
      },
      {
        "value": "8860 Lendelede"
      },
      {
        "value": "1750 Lennik"
      },
      {
        "value": "3970 Leopoldsburg"
      },
      {
        "value": "3000 Leuven"
      },
      {
        "value": "8810 Lichtervelde"
      },
      {
        "value": "1770 Liedekerke"
      },
      {
        "value": "2500 Lier"
      },
      {
        "value": "9570 Lierde"
      },
      {
        "value": "2275 Lille"
      },
      {
        "value": "1630 Linkebeek"
      },
      {
        "value": "2547 Lint"
      },
      {
        "value": "3350 Linter"
      },
      {
        "value": "9080 Lochristi"
      },
      {
        "value": "9160 Lokeren"
      },
      {
        "value": "3920 Lommel"
      },
      {
        "value": "1840 Londerzeel"
      },
      {
        "value": "8647 Lo-Reninge"
      },
      {
        "value": "9920 Lovendegem"
      },
      {
        "value": "3210 Lubbeek"
      },
      {
        "value": "3560 Lummen"
      },
      {
        "value": "9680 Maarkedal"
      },
      {
        "value": "3680 Maaseik"
      },
      {
        "value": "3630 Maasmechelen"
      },
      {
        "value": "1830 Machelen"
      },
      {
        "value": "9990 Maldegem"
      },
      {
        "value": "2390 Malle"
      },
      {
        "value": "2800 Mechelen"
      },
      {
        "value": "2450 Meerhout"
      },
      {
        "value": "3670 Meeuwen-Gruitrode"
      },
      {
        "value": "1861 Meise"
      },
      {
        "value": "9090 Melle"
      },
      {
        "value": "8930 Menen"
      },
      {
        "value": "1785 Merchtem"
      },
      {
        "value": "9820 Merelbeke"
      },
      {
        "value": "2330 Merksplas"
      },
      {
        "value": "8957 Mesen"
      },
      {
        "value": "8760 Meulebeke"
      },
      {
        "value": "8430 Middelkerke"
      },
      {
        "value": "9180 Moerbeke"
      },
      {
        "value": "2400 Mol"
      },
      {
        "value": "8890 Moorslede"
      },
      {
        "value": "2640 Mortsel"
      },
      {
        "value": "9810 Nazareth"
      },
      {
        "value": "3910 Neerpelt"
      },
      {
        "value": "9850 Nevele"
      },
      {
        "value": "2845 Niel"
      },
      {
        "value": "3850 Nieuwerkerken"
      },
      {
        "value": "8620 Nieuwpoort"
      },
      {
        "value": "2560 Nijlen"
      },
      {
        "value": "9400 Ninove"
      },
      {
        "value": "2250 Olen"
      },
      {
        "value": "8400 Oostende"
      },
      {
        "value": "9860 Oosterzele"
      },
      {
        "value": "8020 Oostkamp"
      },
      {
        "value": "8780 Oostrozebeke"
      },
      {
        "value": "3660 Opglabbeek"
      },
      {
        "value": "1745 Opwijk"
      },
      {
        "value": "9700 Oudenaarde"
      },
      {
        "value": "8460 Oudenburg"
      },
      {
        "value": "3054 Oud-Heverlee"
      },
      {
        "value": "2360 Oud-Turnhout"
      },
      {
        "value": "3090 Overijse"
      },
      {
        "value": "3900 Overpelt"
      },
      {
        "value": "3990 Peer"
      },
      {
        "value": "1670 Pepingen"
      },
      {
        "value": "8740 Pittem"
      },
      {
        "value": "8970 Poperinge"
      },
      {
        "value": "2580 Putte"
      },
      {
        "value": "2870 Puurs"
      },
      {
        "value": "2520 Ranst"
      },
      {
        "value": "2381 Ravels"
      },
      {
        "value": "2470 Retie"
      },
      {
        "value": "3770 Riemst"
      },
      {
        "value": "2310 Rijkevorsel"
      },
      {
        "value": "8800 Roeselare"
      },
      {
        "value": "9600 Ronse"
      },
      {
        "value": "1760 Roosdaal"
      },
      {
        "value": "3110 Rotselaar"
      },
      {
        "value": "8755 Ruiselede"
      },
      {
        "value": "2840 Rumst"
      },
      {
        "value": "2627 Schelle"
      },
      {
        "value": "3270 Scherpenheuvel-Zichem"
      },
      {
        "value": "2970 Schilde"
      },
      {
        "value": "2900 Schoten"
      },
      {
        "value": "2890 Sint-Amands"
      },
      {
        "value": "1640 Sint-Genesius-Rode"
      },
      {
        "value": "9170 Sint-Gillis-Waas"
      },
      {
        "value": "2860 Sint-Katelijne-Waver"
      },
      {
        "value": "9980 Sint-Laureins"
      },
      {
        "value": "9520 Sint-Lievens-Houtem"
      },
      {
        "value": "9830 Sint-Martens-Latem"
      },
      {
        "value": "9100 Sint-Niklaas"
      },
      {
        "value": "1600 Sint-Pieters-Leeuw"
      },
      {
        "value": "3800 Sint-Truiden"
      },
      {
        "value": "8587 Spiere-Helkijn"
      },
      {
        "value": "2940 Stabroek"
      },
      {
        "value": "8840 Staden"
      },
      {
        "value": "1820 Steenokkerzeel"
      },
      {
        "value": "9190 Stekene"
      },
      {
        "value": "9140 Temse"
      },
      {
        "value": "1740 Ternat"
      },
      {
        "value": "3080 Tervuren"
      },
      {
        "value": "3980 Tessenderlo"
      },
      {
        "value": "8700 Tielt"
      },
      {
        "value": "3390 Tielt-Winge"
      },
      {
        "value": "3300 Tienen"
      },
      {
        "value": "3700 Tongeren"
      },
      {
        "value": "8820 Torhout"
      },
      {
        "value": "3120 Tremelo"
      },
      {
        "value": "2300 Turnhout"
      },
      {
        "value": "8630 Veurne"
      },
      {
        "value": "1800 Vilvoorde"
      },
      {
        "value": "8640 Vleteren"
      },
      {
        "value": "3798 Voeren"
      },
      {
        "value": "2290 Vorselaar"
      },
      {
        "value": "2350 Vosselaar"
      },
      {
        "value": "9950 Waarschoot"
      },
      {
        "value": "9250 Waasmunster"
      },
      {
        "value": "9185 Wachtebeke"
      },
      {
        "value": "8790 Waregem"
      },
      {
        "value": "3830 Wellen"
      },
      {
        "value": "1780 Wemmel"
      },
      {
        "value": "8940 Wervik"
      },
      {
        "value": "2260 Westerlo"
      },
      {
        "value": "9230 Wetteren"
      },
      {
        "value": "8560 Wevelgem"
      },
      {
        "value": "1970 Wezembeek-Oppem"
      },
      {
        "value": "9260 Wichelen"
      },
      {
        "value": "8710 Wielsbeke"
      },
      {
        "value": "2110 Wijnegem"
      },
      {
        "value": "2830 Willebroek"
      },
      {
        "value": "8750 Wingene"
      },
      {
        "value": "2160 Wommelgem"
      },
      {
        "value": "9790 Wortegem-Petegem"
      },
      {
        "value": "2990 Wuustwezel"
      },
      {
        "value": "2240 Zandhoven"
      },
      {
        "value": "1930 Zaventem"
      },
      {
        "value": "8210 Zedelgem"
      },
      {
        "value": "9240 Zele"
      },
      {
        "value": "9060 Zelzate"
      },
      {
        "value": "1980 Zemst"
      },
      {
        "value": "9750 Zingem"
      },
      {
        "value": "2980 Zoersel"
      },
      {
        "value": "9930 Zomergem"
      },
      {
        "value": "3520 Zonhoven"
      },
      {
        "value": "8980 Zonnebeke"
      },
      {
        "value": "9620 Zottegem"
      },
      {
        "value": "3440 Zoutleeuw"
      },
      {
        "value": "8377 Zuienkerke"
      },
      {
        "value": "9870 Zulte"
      },
      {
        "value": "3690 Zutendaal"
      },
      {
        "value": "9630 Zwalm"
      },
      {
        "value": "8550 Zwevegem"
      },
      {
        "value": "2070 Zwijndrecht"
      }
    ]
  },
  mutations: {
    setAnswer() {
      console.log('todo');
    },
    [SET_QUESTIONS](state, data){
      state.questions = data;
    },
    [SET_ZIP_CODE] (state, mutation) {
      state.zipCode = mutation.zipCode
    }
  },
  actions: {
    getQuestions({commit, state},data) {
      axios.get('/api/gps/survey/2018_be_municipal_wallonia_rural.json', data).then((res) => {
        console.log('res', res);

        let i18n = Vue.i18n;

        i18n.add('en', { gps: { survey: res.data.i18n.en } });
        i18n.add('fr', { gps: { survey: res.data.i18n.fr } });
        i18n.add('nl', { gps: { survey: res.data.i18n.nl } });

        commit(SET_QUESTIONS, res.data);
      });
    },
    setQuestionAgreement({commit, state}, data) {
      console.log('TODO');
    },
    setQuestionImportance({commit}, data) {
      console.log('TODO');
    },
    setZipCode ({ commit }, data) {
      const municipality = data.municipality;
      const zipCode = municipality.substr(0, 4);
      commit(SET_ZIP_CODE, { zipCode });
    }
  }
})
