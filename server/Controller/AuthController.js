const User = require("../Models/UserModel")

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

        try {
            await validationSchema
                .validate({email: email, password: password})
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })

            User.findOne({
                email: email
            })
                .select('+password')
                .then(user => {
                    if (!user) {
                        setError('Bu e-mail-ə aid hesab tapılmadı')
                        return getRes(next)
                    } else {
                        getUser = user
                        return bcrypt.compare(password, user.password)
                    }
                })
                .then(resp => {
                    if (!resp) {
                        setError('Şifrə yanlışdır')
                        return getRes(next)
                    } else {
                        let jwtToken = jwt.sign({
                                email: getUser.email,
                                userId: getUser.id
                            },
                            //Signign the token with the JWT_SECRET in the .env
                            process.env.JWT_SECRET,
                            {
                                expiresIn: "3h"
                            }
                        )
                        setSuccess('Uğurla giriş etdiniz')
                        setData({
                            accessToken: jwtToken,
                            userId: getUser._id
                        })
                        return getRes(next)
                    }
                })

        } catch (err) {
            setError(err)
            return getRes(next)
        }


    },
    user: async (req, res, next) => {
        const userId = req.userData.userId

        User.findById(userId)
            .then(user => {
                if (!user) {
                    setError('İstifadəçi tapılmadı')
                } else {
                    setSuccess(true)
                    setData({
                        user: user
                    })
                }
                return getRes(next)
            })
            .catch(err => {
                setError(err)
                return getRes(next)
            })
    }
}

module.exports = authController