const products = [
    {
        "id": 1,
        "tipo": "Pizza",
        "nombre": "Capricciosa",
        "descripcion": "Tomate, mozzarella, anchoa, alcachofa, champiñion, huevo.",
        "precio": 950,
        "imagen": "../img/comidas/pizza/capricciosa.jpeg",
        "stock": 10
    },
    {
        "id": 2,
        "tipo": "Pizza",
        "nombre": "Diávola",
        "descripcion": "Queso emmental, mozzarella, guindillas, pepperoni, tomate.",
        "precio": 1100,
        "imagen": "../img/comidas/pizza/diavola.jpeg",
        "stock": 11
    },
    {
        "id": 3,
        "tipo": "Pizza",
        "nombre": "Margherita",
        "descripcion": "Mozzarella, tomate, aceite de oliva, albahaca.",
        "precio": 1000,
        "imagen": "../img/comidas/pizza/margherita.jpeg",
        "stock": 12
    },
    {
        "id": 4,
        "tipo": "Pizza",
        "nombre": "Prosciutto",
        "descripcion": "Jamón cocido, passata, mozzarella, tomillo.",
        "precio": 1050,
        "imagen": "../img/comidas/pizza/prosciutto-e-funghi.jpeg",
        "stock": 8
    },
    {
        "id": 5,
        "tipo": "Sandwich",
        "nombre": "Lampredotto",
        "descripcion": "Queso, lampredotto, pimiento, pan, cebolla, zanahoria.",
        "precio": 800,
        "imagen": "../img/comidas/sandwich/lampredotto.jpeg",
        "stock": 9
    },
    {
        "id": 6,
        "tipo": "Sandwich",
        "nombre": "Mozzarella di bufala",
        "descripcion": "Pan muffoletta, mozzarella, alcachofa, anchoa.",
        "precio": 880,
        "imagen": "../img/comidas/sandwich/mozzarella-di-bufala-e-pomodoro.jpeg",
        "stock": 10
    },
    {
        "id": 7,
        "tipo": "Sandwich",
        "nombre": "Pani ca meusa",
        "descripcion": "Bazo de cerdo, pulmón de cerdo, pan, queso, limón.",
        "precio": 600,
        "imagen": "../img/comidas/sandwich/pani-ca-meusa.webp",
        "stock": 7
    },
    {
        "id": 8,
        "tipo": "Sandwich",
        "nombre": "Porchetta di ariccia",
        "descripcion": "Mozzarella, lechuga, porchetta, pan.",
        "precio": 490,
        "imagen": "../img/comidas/sandwich/porchetta-di-ariccia.jpeg",
        "stock": 0
    },
    {
        "id": 9,
        "tipo": "Pasta",
        "nombre": "Gnocchetti sardi",
        "descripcion": "Salsa de tomate, albahaca, pastas gnocchetti, queso rayado.",
        "precio": 560,
        "imagen": "../img/comidas/pasta/gnocchetti-sardi.webp",
        "stock": 3
    },
    {
        "id": 10,
        "tipo": "Pasta",
        "nombre": "Lasagna",
        "descripcion": "Queso parmesano, carne picada, jamón cocido, ajo, mozzarella, tapas de lasagna.",
        "precio": 720,
        "imagen": "../img/comidas/pasta/lasagna.jpg",
        "stock": 2
    },
    {
        "id": 11,
        "tipo": "Pasta",
        "nombre": "Ravioli",
        "descripcion": "Seso de ternera, queso rayado, carne molida de ternera, cebolla, tomate, zanahoria, ajo.",
        "precio": 630,
        "imagen": "../img/comidas/pasta/ravioli.jpeg",
        "stock": 20
    },
    {
        "id": 12,
        "tipo": "Pasta",
        "nombre": "Spaghetti alla carbonara",
        "descripcion": "Aceite de oliva, panceta, queso manchego, queso rayado.",
        "precio": 550,
        "imagen": "../img/comidas/pasta/spaghetti-alla-carbonara.jpeg",
        "stock": 15
    },
    {
        "id": 13,
        "tipo": "Ensalada",
        "nombre": "César",
        "descripcion": "Pechuga de pollo, pan, lechuga, aceituna, ajo, queso grana padano, aceite de oliva.",
        "precio": 310,
        "imagen": "../img/comidas/ensalada/ensalada-caligola.jpeg",
        "stock": 16
    },
    {
        "id": 14,
        "tipo": "Ensalada",
        "nombre": "Emiliana",
        "descripcion": "Pechuga de pollo, lechuga, tocino, pasa de uva, pecana, apio.",
        "precio": 300,
        "imagen": "../img/comidas/ensalada/ensalada-cesar.jpeg",
        "stock": 4
    },
    {
        "id": 15,
        "tipo": "Ensalada",
        "nombre": "Zia Zoe",
        "descripcion": "Lechuga, tomate, pepino, zanahoria, aguacate, queso tofu, tomate, albahaca.",
        "precio": 500,
        "imagen": "../img/comidas/ensalada/ensalada-emiliana.png",
        "stock": 6
    },
    {
        "id": 16,
        "tipo": "Ensalada",
        "nombre": "Caligola",
        "descripcion": "Lechuga, rúcula, mozzarella, pollo, queso parmesano, salsa pesto.",
        "precio": 490,
        "imagen": "../img/comidas/ensalada/ensalada-zia-zoe.jpeg",
        "stock": 12
    },
    {
        "id": 17,
        "tipo": "Al plato",
        "nombre": "Caponata",
        "descripcion": "Berenjena, aceite de oliva, cebolla, apio, pimiento, tomate, alcaparra, aceituna.",
        "precio": 920,
        "imagen": "../img/comidas/plato/caponata.jpeg",
        "stock": 8
    },
    {
        "id": 18,
        "tipo": "Al plato",
        "nombre": "Fainá",
        "descripcion": "Harina de garbanzos, jamón, cebolla.",
        "precio": 900,
        "imagen": "../img/comidas/plato/faina.jpeg",
        "stock": 10
    },
    {
        "id": 19,
        "tipo": "Al plato",
        "nombre": "Frittata",
        "descripcion": "Tomate, apio, calabacín, champiñion, queso de cabra, aceite de oliva, ajo.",
        "precio": 830,
        "imagen": "../img/comidas/plato/Frittata.jpeg",
        "stock": 10
    },
    {
        "id": 20,
        "tipo": "Al plato",
        "nombre": "Ossobuco",
        "descripcion": "Ossobuco de ternera, cebolla, puerro, zanahoria, tomate, ajo, aceite de oliva.",
        "precio": 800,
        "imagen": "../img/comidas/plato/ossobuco.jpeg",
        "stock": 9
    },
    {
        "id": 21,
        "tipo": "Sopa",
        "nombre": "Cazuela de pollo",
        "descripcion": "Pollo, cebolla, ajo, cúrcuma, aceituna, aceite de oliva, limón, tomate.",
        "precio": 500,
        "imagen": "../img/comidas/sopa/cazuela-pollo.jpeg",
        "stock": 11
    },
    {
        "id": 22,
        "tipo": "Sopa",
        "nombre": "Minestrone recipe",
        "descripcion": "Consomé de verduras, tomate, ajo, zanahoria, apio, albahaca.",
        "precio": 560,
        "imagen": "../img/comidas/sopa/minestrone-soup-recipe.jpeg",
        "stock": 3
    },
    {
        "id": 23,
        "tipo": "Sopa",
        "nombre": "Pasta e fagioli",
        "descripcion": "Pasta, cebolla, ajo, papa, poroto, tomate, peregil.",
        "precio": 600,
        "imagen": "../img/comidas/sopa/pasta-e-Fagioli.webp",
        "stock": 20
    },
    {
        "id": 24,
        "tipo": "Sopa",
        "nombre": "Strataciatella",
        "descripcion": "Nuez moscada, huevo, queso parmesano, caldo de verduras, espinaca, papa.",
        "precio": 485,
        "imagen": "../img/comidas/sopa/sopa-strataciatella.jpeg",
        "stock": 16
    },
    {
        "id": 25,
        "tipo": "Bebida sin alcohol",
        "nombre": "Agua",
        "descripcion": "Con o sin gas.",
        "precio": 200,
        "imagen": "../img/comidas/bebida-sin-alcohol/agua.jpeg",
        "stock": 1
    },
    {
        "id": 26,
        "tipo": "Bebida sin alcohol",
        "nombre": "Gaseosa",
        "descripcion": "CocaCola, Fanta o Sprite",
        "precio": 400,
        "imagen": "../img/comidas/bebida-sin-alcohol/gaseosa.jpeg",
        "stock": 0
    },
    {
        "id": 27,
        "tipo": "Bebida sin alcohol",
        "nombre": "Jugo",
        "descripcion": "Naranja, Pomelo o Ananá",
        "precio": 300,
        "imagen": "../img/comidas/bebida-sin-alcohol/jugo-de-naranja.jpeg",
        "stock": 17
    },
    {
        "id": 28,
        "tipo": "Bebida sin alcohol",
        "nombre": "Limonada",
        "descripcion": "Limón, azúcar, hielo, agua.",
        "precio": 250,
        "imagen": "../img/comidas/bebida-sin-alcohol/limonada.jpeg",
        "stock": 7
    },
    {
        "id": 29,
        "tipo": "Bebida con alcohol",
        "nombre": "Campari",
        "descripcion": "Negroni, Orange o Americano",
        "precio": 700,
        "imagen": "../img/comidas/bebida-alcohol/campari.jpeg",
        "stock": 19
    },
    {
        "id": 30,
        "tipo": "Bebida con alcohol",
        "nombre": "Cerveza",
        "descripcion": "Patagonia, Corona o Quilmes",
        "precio": 540,
        "imagen": "../img/comidas/bebida-alcohol/cerveza.png",
        "stock": 11
    },
    {
        "id": 31,
        "tipo": "Bebida con alcohol",
        "nombre": "Fernet con coca",
        "descripcion": "Fernet branca, hielo, coca-cola.",
        "precio": 900,
        "imagen": "../img/comidas/bebida-alcohol/fernet.jpeg",
        "stock": 10
    },
    {
        "id": 32,
        "tipo": "Bebida con alcohol",
        "nombre": "Vino",
        "descripcion": "Tinto, Balbo o Viarago",
        "precio": 1000,
        "imagen": "../img/comidas/bebida-alcohol/vino.webp",
        "stock": 12
    },
    {
        "id": 33,
        "tipo": "Postre",
        "nombre": "Cartocci",
        "descripcion": "Leche, azúcar, limón, extracto de vainilla, harina, queso ricotta, canela, chocolate.",
        "precio": 310,
        "imagen": "../img/comidas/postre/cartocci.jpeg",
        "stock": 16
    },
    {
        "id": 34,
        "tipo": "Postre",
        "nombre": "Crostata",
        "descripcion": "Harina, azúcar, mermelada de frutilla, leche.",
        "precio": 280,
        "imagen": "../img/comidas/postre/crostata.webp",
        "stock": 15
    },
    {
        "id": 35,
        "tipo": "Postre",
        "nombre": "Tiramisú",
        "descripcion": "Azúcar, crema de leche, mascarpone, amaretto, café, vainilla, cacao amargo.",
        "precio": 265,
        "imagen": "../img/comidas/postre/tiramisu.webp",
        "stock": 18
    },
    {
        "id": 36,
        "tipo": "Postre",
        "nombre": "Zuccotto",
        "descripcion": "Crema de leche, chocolate, frutilla, avellana, almendra, harina, azúcar.",
        "precio": 340,
        "imagen": "../img/comidas/postre/zuccotto.jpeg",
        "stock": 20
    }
];

export const getProducts = () => {
    return new Promise((response) => {
        setTimeout(() => {
            response(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((response, rejected) => {
        const item = products.find((elemento) => elemento.id === id)
        if (item) {
            response(item);
        }
        else {
            rejected({
                error: "Producto inválido"
            })
        }
    });
}