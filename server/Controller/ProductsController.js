const Category = require('../Models/CategoryModel')
const Product = require('../Models/ProductModel')
const yup = require('yup')

const { object, string, array, number } = yup

const ProductsController = {
    create: async (req, res, next) => {
        const { category_id, name, slug, description, price, quantity, tags, images } = req.body
        try {
            const validationSchema = object({
                category_id: string()
                    .required('Kateqoriya seçilməyib'),
                name: string()
                    .required('Məhsul adı yazılmayıb')
                    .min(3, 'Məhsul adı ən 3 simvol olmalıdır')
                    .max(100, 'Məhsul adı ən çox 100 simvol ola bilər'),
                slug: string()
                    .required('Məhsul slug-ı yazılmayıb')
                    .min(3, 'Məhsul slug-l ən azı 3 simvol olmalıdır'),
                description: string()
                    .notRequired(),
                price: number()
                    .min(0, 'Məhsul qiyməti 0-dan kiçik ola bilməz'),
                quantity: number()
                    .min(0, 'Məhsul sayı 0-dan kiçik ola bilməz'),
                tags: array()
                    .of(object({
                        key: string().required(),
                        value: string().required()
                    })),
                images: array()
                    .of(object({
                        url: string().required()
                    }))
                    .min(1, 'Ən az 1 şəkil əlavə edin')
            })

            await validationSchema
                .validate(req.body)
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })


            // Check Product Exists or No
            const isExists = await Product.exists({ slug })

            if (isExists) {
                setError('Bu slug daha öncə əlavə edilib')
                return getRes(next)
            }

            const product = new Product(req.body)
            const saveProduct = await product.save()
            const category = await Category.findById(category_id)

            if (saveProduct) {
                product._doc.category = category
                setSuccess('Məhsul əlavə edildi')
                setData({
                    product
                })
            } else {
                setError('Məhsul əlavə edilmədi')
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
            const product = await Product.findById(id)
            if (product) {
                setSuccess(true)
                setData({
                    product
                })
            } else {
                setError('Məhsul tapılmadı')
            }
            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
    getAll: async (req, res, next) => {
        Product
            .aggregate([
                {
                    $lookup: {
                        from: 'categories', // Kategoriler koleksiyonu adı
                        localField: 'category_id',
                        foreignField: '_id',
                        as: 'category'
                    }
                },
                {
                    $unwind: '$category' // Dizi içindeki kategorileri ayırır
                }
            ])
            .then(products => {
                setSuccess(true);
                setData({
                    products
                });
            })
            .catch(err => setError(err))
            .finally(() => getRes(next));
    },
    getByCategory: async (req, res, next) => {
        let categoryObject = {}
        const { category_id, perPage } = req.body
        if (category_id) {
            categoryObject = { category_id }
        }
        const page = parseInt(req.body.page) || 1; // Sayfa numarasını al, eğer belirtilmemişse varsayılan olarak ilk sayfayı göster
        //perPage -  Her sayfada kaç ürün gösterileceği
        const skip = (page - 1) * perPage; // Kaç ürünü atlayacağımızı hesapla

        const totalProduct = await Product.find(categoryObject)
            .count('total')

        Product
            .find(categoryObject)
            .skip(skip)
            .limit(perPage)
            .then(products => {
                setSuccess(true)
                setData({
                    products,
                    total: totalProduct
                })
            })
            .catch(err => setError(err))
            .finally(() => getRes(next))
    },
    getBySlug: async (req, res, next) => {
        const { slug } = req.params
        Product
            .aggregate([
                { $match: { slug: req.params.slug } }, // Ürünü slug'a göre eşleştir
                {
                    $lookup: {
                        from: 'categories', // Kategoriler koleksiyonu adı
                        localField: 'category_id',
                        foreignField: '_id',
                        as: 'category'
                    }
                },
                {
                    $unwind: '$category' // Dizi içindeki kategorileri ayırır
                },
                { $limit: 1 }
            ])
            .then(products => {
                setSuccess(true)
                setData({
                    product: products[0]
                })
            })
            .catch(err => setError(err))
            .finally(() => getRes(next))
    },
    getRelatedProducts: async (req, res, next) => {
        const { slug } = req.params

        try {
            const getProduct = await Product.findOne({ slug: slug })

            if (getProduct) {

                Product
                    .aggregate([
                        { $match: { slug: { $ne: slug }, category_id: getProduct.category_id } }, // Verilen slug ile eşleşmeyen ve category_id`ye göre eşleşen ürünleri filtrele
                        {
                            $lookup: {
                                from: 'categories', // Kategoriler koleksiyonu adı
                                localField: 'category_id',
                                foreignField: '_id',
                                as: 'category'
                            }
                        },
                        {
                            $unwind: '$category' // Dizi içindeki kategorileri ayırır
                        },
                    ])
                    .then(products => {
                        setSuccess(true)
                        setData({
                            products: products
                        })
                    })
                    .catch(err => setError(err))
                    .finally(() => getRes(next))
            } else {
                setError('Məhsul tapılmadı')
                return getRes(next)
            }

        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
    search: async (req, res, next) => {
        const { query } = req.body // request'den arama terimini al

        Product
            .find({ name: { $regex: query, $options: 'i' } })
            .then(products => {
                setSuccess(true);
                setData({
                    products
                });
            })
            .catch(err => setError(err))
            .finally(() => getRes(next));
    },
    filter: async (req, res, next) => {
        const { categoryId, sortBy, priceRange } = req.body
        let sortData = {}
        let findData = {}
        if (sortBy == 'newness') {
            sortData.created_at = 1
        } else if (sortBy == 'oldest') {
            sortData.created_at = -1
        } else if (sortBy == 'low_to_high') {
            sortData.price = 1
        } else if (sortBy == 'high_to_low') {
            sortData.price = -1
        }

        if (categoryId) {
            findData = { category_id: categoryId }
        }
        if (typeof priceRange == 'object') {
            const price = {}
            if (priceRange.length == 2) {
                price.$gte = priceRange[0]
                price.$lte = priceRange[1]
            } else if (priceRange.length == 1) {
                price.$gte = priceRange[0]
            }
            findData.price = price
        }
        Product
            .find(findData)
            .sort(sortData)
            .then(products => {
                setSuccess(true)
                setData({
                    products
                })
            })
            .catch(err => setError(err))
            .finally(() => getRes(next))
    },
    delete: async (req, res, next) => {
        const { id } = req.params

        try {
            const isExists = await Product.exists({ _id: { $eq: id } })
            if (!isExists) {
                setError('Məhsul tapılmadı')
                return getRes(next)
            }
            const deleteProduct = await Product.findByIdAndDelete(id)
            if (deleteProduct) {
                setSuccess('Məhsul silindi')
            } else {
                setError('Məhsul silinmədi')
            }
            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
    update: async (req, res, next) => {
        const { id } = req.params
        const { category_id, name, slug, description, price, quantity, tags, images } = req.body

        try {
            const isExists = await Product.exists({ _id: { $eq: id } })
            if (!isExists) {
                setError('Məhsul tapılmadı')
                return getRes(next)
            }

            const validationSchema = object({
                category_id: string()
                    .required('Kateqoriya seçilməyib'),
                name: string()
                    .required('Məhsul adı yazılmayıb')
                    .min(3, 'Məhsul adı ən 3 simvol olmalıdır')
                    .max(100, 'Məhsul adı ən çox 100 simvol ola bilər'),
                slug: string()
                    .required('Məhsul slug-ı yazılmayıb')
                    .min(3, 'Məhsul slug-l ən azı 3 simvol olmalıdır'),
                description: string()
                    .nullable()
                    .optional(),
                price: number()
                    .min(0, 'Məhsul qiyməti 0-dan kiçik ola bilməz'),
                quantity: number()
                    .min(0, 'Məhsul sayı 0-dan kiçik ola bilməz'),
                tags: array()
                    .of(object({
                        key: string().required(),
                        value: string().required()
                    })),
                images: array()
                    .of(object({
                        url: string().required()
                    }))
                    .min(1, 'Ən az 1 şəkil əlavə edin')
            })

            await validationSchema
                .validate(req.body)
                .catch(err => {
                    setError(err)
                    return getRes(next)
                })

            // Check Product Exists or No

            const checkExists = await Product.exists({ slug: slug, _id: { $ne: id } })

            if (checkExists) {
                setError('Bu slug daha öncə əlavə edilib')
                return getRes(next)
            }


            const updateProduct = await Product.findOneAndUpdate({ _id: { $eq: id } }, req.body, {
                new: true
            })
            const category = await Category.findById(req.body.category_id)

            if (updateProduct) {
                updateProduct._doc.category = category
                setSuccess('Məhsula düzəliş edildi')
                setData({
                    product: updateProduct
                })
            } else {
                setError('Məhsula düzəliş edilmədi')
            }

            return getRes(next)
        } catch (err) {
            setError(err)
            return getRes(next)
        }
    },
}

module.exports = ProductsController