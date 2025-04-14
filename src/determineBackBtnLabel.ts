function determineBackBtnLabel(pathName: string) {
    if (pathName === "/secret") {
        return "secret";
    }
    if (pathName === "/foods") {
        return "All Foods";
    }
    if (pathName === "/foods/today") {
        return "Logged Foods";
    }
    if (pathName === "/") {
        return "Dashboard";
    }
}

export default determineBackBtnLabel;
