// "use client";
// import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
// } from "@/components/ui/dialog";
// import { Form } from "@/components/ui/form";

// import ObjectiveDropdown from "../components/ObjectiveDropdown";
// import ActivityLevelPicker from "../components/ActivityLevelPicker";
// import HeightInput from "../components/HeightInput";
// import WeightInput from "../components/WeightInput";
// import { capitalizeFirstLetter, updateUserProfile } from "../actions/actions";

// // Define the form schema with Zod
// const formSchema = z.object({
//     objective: z.string().nonempty("Objective is required"),
//     height: z.string().nonempty("Height is required"),
//     weight: z.string().nonempty("Weight is required"),
//     activityLevel: z.string().nonempty("Activity level is required"),
// });

// type FormSchema = z.infer<typeof formSchema>;

// export default function UpdateProfile() {
//     const [formOpen, setFormOpen] = useState(false);

//     const form = useForm<FormSchema>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             objective: "",
//             height: "",
//             weight: "",
//             activityLevel: "",
//         },
//         mode: "onChange",
//     });

//     // Custom submit handler for the form
//     const handleFormSubmit = async (event: React.FormEvent) => {
//         event.preventDefault(); // Prevent the default form submission

//         const formValues = form.getValues();
//         console.log("Form Data:", formValues);

//         const formObj: Record<string, string | Date | undefined> = {
//             objective: formValues.objective,
//             height: formValues.height,
//             weight: formValues.weight,
//             activityLevel: formValues.activityLevel,
//         };

//         const formData = new FormData();
//         for (const key in formObj) {
//             const value = formObj[key];

//             if (value !== undefined) {
//                 if (value instanceof Date) {
//                     formData.append(key, value.toISOString());
//                 } else {
//                     formData.append(key, value);
//                 }
//             }
//         }

//         console.log("Converted JSON:", JSON.stringify(formObj));

//         // Call the update function
//         await updateUserProfile(formData);

//         // Close the form once the update is complete
//         setFormOpen(false);
//     };

//     return (
//         <>
//             <Button className="hover-btn" onClick={() => setFormOpen(true)}>
//                 Update Profile
//             </Button>
//             <Dialog open={formOpen || false}>
//                 <DialogContent className="sm:max-w-[425px] hover-dialog bg-white p-4 shadow-lg">
//                     <DialogHeader>
//                         <DialogTitle>Update Your Profile</DialogTitle>
//                         <DialogDescription>
//                             Update your body information
//                         </DialogDescription>
//                     </DialogHeader>

//                     <Form {...form}>
//                         <form
//                             onSubmit={handleFormSubmit} // Handle form submission with custom function
//                             className="space-y-4"
//                         >
//                             <ObjectiveDropdown
//                                 selectedObjective={form.watch("objective")}
//                                 setSelectedObjective={(objective) =>
//                                     form.setValue("objective", objective, {
//                                         shouldValidate: true,
//                                     })
//                                 }
//                             />

//                             <ActivityLevelPicker
//                                 selectedActivityLevel={form.watch(
//                                     "activityLevel"
//                                 )}
//                                 setSelectedActivityLevel={(activityLevel) =>
//                                     form.setValue(
//                                         "activityLevel",
//                                         capitalizeFirstLetter(activityLevel),
//                                         {
//                                             shouldValidate: true,
//                                         }
//                                     )
//                                 }
//                             />

//                             <HeightInput
//                                 height={form.watch("height")}
//                                 setHeight={(height) =>
//                                     form.setValue("height", height, {
//                                         shouldValidate: true,
//                                     })
//                                 }
//                             />

//                             <WeightInput
//                                 weight={form.watch("weight")}
//                                 setWeight={(weight) =>
//                                     form.setValue("weight", weight, {
//                                         shouldValidate: true,
//                                     })
//                                 }
//                             />

//                             <DialogFooter>
//                                 <Button
//                                     type="submit"
//                                     disabled={!form.formState.isValid}
//                                     className="hover-btn"
//                                 >
//                                     Update Profile
//                                 </Button>
//                             </DialogFooter>
//                         </form>
//                     </Form>
//                 </DialogContent>
//             </Dialog>
//         </>
//     );
// }
"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";

import ObjectiveDropdown from "../components/ObjectiveDropdown";
import ActivityLevelPicker from "../components/ActivityLevelPicker";
import HeightInput from "../components/HeightInput";
import WeightInput from "../components/WeightInput";
import { updateUserProfile } from "../actions/actions";

// Define the form schema with Zod
const formSchema = z.object({
    objective: z.string().nonempty("Objective is required"),
    height: z.string().nonempty("Height is required"),
    weight: z.string().nonempty("Weight is required"),
    activityLevel: z.string().nonempty("Activity level is required"),
});

type FormSchema = z.infer<typeof formSchema>;

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export default function UpdateProfile() {
    const [formOpen, setFormOpen] = useState(false);

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            objective: "",
            height: "",
            weight: "",
            activityLevel: "",
        },
        mode: "onChange",
    });

    // Custom submit handler for the form
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission

        const formValues = form.getValues();
        console.log("Form Data:", formValues);

        const formObj: Record<string, string | Date | undefined> = {
            objective: capitalizeFirstLetter(formValues.objective),
            height: formValues.height,
            weight: formValues.weight,
            activityLevel: capitalizeFirstLetter(formValues.activityLevel),
        };

        const formData = new FormData();
        for (const key in formObj) {
            const value = formObj[key];

            if (value !== undefined) {
                if (value instanceof Date) {
                    formData.append(key, value.toISOString());
                } else {
                    formData.append(key, value);
                }
            }
        }

        console.log("Converted JSON:", JSON.stringify(formObj));

        // Call the update function
        await updateUserProfile(formData);

        // Close the form once the update is complete
        setFormOpen(false);
    };

    return (
        <>
            <Button className="hover-btn" onClick={() => setFormOpen(true)}>
                Edit Profile
            </Button>
            <Dialog open={formOpen || false}>
                <DialogContent className="sm:max-w-[425px] hover-dialog bg-white p-4 shadow-lg">
                    <DialogHeader>
                        <DialogTitle>Edit Your Profile</DialogTitle>
                        <DialogDescription>
                            Update your body information
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form
                            onSubmit={handleFormSubmit} // Handle form submission with custom function
                            className="space-y-4"
                        >
                            <ObjectiveDropdown
                                selectedObjective={form.watch("objective")}
                                setSelectedObjective={(objective) =>
                                    form.setValue(
                                        "objective",
                                        capitalizeFirstLetter(objective),
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            />

                            <ActivityLevelPicker
                                selectedActivityLevel={form.watch(
                                    "activityLevel"
                                )}
                                setSelectedActivityLevel={(activityLevel) =>
                                    form.setValue(
                                        "activityLevel",
                                        capitalizeFirstLetter(activityLevel),
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            />

                            <HeightInput
                                height={form.watch("height")}
                                setHeight={(height) =>
                                    form.setValue("height", height, {
                                        shouldValidate: true,
                                    })
                                }
                            />

                            <WeightInput
                                weight={form.watch("weight")}
                                setWeight={(weight) =>
                                    form.setValue("weight", weight, {
                                        shouldValidate: true,
                                    })
                                }
                            />

                            <DialogFooter>
                                <Button
                                    type="submit"
                                    disabled={!form.formState.isValid}
                                    className="hover-btn"
                                >
                                    Update Profile
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    );
}
