import React from "react";
import {ISelectValues} from "../../interface"
interface ISelectItem{
    lable:string
    name:string
    value1:string
    value2:string
    value3:string
    setTaskFilter:Function
    taskFilter:ISelectValues | undefined
}
const SelectItem:React.FC<ISelectItem> = ({lable="",name="",value1="",value2="",value3="",setTaskFilter,taskFilter}):JSX.Element => {
   const handleFilterTasks = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setTaskFilter({...taskFilter,[e.target.name]:e.target.value})
  };
  return (
    <>
      <label className={`label-filters-${name} text-muted`}>{lable}</label>
      <select name={name} className="select-filters" onChange={handleFilterTasks}>
        <option value="">All</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
    </>
  );
};
export default SelectItem;
