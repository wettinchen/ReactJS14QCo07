const apiRequest = async (url = "", optionObject = null, errorMessage = null) => {
    try {
        const response = await fetch(url, optionObject);
        if (!response.ok) throw Error("Please reload the app");
    } catch (error) {
        errorMessage = error.message;
    } finally {
        return errorMessage;
    }
}

export default apiRequest;