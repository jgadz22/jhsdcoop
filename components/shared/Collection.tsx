import { secondComponent } from "@/constants";
import React from "react";
import Card from "./Card";

const Collection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <ul className="grid grid-cols-1 gap-10 xl:gap-10 lg:grid-cols-3 transition-all duration-500">
          {secondComponent.map((history) => {
            return (
              <li key={history.id} className="w-full flex justify-center">
                <Card
                  image={history.image}
                  title={history.title}
                  date={history.date}
                  details={history.details}
                  route={history.route}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Collection;
