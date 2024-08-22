import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { getData, saveUserInStorage, ClickProfiler } from "../helpers/helpers";
import { User } from "./User/User";

let clickProfiler: InstanceType<typeof ClickProfiler>;

export default function App() {
  const [list, setList] = useState(getData());
  const getTotalSelectedItems = useCallback(
    () =>
      list.filter((element) => {
        return !!element.enabled;
      }).length,
    [list]
  );

  const [totalSelectedItems, setTotalSelectedItems] = useState(
    getTotalSelectedItems()
  );
  const [totalUnselectedItems, setTotalUnselectedItems] = useState(
    list.length - getTotalSelectedItems()
  );

  const totalItem = list.length;

  const onChange = (id: number) => {
    clickProfiler = new ClickProfiler();
    const newList = list.map((element) => {
      const newElement = { ...element };
      if (element.id === id) {
        newElement.enabled = !newElement.enabled;
      }
      return newElement;
    });
    setList(newList);
  };

  useEffect(() => {
    setTotalSelectedItems(getTotalSelectedItems());
  }, [list, getTotalSelectedItems]);

  useEffect(() => {
    setTotalUnselectedItems(totalItem - totalSelectedItems);
  }, [totalSelectedItems, totalItem]);

  useEffect(() => {
    list.forEach((user) => {
      saveUserInStorage(user);
    });
    clickProfiler?.endProfile();
  }, [list]);

  return (
    <div className="app">
      <div className="counter">Total items: {totalItem}</div>
      <div className="counter">Total selected items: {totalSelectedItems}</div>
      <div className="counter">
        Total unselected items: {totalUnselectedItems}
      </div>
      <ol className="user-list">
        {list.map(({ id, enabled, name }, index) => (
          <User
            id={id}
            enabled={enabled}
            name={name}
            onChange={onChange}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
}
