function qrand(n) {
	RandSeed = (RandMultiplier * RandSeed + RandIncrement) % 0x7fffffff
	return (RandSeed >> 16) % n
}

function qinit() {
	RandMultiplier = 0x015a4e35
	RandIncrement = 1
	var now = new Date()
	RandSeed = now.getTime() % 0xffffffff
	FirstSentence = 1
}

function GenRandomSentenceTemplate() {
	var w = ""
	var n = 32
	var r = qrand(n+5)
	if ( r > n )	w = "1 2 1 5."
	else if ( r == 1 )	w = "De så 1 som 8 5 6 en 7."
	else if ( r == 2 )	w = "1 2 en 0 til han 8 5 6 den 4e 7en."
	else if ( r == 3 )	w = "Da 2 0en 1 5."
	else if ( r == 4 )	w = "Flere 0er 8 da 1 som 2 1 2 en 0 6 7en."
	else if ( r == 5 )	w = "1 2 en 0 med en 7."
	else if ( r == 6 ) 	w = "0en var 4 og 4."
	else if ( r == 7 )	w = "De små 0ene 8 i skjul."
	else if ( r == 8 )	w = "En kjempe0 2 7en til 0ene."
	else if ( r == 9 )	w = "Sjefs0en 2 0en, 0en og 0ene."
	else if ( r == 10 ) {
		if ( FirstSentence ) {
			w = "Det var en gang for lenge siden at noen 0er 8 sammen med 1 for å finne en 7."
		} else {
			w = "1 8 veldig 5."
		}
	}
	else if ( r == 11 ) {
		if ( FirstSentence ) {
			w = "Det var en gang 1 som 2 andre 0er."
		} else {
			w = "Plutselig var 0en der 6 den 4e 7en, og 2 alle 0ene 5."
		}
	}
	else if ( r == 12 ) {
		if ( FirstSentence ) {
			w = "0en visste dette var en 4 dag."
		} else {
			w = "Det ble stille og 0en viste hvordan den 4e 0en fungerte."
		}
	}
	else if ( r == 13 )	w = "0ene 2 mange 0er."
	else if ( r == 14 )	w = "En 0 var 4 og 2 en 4 0."
	else if ( r == 15 )	w = "4e 0er fyllte luften, og 1 8 6 en 7."
	else if ( r == 16 )	w = "Både 0ene og 0ene 2 0en."
	else if ( r == 17 )	w = "1 8 7en 5 6 en 4 7."
	else if ( r == 18 )	w = "Den 4e 7en traff 7ene med 1 som 8 6 en 4 7."
	else if ( r == 19 )	w = "7en kom 3 8."
	else if ( r == 20 )	w = "7ene ankom, mens 0ene 8 6 7en."
	else if ( r == 21 )	w = "En 4 0 8 9 ganger på 9 timer."
	else if ( r == 22 )	w = "1 tok med seg 9 7er inn til 0en."
	else if ( r == 23 )	w = "9 0er 8 en 4 7 på 9 dager."
	else if ( r == 24 )	w = "1 kjøpte seg en 4 7."
	else if ( r == 25 )	w = "9 kroner måtte 1 betale."
	else if ( r == 26 )	w = "Plutselig så de 9 0er som kom 6 7en."
	else if ( r == 27 )	w = "9 4e 0er møtte 9 4e 0er."
	else if ( r == 28 )	w = "1 2 en 7."
	else if ( r == 29 )	w = "1 tok så en 4 7 og kastet den på 1."
	FirstSentence = 0
	return w
}


