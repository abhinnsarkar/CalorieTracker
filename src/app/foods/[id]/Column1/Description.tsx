// import React from "react";
// import { FoodInterface } from "../page";

// function Description({ food }: { food: FoodInterface }) {
//     return (
//         <div className="mt-4">
//             {/* <h2 className="text-lg font-semibold text-center mb-2">
//                 Description
//             </h2> */}
//             <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
//                 Description
//             </h2>
//             <div className="hover-card text-center w-full">
//                 {food?.description || "No description available."}
//             </div>
//         </div>
//     );
// }

// export default Description;

import React from "react";
import { FoodInterface } from "../page";

function Description({ food }: { food: FoodInterface }) {
    return (
        <div>
            <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Description
            </h2>
            <div className="hover-card text-center w-full">
                {food?.description || "No description available."}
            </div>
        </div>
    );
}

export default Description;
