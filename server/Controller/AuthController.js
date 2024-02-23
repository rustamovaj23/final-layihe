const User = require("../Models/UserModel")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const yup = require('yup')
const nodemailer = require('nodemailer')
const {number} = require("yup");
const mail = nodemailer.createTransport({
    direct: true,
    host: 'smtp.gmail.com',
    auth: {
        user: 'tu7qc8kga@code.edu.az',
        pass: 'ascx khaj vqvp jnta'
    },
    secure: true
})

const {object, string} = yup

const authController = {
    login: async (req, res, next) => {
        let getUser
        const {username, password} = req.body

        const validationSchema = object({
            username: string()
                .required('İstifadəçi adı və ya E-mail yazılmayıb'),
            password: string()
                .required('Şifrə yazılmayıb')
                .min(5, 'Şifrəniz ən azı 5 simvol olmalıdır')
                .max(30, 'Şifrəniz ən çox 30 simvol ola bilər')
        })

        try {
            await validationSchema
                .validate(req.body)
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })

            // Hem "username" hem de "email" alanlarını kontrol eden MongoDB sorgusu
            User.findOne({
                $or: [{username}, {email: username}]
            })
                .select('+password')
                .then(user => {
                    if (!user) {
                        setError('Bu məlumatlara aid hesab tapılmadı')
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
                            user: getUser,
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
    },
    sendMail: async (req, res, next) => {
        const {full_name, phone, email, message} = req.body


        const validationSchema = object({
            full_name: string()
                .required('Tam ad yazılmayıb'),
            phone: number()
                .required('Telefon yazılmayıb'),
            email: string()
                .required('E-mail yazılmayıb')
                .email('E-mail adresinizi düzgün formatda yazın'),
            message: string()
                .required('Mesaj yazılmayıb')
        })

        try {
            await validationSchema
                .validate(req.body)
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })


            const messageBody = `
            <html>
                <body>
                    <h3>Tam ad: ${full_name}</h3>
                    <h4>E-mail: ${email}</h4>
                    <h4>Telefon: ${phone}</h4>
                    <div class="message">
                    <p>${message}</p>
                    </div>
                </body>
            </html>
            `


            const mailOptions = {
                from: 'tu7qc8kga@code.edu.az',
                to: "jhalea@mail.ru",
                subject: 'Test Mail',
                text: 'Hello World',
                html: messageBody
            }


            mail.sendMail(mailOptions, function (error, info) {
                if (error) {
                    setError(error)
                    return getRes(next)
                } else {
                    setSuccess('Mail göndərildi')
                    return getRes(next)
                }
            })
        } catch (err) {
            setError(err)
            return getRes(next)
        }

    },
    register: async (req, res, next) => {
        const {username, email, firstname, lastname, phone, address, password} = req.body

        const validationSchema = object({
            username: string()
                .required('İstifadəçi adı yazılmayıb'),
            email: string()
                .required('E-mail yazılmayıb')
                .email('E-mail-nizi düzgün formatda yazın'),
            firstname: string()
                .required('Ad yazılmayıb'),
            lastname: string()
                .required('Soyad yazılmayıb'),
            address: string()
                .required('Ünvan yazılmayıb'),
            phone: number()
                .integer('Telefon nömrəsi yalnız rəqəmlərdən ibarət olmalıdır')
                .required('Telefon yazılmayıb'),
            password: string()
                .required('Şifrə yazılmayıb')
                .min(5, 'Şifrəniz ən azı 5 simvol olmalıdır')
                .max(30, 'Şifrəniz ən çox 30 simvol ola bilər')
        })

        try {
            await validationSchema
                .validate(req.body)
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })

            // Check Email Exists or No
            const emailExists = await User.exists({email})

            if (emailExists) {
                setError('Bu email ilə daha öncə qeydiyyatdan keçilib')
                return getRes(next)
            }

            // Check Username Exists or No
            const emailUsername = await User.exists({username})

            if (emailUsername) {
                setError('Bu istifadəçi adı ilə daha öncə qeydiyyatdan keçilib')
                return getRes(next)
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = new User({...req.body, password: hashedPassword, is_admin: false})
            const saveUser = await newUser.save()
            if (saveUser) {
                setSuccess('Qeydiyyatdan keçdiniz')
                let jwtToken = jwt.sign({
                        email: email,
                        userId: saveUser.id
                    },
                    //Signign the token with the JWT_SECRET in the .env
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "3h"
                    }
                )
                setData({
                    accessToken: jwtToken,
                    userId: saveUser._id,
                    user: saveUser
                })
                return getRes(next)
            }

        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
}

module.exports = authController