# Convert a two-letter ARPABet code to IPA
# For now, only supports codes used in CMUDict
def from_arpa(code):
	phonemes = {
		"AA": "ɑ",
		"AE": "æ",
		"AH": "ʌ",
		"AO": "ɔ",
		"AW": "aʊ",
		# "AX": "ə", # Handled below
		# "AXR": "ɚ", # Handled below
		"AY": "aɪ",
		"EH": "ɛ",
		"ER": "ɝ",
		"EY": "eɪ",
		"IH": "ɪ",
		# "IX": "ɨ",
		"IY": "i",
		"OW": "oʊ",
		"OY": "ɔɪ",
		"UH": "ʊ",
		"UW": "u",
		# "UX": "ʉ",
		"B": "b",
		"CH": "tʃ",
		"D": "d",
		"DH": "ð",
		# "DX": "ɾ",
		# "EL": "l̩",
		# "EM": "m̩",
		# "EN": "n̩",
		"F": "f",
		"G": "g",
		"HH": "h",
		"JH": "dʒ",
		"K": "k",
		"L": "l",
		"M": "m",
		"N": "n",
		"NG": "ŋ",
		# "NX": "ɾ̃",
		"P": "p",
		# "Q": "ʔ",
		"R": "ɹ",
		"S": "s",
		"SH": "ʃ",
		"T": "t",
		"TH": "θ",
		"V": "v",
		"W": "w",
		# "WH": "ʍ",
		"Y": "j",
		"Z": "z",
		"ZH": "ʒ"
	}

	unstressed = {
		"AH": "ə",
		"ER": "ɚ"
	}

	if code[-1].isdigit():
		letter_code = code[:-1]
		stress = int(code[-1])
	else:
		letter_code = code
		stress = None
	
	if not letter_code in phonemes:
		print("ERROR: unsupported ARPABet code '" + letter_code + "'")
		exit(0)

	if stress == 0 and letter_code in unstressed:
		ipa = unstressed[letter_code]
	else:
		ipa = phonemes[letter_code]

	return ipa
