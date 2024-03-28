import { secondComponent } from "@/constants";
import React from "react";
import Card from "./Card";

const Collection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <ul className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3 xl:gap-10 transition-all duration-500">
          {secondComponent.map((history) => {
            return (
              <li key={history.id} className="flex justify-center">
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
