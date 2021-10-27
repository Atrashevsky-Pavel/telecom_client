export const filterPreparation = (page, filter) => {
  const filterMain = { pagination: {}, filter: {} };
  if (filter.breedId) {
    filterMain.filter.breedId = filter.breedId;
  }
  if (filter.title) {
    filterMain.filter.title = filter.title;
  }
  if (filter.paginationSort) {
    filterMain.pagination.pageSize = filter.paginationSort;
  }
  filterMain.pagination.page = page;
  return filterMain;
};
