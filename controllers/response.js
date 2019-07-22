const sendTime = () => {
    return new Date().toLocalString();
}
const sendResponse = (res, data) => {
    res.status(200).json({
        status: 201,
        sentAt: sendTime,
        data: data
    });
};

const sendErrorResponse = (res, error) =>   {
    res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'
    });
};

module.exports = {
    sendResponse,
    sendErrorResponse
}