function GenNoun() {
	var n = 120
	var r = qrand(n)
	if ( r == PrevNoun ) {
		r = qrand(n)
	}
	PrevNoun = r
	var w = ""
	if ( r == 0 )	    w = "nordboer"
	else if ( r == 1 ) 	w = "gullfisk"
	else if ( r == 2 )	w = "egypter"
	else if ( r == 3 )	w = "amerikaner"
	else if ( r == 4 )	w = "araber"
	else if ( r == 5 )	w = "purk"
	else if ( r == 6 )	w = "snut"
	else if ( r == 7 )	w = "indianer"
	else if ( r == 8 )	w = "elefant"
	else if ( r == 9 )	w = "snekker"
	else if ( r == 10 )	w = "kamel"
	else if ( r == 11 )	w = "astronaut"
	else if ( r == 12 )	w = "robot"
	else if ( r == 13 )	w = "skuespiller"
	else if ( r == 14 )	w = "tysker"
	else if ( r == 15 )	w = "venn"
	else if ( r == 16 )	w = "viking"
	else if ( r == 17 )	w = "elg"
	else if ( r == 18 )	w = "oter"
	else if ( r == 19 )	w = "cowboy"
	else if ( r == 20 )	w = "huleboer"
	else if ( r == 21 )	w = "neandertaler"
	else if ( r == 22 )	w = "brannfyr"
	else if ( r == 23 )	w = "pyroman"
	else if ( r == 24 )	w = "snømåker"
	else if ( r == 25 )	w = "kineser"
	else if ( r == 26 )	w = "asiater"
	else if ( r == 27 )	w = "skater"
	else if ( r == 28 )	w = "japaner"
	else if ( r == 29 )	w = "kamerat"
	else if ( r == 30 )	w = "hammerhai"
	else if ( r == 31 )	w = "brasilianer"
	else if ( r == 32 )	w = "chilener"
	else if ( r == 33 )	w = "venn"
	else if ( r == 34 )	w = "kanarifugl"
	else if ( r == 35 )	w = "russer"
	else if ( r == 36 )	w = "banditt"
	else if ( r == 37 )	w = "kriger"
	else if ( r == 38 )	w = "ork"
	else if ( r == 39 )	w = "designer"
	else if ( r == 40 )	w = "kanin"
	else if ( r == 41 )	w = "kamerat"
	else if ( r == 42 )	w = "alv"
	else if ( r == 43 )	w = "sjørøver"
	else if ( r == 44 )	w = "sebra"
	else if ( r == 45 )	w = "kreps"
	else if ( r == 46 )	w = "politiker"
	else if ( r == 47 )	w = "musiker"
	else if ( r == 48 )	w = "matros"
	else if ( r == 49 )	w = "pilot"
	else if ( r == 50 )	w = "bjørn"
	else if ( r == 51 )	w = "kanin"
	else if ( r == 52 )	w = "cowboy"
	else if ( r == 53 )	w = "fulg"
	else if ( r == 54 )	w = "ørn"
	else if ( r == 55 )	w = "astronaut"
	else if ( r == 56 )	w = "rev"
	else if ( r == 57 )	w = "tiger"
	else if ( r == 58 )	w = "sabeltanntiger"
	else if ( r == 59 )	w = "sabeltannhund"
	else if ( r == 60 )	w = "sabeltannkatt"
	else if ( r == 61 )	w = "pusekatt"
	else if ( r == 62 )	w = "elefant"
	else if ( r == 63 )	w = "giraff"
	else if ( r == 64 )	w = "maur"
	else if ( r == 65 )	w = "gitarist"
	else if ( r == 66 )	w = "pøbel"
	else if ( r == 67 )	w = "sjef"
	else if ( r == 68 )	w = "doktor"
	else if ( r == 69 )	w = "ingeniør"
	else if ( r == 70 )	w = "superhelt"
	else if ( r == 71 )	w = "kokk"
	else if ( r == 72 )	w = "sabeltanngiraff"
	else if ( r == 73 )	w = "fisk"
	else if ( r == 74 )	w = "laks"
	else if ( r == 75 )	w = "designer"
	else if ( r == 76 )	w = "juledesigner"
	else if ( r == 77 )	w = "aspirant"
	else if ( r == 78 )	w = "bruktbilselger"
	else if ( r == 79 )	w = "sjeik"
	else if ( r == 80 )	w = "ungdom"
	else if ( r == 81 )	w = "isbjørn"
	else if ( r == 82 )	w = "alpinist"
	else if ( r == 83 )	w = "servitør"
	else if ( r == 84 )	w = "doktor"
	else if ( r == 85 )	w = "bukk"
	else if ( r == 86 )	w = "sau"
	else if ( r == 87 )	w = "bergenser"
	else if ( r == 88 )	w = "kamel"
	else if ( r == 89 )	w = "finnmarking"
	else if ( r == 90 )	w = "fjott"
	else if ( r == 91 )	w = "tjukkas"
	else if ( r == 92 )	w = "prest"
	else if ( r == 93 )	w = "høvding"
	else if ( r == 94 )	w = "sebra"
	else if ( r == 95 )	w = "direktør"
	else if ( r == 96 )	w = "figur"
	else if ( r == 97 )	w = "hobitt"
	else if ( r == 98 )	w = "stammeleder"
	else if ( r == 99 )	w = "turist"
	else if ( r == 100 )	w = "gris"
	else if ( r == 101 )	w = "designerpuddel"
	else if ( r == 102 )	w = "apekatt"
	else if ( r == 103 )	w = "gorilla"
	else if ( r == 104 )	w = "soldat"
	else if ( r == 105 )	w = "infanterist"
	else if ( r == 106 )	w = "skytter"
	else if ( r == 107 )	w = "bueskytter"
	else if ( r == 108 )	w = "helt"
	else if ( r == 109 )	w = "skiskytter"
	else if ( r == 110 )	w = "rytter"
	else if ( r == 111 )	w = "designerpuddel"
	else if ( r == 112 )	w = "tyranosaurus"
	else if ( r == 113 )	w = "manet"
	else if ( r == 114 )	w = "fører"
	else if ( r == 115 )	w = "demon"
	else if ( r == 116 )	w = "fenrisulv"
	else if ( r == 117 )	w = "kaptein"
	else if ( r == 118 )	w = "narkolanger"
	else if ( r == 119 )	w = "mafiaboss"
	return w
}


