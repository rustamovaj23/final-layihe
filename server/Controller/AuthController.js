const User = require("../Models/User.Model")
const Response = require('../Helpers/Response')
const response = new Response

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const yup = require('yup')

const {object, string} = yup

const authController = {
    login: async (req, res, next) => {
        let getUser
        const {email, password} = req.body

        const validationSchema = object({
            email: string()
                .required('E-mail yazılmayıb')
                .email('E-mail-nizi düzgün formatda yazın'),
            password: string()
                .required('Şifrə yazılmayıb')
                .min(5, 'Şifrəniz ən azı 5 simvol olmalıdır')
                .max(30, 'Şifrəniz ən çox 30 simvol ola bilər')
        })
        await validationSchema
            .validate({email: email, password: password})
            .catch(err => {
                response.setError(err)
                next(response)
            })


        User.findOne({
            email: email
        })
            .select('+password')
            .then(user => {
                if (!user) {
                    response.setError('Bu e-mail-ə aid hesab tapılmadı')
                    next(response)
                } else {
                    getUser = user
                    return bcrypt.compare(password, user.password)
                }
            })
            .then(resp => {
                if (!resp) {
                    response.setError('Şifrə yanlışdır')
                    next(response)
                } else {
                    let jwtToken = jwt.sign({
                            email: getUser.email,
                            userId: getUser.id
                        },
                        //Signign the token with the JWT_SECRET in the .env
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "1h"
                        }
                    )

                    response.setSuccess('Uğurla giriş etdiniz')
                    response.setData({
                        accessToken: jwtToken,
                        userId: getUser._id
                    })
                    next(response)
                }
            })

    },
    user: async (req, res, next) => {
        const userId = req.userData.userId

        User.findById(userId)
            .then(user => {
                if (!user) {
                    response.setError('İstifadəçi tapılmadı')
                    next(response)
                } else {
                    response.setSuccess(true)
                    response.setData({
                        user: user
                    })
                    next(response)
                }
            })
    }
}

module.exports = authController