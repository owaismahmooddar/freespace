//import json data
import { stackList } from "@/helpers/helper";

const AllStackList = () => {
  return (
    <section className="allList DBlock mt-12">
      <div className="relative max-w-6xl mx-auto flex justify-center items-center flex-wrap">
        {stackList?.map((items, ind) => (
          <>
            <div className="xl:relative flex items-center justify-center flex-col mx-3 sm:mx-4 sm:ml-9 my-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-600 shadow-lg p-1">
                <span className="flex justify-center items-center">
                  <img
                    className="w-10 h-10 object-contain"
                    src={`/assets/icons/stack/${items?.icon}.png`}
                    alt="techIcon"
                  />
                </span>
              </div>
              <p className="text-sm font-normal capitalize text-center dark:text-gray-300 mt-3">
                {items?.title}
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default AllStackList;