function GenNounFem() {
	var n = 31
	var r = qrand(n)
	if ( r == PrevNoun ) {
		r = qrand(n)
	}
	PrevNoun = r
	var w = ""
	if ( r == 0 )	    w = "jente"
	else if ( r == 1 ) 	w = "porche"
	else if ( r == 2 )	w = "servitrise"
	else if ( r == 3 )	w = "dame"
	else if ( r == 4 )	w = "løvinne"
	else if ( r == 5 )	w = "bjørk"
	else if ( r == 6 )	w = "hoppe"
	else if ( r == 7 )	w = "ku"
	else if ( r == 8 )	w = "heks"
	else if ( r == 9 )	w = "mus"
	else if ( r == 10  )	w = "høne"
	else if ( r == 11  )	w = "skilpadde"
	else if ( r == 12  )	w = "vaskehjelp"
	else if ( r == 13  )	w = "dronning"
	else if ( r == 14  )	w = "hallodame"
	else if ( r == 15  )	w = "barnehagetante"
	else if ( r == 16  )	w = "tante"
	else if ( r == 17  )	w = "katte"
	else if ( r == 18  )	w = "dundre"
	else if ( r == 19  )	w = "lærerinne"
	else if ( r == 20  )	w = "geit"
	else if ( r == 21  )	w = "due"
	else if ( r == 22  )	w = "dokke"
	else if ( r == 23  )	w = "prinsesse"
	else if ( r == 24  )	w = "ugle"
	else if ( r == 25  )	w = "sangerinne"
	else if ( r == 26  )	w = "venninne"
	else if ( r == 27  )	w = "kjerring"
	else if ( r == 28  )	w = "folkevogn"
	else if ( r == 29  )	w = "kusine"
	else if ( r == 30  )	w = "konkubine"
	return w
}



function GenNounPhrase() {
	var r = qrand(150)

// HUNKJØNN
	if( r < 30) {
		var s = ""
		s = GenNounFem()

		var r = qrand(100)
		if ( r < 30 ) {
			lengde = s.length;
			lstart = lengde - 1;
			ende = s.substr(lstart,1)
			if (ende == "e"){
				tmps = s.substr(0,lstart)
				s = tmps
				s = s + "a"
			} else {
				s = s + "a"
			}
		} else if ( r < 35 ) {
			s = "ei annen " + s
		} else if ( r < 40 ) {

			lengde = s.length;
			lstart = lengde - 1;
			ende = s.substr(lstart,1)

			if (ende == "e"){
				s = "noen " + s +  "r"
			} else {
				s = "noen " + s +  "er"
			}
		} else {
			s = "ei " + s
		}
	}else{
// HANKJØNN
		var s = ""
		s = GenNoun()

		var r = qrand(100)
		if ( r < 30 ) {
			s = s + "en"
		} else if ( r < 35 ) {
			s = "en annen " + s
		} else if ( r < 40 ) {

			lengde = s.length;
			lstart = lengde - 2;
			ende = s.substr(lstart,2)

			if (ende == "er"){
				s = "noen " + s +  "e"
			} else {
				s = "noen " + s +  "er"
			}
		} else {
			s = "en " + s
		}
	}
	return s
}


