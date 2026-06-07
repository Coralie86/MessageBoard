const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");


const alphaErr = "must only contain letters."
const lengthErr = "must be between 1 and 10 characters."
const lengthMessErr = "must be between 1 and 200 characters."

const validateInputs = [
    body("nameUser").trim()
        .isAlpha().withMessage(`Name ${alphaErr}`)
        .isLength({min: 1, max: 10}).withMessage(`Name ${lengthErr}`),
    body("messageText").trim()
        .isLength({min: 1, max: 200}).withMessage(`Message ${lengthMessErr}`),
]

exports.getMessages = async (req, res) =>{
    const messages = await db.getAllMessages();
    res.render("index", {messages: messages});
};

exports.messageCreateGet = async (req, res) => {
    res.render('form')
};

exports.messageCreatePost = [
    validateInputs,
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render(
                "form", {
                    errors: errors.array(),
                }
            )
        }
        await db.messageCreateNew(req.body.nameUser, req.body.messageText);
        res.redirect('/');
}
];

exports.messageIdGet = async (req, res) => {
    const id = parseInt(req.params.messageId);
    const message = await db.getMessageId(id);
    await res.render('detail', {message: message})
};
