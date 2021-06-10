const catalog = [
  {
    id: 1,
    quantity: 1,
    name: 'Xiaomi Redmi Note 9 4GB/128GB',
    description:
      'Redmi Note 9 оснащен высокопроизводительным восьмиядерным процессором с максимальной тактовой частотой 2,0 ГГц и частотой GPU 1000 МГц. Чипсет предоставит вам новый пользовательский опыт.',
    price: 499,
    image:
      'https://content2.onliner.by/catalog/device/header/82f7f8728bf72e112a18df95092eaf9e.jpeg',
  },
  {
    id: 2,
    quantity: 1,
    name: 'Samsung Galaxy A32 SM-A325F/DS 4GB/64GB',
    description:
      'Android, экран 6.4" AMOLED (1080x2400), Mediatek Helio G80, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM',
    price: 619,
    image:
      'https://content2.onliner.by/catalog/device/header/ec9720bdc1bd06656550dee2d914ee83.jpeg',
  },
  {
    id: 3,
    quantity: 1,
    name: 'Apple iPhone 11 64GB (черный)',
    description:
      'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM',
    price: 1699,
    image:
      'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg',
  },
  {
    id: 4,
    quantity: 1,
    name: 'Samsung Galaxy A52 SM-A525F/DS 4GB/128GB (черный)',
    description:
      'Android, экран 6.5" AMOLED (1080x2400), Qualcomm Snapdragon 720G, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM',
    price: 863,
    image:
      'https://content2.onliner.by/catalog/device/header/0bde71a90a551c172c6a9e290d1cdbed.jpeg',
  },
  {
    id: 5,
    quantity: 1,
    name: 'Xiaomi Redmi Note 10 Pro 8GB/128GB (серый оникс)',
    description:
      'Android, экран 6.67" AMOLED (1080x2400), Qualcomm Snapdragon 732G, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 108 Мп, аккумулятор 5020 мАч, 2 SIM',
    price: 750,
    image:
      'https://content2.onliner.by/catalog/device/header/050a6f0f727e91c7d6fb306dfce40a25.jpeg',
  },
  {
    id: 6,
    quantity: 1,
    name: 'Samsung Galaxy A12 4GB/64GB (черный)',
    description:
      'Android, экран 6.5" TFT (720x1600), Mediatek MT6765 Helio P35, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 5000 мАч, 2 SIM',
    price: 645,
    image:
      'https://content2.onliner.by/catalog/device/header/72bd6d5227bb6ea7e29c63396dc9dbf5.jpeg',
  },
  {
    id: 7,
    quantity: 1,
    name: 'Xiaomi Mi 10T 8GB/128GB (серебристый)',
    description:
      'Android, экран 6.67" IPS (1080x2400), Qualcomm Snapdragon 865, ОЗУ 8 ГБ, флэш-память 128 ГБ, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM',
    price: 1099,
    image:
      'https://content2.onliner.by/catalog/device/header/f3f255329df9b291bd4590af9530645d.jpeg',
  },
  {
    id: 8,
    quantity: 1,
    name: 'Xiaomi Redmi 9C 3GB/64GB (оранжевый)',
    description:
      'Android, экран 6.53" IPS (720x1600), Mediatek Helio G35, ОЗУ 3 ГБ, флэш-память 64 ГБ, карты памяти, камера 13 Мп, аккумулятор 5000 мАч, 2 SIM',
    price: 349,
    image:
      'https://content2.onliner.by/catalog/device/header/747e2f6a427f8353b84f5426c8da6df9.jpeg',
  },
  {
    id: 9,
    quantity: 1,
    name: 'Realme 6 Pro 8GB/128GB (красная молния)',
    description:
      'Android, экран 6.6" IPS (1080x2400), Qualcomm Snapdragon 720G, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4300 мАч, 2 SIM',
    price: 739,
    image:
      'https://content2.onliner.by/catalog/device/header/e9544139ee2eeac8c7bb8a1c5ab1b248.jpeg',
  },
  {
    id: 10,
    quantity: 1,
    name: 'Смартфон Google Pixel 4a (черный)',
    description:
      'Android, экран 5.8" OLED (1080x2340), Qualcomm Snapdragon 730G, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12.2 Мп, аккумулятор 3140 мАч, 1 SIM',
    price: 1230,
    image:
      'https://content2.onliner.by/catalog/device/header/82f7f8728bf72e112a18df95092eaf9e.jpeg',
  },
  {
    id: 11,
    quantity: 1,
    name: 'Apple iPhone 12 Pro 128GB (графитовый)',
    description:
      'Apple iOS, экран 6.1" OLED (1170x2532), Apple A14 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 2775 мАч, 1 SIM',
    price: 2880,
    image:
      'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg',
  },
  {
    id: 12,
    quantity: 1,
    name: 'Huawei P40 lite (полночный черный)',
    description:
      'Android, экран 6.4" IPS (1080x2310), HiSilicon Kirin 810, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 4200 мАч, 2 SIM',
    price: 599,
    image:
      'https://content2.onliner.by/catalog/device/header/6df885b6edf6a9fb9730e89fc19d2a7c.jpeg',
  },
  {
    id: 13,
    quantity: 1,
    name: 'HONOR 30i LRA-LX1 4GB/128GB (полночный черный)',
    description:
      'Android, экран 6.3" AMOLED (1080x2400), HiSilicon Kirin 710F, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM',
    price: 499,
    image:
      'https://content2.onliner.by/catalog/device/header/8de107facef4d8f1982b54b3209e7152.jpeg',
  },
  {
    id: 14,
    quantity: 1,
    name: 'Samsung Galaxy S20 FE SM-G780F/DSM (синий)',
    description:
      'Android, экран 6.5" AMOLED (1080x2400), Exynos 990, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 4500 мАч, 2 SIM',
    price: 1318,
    image:
      'https://content2.onliner.by/catalog/device/header/13bd4b78222af8d614dbdc2ce1578e3d.jpeg',
  },
  {
    id: 15,
    quantity: 1,
    name: 'Huawei P30 Lite MAR-LX1M Dual SIM 4GB/128GB',
    description:
      'Android, экран 6.15" IPS (1080x2312), HiSilicon Kirin 710, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 24 Мп, аккумулятор 3340 мАч, 2 SIM',
    price: 549,
    image:
      'https://content2.onliner.by/catalog/device/header/d882b98a1b406734271f81fc9508934e.jpeg',
  },
  {
    id: 16,
    quantity: 1,
    name: 'Samsung Galaxy S21 Ultra 5G 12GB/256GB',
    description:
      'Android, экран 6.8" AMOLED (1440x3200), Exynos 2100, ОЗУ 12 ГБ, флэш-память 256 ГБ, камера 108 Мп, аккумулятор 5000 мАч, 2 SIM',
    price: 2800,
    image:
      'https://content2.onliner.by/catalog/device/header/1af6774e279bc117e97cb4dff45d399f.jpeg',
  },
  {
    id: 17,
    quantity: 1,
    name: 'Apple iPhone 11 Pro 64GB (серый космос)',
    description:
      'Apple iOS, экран 5.8" OLED (1125x2436), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3190 мАч, 1 SIM',
    price: 2380,
    image:
      'https://content2.onliner.by/catalog/device/header/a7ded3fb068ed7547ef865b546d836d6.jpeg',
  },
  {
    id: 18,
    quantity: 1,
    name: 'Samsung Galaxy M21 SM-M215F/DS 4GB/64GB (черный)',
    description:
      'Android, экран 6.4" AMOLED (1080x2340), Exynos 9611, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 48 Мп, аккумулятор 6000 мАч, 2 SIM',
    price: 530,
    image:
      'https://content2.onliner.by/catalog/device/header/5afd45c3354f62e7cc9afa0f3d8373b2.jpeg',
  },
  {
    id: 19,
    quantity: 1,
    name: 'Apple iPhone SE 64GB',
    description:
      'Apple iOS, экран 4.7" IPS (750x1334), Apple A13 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 1820 мАч, 1 SIM',
    price: 1150,
    image:
      'https://content2.onliner.by/catalog/device/header/0bc381ace31da47583a33886403c4c40.jpeg',
  },
  {
    id: 20,
    quantity: 1,
    name: 'POCO M3 4GB/128GB международная версия (черный)',
    description:
      'Android, экран 6.53" IPS (1080x2340), Qualcomm Snapdragon 662, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 48 Мп, аккумулятор 6000 мАч, 2 SIM',
    price: 488,
    image:
      'https://content2.onliner.by/catalog/device/header/a3551d97c6d16c2f6eac5c6cbe279735.jpeg',
  },
  {
    id: 21,
    quantity: 1,
    name: 'Samsung Galaxy S10 G973 8GB/128GB',
    description:
      'Android, экран 6.1" AMOLED (1440x3040), Exynos 9820, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 3400 мАч, 2 SIM',
    price: 1499,
    image:
      'https://content2.onliner.by/catalog/device/header/cc1b1fef1926523a97df39b4bf11b6b7.jpeg',
  },
  {
    id: 22,
    quantity: 1,
    name: 'Nokia 1.4 2GB/32GB (синий)',
    description:
      'Android, экран 6.51" IPS (720x1600), Qualcomm Snapdragon 215, ОЗУ 2 ГБ, флэш-память 32 ГБ, карты памяти, камера 8 Мп, аккумулятор 4000 мАч, 2 SIM',
    price: 291,
    image:
      'https://content2.onliner.by/catalog/device/header/f663e5d2d2ff6e6ff9e4e8ba4cddf9de.jpeg',
  },
  {
    id: 23,
    quantity: 1,
    name: 'Xiaomi Redmi Note 10S 6GB/128GB с NFC (серый оникс)',
    description:
      'Android, экран 6.43" AMOLED (1080x2400), Mediatek Helio G95, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM',
    price: 799,
    image:
      'https://content2.onliner.by/catalog/device/header/7d15facb87374d6519bc391445db281c.jpeg',
  },
  {
    id: 24,
    quantity: 1,
    name: 'Xiaomi Mi 11 Lite 5G 8GB/128GB международная версия',
    description:
      'Android, экран 6.55" AMOLED (1080x2400), Qualcomm Snapdragon 780G, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4250 мАч, 2 SIM',
    price: 1299,
    image:
      'https://content2.onliner.by/catalog/device/header/48e82210c6ae6e23f2f3c8aefb205b88.jpeg',
  },
  {
    id: 25,
    quantity: 1,
    name: 'Sony Xperia 10 II XQ-AU52 Dual SIM 4GB/128GB (черный)',
    description:
      'Android, экран 6" OLED (1080x2520), Qualcomm Snapdragon 665, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 3600 мАч, 2 SIM',
    price: 899,
    image:
      'https://content2.onliner.by/catalog/device/header/540c312aa7470e4216b52748e1978a61.jpeg',
  },
  {
    id: 26,
    quantity: 1,
    name: 'Realme 7 Pro RMX2170 8GB/128GB (матовый серебряный)',
    description:
      'Android, экран 6.4" AMOLED (1080x2400), Qualcomm Snapdragon 720G, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM',
    price: 859,
    image:
      'https://content2.onliner.by/catalog/device/header/fa011ca0f27d46cb95851205e92f3d7e.jpeg',
  },
  {
    id: 27,
    quantity: 1,
    name: 'Apple iPhone XR 64GB (черный)',
    description:
      'Apple iOS, экран 6.1" IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM',
    price: 499,
    image:
      'https://content2.onliner.by/catalog/device/header/98b65279323ea2beeba0c347f365f728.jpeg',
  },
];

module.exports = catalog;
