# Seminaaritehtävän raportti

Projektin git-repo: [https://github.com/ellipiilonen/event-lookup](https://github.com/ellipiilonen/event-lookup)

Video: [https://youtu.be/YQvIrSjEWRw](https://www.youtube.com/watch?v=YQvIrSjEWRw)

Julkaistu paketti NPM-palvelussa: [https://www.npmjs.com/package/@ellipiilonen/event-lookup](https://www.npmjs.com/package/@ellipiilonen/event-lookup)

## Tavoitteet
Seminaaritehtäväni tavoitteena oli perehtyä NPM-palveluun ja pakettien julkaisemiseen sekä julkaista oma paketti palvelussa. Tavoitteenani oli tehdä paketti, jonka avulla saa haettua tapahtumia Helsinki Linked Events API:sta tapahtuman otsikossa tai kuvauksessa esiintyvän tekstin perusteella. Paketin tavoitteena oli palauttaa hakua vastaavan tapahtuman otsikko ja kuvaus.
Tavoitearvosanani seminaaritehtävälle on 3.
## Toteutus
Toteutin seminaaritehtävän luomalla uuden NPM-paketin, johon loin tiedoston ```lookup.ts```, joka sisältää koodin tapahtumien hakua varten. Tapahtumia voidaan hakea Helsinki Linked Event API:sta hakusanalla (text), jolloin tapahtumat saadaan API:sta ja niiden nimet sekä kuvaukset näytetään.

Tein tapahtumien haulle myös testin tiedostoon ```lookup.spec.ts```. Ennen paketin julkaisua loin README-tiedoston, jossa on ohjeet ja tietoa paketin käytöstä. Lopuksi julkaisin paketin NPM-palvelussa.
## Teknologiat
Tärkeimpänä teknologiana tietenkin NPM, jolla loin paketin. Käytin koodauskielenä Typescriptiä, ja tein testit Vitestillä. 
## Oppimani asiat
Seminaaritehtävä oli hyvin opettavainen, ja jos listaisin joka ikisen oppimani asian tässä, listasta tulisi aika pitkä. Niinpä keskityn vain olennaisimpiin ja ehkä suurimpiin oivalluksiin, joita sain tehtävän aikana.

Suurin haaste tehtävässä oli itse toiminnallisuuden, eli tapahtumien haun luonti. Tunnen osaavani API:n käytön pääasiassa hyvin, mutta törmäsin jatkuvasti pieniin ongelmiin, joihin jäin jumiin. Myös Typescript aiheutti paikoittain ongelmia, mutta sitä olenkin käyttänyt vähemmän. 

Yksi suurimmista ongelmistani tuli esiin Vitest-testejä tehdessä; en meinannut millään saada API-kutsuja toimimaan, enkä ole monen Googlauksen ja debuggauksenkaan jälkeenkään täysin varma, mikä ongelma loppujen lopuksi oli. Testi koko ajan aikakatkaisi itsensä 5 sekunnin jälkeen, eikä API-kutsu tuntunut toimivan. Löysin Googlaamalla mm. [tämän keskustelun](https://stackoverflow.com/questions/44893714/how-to-test-api-calls-using-fetch) Stack Overflowsta, jossa kehotettiin käyttämään fetch-mockia. Loin onnistuneesti fetch mockin mm. [Vitestin dokumentaatiota](https://vitest.dev/guide/mocking) hyödyntäen, ja sain sen myös jotenkuten toimimaan. Lopulta testasin vielä kerran ilman mockia, jolloin testi toimikin ja haki tapahtumat suoraan Helsinki Linked Events API:sta. 

Mysteeriksi siis jäi, minkä takia testi ei aiemmin toiminut ja yhtäkkiä toimikin. Opin kuitenkin käyttämään fetch-mockia ja ymmärtämään sen käyttötarkoituksen. En kuitenkaan hyödyntänyt sitä paketin lopullisessa versiossa, vaikka useiden lähteiden mukaan sen käyttö olisikin suositeltavaa ja parempi tapa tehdä testejä kuin oikeasta API:sta fetchaaminen.

Muokkaus seuraavana päivänä: ilmeisesti API:n kutsuminen vie välillä enemmän aikaa syystä x. Usein API vastaa lähes heti, mutta välillä siinä voi mennä jopa yli 10 sekuntia. Lisäsin testiin Vitestin dokumentaatiota hyödyntäen aikakatkaisun, joka tuntuu nyt ratkaisevan ongelman ainakin toistaiseksi.

Itse paketin julkaisu NPM-palveluun tuntui helpolta seuraten [NPM:n dokumentaatiota](https://docs.npmjs.com/packages-and-modules). Paketin julkaisussa ei tullut sen kummempia ongelmia.

Opin myös luomaan olemassa olevaan repositorioon README-tiedoston sekä .md -tiedostojen formatoinnista.

## Jatkokehitysideat
Pakettia voisi jatkokehittää luomalla useampia hakukriteereitä, jolloin tapahtumia voisi hakea esimerkiksi paikan (location), ajan (start & end) tai kategorian (category) avulla. Myös tapahtumien järjestely esimerkiksi keston (duration) tai viikonpäivän (weekday) mukaan voisi olla hyvä jatkokehityskohde.

Itse hakusanalla (text) hakemista voisi kehittää niin, että olisi mahdollista hakea useammalla hakusanalla yhtä aikaa. Tämän minun olikin tarkoituksena alunperin tehdä pakettiin, mutta aika (eikä jaksaminen) ei siihen valitettavasti riittänyt.
