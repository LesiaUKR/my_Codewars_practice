// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., 
// t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Example 4:
// Input: str1 = "AAAAAB", str2 = "AAA"
// Output: ""​​​​​​​

// Constraints:
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// 1. Determine the shorter string by comparing str1.length and str2.length.
// 2. Start checking prefix lengths from the full length of the shorter string down to 1.
// 3. For each prefix length, check whether both str1.length and str2.length are divisible by this length without remainder.
// 4. If the length is valid, create a candidate prefix from the start of the shorter string.
// 5. Repeat the candidate enough times to match the length of str1 and compare it with str1.
// 6. Repeat the candidate enough times to match the length of str2 and compare it with str2.
// 7. If both comparisons are true, return this candidate.
// 8. If no candidate works, return an empty string.

const gcdOfStrings = (str1, str2) => {
    const shorterStr = str1.length < str2.length ? str1 : str2;
    const len = shorterStr.length;

    for(let i = len; i >= 1; i--){
        let candidate = shorterStr.slice(0, i);
        let candidateLength = candidate.length;
        console.log("i", i);
        console.log("candidate", candidate);
        if(str1.length % candidateLength === 0 && str2.length % candidateLength === 0){
            if (candidate.repeat(str1.length / candidateLength) === str1 &&
            candidate.repeat(str2.length / candidateLength) === str2){
                return candidate;
            }
        }
    }
     return "";
};

// console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));