function GenNounObject() {
	var n = 134
	var r = qrand(n)
	if ( r == PrevNoun ) {
		r = qrand(n)
	}
	PrevNoun = r
	var w = ""
	if ( r == 0 )	    w = "sparkesykkel"
	else if ( r == 1 ) 	w = "datamaskin"
	else if ( r == 2 )	w = "monitor"
	else if ( r == 3 )	w = "stol"
	else if ( r == 4 )	w = "sementbil"
	else if ( r == 5 )	w = "høvel"
	else if ( r == 6 )	w = "ostehøvel"
	else if ( r == 7 )	w = "mikrochip"
	else if ( r == 8 )	w = "hullmaskin"
	else if ( r == 9 )	w = "telefon"
	else if ( r == 10 )	w = "knapp"
	else if ( r == 11 )	w = "ryggsekk"
	else if ( r == 12 )	w = "rakett"
	else if ( r == 13 )	w = "stift"
	else if ( r == 14 )	w = "blyant"
	else if ( r == 15 )	w = "ringperm"
	else if ( r == 16 )	w = "propell"
	else if ( r == 17 )	w = "ubåt"
	else if ( r == 18 )	w = "diskett"
	else if ( r == 19 )	w = "video"
	else if ( r == 20 )	w = "boks"
	else if ( r == 21 )	w = "do"
	else if ( r == 22 )	w = "sekk"
	else if ( r == 23 )	w = "brannbil"
	else if ( r == 24 )	w = "robåt"
	else if ( r == 25 )	w = "ledning"
	else if ( r == 26 )	w = "kartong"
	else if ( r == 27 )	w = "telefon"
	else if ( r == 28 )	w = "tast"
	else if ( r == 29 )	w = "mobil"
	else if ( r == 30 )	w = "komfyr"
	else if ( r == 31 )	w = "fiskebåt"
	else if ( r == 32 )	w = "bolt"
	else if ( r == 33 )	w = "gitar"
	else if ( r == 34 )	w = "trompet"
	else if ( r == 35 )	w = "ringperm"
	else if ( r == 36 )	w = "rapport"
	else if ( r == 37 )	w = "overhead"
	else if ( r == 38 )	w = "peis"
	else if ( r == 39 )	w = "server"
	else if ( r == 40 )	w = "kompressor"
	else if ( r == 41 )	w = "skiftenøkkel"
	else if ( r == 42 )	w = "bok"
	else if ( r == 43 )	w = "bil"
	else if ( r == 44 )	w = "sykkel"
	else if ( r == 45 )	w = "krets"
	else if ( r == 46 )	w = "gradestokk"
	else if ( r == 47 )	w = "stokk"
	else if ( r == 48 )	w = "ballong"
	else if ( r == 49 )	w = "vindusvisker"
	else if ( r == 50 )	w = "pels"
	else if ( r == 51 )	w = "pelsdott"
	else if ( r == 52 )	w = "paraply"
	else if ( r == 53 )	w = "hekk"
	else if ( r == 54 )	w = "jordsekk"
	else if ( r == 55 )	w = "parabol"
	else if ( r == 56 )	w = "tv"
	else if ( r == 57 )	w = "seilbåt"
	else if ( r == 58 )	w = "ting"
	else if ( r == 59 )	w = "lenestol"
	else if ( r == 60 )	w = "sofa"
	else if ( r == 61 )	w = "dieseltank"
	else if ( r == 62 )	w = "lyktestolpe"
	else if ( r == 63 )	w = "gjerdestolpe"
	else if ( r == 64 )	w = "glidelås"
	else if ( r == 65 )	w = "gitar"
	else if ( r == 66 )	w = "medisinball"
	else if ( r == 67 )	w = "parykk"
	else if ( r == 68 )	w = "kalkulator"
	else if ( r == 69 )	w = "bilstereo"
	else if ( r == 70 )	w = "supermanndrakt"
	else if ( r == 71 )	w = "høygaffel"
	else if ( r == 72 )	w = "tankbåt"
	else if ( r == 73 )	w = "fisk"
	else if ( r == 74 )	w = "laks"
	else if ( r == 75 )	w = "busk"
	else if ( r == 76 )	w = "parkeringsautomat"
	else if ( r == 77 )	w = "firmabil"
	else if ( r == 78 )	w = "toyta"
	else if ( r == 79 )	w = "ford"
	else if ( r == 80 )	w = "ulldott"
	else if ( r == 81 )	w = "osthøvel"
	else if ( r == 82 )	w = "lydmodul"
	else if ( r == 83 )	w = "bass"
	else if ( r == 84 )	w = "kontrabass"
	else if ( r == 85 )	w = "mikrofon"
	else if ( r == 86 )	w = "biff"
	else if ( r == 87 )	w = "ledning"
	else if ( r == 88 )	w = "kabel"
	else if ( r == 89 )	w = "leilighet"
	else if ( r == 90 )	w = "tuba"
	else if ( r == 91 )	w = "loff"
	else if ( r == 92 )	w = "rullestol"
	else if ( r == 93 )	w = "ferrari"
	else if ( r == 94 )	w = "vimpel"
	else if ( r == 95 )	w = "fiskebåt"
	else if ( r == 96 )	w = "statue"
	else if ( r == 97 )	w = "luftballong"
	else if ( r == 98 )	w = "manual"
	else if ( r == 99 )	w = "videomaskin"
	else if ( r == 100 )	w = "søppeldunk"
	else if ( r == 101 )	w = "busk"
	else if ( r == 102 )	w = "traktor"
	else if ( r == 103 )	w = "maskin"
	else if ( r == 104 )	w = "motor"
	else if ( r == 105 )	w = "innretning"
	else if ( r == 106 )	w = "skisko"
	else if ( r == 107 )	w = "fotball"
	else if ( r == 108 )	w = "ost"
	else if ( r == 109 )	w = "ski"
	else if ( r == 110 )	w = "oljekanne"
	else if ( r == 111 )	w = "dynamo"
	else if ( r == 112 )	w = "planet"
	else if ( r == 113 )	w = "manet"
	else if ( r == 114 )	w = "sykkellås"
	else if ( r == 115 )	w = "flygemaskin"
	else if ( r == 116 )	w = "meteor"
	else if ( r == 117 )	w = "turbin"
	else if ( r == 118 )	w = "gassmotor"
	else if ( r == 119 )	w = "reservør"
	else if ( r == 120 )	w = "øks"
	else if ( r == 121 )	w = "harddisk"
	else if ( r == 122 )	w = "felg"
	else if ( r == 123 )	w = "bil"
	else if ( r == 124 )	w = "båt"
	else if ( r == 125 )	w = "fisk"
	else if ( r == 126 )	w = "bygning"
	else if ( r == 127 )	w = "lastebil"
	else if ( r == 128 )	w = "høyttaler"
	else if ( r == 129 )	w = "stol"
	else if ( r == 130 )	w = "slipemaskin"
	else if ( r == 131 )	w = "girkasse"
	else if ( r == 132 )	w = "moped"
	else if ( r == 133 )	w = "sykkel"
	else if ( r == 134 )	s = "motorsykkel"
	return w
}



