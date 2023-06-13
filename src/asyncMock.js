const books = [
    {
        id: "1",
        name: "El Gato Negro",
        author: "E. Allan Poe",
        price: "1700",
        picture: "https://placehold.co/140x196"
    },
    {
        id: "2",
        name: "El Wendigo",
        author: "Algernon Blackwood",
        price: "2100",
        picture: "https://placehold.co/140x196"
    },
    {
        id: "3",
        name: "La rebelión de Atlas",
        author: "Ayn Rand",
        price: "3500",
        picture: "https://placehold.co/140x196"
    },
    {
        id: "4",
        name: "Cosmos",
        author: "Carl Sagan",
        price: "2600",
        picture: "https://placehold.co/140x196"
    }

];

export const getBooks = () => {
    return new Promise(res => {
        setTimeout(() => {
            res(books);
        }, 2000);
    });
}