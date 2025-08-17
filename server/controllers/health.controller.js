export const healthCheck = (req, res) => {
    res.status(200).json({message: 'The server is healthy.'});
}