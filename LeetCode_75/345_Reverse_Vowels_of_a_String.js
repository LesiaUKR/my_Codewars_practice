const reverseVowels = (s) => {
    let left = 0;
    let right = s.length-1;
    let stringArr = s.split('');
    const vowelsList = ['a','e','i','o','u','A','E','I','O','U'];
    while(left < right){
        while (left < right && !vowelsList.includes(stringArr[left])) {
            left++;
        }
        while (left < right && !vowelsList.includes(stringArr[right])) {
        right--;
        }
        const temp = stringArr[left];
        stringArr[left] = stringArr[right];
        stringArr[right] = temp;
        left++;
        right--;
    }
    return stringArr.join('');
};