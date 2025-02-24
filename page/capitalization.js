// Returns the capitalization type of the word.
// 0: Other (no pattern detected)
// 1: Lowercase
// 2: Uppercase
// 3: Title case
export function read(word) {
	const firstUpper = (word.charAt(0) == word.charAt(0).toUpperCase())
	var lastUpper = null
	for (let index = 1; index < word.length; index++) {
		const isUpper = (word.charAt(index) == word.charAt(index).toUpperCase())
		if (lastUpper != null && lastUpper != isUpper) {
			return 0
		}
		lastUpper = isUpper
	}
	if (!firstUpper && !lastUpper) {
		return 1
	}
	if (firstUpper && lastUpper) {
		return 2
	}
	if (firstUpper && !lastUpper) {
		return 3
	}
}

// Applies capitalization pattern to the word.
// 1: Lowercase
// 2: Uppercase
// 3: Title case
export function apply(word, pattern) {
	if (pattern < 1 || pattern > 3) {
		return word
	}

	var output = ""
	if (pattern == 2 || pattern == 3) {
		output += word.charAt(0).toUpperCase()
	} else {
		output += word.charAt(0).toLowerCase()
	}
	
	for (let index = 1; index < word.length; index++) {
		if (pattern == 2) {
			output += word.charAt(index).toUpperCase()
		} else {
			output += word.charAt(index).toLowerCase()
		}
	}

	return output
}
