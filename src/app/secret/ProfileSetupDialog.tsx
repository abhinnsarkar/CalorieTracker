import { useState } from "react"; // Import useState for managing dialog state
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

import GenderDropdown from "../components/GenderDropdown";
import ObjectiveDropdown from "../components/ObjectiveDropdown";
import BirthdayPicker from "../components/BirthdayPicker";
import ActivityLevelPicker from "../components/ActivityLevelPicker";
import HeightInput from "../components/HeightInput";
import WeightInput from "../components/WeightInput";
import { createUser } from "../actions/actions";
import { RenderNotification } from "../components/RenderNotification";
import { useStore } from "@/store/store";

// Define the form schema with Zod
const formSchema = z.object({
    gender: z.string().nonempty("Gender is required"),
    objective: z.string().nonempty("Objective is required"),
    birthday: z.date().optional(),
    height: z.string().nonempty("Height is required"),
    weight: z.string().nonempty("Weight is required"),
    activityLevel: z.string().nonempty("Activity level is required"),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ProfileSetupDialog() {
    const [isOpen, setIsOpen] = useState(true); // State to control dialog visibility

    const setIsLoadProfileAfterSetup = useStore(
        (s) => s.setIsLoadProfileAfterSetup
    );

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gender: "",
            objective: "",
            birthday: undefined,
            height: "",
            weight: "",
            activityLevel: "",
        },
        mode: "onChange",
    });

    // Custom submit handler for the form
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission

        // Get all form values from react-hook-form
        const formValues = form.getValues();

        const formObj: Record<string, string | Date | undefined> = {
            gender: formValues.gender,
            objective: formValues.objective,
            birthday: formValues.birthday,
            height: formValues.height,
            weight: formValues.weight,
            activityLevel: formValues.activityLevel,
        };

        // Now you can loop over formObj and append to FormData
        const formData = new FormData();
        for (const key in formObj) {
            const value = formObj[key];

            if (value !== undefined) {
                // Check if the value is a Date object
                if (value instanceof Date) {
                    formData.append(key, value.toISOString()); // Convert Date to ISO string
                } else {
                    formData.append(key, value); // Append the value (string or other valid types)
                }
            }
        }

        try {
            // Now you can pass the formData to createUser
            if (await createUser(formData)) {
                setIsLoadProfileAfterSetup(true); //
                RenderNotification({
                    title: "Profile Created Successfully",
                    description: "Your profile has been created successfully.",
                    variant: "success",
                });
            } else {
                RenderNotification({
                    title: "Error Creating Profile",
                    description: "Your profile was not created successfully.",
                    variant: "destructive",
                });
            }

            // Close the dialog upon successful form submission
            setIsOpen(false);
        } catch (error) {
            console.error("Error while creating user:", error);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {" "}
            {/* Control dialog visibility */}
            <DialogContent className="sm:max-w-[425px] hover-dialog p-4 shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                        {/* <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent"> */}
                        Complete your profile
                        {/* </h2> */}
                    </DialogTitle>
                    <DialogDescription>
                        Fill in your details to set up your profile.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={handleFormSubmit} // Handle form submission with custom function
                        className="space-y-4"
                    >
                        <GenderDropdown
                            selectedGender={form.watch("gender")}
                            setSelectedGender={(gender) =>
                                form.setValue("gender", gender, {
                                    shouldValidate: true,
                                })
                            }
                        />

                        <ObjectiveDropdown
                            selectedObjective={form.watch("objective")}
                            setSelectedObjective={(objective) =>
                                form.setValue(
                                    "objective",
                                    objective.charAt(0).toUpperCase() +
                                        objective.slice(1), // Capitalize first letter
                                    { shouldValidate: true }
                                )
                            }
                        />

                        <BirthdayPicker
                            date={form.watch("birthday")}
                            setDate={(date) =>
                                form.setValue("birthday", date, {
                                    shouldValidate: true,
                                })
                            }
                        />

                        <ActivityLevelPicker
                            selectedActivityLevel={form.watch("activityLevel")}
                            setSelectedActivityLevel={(activityLevel) =>
                                form.setValue(
                                    "activityLevel",
                                    activityLevel.charAt(0).toUpperCase() +
                                        activityLevel.slice(1), // Capitalize first letter
                                    { shouldValidate: true }
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
                                Complete Profile Setup
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
