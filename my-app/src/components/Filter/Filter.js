import React, { useState } from "react";
import { FilterMark, FilterInput, FilterSpan } from "./Filter.styled";
import { useFetchContactsQuery } from "../../redux/phoneBook/phoneBookSlice";
import ContactsList from "../ContactsList/ContactsList";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const { data } = useFetchContactsQuery();
  const onChangeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
  const getFilterList = () => {
    return (
      data && data.filter(({ name }) => name.toLowerCase().includes(filter))
    );
  };
  const visibleItem = getFilterList();

  return (
    <>
      <FilterMark>
        <FilterSpan> find contacts by name </FilterSpan>

        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => onChangeFilter(e)}
        />
      </FilterMark>
      <ContactsList contacts={visibleItem} />
    </>
  );
};

export default Filter;
