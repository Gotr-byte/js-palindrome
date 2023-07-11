function palindrome(str) {
	var alphaNum = str.replace(/[^a-zA-Z0-9]/g, "");
	let i = 0;
	let j = 0;
  
	alphaNum = alphaNum.toLowerCase();
	if(alphaNum.length %2){
	  while (i < alphaNum.length/2 - 1){
		// console.log(alphaNum[i])
		if (alphaNum[i] != alphaNum[alphaNum.length - i -1]){
		  return false;
		}
		i++;
	  }
	}else {
	  while(j < alphaNum.length/2){
		  if (alphaNum[j] != alphaNum[alphaNum.length - j -1]){
		  return false;
		}
		j++;
	  }
	}
	return true;
  }
  
  palindrome("almostomla");