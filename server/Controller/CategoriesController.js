const Category = require('../Models/CategoryModel')
const yup = require('yup')

const { object, string } = yup

const CategoriesController = {
    create: async (req, res, next) => {
        const { title, slug } = req.body

        try {
            const validationSchema = object({
                title: string()
                    .required('Kateqoriya adı yazılmayıb')
                    .min(3, 'Kateqoriya adı ən 3 simvol olmalıdır')
                    .max(30, 'Kateqoriya adı ən çox 30 simvol ola bilər'),
                slug: string()
                    .required('Kateqoriya slug-ı yazılmayıb')
                    .min(3, 'Kateqoriya slug-l ən 3 simvol olmalıdır')
            })

            await validationSchema
                .validate({ title, slug })
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })

            // Check Category Exists or No
            const isExists = await Category.exists({ slug })

            if (isExists) {
                setError('Bu slug daha öncə əlavə edilib')
                return getRes(next)
            }

            const category = new Category({ title, slug })
            const saveCategory = await category.save()
            if (saveCategory) {
                setSuccess('Kateqoriya əlavə edildi')
                setData({
                    category: category
                })
            } else {
                setError('Kateqoriya əlavə edilmədi')
            }
            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
    getById: async (req, res, next) => {
        const { id } = req.params
        if (!id) {
            setError('İd göndərilməyib')
            return getRes(next)
        }

        try {
            const category = await Category.findById(id)
            if (category) {
                setSuccess(true)
                setData({
                    category
                })
            } else {
                setError('Kateqoriya tapılmadı')
            }
            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }

    },
    getAll: async (req, res, next) => {
        Category
            .aggregate([
                {
                    $lookup: {
                        from: "products", // Ürünler koleksiyonu
                        localField: "_id", // Kategori koleksiyonundaki _id alanı
                        foreignField: "category_id", // Ürünler koleksiyonundaki category_id alanı
                        as: "products" // Sonuçları 'products' alanına yerleştir
                    }
                },
                {
                    $addFields: {
                        productCount: { $size: "$products" } // Her kategoriye ait ürün sayısını hesapla
                    }
                },
                {
                    $project: {
                        title: 1, // Kategori adını koru
                        slug: 1, // Kategori slugı koru
                        productCount: 1 // Ürün sayısını ekle
                    }
                }
            ])
            .then(categories => {
                setSuccess(true)
                setData({
                    categories
                })
            })
            .catch(err => setError(err))
            .finally(() => getRes(next))
    },
    delete: async (req, res, next) => {
        const { id } = req.params

        try {
            const isExists = await Category.exists({ _id: { $eq: id } })
            if (!isExists) {
                setError('Kateqoriya tapılmadı')
                return getRes(next)
            }
            const deleteCategory = await Category.findByIdAndDelete(id)
            if (deleteCategory) {
                setSuccess('Kateqoriya silindi')
            } else {
                setError('Kateqoriya silinmədi')
            }
            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
    update: async (req, res, next) => {
        const { id } = req.params
        const { title, slug } = req.body

        try {
            const isExists = await Category.exists({ _id: { $eq: id } })
            if (!isExists) {
                setError('Kateqoriya tapılmadı')
                return getRes(next)
            }

            const validationSchema = object({
                title: string()
                    .required('Kateqoriya adı yazılmayıb')
                    .min(3, 'Kateqoriya adı ən 3 simvol olmalıdır')
                    .max(30, 'Kateqoriya adı ən çox 30 simvol ola bilər'),
                slug: string()
                    .required('Kateqoriya slug-ı yazılmayıb')
                    .min(3, 'Kateqoriya slug-l ən 3 simvol olmalıdır')
            })

            await validationSchema
                .validate({ title, slug })
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })

            // Check Category Exists or No

            const checkExists = await Category.exists({ slug: slug, _id: { $ne: id } })

            if (checkExists) {
                setError('Bu slug daha öncə əlavə edilib')
                return getRes(next)
            }

            const updateCategory = await Category.findOneAndUpdate({ _id: { $eq: id } }, { title, slug }, {
                new: true
            })
            if (updateCategory) {
                setSuccess('Kateqoriyaya düzəliş edildi')
                setData({
                    category: updateCategory
                })
            } else {
                setError('Kateqoriyaya düzəliş edilmədi')
            }

            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
}

module.exports = CategoriesController