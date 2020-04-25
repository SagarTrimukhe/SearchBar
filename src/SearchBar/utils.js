// (C) Copyright 2020 Hewlett Packard Enterprise Development LP

export const searchEngine = (searchString, data, searchKeys) => {
  if (!searchString) {
    return data;
  }
  const result = data.filter((quote) => {
    const listToSearch = []; // contains only data on which search has to be done.
    searchKeys.forEach((key) => {
      if (key.includes('date')) {
        listToSearch.push(new Date(quote[key]).toLocaleDateString() || '');
      } else {
        listToSearch.push(quote[key] || ''); // special symbols are used to avoid the conflicts with empty search box
      }
    });
    let flag = 0;

    // searching in list for the search input
    for (let i = 0; i < listToSearch.length; i += 1) {
      if (listToSearch[i].toLowerCase()
        .includes(searchString.toLowerCase())) {
        flag = 1;
        break;
      }
    }
    return flag === 1 ? quote : null;
  });
  return result;
};
