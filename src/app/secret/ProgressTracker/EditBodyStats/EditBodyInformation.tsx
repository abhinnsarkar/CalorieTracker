"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
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

import ObjectiveDropdown from "../../../components/ObjectiveDropdown";
import ActivityLevelPicker from "@/app/components/ActivityLevelPicker";
import HeightInput from "@/app/components/HeightInput";
import WeightInput from "../../../components/WeightInput";
import { updateUserProfile } from "../../../actions/actions";
import { RenderNotification } from "@/app/components/RenderNotification";
import { useStore } from "@/store/store";

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

export default function EditBodyInformation() {
    const [formOpen, setFormOpen] = useState(false);
    const setIsReloadBodyInformation = useStore(
        (s) => s.setIsReloadBodyInformation
    );
    const setIsReloadCalorieGraph = useStore((s) => s.setIsReloadCalorieGraph);
    const setIsReloadTodaysProgress = useStore(
        (s) => s.setIsReloadTodaysProgress
    );

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

        // Call the update function
        if (await updateUserProfile(formData)) {
            setIsReloadBodyInformation(true);
            setIsReloadCalorieGraph(true);
            setIsReloadTodaysProgress(true);
            RenderNotification({
                title: "Edited Body Profile Successfully",
                description: "The body profile was successfully updated.",
                variant: "success",
            });
        } else {
            RenderNotification({
                title: "Error Editing Body Profile",
                description: "The body profile was not successfully updated.",
                variant: "destructive",
            });
        }

        // Close the form once the update is complete
        setFormOpen(false);
    };

    return (
        <>
            <Button className="hover-btn" onClick={() => setFormOpen(true)}>
                Edit Profile
            </Button>
            <Dialog open={formOpen || false}>
                {/* <DialogContent className="sm:max-w-[425px] hover-dialog bg-white p-4 shadow-lg"> */}
                <DialogContent className="hover-dialog">
                    <DialogHeader>
                        <div className="flex flex-row justify-between">
                            <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                                Edit your profile
                            </DialogTitle>
                            <CloseIcon
                                className="hover-icon"
                                onClick={() => setFormOpen(false)}
                            />
                        </div>

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
