// import React from "react";
// import { FoodInterface } from "../page";
// import MacrosTable from "./MacrosTable";
// import Description from "./Description";

// function Column1({ food }: { food: FoodInterface }) {
//     return (
//         <div className="flex flex-col h-full p-4 overflow-y-auto rounded-lg ">
//             {/* <h2 className="text-xl font-semibold text-center mb-4">Overview</h2> */}
//             <MacrosTable food={food} />
//             <div className="mt-6">
//                 <Description food={food} />
//             </div>
//         </div>
//     );
// }

// export default Column1;
import React from "react";
import { FoodInterface } from "../page";
import MacrosTable from "./MacrosTable";
import Description from "./Description";

function Column1({ food }: { food: FoodInterface }) {
    return (
        <div className="hover-card flex-1 flex flex-col h-full p-4 overflow-y-auto rounded-lg space-y-6">
            <MacrosTable food={food} />
            <Description food={food} />
        </div>
    );
}

export default Column1;
