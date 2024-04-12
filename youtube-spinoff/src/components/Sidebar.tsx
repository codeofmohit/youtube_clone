import { sideBaMenus } from "../constants/sideBarMenus";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="mainBlock">
        <ul>
          {sideBaMenus.firstBlock.map((item) => {
            return (
              <li
                key={item.name}
                className="flex mx-1 px-1 items-center my-2 py-2 hover:bg-[#e5e5e5] hover:dark:bg-[#212121] hover:rounded cursor-pointer pl-2"
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="secondaryBlock">
        <ul>
          {sideBaMenus.secondBlock.map((item) => {
            return (
              <li
                key={item.name}
                className="flex mx-1 px-1 items-center my-2 py-2 hover:bg-[#e5e5e5] hover:dark:bg-[#212121] hover:rounded cursor-pointer pl-2"
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
