// O(n^2) - Time | O(n) - Space
function longestPalindromicSubstring(string) {
	let longest = [0,1];

  for (let i = 1; i < string.length; i++){
		const odd = longestPalindromFrom(string, i - 1, i + 1);
		const even = longestPalindromFrom(string, i - 1, i);

    const currentLongest = odd[1] - odd[0] > even[1] - even[0] ?  odd : even;

		longest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
	}
	return string.slice(longest[0], longest[1]);
}

function longestPalindromFrom(string, index1, index2){
	while(index1 >= 0 && index2 < string.length){
		if(string[index1] !== string[index2]) break;
		index1--;
		index2++;
	}
	return [index1+1, index2];
}
console.log(longestPalindromicSubstring('abaxyzzyxf'))
console.log(longestPalindromicSubstring('aa'))