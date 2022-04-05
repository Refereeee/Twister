import { Filters } from './Filters.js';

export class FilterView {
  constructor(id) {
    this.containerId = document.querySelector(id);
  }

  display(names, hashtags) {
    const filterName = document.querySelector('.filters__name_select');

    const filtersHashtags = document.querySelector('.filters__hashtags_select');

    const filterDateFrom = this.containerId.querySelector('.filters__date_from');

    const filterDateTo = this.containerId.querySelector('.filters__date_to');

    const filtersBtn = this.containerId.querySelector('.filters__btn');

    const filtersText = this.containerId.querySelector('.filters__text_value');

    names.forEach((el) => {
      const option = document.createElement('option');
      option.textContent = `${el}`;
      option.value = el;
      filterName.append(option);
    });
    hashtags.forEach((el) => {
      const option = document.createElement('option');
      option.textContent = `${el}`;
      option.value = el;
      filtersHashtags.append(option);
    });

    filtersBtn.addEventListener('click', () => Filters.addFilterConfig({
      author: filterName.value,
      createdAt: filterDateFrom.value,
      createdFrom: filterDateTo.value,
      text: filtersText.value,
      hashTags: filtersHashtags.value,
    }));
  }
}
