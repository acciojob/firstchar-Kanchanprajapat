function firstChar(text) {
  // your code her
	if(text === ''){
		return '';
	}
	 for (let i = 0; i < text.length; i++) {
    // Check if the character is not a space
    if (text[i] !== ' ') {
      // Return the first non-space character
      return text[i];
    }
  }

  // If no non-space character is found, return an emptystring
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
