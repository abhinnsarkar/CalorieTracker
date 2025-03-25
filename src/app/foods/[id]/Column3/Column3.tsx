// import React from "react";
// import { FoodInterface } from "../page";

// function Column3({ food }: { food: FoodInterface }) {
//     const ListItems = ({ items }: { items: string[] }) => (
//         <div className="flex flex-col items-center gap-2 w-full">
//             {items.map((item, key) => (
//                 <div key={key} className="hover-card text-center w-full">
//                     {item}
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <div className="flex flex-col h-full p-4 overflow-y-auto rounded-lg">
//             <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
//                 Instructions
//             </h2>
//             <ListItems items={food?.instructions?.split(",") || []} />
//         </div>
//     );
// }

// export default Column3;

import React from "react";
import { FoodInterface } from "../page";

function Column3({ food }: { food: FoodInterface }) {
    const ListItems = ({ items }: { items: string[] }) => (
        <div className="flex flex-col items-center gap-2 w-full">
            {items.map((item, key) => (
                <div key={key} className="hover-card text-center w-full">
                    {item}
                </div>
            ))}
        </div>
    );

    return (
        <div className="hover-card flex-1 flex flex-col h-full p-4 overflow-y-auto rounded-lg space-y-4">
            <h2 className="text-xl font-semibold text-center mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Instructions
            </h2>
            <ListItems items={food?.instructions?.split(",") || []} />
        </div>
    );
}

export default Column3;
