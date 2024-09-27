const title = "RIVEPAN";
const email = "rivecastell@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573212474344"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En RIVEPAN, nos dedicamos a la elaboración de productos de panadería artesanal como pan de verduras, tortas, galletas y empanadas, ofreciendo opciones sabrosas y saludables para todos nuestros clientes.",
        description2: "Nuestra misión es llevar a tu mesa productos frescos y de calidad, hechos con dedicación y pasión. Nos enfocamos en combinar ingredientes naturales y recetas tradicionales para brindarte un sabor único y nutritivo. Ya sea que estés buscando algo delicioso para una ocasión especial o simplemente quieras disfrutar de un bocadillo saludable, RIVEPAN tiene lo que necesitas. ¡Déjanos ser parte de tus momentos más deliciosos!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Rico pan, mejor sabor.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/riveiro.castellanos?mibextid=ZbWKwL", // Enlace a Facebook proporcionado
        instagram: "https://www.instagram.com/", // No se proporcionó enlace de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
