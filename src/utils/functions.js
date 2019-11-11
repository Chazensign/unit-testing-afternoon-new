export const shortenText = text => {
    let shortened = text.substr(0, 100).trim();
    if (shortened.length <= 100) {
     shortened += '...'
    }
    return shortened;
  };
  