function GenPreposition() {
	var n = 14
	var r = qrand(n)
	var w = ""
	if ( r == 0 )	    w = "av"
	else if ( r == 1 )	w = "fra"
	else if ( r == 2 )	w = "nær"
	else if ( r == 3 )	w = "om"
	else if ( r == 4 )	w = "rundt"
	else if ( r == 5 )	w = "for"
	else if ( r == 6 )	w = "mot"
	else if ( r == 7 )	w = "over"
	else if ( r == 8 )	w = "bak"
	else if ( r == 9 )	w = "forbi"
	else if ( r == 10 )	w = "i slekt med"
	else if ( r == 11 )	w = "definert av"
	else if ( r == 12 )	w = "innvendig"
	else if ( r == 13 )	w = "sammen med"
	else if ( r == 14 )	s = "reserverte med"
	return w
}


function GenAdverb() {
	var n = 22
	var r = qrand(n)
	if ( r == PrevAdverb ) {
		r = qrand(n)
	}
	PrevAdverb = r
	var s = ""
	if ( r == 0 )	    s = "fort"
	else if ( r == 1 )	s = "hastig"
	else if ( r == 2 )	s = "rått"
	else if ( r == 3 )	s = "hasardiøst"
	else if ( r == 4 )	s = "nydelig"
	else if ( r == 5 )	s = "provoserende"
	else if ( r == 6 )	s = "treffsikkert"
	else if ( r == 7 )	s = "bestemt"
	else if ( r == 8 )	s = "latterlig"
	else if ( r == 9 )	s = "uansvarlig"
	else if ( r == 10 )	s = "usikkert"
	else if ( r == 11 )	s = "vinglete"
	else if ( r == 12 )	s = "fint"
	else if ( r == 13 )	s = "vagt"
	else if ( r == 14 )	s = "elegant"
	else if ( r == 15 )	s = "nervøst"
	else if ( r == 16 )	s = "rett"
	else if ( r == 17 )	s = "sjokkert"
	else if ( r == 18 )	s = "hensynsløst"
	else if ( r == 19 )	s = "brutalt"
	else if ( r == 20 )	s = "hardt"
	else if ( r == 21 )	s = "høflig"
	else if ( r == 22 )	s = "fornærmende"
	return s
}


