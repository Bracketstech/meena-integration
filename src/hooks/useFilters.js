import React, { useEffect, useState } from "react";

const useFilters = (data) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let newFilters = [
      {
        filterId: "All",
        filterTitleAr: "الكل",
        filterTitle: "All",
      },
    ];
    data.forEach((item) => {
      let newFilter = item.clinic_type[0].title;

      let isFilterInList = false;
      newFilters.forEach((filter) => {
        if (filter.filterId == newFilter) {
          isFilterInList = true;
        }
      });
      if (!isFilterInList) {
        newFilters.push({
          filterId: newFilter,
          filterTitleAr: newFilter,
          filterTitle: newFilter,
        });
      }
    });

    newFilters.push({
      filterId: "Open Now",
      filterTitleAr: "مفتوح الان",
      filterTitle: "Open Now",
    });
    setFilters(newFilters);
  }, [data]);

  return filters;
};

export default useFilters;
