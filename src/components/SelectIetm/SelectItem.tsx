import React from "react";
interface ISelectItem{
    lable:string
    name:string
    value1:string
    value2:string
    value3:string
}
const SelectItem:React.FC<ISelectItem> = ({lable="",name="",value1="",value2="",value3=""}) => {
  return (
    <>
      <label className={`label-filters-${name} text-muted`}>{lable}</label>
      <select name={name} className="select-filters">
        <option value="All">All</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
    </>
  );
};
export default SelectItem;
