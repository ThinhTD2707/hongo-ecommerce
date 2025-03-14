const products = [
    {
        id: '01',
        name: 'Winter Man’s Shirt',
        sku: 'SKU: 492332',
        category: 'Polo t-shirts',
        price: '350.00',
        salePrice: '380.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green', 'Red'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-11.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-11-c.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-11-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-11-a.jpg.webp',
                'https://cdn-images.vtv.vn/thumb_w/640/2023/1/3/flqvgxyxeaakjfj-16727093776751924730029.jpeg',
            ],
        },
    },
    {
        id: '02',
        name: 'Crewneck Sweat T-Shirt',
        sku: 'SKU: 492596',
        category: 'Winter jackets',
        salePrice: '380.00',
        price: '350.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-02-d.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-02-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-02-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-02-c.jpg.webp',
            ],
        },
    },
    {
        id: '03',
        name: 'Genuine Leather Shoes',
        sku: '492584',
        category: 'Uncategorized',
        salePrice: '',
        price: '150.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-03.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-03-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-03-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-03-c.jpg.webp',
            ],
        },
    },
    {
        id: '04',
        name: 'Round Neck Cotton',
        sku: '492592',
        category: 'Uncategorized',
        price: '800.00',
        salePrice: '600.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-05.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-05-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-05-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-05-c.jpg.webp',
            ],
        },
    },
    {
        id: '05',
        name: 'Washed Chino Short',
        sku: '492552',
        category: "Men's shorts",
        price: '750.00',
        salePrice: '600.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-08.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-08-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-08-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-08-c.jpg.webp',
            ],
        },
    },
    {
        id: '06',
        name: 'Cotton Dark Shirt',
        sku: '492604',
        category: "Men's shorts",
        price: '320.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-07.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-07-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-07-b.jpg.webpp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-07-d.jpg.webp',
            ],
        },
    },
    {
        id: '07',
        name: 'Leather Tote Bag',
        sku: '492612',
        category: 'Casual shirts',
        price: '250.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-04.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-04-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-04-b.jpg.webpp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-04-c.jpg.webp',
            ],
        },
    },
    {
        id: '08',
        name: 'Cotton Faded Neck',
        sku: '492336',
        category: 'Uncategorized',
        price: '400.00',
        salePrice: '390.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-10.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-10-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-10-c.jpg.webpp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-10-d.jpg.webp',
            ],
        },
    },
    {
        id: '09',
        name: 'Half Sleeve T-Shirt',
        sku: '492580',
        category: 'Short skirts',
        price: '150.00',
        salePrice: '120.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-01.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-01-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-01-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-01-c.jpg.webp',
            ],
        },
    },
    {
        id: '11',
        name: 'Multi Coloured Tye',
        sku: '492328',
        category: 'Product style',
        price: '400.00',
        salePrice: '390.00Current ',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-12.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-12-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-12-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-classic-products-12-c.jpg.webp',
            ],
        },
    },
    {
        id: '12',
        name: 'Simple Product',
        sku: '492877',
        category: 'Product style',
        price: '1,000.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-simple-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-simple-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-simple-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-simple-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '13',
        name: 'Variable Product',
        sku: '492576',
        category: 'Product style',
        price: '50.00',
        salePrice: '150.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-variable-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-variable-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-variable-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-variable-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '14',
        name: 'Grouped Product',
        sku: '492600',
        category: 'Product style',
        price: '600.00',
        salePrice: '2,500.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-grouped-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-grouped-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-grouped-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-grouped-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '15',
        name: 'Smart Product',
        sku: '492568',
        category: 'Product style',
        price: '50.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-smart-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-smart-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-smart-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-smart-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '16',
        name: 'External / Affiliate Product',
        sku: '492608',
        category: 'Product style',
        price: '350.00',
        salePrice: '50.00Current ',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg:
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-external-affiliate-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-external-affiliate-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-external-affiliate-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-external-affiliate-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '17',
        name: 'Sale Product',
        sku: '492564',
        category: 'Product style',
        price: '50.00',
        salePrice: '30.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-sale-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-sale-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-sale-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-sale-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '18',
        name: 'Out of Stock Product',
        sku: '492572',
        category: 'Product style',
        price: '120.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-out-of-stock-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-out-of-stock-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-out-of-stock-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-out-of-stock-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '19',
        name: 'Video Product',
        sku: '492560',
        category: 'Product style',
        price: '180.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-video-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-video-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-video-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-video-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '20',
        name: 'New Product',
        sku: '492556',
        category: 'Product style',
        price: '30.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-new-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-new-product-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-new-product-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-new-product-c.jpg.webp',
            ],
        },
    },
    {
        id: '21',
        name: '360° Degree Product',
        sku: '492324',
        category: 'Product types',
        price: '700.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-360-degree-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-360-degree-product-n.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-360-degree-product-e.jpg.webp',
            ],
        },
    },
    {
        id: '22',
        name: '360° Degree Product',
        sku: '492324',
        category: 'Product types',
        price: '700.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-360-degree-product.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-360-degree-product-n.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-360-degree-product-e.jpg.webp',
            ],
        },
    },
    {
        id: '23',
        name: 'Extended Product',
        sku: '492324',
        category: 'Product types',
        price: '15.00',
        salePrice: '40.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-extended-product-01.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-extended-product-01-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-extended-product-01-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-extended-product-01-c.jpg.webp',
            ],
        },
    },
    {
        id: '24',
        name: 'Carousel Product',
        sku: '492316',
        category: 'Product types',
        price: '25.00',
        salePrice: '60.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-03-a.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-03-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-03-c.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-03-d.jpg.webp',
            ],
        },
    },
    {
        id: '25',
        name: 'Brown Baseball Cap',
        sku: '492432',
        category: 'Product types',
        price: '1,800.00',
        salePrice: '1,200.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-06.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-06-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-06-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-06-c.jpg.webp',
            ],
        },
    },
    {
        id: '26',
        name: 'Patagonia Craft Jacket',
        sku: '492444',
        category: 'Product types',
        price: '60.00',
        salePrice: '40.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-02.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-02-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-02-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-02-c.jpg.webp',
            ],
        },
    },
    {
        id: '27',
        name: 'Woodland Casuals Shoes',
        sku: '492440',
        category: 'Shop masonry',
        price: '150.00',
        salePrice: '100.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-03.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-03-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-03-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-03-c.jpg.webp',
            ],
        },
    },
    {
        id: '28',
        name: 'Urbano Fashion Wear',
        sku: '492440',
        category: 'Shop masonry',
        price: '350.00',
        salePrice: '50.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-04-a.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-04-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-04-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-04-c.jpg.webp',
            ],
        },
    },
    {
        id: '30',
        name: 'Cotton Jersey Sweater',
        sku: '492448',
        category: 'Shop masonry',
        price: '150.00',
        salePrice: '110.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-01.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-01-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-01-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-01-c.jpg.webp',
            ],
        },
    },
    {
        id: '31',
        name: 'Women Reversible Blue',
        sku: '492420',
        category: 'Shop masonry',
        price: '100.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-08.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-08-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-08-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-08-c.jpg.webp',
            ],
        },
    },
    {
        id: '32',
        name: 'Men’s Cotton Shorts',
        sku: '492428',
        category: 'Shop masonry',
        price: '95.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-05.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-05-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-05-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-05-c.jpg.webp',
            ],
        },
    },
    {
        id: '33',
        name: 'Cotton Collar T-Shirt',
        sku: '492408',
        category: 'Shop masonry',
        price: '42.00',
        salePrice: '40.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-11-a.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-11.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-11-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-11-c.jpg.webp',
            ],
        },
    },
    {
        id: '35',
        name: 'Men’s blue Jeans',
        sku: '492412',
        category: 'Shop masonry',
        price: '410.00',
        salePrice: '390.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-10.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-10-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-10-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-10-c.jpg.webp',
            ],
        },
    },
    {
        id: '36',
        name: 'Full Sleeve Jacket',
        sku: '492416',
        category: 'Shop masonry',
        price: '95.00',
        salePrice: '390.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-09.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-09-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-09-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-masonry-09-c.jpg.webp',
            ],
        },
    },
    {
        id: '37',
        name: 'Men Hooded Jacket',
        sku: '492504',
        category: 'Shop metro',
        price: '150.00',
        salePrice: '110.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-01.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-01-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-01-b-1.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-01-c-1.jpg.webp',
            ],
        },
    },
    {
        id: '38',
        name: 'Cotton Full Sleeves',
        sku: '492500',
        category: 'Shop metro',
        price: '110.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-02.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-02-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-02-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-02-c.jpg.webp',
            ],
        },
    },
    {
        id: '39',
        name: 'Leather Shoulder Bag',
        sku: '492488',
        category: 'Polo t-shirts',
        price: '1,800.00',
        salePrice: '1,200.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-05.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-05-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-05-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-metro-05-c.jpg.webp',
            ],
        },
    },
    {
        id: '40',
        name: 'Modern Product',
        sku: '492488',
        category: 'Shop metro',
        price: '30.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-07.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-07-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-07-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-07-c.jpg.webp',
            ],
        },
    },
    {
        id: '41',
        name: 'Stylish shirt',
        sku: '492268',
        category: 'Shop metro',
        price: '120.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/image-hotspot-02.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/image-hotspot-02-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/image-hotspot-02-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/image-hotspot-02-c.jpg.webp',
            ],
        },
    },
    {
        id: '42',
        name: 'Long Shoes',
        sku: '492256',
        category: 'Shop metro',
        price: '120.00',
        salePrice: '100.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-slider-style2-04.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-slider-style2-04-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-slider-style2-04-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-slider-style2-04-c.jpg.webp',
            ],
        },
    },
    {
        id: '43',
        name: 'Sticky Product',
        sku: '492296',
        category: 'Shop metro',
        price: '40.00',
        salePrice: '100.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-05.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-05-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-05-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-product-style-05-c.jpg.webp',
            ],
        },
    },
    {
        id: '44',
        name: 'Men’s Polo T-Shirt',
        sku: '492236',
        category: 'Shop metro',
        price: '260.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2021/02/sports-top-rated-product-02.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2021/02/sports-top-rated-product-02-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2021/02/sports-top-rated-product-02-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2021/02/sports-top-rated-product-02-c.jpg.webp',
            ],
        },
    },
    {
        id: '45',
        name: 'Top With Pleated',
        sku: '492628',
        category: ' Table design',
        price: '260.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-08-1.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-08-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-08-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-08-c.jpg.webp',
            ],
        },
    },
    {
        id: '46',
        name: 'Skinny Trousers',
        sku: '492644',
        category: 'Women accessories',
        price: '300.00',
        salePrice: '',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-04.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-04-a-1.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-04-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-recent-products-04-c.jpg.webp',
            ],
        },
    },
    {
        id: '47',
        name: 'Leather Jacket',
        sku: '492276',
        category: 'Women chair',
        price: '180.00',
        salePrice: '150.00',
        detail: '',
        colors: ['Black', 'Blue', 'Brown', 'Green'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: {
            mainImg: 'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-featured-products-04.jpg.webp',
            subImg: [
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-featured-products-04-a.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-featured-products-04-b.jpg.webp',
                'https://hongo.themezaa.com/wp-content/uploads/2019/04/fashion-featured-products-04-c.jpg.webp',
            ],
        },
    },
];
export default products;
