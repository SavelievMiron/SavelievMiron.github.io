import customSelect from 'custom-select';

customSelect('.search-form select#category', {
    containerClass: 'search-category-container',
    openerClass: 'search-category-opener',
    panelClass: 'search-category-panel',
    optionClass: 'search-category-option',
    optgroupClass: 'search-category-optgroup',
    isSelectedClass: 'is-selected',
    hasFocusClass: 'has-focus',
    isDisabledClass: 'is-disabled',
    isOpenClass: 'is-open'
});