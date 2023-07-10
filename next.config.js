/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    env: {
        API_KEY: "AIzaSyDYuyF0gtml5TSgb4AeWvfXEQYlM2o6dGU",
        AUTH_DOMAIN: "my-app-33f60.firebaseapp.com",
        PROJECT_ID: "my-app-33f60", // ID Del Proyecto
        STORAGE_BUCKET: "my-app-33f60.appspot.com", // Dominio Proporcionado para Almacenar Archivos
        MESSAGING_SENDER_ID: "754935252750", // ID Para que Google se Comunique con Nosotros por Posh Ups
        APP_ID: "1:754935252750:web:b9065afa2d41c31081795f", //ID De La App
        measurementId: "G-J2PHWJX37D" //Mala Práctica Dejar
      },
    }