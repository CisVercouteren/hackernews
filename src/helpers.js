export const isSearched = searchTerm => item => {
    const name = `${item.firstName.toLowerCase()} ${item.secondName.toLowerCase()}`;
    return name.includes(searchTerm.toLowerCase());
};