function GenAdjective() {
	var n = 80
	var r = qrand(n)
	if ( r == PrevAdjective ) {
		r = qrand(n)
	}
	PrevAdjective = r
	var w = ""
	if ( r == 0 )		w = "treg"
	else if ( r == 1 )	w = "trygg"
	else if ( r == 2 )	w = "snill"
	else if ( r == 3 )	w = "brutal"
	else if ( r == 4 )	w = "enorm"
	else if ( r == 5 )	w = "lojal"
	else if ( r == 6 )	w = "svær"
	else if ( r == 7 )	w = "rå"
	else if ( r == 8 )	w = "farlig"
	else if ( r == 9 )	w = "ond"
	else if ( r == 10 )	w = "god"
	else if ( r == 11 )	w = "rød"
	else if ( r == 12 )	w = "blå"
	else if ( r == 13 )	w = "spiss"
	else if ( r == 14 )	w = "hurtig"
	else if ( r == 15 )	w = "rask"
	else if ( r == 16 )	w = "sinnsyk"
	else if ( r == 17 )	w = "tøff"
	else if ( r == 18 )	w = "gul"
	else if ( r == 19 )	w = "uredd"
	else if ( r == 20 )	w = "fryktløs"
	else if ( r == 21 )	w = "fryktet"
	else if ( r == 22 )	w = "rettferdig"
	else if ( r == 23 )	w = "mystisk"
	else if ( r == 24 )	w = "verdensvant"
	else if ( r == 25 )	w = "urban"
	else if ( r == 26 )	w = "sort"
	else if ( r == 27 )	w = "grønn"
	else if ( r == 28 )	w = "sleip"
	else if ( r == 29 )	w = "kaotisk"
	else if ( r == 30 )	w = "slesk"
	else if ( r == 31 )	w = "fantastisk"
	else if ( r == 32 )	w = "nervøs"
	else if ( r == 33 )	w = "varm"
	else if ( r == 34 )	w = "kald"
	else if ( r == 35 )	w = "hyggelig"
	else if ( r == 36 )	w = "kul"
	else if ( r == 37 )	w = "gammeldags"
	else if ( r == 38 )	w = "stygg"
	else if ( r == 39 )	w = "farlig"
	else if ( r == 40 )	w = "sløv"
	else if ( r == 41 )	w = "provosert"
	else if ( r == 42 )	w = "stor"
	else if ( r == 43 )	w = "kraftig"
	else if ( r == 44 )	w = "tynn"
	else if ( r == 45 )	w = "mangelfull"
	else if ( r == 46 )	w = "lemlestet"
	else if ( r == 47 )	w = "enarmet"
	else if ( r == 48 )	w = "uheldig"
	else if ( r == 49 )	w = "heldig"
	else if ( r == 50 )	w = "kjent"
	else if ( r == 51 )	w = "sint"
	else if ( r == 52 )	w = "ondskapsfull"
	else if ( r == 53 )	w = "presis"
	else if ( r == 54 )	w = "hodeløs"
	else if ( r == 55 )	w = "likblek"
	else if ( r == 56 )	w = "grei"
	else if ( r == 57 )	w = "langhåret"
	else if ( r == 58 )	w = "snill"
	else if ( r == 59 )	w = "kjip"
	else if ( r == 60 )	w = "fin"
	else if ( r == 61 )	w = "svensk"
	else if ( r == 62 )	w = "sliten"
	else if ( r == 63 )	w = "trøtt"
	else if ( r == 64 )	w = "hvit"
	else if ( r == 65 )	w = "sort"
	else if ( r == 66 )	w = "lysegrønn"
	else if ( r == 67 )	w = "rød"
	else if ( r == 68 )	w = "blå metallic"
	else if ( r == 69 )	w = "lilla"
	else if ( r == 70 )	w = "rosa"
	else if ( r == 71 )	w = "forkrommet"
	else if ( r == 72 )	w = "svart matt"
	else if ( r == 73 )	w = "mørkegrønn"
	else if ( r == 74 )	w = "lysegul"
	else if ( r == 75 )	w = "orange"
	else if ( r == 76 )	w = "grå"
	else if ( r == 77 )	w = "lys"
	else if ( r == 78 )	w = "mørk"
	else if ( r == 79 )	w = "svart"

	return w
}

