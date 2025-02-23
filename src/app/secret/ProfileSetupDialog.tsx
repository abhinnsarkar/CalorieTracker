"use client";
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import GenderDropdown from "../components/GenderDropdown";
import ObjectiveDropdown from "../components/ObjectiveDropdown";
import BirthdayPicker from "../components/BirthdayPicker";
import ActivityLevelPicker from "../components/ActivityLevelPicker";
// import { Label } from "@/components/ui/label";
import HeightInput from "../components/HeightInput"; // Import HeightInput component
import WeightInput from "../components/WeightInput"; // Import WeightInput component

export default function ProfileSetupDialog() {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedGender, setSelectedGender] = useState<string>("");
    const [selectedObjective, setSelectedObjective] = useState<string>("");
    const [birthday, setBirthday] = useState<Date | undefined>(undefined);
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [selectedActivityLevel, setSelectedActivityLevel] =
        useState<string>("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const formValid =
            selectedGender !== "" &&
            selectedObjective !== "" &&
            birthday !== undefined &&
            height !== "" &&
            weight !== "" &&
            selectedActivityLevel !== "";
        setIsFormValid(formValid);
    }, [
        selectedGender,
        selectedObjective,
        birthday,
        height,
        weight,
        selectedActivityLevel,
    ]);

    const handleSubmit = () => {
        if (isFormValid) {
            console.log("Gender:", selectedGender);
            console.log("Objective:", selectedObjective);
            console.log(
                "Birthday:",
                birthday ? birthday.toDateString() : "Not set"
            );
            console.log("Height:", height);
            console.log("Weight:", weight);
            console.log("Activity Level:", selectedActivityLevel);
            setIsOpen(false);
        }
    };

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            return;
        }
        setIsOpen(open);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px] hover-dialog bg-white p-4 shadow-lg backdrop-blur-none">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>Update your profile</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <GenderDropdown
                        selectedGender={selectedGender}
                        setSelectedGender={setSelectedGender}
                    />
                    <ObjectiveDropdown
                        selectedObjective={selectedObjective}
                        setSelectedObjective={setSelectedObjective}
                    />
                    <BirthdayPicker date={birthday} setDate={setBirthday} />
                    <ActivityLevelPicker
                        selectedActivityLevel={selectedActivityLevel}
                        setSelectedActivityLevel={setSelectedActivityLevel}
                    />

                    {/* Use the custom HeightInput and WeightInput components */}
                    <HeightInput height={height} setHeight={setHeight} />
                    <WeightInput weight={weight} setWeight={setWeight} />
                </div>
                <DialogFooter>
                    <Button
                        className="hover-btn"
                        type="button"
                        onClick={handleSubmit}
                        disabled={!isFormValid}
                    >
                        Complete Profile Setup
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
