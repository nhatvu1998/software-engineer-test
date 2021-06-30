const hasTextAndNumber = (input) => {
    const words = input.split(" ");
	const filteredWords = words.filter(
		(w) => w.search(/\d/) !== -1 && w.search(/[a-zA-Z]/) !== -1
	);
	const answer = filteredWords
		.reduce((answer, w) => [...answer, ...partition(w)], [])
        .map((partition) => partition.join("-"));
    console.log("Matched Words: ", filteredWords);
	console.log("Variations with '-' character:", answer);
}
const canPartition = (word, i) => {
	// this char is number and next char is latin character
	const caseOne =
		new RegExp(/\d/).test(word[i]) && new RegExp(/[a-zA-Z]/).test(word[i + 1]);
	// this char is latin character and next char number
	const caseTwo =
		new RegExp(/[a-zA-Z]/).test(word[i]) && new RegExp(/\d/).test(word[i + 1]);
	// end of string
	const caseThree = i === word.length - 1;
	return caseOne || caseTwo || caseThree;
};
const helper = (index, word, curr, result) => {
	if (index === word.length) {
		// we don't add the initial word to the resutl set
		if (curr == word) return;
		result.push(curr);
		return;
	}
	for (let i = index; i < word.length; i++) {
		if (canPartition(word, i)) {
			helper(i + 1, word, curr.concat([word.substring(index, i + 1)]), result);
		}
	}
};
const partition = (word) => {
	const result = [];
	helper(0, word, [], result);
	return result;
};

hasTextAndNumber("Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options");