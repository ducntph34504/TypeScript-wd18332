//  Products
{
  type productType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };

  // const products: productType[] = [];
  const product: productType = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  };
  console.log(product);
}

// Carts
{
  type cartType = {
    id: number;
    products: productType[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  };

  type productType = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
  };

  // const carts: productType[] = [];
  const cart: cartType = {
    id: 1,
    products: [
      {
        id: 59,
        title: "Spring and summershoes",
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
        thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
      },
      {
        id: 88,
        title: "TC Reusable Silicone Magic Washing Gloves",
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
        thumbnail: "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        price: 40,
        quantity: 2,
        total: 80,
        discountPercentage: 13.1,
        discountedPrice: 70,
        thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      },
      {
        id: 95,
        title: "Wholesale cargo lashing Belt",
        price: 930,
        quantity: 1,
        total: 930,
        discountPercentage: 17.67,
        discountedPrice: 766,
        thumbnail: "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg",
      },
      {
        id: 39,
        title: "Women Sweaters Wool",
        price: 600,
        quantity: 2,
        total: 1200,
        discountPercentage: 17.2,
        discountedPrice: 994,
        thumbnail: "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
      },
    ],
    total: 2328,
    discountedTotal: 1941,
    userId: 97,
    totalProducts: 5,
    totalQuantity: 10,
  };
  console.log(cart);
}

// Users
{
    type userType = {
        id: number,
        firstName: string,
        lastName: string,
        maidenName: string,
        age: number,
        gender: "male" | "female" | "other",
        email: string,
        phone: string,
        username: string,
        password: string,
        birthDate: string,
        image?: string,
        bloodGroup?: string,
        height: number,
        weight: number,
        eyeColor?: string,
        hair: hairType,
        domain: string,
        ip: string,
        address: addressType,
        macAddress: string,
        university: string,
        bank: bankType,
        company: companyType,
        ein: string,
        ssn: string,
        userAgent: string,
        crypto: cryptoType,
    }

    type hairType = {
        color: string,
        type: string,
    }

    type addressType = {
        address: string,
        city: string,
        coordinates: {
            lat: number,
            lng: number,
        },
        postalCode: string,
        state: string,
    }

    type bankType = {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string,
    }

    type companyType = {
        address: addressType,
        department: string,
        name: string,
        title: string,
    }

    type cryptoType = {
        coin: string,
        wallet: string,
        network: string,
    }

    const user : userType = {
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        maidenName: "Smitham",
        age: 50,
        gender: "male",
        email: "atuny0@sohu.com",
        phone: "+63 791 675 8914",
        username: "atuny0",
        password: "9uQFF1Lh",
        birthDate: "2000-12-25",
        image: "https://robohash.org/Terry.png?set=set4",
        bloodGroup: "A-",
        height: 189,
        weight: 75.4,
        eyeColor: "Green",
        hair: {
        color: "Black",
        type: "Strands",
        },
        domain: "slashdot.org",
        ip: "117.29.86.254",
        address: {
        address: "1745 T Street Southeast",
        city: "Washington",
        coordinates: {
            lat: 38.867033,
            lng: -76.979235,
        },
        postalCode: "20020",
        state: "DC",
        },
        macAddress: "13:69:BA:56:A3:74",
        university: "Capitol University",
        bank: {
        cardExpire: "06/22",
        cardNumber: "50380955204220685",
        cardType: "maestro",
        currency: "Peso",
        iban: "NO17 0695 2754 967",
        },
        company: {
        address: {
            address: "629 Debbie Drive",
            city: "Nashville",
            coordinates: {
            lat: 36.208114,
            lng: -86.58621199999999,
            },
            postalCode: "37076",
            state: "TN",
        },
        department: "Marketing",
        name: "Blanda-O'Keefe",
        title: "Help Desk Operator",
        },
        ein: "20-9487066",
        ssn: "661-64-2976",
        userAgent:
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
        crypto: {
        coin: "Bitcoin",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        network: "Ethereum (ERC20)",
        },
    };
}