function GenVerb() {
	var n = 46
	var r = qrand(n)
	if ( r == PrevTransitiveVerb ) {
		r = qrand(n)
	}
	PrevTransitiveVerb = r
	var s = ""
	if ( r == 0 )		s = "snakket"
	else if ( r == 1 )	s = "syklet"
	else if ( r == 2 )	s = "sang"
	else if ( r == 3 )	s = "sov"
	else if ( r == 4 )	s = "snorket"
	else if ( r == 5 )	s = "talte"
	else if ( r == 6 )	s = "flakset"
	else if ( r == 7 )	s = "falt"
	else if ( r == 8 )	s = "hoppet"
	else if ( r == 9 )	s = "vasket"
	else if ( r == 10 )	s = "tegnet"
	else if ( r == 11 )	s = "fisket"
	else if ( r == 12 )	s = "spillte"
	else if ( r == 13 )	s = "svømte"
	else if ( r == 14 )	s = "stupte"
	else if ( r == 15 )	s = "hinket"
	else if ( r == 16 )	s = "brølte"
	else if ( r == 17 )	s = "ropte"
	else if ( r == 18 )	s = "løftet"
	else if ( r == 19 )	s = "hacket"
	else if ( r == 20 )	s = "jobbet"
	else if ( r == 21 )	s = "kjørte"
	else if ( r == 22 )	s = "gravde"
	else if ( r == 23 )	s = "spadde"
	else if ( r == 24 )	s = "lå"
	else if ( r == 25 )	s = "lyttet"
	else if ( r == 26 )	s = "lo"
	else if ( r == 27 )	s = "lekte"
	else if ( r == 28 )	s = "limte"
	else if ( r == 29 )	s = "nikket"
	else if ( r == 30 )	s = "bukket"
	else if ( r == 31 )	s = "spiste"
	else if ( r == 32 )	s = "satt"
	else if ( r == 33 )	s = "rodde"
	else if ( r == 34 )	s = "tastet"
	else if ( r == 35 )	s = "komuniserte"
	else if ( r == 36 )	s = "filosoferte"
	else if ( r == 37 )	s = "reparerte"
	else if ( r == 38 )	s = "pusset"
	else if ( r == 39 )	s = "løp"
	else if ( r == 40 )	s = "gikk"
	else if ( r == 41 )	s = "luktet"
	else if ( r == 42 )	s = "drakk"
	else if ( r == 43 )	s = "gurglet"
	else if ( r == 44 )	s = "badet"
	else if ( r == 45 )	s = "ventet"
	else if ( r == 46 )	s = "kikket"

	vt = ""
	var i
	for (i=0; i<s.length; i++ ) {
		var c = s.substring(i,i+1)
		var w = c
		vt += w
	}

	return vt
}



function GenTransitiveVerbPhrase(tense) {
	var n = 48
	var r = qrand(n)
	if ( r == PrevTransitiveVerb ) {
		r = qrand(n)
	}
	PrevTransitiveVerb = r
	var s = ""
	if ( r == 0 )		s = "spiste"
	else if ( r == 1 )	s = "klappet"
	else if ( r == 2 )	s = "flamberte"
	else if ( r == 3 )	s = "børstet"
	else if ( r == 4 )	s = "brakk"
	else if ( r == 5 )	s = "knakk"
	else if ( r == 6 )	s = "malte"
	else if ( r == 7 )	s = "spant"
	else if ( r == 8 )	s = "stakk"
	else if ( r == 9 )	s = "feide"
	else if ( r == 10 )	s = "belærte"
	else if ( r == 11 )	s = "malte"
	else if ( r == 12 )	s = "friserte"
	else if ( r == 13 )	s = "sprayet"
	else if ( r == 14 )	s = "spylte"
	else if ( r == 15 )	s = "felte"
	else if ( r == 16 )	s = "fornærmet"
	else if ( r == 17 )	s = "fisket"
	else if ( r == 18 )	s = "degraderte"
	else if ( r == 19 )	s = "barberte"
	else if ( r == 20 )	s = "ansatte"
	else if ( r == 21 )	s = "bar"
	else if ( r == 22 )	s = "mistet"
	else if ( r == 23 )	s = "gjenopplivde"
	else if ( r == 24 )	s = "importerte"
	else if ( r == 25 )	s = "mobbet"
	else if ( r == 26 )	s = "narret"
	else if ( r == 27 )	s = "lurte"
	else if ( r == 28 )	s = "narret"
	else if ( r == 29 )	s = "hørte"
	else if ( r == 30 )	s = "kjente"
	else if ( r == 31 )	s = "vasket"
	else if ( r == 32 )	s = "banket"
	else if ( r == 33 )	s = "traff"
	else if ( r == 34 )	s = "lempet"
	else if ( r == 35 )	s = "dyttet"
	else if ( r == 36 )	s = "hjalp"
	else if ( r == 37 )	s = "assisterte"
	else if ( r == 38 )	s = "ertet"
	else if ( r == 39 )	s = "klipte"
	else if ( r == 40 )	s = "klemte"
	else if ( r == 41 )	s = "dengte"
	else if ( r == 42 )	s = "tatoverte"
	else if ( r == 43 )	s = "dro"
	else if ( r == 44 )	s = "ristet"
	else if ( r == 45 )	s = "løftet"
	else if ( r == 46 )	s = "imponerte"
	else if ( r == 47 )	s = "snøfreste"

	vt = ""
	var i
	for (i=0; i<s.length; i++ ) {
		var c = s.substring(i,i+1)
		var w = c
		vt += w
	}

	return vt
}


