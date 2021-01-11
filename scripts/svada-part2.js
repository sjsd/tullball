qinit()
	PrevNoun = -1
	PrevTransitiveVerb = -1
	PrevIntransitiveVerb = -1
	PrevAdjective = -1
	PrevAdverb = -1

	document.write ( "<strong>" + CapFirst(GenNounPhrase(0)) + " " + GenVerb(0) + " en " + GenNounObject() + "</strong><br/>" )
	for ( i=0; i<3; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}

	document.write ( "<br/><br/><strong>" + CapFirst(GenNoun(0)) + " " + GenTransitiveVerbPhrase(1) + "</strong><br/>" )
	for ( i=0; i<4; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}

	document.write ( "<br/><br/><strong>" + CapFirst(GenNoun(0)) + " " + GenTransitiveVerbPhrase(1) + "</strong><br/>" )
	for ( i=0; i<5; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}

	document.write ( "<br/><br/><strong>" + CapFirst(GenNoun(0)) + " " + GenTransitiveVerbPhrase(1) + "</strong><br/>" )
	for ( i=0; i<6; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}

	document.write ( "<br/><br/><strong>" + CapFirst(GenNoun())+ " " + GenVerb(0) + " " + GenPrep() + " en " + GenNounObject(0)  + "</strong><br/>" )
	for ( i=0; i<10; i++ ) {
		document.write ( GenRandomSentence(), " " )
	}

	document.write ( "<br/><br/><strong>" + CapFirst(GenNoun())+ " " + GenVerb(0) + " " + GenPrep() + " en " + GenNounObject(0)  + "</strong><br/>" )

	var rpl = qrand(2) + 1;
	for ( j=0; j<12; j++ ) {
		for ( i=0; i<rpl; i++ ) {
			document.write ( GenRandomSentence(), " " )
		}
	}
	document.write ( "<br/><br/>")
	var rpl = qrand(2) + 1;
	for ( j=0; j<10; j++ ) {
		for ( i=0; i<rpl; i++ ) {
			document.write ( GenRandomSentence(), " " )
		}
	}
	document.write ( "<br/><br/>")
	var rpl = qrand(2) + 1;
	for ( j=0; j<13; j++ ) {
		for ( i=0; i<rpl; i++ ) {
			document.write ( GenRandomSentence(), " " )
		}
	}
	document.write ( "<br/><br/>")
		var rpl = qrand(2) + 1;
		for ( j=0; j<20; j++ ) {
			for ( i=0; i<rpl; i++ ) {
				document.write ( GenRandomSentence(), " " )
			}
		}
		document.write ( "<br/><br/>")