import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";

const Home = () => {
  const { data } = useAuth();
//   console.log(data);
  return (
    <div className="flex mt-20">
      <Sidebar />
    <div className="h-[calc(110vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video key={item?.id} video={item?.video} />;
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;
