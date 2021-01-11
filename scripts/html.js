qinit()
	PrevNoun = -1
	PrevTransitiveVerb = -1
	PrevIntransitiveVerb = -1
	PrevAdjective = -1
	PrevAdverb = -1

	document.write ( "<h1>" + CapFirst(GenNounPhrase(0)) + " " + GenVerb(0) + " en " + GenNounObject() + "</h1>" )
	document.write ("<p>")
	for ( i=0; i<3; i++ ) {
		document.write (GenRandomSentence(), " " )
	}
	document.write ("</p>")

	document.write ( "<h2>" + CapFirst(GenNoun(0)) + " " + GenTransitiveVerbPhrase(1) + "</h2>" )
	document.write ("<p>")
	for ( i=0; i<4; i++ ) {
		document.write (GenRandomSentence(), " " )
	}
	document.write ("</p>")

	document.write ( "<h3>" + CapFirst(GenNoun(0)) + " " + GenTransitiveVerbPhrase(1) + "</h3>" )
	document.write ("<p>")
	for ( i=0; i<5; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}
	document.write ("</p>")

	document.write ( "<h3>" + CapFirst(GenNoun(0)) + " " + GenTransitiveVerbPhrase(1) + "</h3>" )
	document.write ("<p>")
	for ( i=0; i<6; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}
	document.write ("</p>")

	document.write ( "<h2>" + CapFirst(GenNoun())+ " " + GenVerb(0) + " " + GenPrep() + " en " + GenNounObject(0)  + "</h2>" )
	document.write ("<p>")
	for ( i=0; i<10; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}
	document.write ("</p>")

	document.write ( "<h2>" + CapFirst(GenNoun())+ " " + GenVerb(0) + " " + GenPrep() + " en " + GenNounObject(0)  + "</h2>" )

	document.write ("<p>")
	var rpl = qrand(2) + 1;
	for ( j=0; j<12; j++ ) {
		for ( i=0; i<rpl; i++ ) {
			document.write ( GenRandomSentence(), " " )
		}
	}
	document.write ( "</p><p>")
	var rpl = qrand(2) + 1;
	for ( j=0; j<10; j++ ) {
		for ( i=0; i<rpl; i++ ) {
			document.write ( GenRandomSentence(), " " )
		}
	}
	document.write ( "</p><p>")
	var rpl = qrand(2) + 1;
	for ( j=0; j<13; j++ ) {
		for ( i=0; i<rpl; i++ ) {
			document.write ( GenRandomSentence(), " " )
		}
	}
	document.write ( "</p><p>")
		var rpl = qrand(2) + 1;
		for ( j=0; j<20; j++ ) {
			for ( i=0; i<rpl; i++ ) {
				document.write ( GenRandomSentence(), " " )
			}
		}
		document.write ( "</p>")