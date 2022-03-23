import Pagination from 'tui-pagination';

const container = document.getElementById('pagination');

if (typeof container !== 'undefined' && container !== null) {
  let options = {
    totalItems: 4,
    itemsPerPage: 1,
    visiblePages: 4,
    page: 1,
    centerAlign: true,
    usageStatistics: false,
    firstItemClassName: 'pagination__link-first',
    lastItemClassName: 'pagination__link-last',
    template: {
      page: '<a href="#" class="pagination__link" aria-label="Goto Page {{page}}">{{page}}</a>',
      currentPage: '<strong class="pagination__link pagination__link-current" aria-current="true">{{page}}</strong>',
      moveButton:
        '<a href="#" class="pagination__link pagination__link-{{type}}">' +
            '<span class="pagination__icon-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="pagination__link pagination__link-{{type}} pagination__link-disabled">' +
            '<span class="pagination__icon-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="pagination__link pagination__link-more">' +
            '<span>...</span>' +
        '</a>'
    }
  };

  const pagination = new Pagination(container, options);
}