function GenConjunction() {
	var n = 2
	var r = qrand(n)
	var s = ""
	if ( r == 0 )		s = "og"
	else if ( r == 1 )	s = "eller"
	else if ( r == 2 )	s = "men"
	return s
}


function GenPrep() {
	var n = 11
	var r = qrand(n)
	var s = ""
	if ( r == 0 )	s = "på"
	else if ( r == 1 )	s = "ved siden av"
	else if ( r == 2 )	s = "ved"
	else if ( r == 3 )	s = "bak"
	else if ( r == 4 )	s = "under"
	else if ( r == 5 )	s = "over"
	else if ( r == 6 )	s = "foran"
	else if ( r == 7 )	s = "gjennom"
	else if ( r == 8 )	s = "litt bak"
	else if ( r == 9 )	s = "langt foran"
	else if ( r == 10 )	s = "ganske nært"
	return s
}

function GenNumber() {
	var n = 40
	var r = qrand(n)
	var s = ""
	if ( r == 0 )	s = "femti"
	else if ( r == 1 )	s = "to"
	else if ( r == 2 )	s = "tre"
	else if ( r == 3 )	s = "fire"
	else if ( r == 4 )	s = "fem"
	else if ( r == 5 )	s = "seks"
	else if ( r == 6 )	s = "syv"
	else if ( r == 7 )	s = "åtte"
	else if ( r == 8 )	s = "ni"
	else if ( r == 9 )	s = "ti"
	else if ( r == 10 )	s = "elve"
	else if ( r == 11 )	s = "tolv"
	else if ( r == 12 )	s = "tretten"
	else if ( r == 13 )	s = "fjorten"
	else if ( r == 14 )	s = "femten"
	else if ( r == 15 )	s = "seksten"
	else if ( r == 16 )	s = "sytten"
	else if ( r == 17 )	s = "atten"
	else if ( r == 18 )	s = "nitten"
	else if ( r == 19 )	s = "tjue"
	else if ( r == 20 )	s = "tjueen"
	else if ( r == 21 )	s = "tjueto"
	else if ( r == 22 )	s = "tjuetre"
	else if ( r == 23 )	s = "tjuefire"
	else if ( r == 24 )	s = "tjuefem"
	else if ( r == 25 )	s = "35"
	else if ( r == 26 )	s = "76"
	else if ( r == 27 )	s = "21"
	else if ( r == 28 )	s = "16"
	else if ( r == 29 )	s = "6"
	else if ( r == 30 )	s = "18"
	else if ( r == 31 )	s = "44"
	else if ( r == 32 )	s = "359"
	else if ( r == 33 )	s = "266"
	else if ( r == 34 )	s = "200"
	else if ( r == 35 )	s = "100"
	else if ( r == 36 )	s = "75"
	else if ( r == 37 )	s = "500"
	else if ( r == 38 )	s = "1500"
	else if ( r == 39 )	s = "17"
	return s
}



function CapFirst(s) {
	return s.substring(0,1).toUpperCase() + s.substring(1,s.length)
}


function GenRandomSentence() {
	var stemp = GenRandomSentenceTemplate()
	var i
	var s = ""
	for ( i=0; i<stemp.length; i++ ) {
		var c = stemp.substring(i,i+1)
		var w = ""
		if        ( c == '0' )	w = GenNoun()
		else if ( c == '1' )	w = GenNounPhrase(0)
		else if ( c == '2' )	w = GenTransitiveVerbPhrase(1)
		else if ( c == '3' )	w = GenConjunction()
		else if ( c == '4' )	w = GenAdjective()
		else if ( c == '5' )	w = GenAdverb()
		else if ( c == '6' )	w = GenPrep()
		else if ( c == '7' )	w = GenNounObject()
		else if ( c == '8' )	w = GenVerb()
		else if ( c == '9' )	w = GenNumber()
		else if ( c == '10' ) w = GenNounFem()
		else 		w = c
		s += w
	}
	return CapFirst(s)
}