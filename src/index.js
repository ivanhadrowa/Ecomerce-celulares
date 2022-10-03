import app from "./app";

const main = () => {
    app.listen(app.get("port"));
    console.log("la app esta corriendo en puetrto 4k")
};

main()